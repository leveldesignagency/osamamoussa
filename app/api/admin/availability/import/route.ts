import { NextRequest, NextResponse } from "next/server";
import {
  AVAILABILITY_SOURCES,
  type AvailabilitySource,
} from "@/lib/availability-types";
import { CSV_TEMPLATE, parseCsvToSlots, parseIcsToSlots } from "@/lib/availability-import";
import {
  loadAvailabilityStore,
  saveAvailabilityStore,
  upsertSlots,
} from "@/lib/availability-store";

function isSource(value: string): value is AvailabilitySource {
  return (AVAILABILITY_SOURCES as readonly string[]).includes(value);
}

export async function GET() {
  return new NextResponse(CSV_TEMPLATE, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="availability-template.csv"',
    },
  });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");
  const icsUrl = String(formData.get("icsUrl") || "").trim();
  const sourceRaw = String(formData.get("source") || "").trim().toLowerCase();
  const hospital = String(formData.get("hospital") || "").trim();
  const defaults = {
    source: isSource(sourceRaw) ? sourceRaw : undefined,
    hospital: hospital || undefined,
  };

  let text = "";
  let kind: "ics" | "csv" | null = null;

  if (file instanceof File && file.size > 0) {
    text = await file.text();
    const name = file.name.toLowerCase();
    if (name.endsWith(".ics") || text.includes("BEGIN:VCALENDAR")) kind = "ics";
    else if (name.endsWith(".csv") || text.toLowerCase().includes("source,hospital"))
      kind = "csv";
    else {
      return NextResponse.json(
        { error: "Unsupported file. Upload .ics or .csv." },
        { status: 400 }
      );
    }
  } else if (icsUrl) {
    try {
      const response = await fetch(icsUrl, { cache: "no-store" });
      if (!response.ok) {
        return NextResponse.json(
          { error: `Failed to fetch ICS URL (${response.status}).` },
          { status: 400 }
        );
      }
      text = await response.text();
      kind = "ics";
    } catch {
      return NextResponse.json({ error: "Could not fetch ICS URL." }, { status: 400 });
    }
  } else {
    return NextResponse.json(
      { error: "Provide an ICS/CSV file or an ICS URL." },
      { status: 400 }
    );
  }

  let incoming;
  try {
    incoming = kind === "ics" ? parseIcsToSlots(text, defaults) : parseCsvToSlots(text);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Import failed." },
      { status: 400 }
    );
  }

  if (incoming.length === 0) {
    return NextResponse.json(
      { error: "No valid slots found in the import." },
      { status: 400 }
    );
  }

  const store = await loadAvailabilityStore();
  const slots = upsertSlots(store.slots, incoming);
  const saved = await saveAvailabilityStore({
    ...store,
    slots,
    lastImportAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    imported: incoming.length,
    store: saved,
  });
}
