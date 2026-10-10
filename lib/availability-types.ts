export const AVAILABILITY_SOURCES = ["doctify", "spire", "circle", "hca"] as const;
export type AvailabilitySource = (typeof AVAILABILITY_SOURCES)[number];

export const AVAILABILITY_STATUSES = ["available", "booked"] as const;
export type AvailabilityStatus = (typeof AVAILABILITY_STATUSES)[number];

export type AvailabilitySlot = {
  id: string;
  source: AvailabilitySource;
  hospital: string;
  startsAt: string;
  endsAt?: string;
  status: AvailabilityStatus;
  externalKey?: string;
  updatedAt: string;
};

export type AvailabilityStore = {
  slots: AvailabilitySlot[];
  lastImportAt?: string;
  updatedAt?: string;
};

export const SOURCE_LABELS: Record<AvailabilitySource, string> = {
  doctify: "Doctify",
  spire: "Spire",
  circle: "Circle Health",
  hca: "HCA",
};

export const HOSPITAL_OPTIONS = [
  "Spire Bushey Healthcare",
  "Bishops Wood Hospital",
  "The Wellington Hospital",
  "Doctify (online)",
  "Other",
] as const;

export const SOURCE_COLORS: Record<AvailabilitySource, string> = {
  doctify: "#2563eb",
  spire: "#0f766e",
  circle: "#b45309",
  hca: "#7c3aed",
};
