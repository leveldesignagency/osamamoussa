import { NextRequest, NextResponse } from "next/server";
import {
  AVAILABILITY_SOURCES,
  AVAILABILITY_STATUSES,
  type AvailabilitySlot,
  type AvailabilitySource,
  type AvailabilityStatus,
} from "@/lib/availability-types";
import {
  loadAvailabilityStore,
  newSlotId,
  saveAvailabilityStore,
  upsertSlots,
} from "@/lib/availability-store";

function isSource(value: unknown): value is AvailabilitySource {
  return typeof value === "string" && (AVAILABILITY_SOURCES as readonly string[]).includes(value);
}

function isStatus(value: unknown): value is AvailabilityStatus {
  return typeof value === "string" && (AVAILABILITY_STATUSES as readonly string[]).includes(value);
}

export async function GET() {
  const store = await loadAvailabilityStore();
  return NextResponse.json(store);
}

export async function POST(request: NextRequest) {
  let body: Partial<AvailabilitySlot>;
  try {
    body = (await request.json()) as Partial<AvailabilitySlot>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isSource(body.source) || !isStatus(body.status)) {
    return NextResponse.json(
      { error: "source and status are required and must be valid." },
      { status: 400 }
    );
  }
  if (!body.hospital || !body.startsAt) {
    return NextResponse.json(
      { error: "hospital and startsAt are required." },
      { status: 400 }
    );
  }

  const startsAt = new Date(body.startsAt);
  if (Number.isNaN(startsAt.getTime())) {
    return NextResponse.json({ error: "startsAt must be a valid date." }, { status: 400 });
  }

  let endsAt: string | undefined;
  if (body.endsAt) {
    const end = new Date(body.endsAt);
    if (Number.isNaN(end.getTime())) {
      return NextResponse.json({ error: "endsAt must be a valid date." }, { status: 400 });
    }
    endsAt = end.toISOString();
  }

  const slot: AvailabilitySlot = {
    id: body.id || newSlotId(),
    source: body.source,
    hospital: body.hospital.trim(),
    startsAt: startsAt.toISOString(),
    endsAt,
    status: body.status,
    externalKey: body.externalKey || `manual:${body.source}:${body.hospital}:${startsAt.toISOString()}:${body.status}`,
    updatedAt: new Date().toISOString(),
  };

  const store = await loadAvailabilityStore();
  const slots = upsertSlots(store.slots, [slot]);
  const saved = await saveAvailabilityStore({ ...store, slots });
  return NextResponse.json({ ok: true, slot, store: saved });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id is required." }, { status: 400 });
  }
  const store = await loadAvailabilityStore();
  const slots = store.slots.filter((slot) => slot.id !== id);
  const saved = await saveAvailabilityStore({ ...store, slots });
  return NextResponse.json({ ok: true, store: saved });
}
