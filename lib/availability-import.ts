import {
  AVAILABILITY_SOURCES,
  AVAILABILITY_STATUSES,
  type AvailabilitySlot,
  type AvailabilitySource,
  type AvailabilityStatus,
} from "@/lib/availability-types";
import { newSlotId } from "@/lib/availability-store";

function isSource(value: string): value is AvailabilitySource {
  return (AVAILABILITY_SOURCES as readonly string[]).includes(value);
}

function isStatus(value: string): value is AvailabilityStatus {
  return (AVAILABILITY_STATUSES as readonly string[]).includes(value);
}

function unfoldIcs(text: string): string {
  return text.replace(/\r\n/g, "\n").replace(/\n[ \t]/g, "");
}

function parseIcsDate(value: string): string | null {
  // DATE: 20260315 or DATE-TIME: 20260315T090000Z / 20260315T090000
  const cleaned = value.trim();
  const match = cleaned.match(
    /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2}))?(Z)?$/
  );
  if (!match) {
    const asDate = new Date(cleaned);
    return Number.isNaN(asDate.getTime()) ? null : asDate.toISOString();
  }
  const [, y, mo, d, h = "00", mi = "00", s = "00", z] = match;
  const iso = `${y}-${mo}-${d}T${h}:${mi}:${s}${z ? "Z" : ""}`;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function classifyStatus(summary: string, freeBusy?: string): AvailabilityStatus {
  const text = `${summary} ${freeBusy || ""}`.toLowerCase();
  if (
    text.includes("available") ||
    text.includes("free slot") ||
    text.includes("open slot") ||
    freeBusy === "FREE"
  ) {
    return "available";
  }
  return "booked";
}

function guessSource(text: string): AvailabilitySource {
  const lower = text.toLowerCase();
  if (lower.includes("doctify")) return "doctify";
  if (lower.includes("spire") || lower.includes("bushey")) return "spire";
  if (lower.includes("circle") || lower.includes("bishops")) return "circle";
  if (lower.includes("hca") || lower.includes("wellington")) return "hca";
  return "spire";
}

function guessHospital(text: string, source: AvailabilitySource): string {
  const lower = text.toLowerCase();
  if (lower.includes("bishops")) return "Bishops Wood Hospital";
  if (lower.includes("wellington")) return "The Wellington Hospital";
  if (lower.includes("bushey") || lower.includes("spire")) return "Spire Bushey Healthcare";
  if (source === "doctify") return "Doctify (online)";
  if (source === "circle") return "Bishops Wood Hospital";
  if (source === "hca") return "The Wellington Hospital";
  return "Spire Bushey Healthcare";
}

export function parseIcsToSlots(
  icsText: string,
  defaults?: { source?: AvailabilitySource; hospital?: string }
): AvailabilitySlot[] {
  const unfolded = unfoldIcs(icsText);
  const blocks = unfolded.split("BEGIN:VEVENT").slice(1);
  const now = new Date().toISOString();
  const slots: AvailabilitySlot[] = [];

  for (const block of blocks) {
    const eventText = block.split("END:VEVENT")[0] || "";
    const get = (key: string) => {
      const re = new RegExp(`^${key}(?:;[^:]*)?:(.*)$`, "mi");
      const m = eventText.match(re);
      return m?.[1]?.trim() || "";
    };

    const startsAt = parseIcsDate(get("DTSTART"));
    if (!startsAt) continue;
    const endsRaw = get("DTEND");
    const endsAt = endsRaw ? parseIcsDate(endsRaw) || undefined : undefined;
    const uid = get("UID");
    const summary = get("SUMMARY");
    const location = get("LOCATION");
    const freeBusy = get("STATUS") || get("TRANSP");
    const blob = `${summary} ${location}`;
    const source = defaults?.source || guessSource(blob);
    const hospital = defaults?.hospital || guessHospital(blob, source);

    slots.push({
      id: newSlotId(),
      source,
      hospital,
      startsAt,
      endsAt,
      status: classifyStatus(summary, freeBusy),
      externalKey: uid ? `ics:${uid}` : `ics:${startsAt}:${hospital}`,
      updatedAt: now,
    });
  }

  return slots;
}

function splitCsvLine(line: string): string[] {
  const cells: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]!;
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += ch;
  }
  cells.push(current.trim());
  return cells;
}

export function parseCsvToSlots(csvText: string): AvailabilitySlot[] {
  const lines = csvText
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return [];

  const headers = splitCsvLine(lines[0]!).map((h) => h.toLowerCase());
  const idx = (name: string) => headers.indexOf(name);
  const sourceIdx = idx("source");
  const hospitalIdx = idx("hospital");
  const startsIdx = idx("startsat");
  const endsIdx = idx("endsat");
  const statusIdx = idx("status");

  if (sourceIdx < 0 || hospitalIdx < 0 || startsIdx < 0 || statusIdx < 0) {
    throw new Error(
      "CSV must include headers: source,hospital,startsAt,endsAt,status"
    );
  }

  const now = new Date().toISOString();
  const slots: AvailabilitySlot[] = [];

  for (const line of lines.slice(1)) {
    const cells = splitCsvLine(line);
    const sourceRaw = (cells[sourceIdx] || "").toLowerCase();
    const statusRaw = (cells[statusIdx] || "").toLowerCase();
    if (!isSource(sourceRaw) || !isStatus(statusRaw)) continue;
    const startsAtRaw = cells[startsIdx] || "";
    const startsAtDate = new Date(startsAtRaw);
    if (Number.isNaN(startsAtDate.getTime())) continue;
    const endsRaw = endsIdx >= 0 ? cells[endsIdx] : "";
    const endsDate = endsRaw ? new Date(endsRaw) : null;

    const hospital = cells[hospitalIdx] || "Other";
    const startsAt = startsAtDate.toISOString();
    slots.push({
      id: newSlotId(),
      source: sourceRaw,
      hospital,
      startsAt,
      endsAt:
        endsDate && !Number.isNaN(endsDate.getTime())
          ? endsDate.toISOString()
          : undefined,
      status: statusRaw,
      externalKey: `csv:${sourceRaw}:${hospital}:${startsAt}:${statusRaw}`,
      updatedAt: now,
    });
  }

  return slots;
}

export const CSV_TEMPLATE = `source,hospital,startsAt,endsAt,status
spire,Spire Bushey Healthcare,2026-10-10T09:00:00.000Z,2026-10-10T09:30:00.000Z,available
circle,Bishops Wood Hospital,2026-10-10T11:00:00.000Z,2026-10-10T11:30:00.000Z,booked
hca,The Wellington Hospital,2026-10-11T14:00:00.000Z,2026-10-11T14:30:00.000Z,available
doctify,Doctify (online),2026-10-12T16:00:00.000Z,2026-10-12T16:20:00.000Z,booked
`;
