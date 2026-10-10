import { list, put } from "@vercel/blob";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { blobAuthOptions, isBlobConfigured } from "@/lib/blob";
import type { AvailabilitySlot, AvailabilityStore } from "@/lib/availability-types";

const BLOB_PATHNAME = "availability/slots.json";
const LOCAL_PATH = path.join(process.cwd(), ".data", "availability-slots.json");

function emptyStore(): AvailabilityStore {
  return { slots: [], updatedAt: new Date().toISOString() };
}

function normalizeStore(raw: unknown): AvailabilityStore {
  if (!raw || typeof raw !== "object") return emptyStore();
  const data = raw as AvailabilityStore;
  return {
    slots: Array.isArray(data.slots) ? data.slots : [],
    lastImportAt: data.lastImportAt,
    updatedAt: data.updatedAt,
  };
}

async function loadFromLocal(): Promise<AvailabilityStore> {
  try {
    const text = await readFile(LOCAL_PATH, "utf8");
    return normalizeStore(JSON.parse(text));
  } catch {
    return emptyStore();
  }
}

async function saveToLocal(store: AvailabilityStore): Promise<void> {
  await mkdir(path.dirname(LOCAL_PATH), { recursive: true });
  await writeFile(LOCAL_PATH, JSON.stringify(store, null, 2), "utf8");
}

async function loadFromBlob(): Promise<AvailabilityStore> {
  const { blobs } = await list({
    prefix: BLOB_PATHNAME,
    limit: 1,
    ...blobAuthOptions(),
  });
  const match = blobs.find((b) => b.pathname === BLOB_PATHNAME) ?? blobs[0];
  if (!match) return emptyStore();
  const response = await fetch(match.url, { cache: "no-store" });
  if (!response.ok) return emptyStore();
  return normalizeStore(await response.json());
}

async function saveToBlob(store: AvailabilityStore): Promise<void> {
  await put(BLOB_PATHNAME, JSON.stringify(store), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    ...blobAuthOptions(),
  });
}

export async function loadAvailabilityStore(): Promise<AvailabilityStore> {
  if (!isBlobConfigured()) return loadFromLocal();
  try {
    return await loadFromBlob();
  } catch (error) {
    console.error("Failed to load availability blob, falling back to local:", error);
    return loadFromLocal();
  }
}

export async function saveAvailabilityStore(store: AvailabilityStore): Promise<AvailabilityStore> {
  const next: AvailabilityStore = {
    ...store,
    updatedAt: new Date().toISOString(),
  };
  if (!isBlobConfigured()) {
    await saveToLocal(next);
    return next;
  }
  try {
    await saveToBlob(next);
    return next;
  } catch (error) {
    console.error("Failed to save availability blob, falling back to local:", error);
    await saveToLocal(next);
    return next;
  }
}

export function upsertSlots(
  existing: AvailabilitySlot[],
  incoming: AvailabilitySlot[]
): AvailabilitySlot[] {
  const byKey = new Map<string, AvailabilitySlot>();
  for (const slot of existing) {
    byKey.set(slot.externalKey || slot.id, slot);
  }
  for (const slot of incoming) {
    const key = slot.externalKey || slot.id;
    const prev = byKey.get(key);
    byKey.set(key, prev ? { ...prev, ...slot, id: prev.id, updatedAt: slot.updatedAt } : slot);
  }
  return Array.from(byKey.values()).sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
  );
}

export function newSlotId(): string {
  return `slot_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
