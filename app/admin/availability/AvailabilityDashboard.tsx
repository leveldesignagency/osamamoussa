"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AVAILABILITY_SOURCES,
  HOSPITAL_OPTIONS,
  SOURCE_COLORS,
  SOURCE_LABELS,
  type AvailabilitySlot,
  type AvailabilitySource,
  type AvailabilityStatus,
  type AvailabilityStore,
} from "@/lib/availability-types";

type Filters = {
  sources: AvailabilitySource[];
  showAvailable: boolean;
  showBooked: boolean;
};

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, delta: number) {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDayLabel(date: Date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDateTimeLocal(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function AvailabilityDashboard() {
  const router = useRouter();
  const [store, setStore] = useState<AvailabilityStore>({ slots: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [month, setMonth] = useState(() => startOfMonth(new Date()));
  const [selectedDay, setSelectedDay] = useState(() => new Date());
  const [filters, setFilters] = useState<Filters>({
    sources: [...AVAILABILITY_SOURCES],
    showAvailable: true,
    showBooked: true,
  });

  const [manual, setManual] = useState({
    source: "spire" as AvailabilitySource,
    hospital: HOSPITAL_OPTIONS[0] as string,
    startsAt: "",
    endsAt: "",
    status: "available" as AvailabilityStatus,
  });
  const [icsUrl, setIcsUrl] = useState("");
  const [importSource, setImportSource] = useState<AvailabilitySource | "">("");
  const [importHospital, setImportHospital] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/availability", { cache: "no-store" });
      if (!response.ok) throw new Error("Failed to load availability");
      const data = (await response.json()) as AvailabilityStore;
      setStore(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const filteredSlots = useMemo(() => {
    return store.slots.filter((slot) => {
      if (!filters.sources.includes(slot.source)) return false;
      if (slot.status === "available" && !filters.showAvailable) return false;
      if (slot.status === "booked" && !filters.showBooked) return false;
      return true;
    });
  }, [store.slots, filters]);

  const next14 = useMemo(() => {
    const now = Date.now();
    const end = now + 14 * 24 * 60 * 60 * 1000;
    return filteredSlots.filter((s) => {
      const t = new Date(s.startsAt).getTime();
      return t >= now && t <= end;
    });
  }, [filteredSlots]);

  const next30 = useMemo(() => {
    const now = Date.now();
    const end = now + 30 * 24 * 60 * 60 * 1000;
    return filteredSlots.filter((s) => {
      const t = new Date(s.startsAt).getTime();
      return t >= now && t <= end;
    });
  }, [filteredSlots]);

  const statusBySource = useMemo(() => {
    return AVAILABILITY_SOURCES.map((source) => {
      const rows = next14.filter((s) => s.source === source);
      return {
        source,
        available: rows.filter((r) => r.status === "available").length,
        booked: rows.filter((r) => r.status === "booked").length,
      };
    });
  }, [next14]);

  const bookingsByHospital = useMemo(() => {
    const map = new Map<string, number>();
    for (const slot of next30.filter((s) => s.status === "booked")) {
      map.set(slot.hospital, (map.get(slot.hospital) || 0) + 1);
    }
    return Array.from(map.entries())
      .map(([hospital, count]) => ({ hospital, count }))
      .sort((a, b) => b.count - a.count);
  }, [next30]);

  const availableBySource = useMemo(() => {
    return AVAILABILITY_SOURCES.map((source) => ({
      source,
      count: next30.filter((s) => s.source === source && s.status === "available").length,
    }));
  }, [next30]);

  const weekdayHeat = useMemo(() => {
    const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const counts = Array.from({ length: 7 }, () => 0);
    for (const slot of next30) {
      counts[new Date(slot.startsAt).getDay()] += 1;
    }
    const max = Math.max(1, ...counts);
    return labels.map((label, i) => ({
      label,
      count: counts[i]!,
      pct: (counts[i]! / max) * 100,
    }));
  }, [next30]);

  const calendarDays = useMemo(() => {
    const first = startOfMonth(month);
    const startWeekday = first.getDay();
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const cells: Array<Date | null> = [];
    for (let i = 0; i < startWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(month.getFullYear(), month.getMonth(), d));
    }
    return cells;
  }, [month]);

  const slotsForSelectedDay = useMemo(() => {
    return filteredSlots
      .filter((slot) => sameDay(new Date(slot.startsAt), selectedDay))
      .sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt));
  }, [filteredSlots, selectedDay]);

  const toggleSource = (source: AvailabilitySource) => {
    setFilters((prev) => {
      const exists = prev.sources.includes(source);
      return {
        ...prev,
        sources: exists
          ? prev.sources.filter((s) => s !== source)
          : [...prev.sources, source],
      };
    });
  };

  const onLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  const onManualSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    setError(null);
    try {
      const response = await fetch("/api/admin/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: manual.source,
          hospital: manual.hospital,
          startsAt: new Date(manual.startsAt).toISOString(),
          endsAt: manual.endsAt ? new Date(manual.endsAt).toISOString() : undefined,
          status: manual.status,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not save slot");
      setStore(data.store);
      setMessage("Slot saved.");
      setManual((m) => ({ ...m, startsAt: "", endsAt: "" }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save slot");
    } finally {
      setBusy(false);
    }
  };

  const onDelete = async (id: string) => {
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/availability?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not delete");
      setStore(data.store);
      setMessage("Slot removed.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete");
    } finally {
      setBusy(false);
    }
  };

  const onImportFile = async (file: File) => {
    setBusy(true);
    setError(null);
    setMessage(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      if (importSource) formData.append("source", importSource);
      if (importHospital) formData.append("hospital", importHospital);
      const response = await fetch("/api/admin/availability/import", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Import failed");
      setStore(data.store);
      setMessage(`Imported ${data.imported} slot(s).`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed");
    } finally {
      setBusy(false);
    }
  };

  const onImportUrl = async (event: FormEvent) => {
    event.preventDefault();
    if (!icsUrl.trim()) return;
    setBusy(true);
    setError(null);
    setMessage(null);
    try {
      const formData = new FormData();
      formData.append("icsUrl", icsUrl.trim());
      if (importSource) formData.append("source", importSource);
      if (importHospital) formData.append("hospital", importHospital);
      const response = await fetch("/api/admin/availability/import", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Import failed");
      setStore(data.store);
      setMessage(`Imported ${data.imported} slot(s) from calendar URL.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed");
    } finally {
      setBusy(false);
    }
  };

  const maxHospital = Math.max(1, ...bookingsByHospital.map((b) => b.count), 1);
  const maxAvailable = Math.max(1, ...availableBySource.map((b) => b.count), 1);

  return (
    <main className="min-h-screen bg-[#6E6E6E] px-4 py-8 text-neutral-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-3 rounded-lg bg-white p-6 shadow sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Booking availability</h1>
            <p className="mt-1 text-sm text-neutral-600">
              Unified diary for Doctify, Spire, Circle Health, and HCA. Stores hospital, date, and
              time only — no patient names.
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Last import:{" "}
              {store.lastImportAt
                ? new Date(store.lastImportAt).toLocaleString("en-GB")
                : "none yet"}
              {store.updatedAt
                ? ` · Updated ${new Date(store.updatedAt).toLocaleString("en-GB")}`
                : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void load()}
              className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Refresh
            </button>
            <button
              type="button"
              onClick={() => void onLogout()}
              className="rounded bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
            >
              Log out
            </button>
          </div>
        </header>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}
        {message ? (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {message}
          </div>
        ) : null}

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {statusBySource.map((row) => (
            <div key={row.source} className="rounded-lg bg-white p-4 shadow">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold">{SOURCE_LABELS[row.source]}</span>
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: SOURCE_COLORS[row.source] }}
                />
              </div>
              <p className="text-sm text-neutral-600">Next 14 days</p>
              <p className="mt-2 text-lg font-bold">
                {row.available}{" "}
                <span className="text-sm font-medium text-emerald-700">available</span>
              </p>
              <p className="text-lg font-bold">
                {row.booked} <span className="text-sm font-medium text-sky-700">booked</span>
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-lg bg-white p-4 shadow sm:p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {AVAILABILITY_SOURCES.map((source) => {
              const active = filters.sources.includes(source);
              return (
                <button
                  key={source}
                  type="button"
                  onClick={() => toggleSource(source)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    active ? "text-white" : "bg-neutral-100 text-neutral-600"
                  }`}
                  style={active ? { backgroundColor: SOURCE_COLORS[source] } : undefined}
                >
                  {SOURCE_LABELS[source]}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() =>
                setFilters((f) => ({ ...f, showAvailable: !f.showAvailable }))
              }
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                filters.showAvailable
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-neutral-100 text-neutral-500"
              }`}
            >
              Available
            </button>
            <button
              type="button"
              onClick={() => setFilters((f) => ({ ...f, showBooked: !f.showBooked }))}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                filters.showBooked
                  ? "bg-sky-100 text-sky-800"
                  : "bg-neutral-100 text-neutral-500"
              }`}
            >
              Booked
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold">
                  {month.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                </h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded border px-3 py-1 text-sm"
                    onClick={() => setMonth((m) => addMonths(m, -1))}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="rounded border px-3 py-1 text-sm"
                    onClick={() => setMonth(startOfMonth(new Date()))}
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    className="rounded border px-3 py-1 text-sm"
                    onClick={() => setMonth((m) => addMonths(m, 1))}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-neutral-500">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="py-1">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => {
                  if (!day) return <div key={`empty-${index}`} className="min-h-[72px]" />;
                  const daySlots = filteredSlots.filter((slot) =>
                    sameDay(new Date(slot.startsAt), day)
                  );
                  const selected = sameDay(day, selectedDay);
                  return (
                    <button
                      key={day.toISOString()}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={`min-h-[72px] rounded border p-1 text-left transition ${
                        selected
                          ? "border-neutral-900 bg-neutral-50"
                          : "border-neutral-200 hover:border-neutral-400"
                      }`}
                    >
                      <div className="text-xs font-semibold">{day.getDate()}</div>
                      <div className="mt-1 flex flex-wrap gap-0.5">
                        {daySlots.slice(0, 4).map((slot) => (
                          <span
                            key={slot.id}
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: SOURCE_COLORS[slot.source] }}
                            title={`${SOURCE_LABELS[slot.source]} ${slot.status}`}
                          />
                        ))}
                      </div>
                      {daySlots.length > 0 ? (
                        <div className="mt-1 text-[10px] text-neutral-500">
                          {daySlots.length} slot{daySlots.length === 1 ? "" : "s"}
                        </div>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-bold">{formatDayLabel(selectedDay)}</h3>
              {loading ? (
                <p className="text-sm text-neutral-500">Loading…</p>
              ) : slotsForSelectedDay.length === 0 ? (
                <p className="text-sm text-neutral-500">No slots for this day.</p>
              ) : (
                <ul className="space-y-2">
                  {slotsForSelectedDay.map((slot) => (
                    <li
                      key={slot.id}
                      className="rounded border border-neutral-200 p-3 text-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-semibold">
                            {formatTime(slot.startsAt)}
                            {slot.endsAt ? `-${formatTime(slot.endsAt)}` : ""}
                          </div>
                          <div className="text-neutral-600">{slot.hospital}</div>
                          <div className="mt-1 flex flex-wrap gap-2">
                            <span
                              className="rounded-full px-2 py-0.5 text-xs font-medium text-white"
                              style={{ backgroundColor: SOURCE_COLORS[slot.source] }}
                            >
                              {SOURCE_LABELS[slot.source]}
                            </span>
                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                slot.status === "available"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-sky-100 text-sky-800"
                              }`}
                            >
                              {slot.status}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          disabled={busy}
                          onClick={() => void onDelete(slot.id)}
                          className="text-xs font-medium text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-5 shadow">
            <h3 className="mb-4 font-bold">Bookings per hospital (30 days)</h3>
            {bookingsByHospital.length === 0 ? (
              <p className="text-sm text-neutral-500">No booked slots yet.</p>
            ) : (
              <ul className="space-y-3">
                {bookingsByHospital.map((row) => (
                  <li key={row.hospital}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{row.hospital}</span>
                      <span className="font-semibold">{row.count}</span>
                    </div>
                    <div className="h-2 rounded bg-neutral-100">
                      <div
                        className="h-2 rounded bg-sky-600"
                        style={{ width: `${(row.count / maxHospital) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-lg bg-white p-5 shadow">
            <h3 className="mb-4 font-bold">Available slots by source (30 days)</h3>
            <ul className="space-y-3">
              {availableBySource.map((row) => (
                <li key={row.source}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{SOURCE_LABELS[row.source]}</span>
                    <span className="font-semibold">{row.count}</span>
                  </div>
                  <div className="h-2 rounded bg-neutral-100">
                    <div
                      className="h-2 rounded"
                      style={{
                        width: `${(row.count / maxAvailable) * 100}%`,
                        backgroundColor: SOURCE_COLORS[row.source],
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-white p-5 shadow">
            <h3 className="mb-4 font-bold">Weekday density (30 days)</h3>
            <div className="flex h-40 items-end gap-2">
              {weekdayHeat.map((day) => (
                <div key={day.label} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-neutral-800"
                    style={{ height: `${Math.max(day.pct, day.count ? 8 : 2)}%` }}
                    title={`${day.count} slots`}
                  />
                  <span className="text-[10px] text-neutral-500">{day.label}</span>
                  <span className="text-xs font-semibold">{day.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-5 shadow">
            <h3 className="mb-2 font-bold">Import calendar or CSV</h3>
            <p className="mb-4 text-sm text-neutral-600">
              Prefer ICS export from consultant diary / Outlook / Google Calendar. If a portal
              cannot export, use the CSV template. Email sync can be added later once notification
              formats are confirmed.
            </p>

            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1 block font-medium">Default source (optional)</span>
                <select
                  value={importSource}
                  onChange={(e) =>
                    setImportSource(e.target.value as AvailabilitySource | "")
                  }
                  className="w-full rounded border border-neutral-300 px-3 py-2"
                >
                  <option value="">Auto-detect</option>
                  {AVAILABILITY_SOURCES.map((source) => (
                    <option key={source} value={source}>
                      {SOURCE_LABELS[source]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium">Default hospital (optional)</span>
                <input
                  value={importHospital}
                  onChange={(e) => setImportHospital(e.target.value)}
                  list="hospital-options"
                  placeholder="e.g. Spire Bushey Healthcare"
                  className="w-full rounded border border-neutral-300 px-3 py-2"
                />
              </label>
            </div>

            <label className="mb-4 block text-sm">
              <span className="mb-1 block font-medium">Upload .ics or .csv</span>
              <input
                type="file"
                accept=".ics,.csv,text/calendar,text/csv"
                disabled={busy}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) void onImportFile(file);
                  e.target.value = "";
                }}
                className="block w-full text-sm"
              />
            </label>

            <form onSubmit={onImportUrl} className="mb-4 space-y-3">
              <label className="block text-sm">
                <span className="mb-1 block font-medium">Or paste private ICS URL</span>
                <input
                  type="url"
                  value={icsUrl}
                  onChange={(e) => setIcsUrl(e.target.value)}
                  placeholder="https://…"
                  className="w-full rounded border border-neutral-300 px-3 py-2"
                />
              </label>
              <button
                type="submit"
                disabled={busy || !icsUrl.trim()}
                className="rounded bg-neutral-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                Import from URL
              </button>
            </form>

            <a
              href="/api/admin/availability/import"
              className="text-sm font-medium text-sky-700 underline"
            >
              Download CSV template
            </a>

            <div className="mt-5 rounded border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-600">
              <p className="mb-2 font-semibold text-neutral-800">Per-platform setup</p>
              <ul className="list-disc space-y-1 pl-4">
                <li>
                  <strong>Spire / Circle / HCA:</strong> export consultant diary to Outlook/Google,
                  then download ICS or share a private calendar URL. If unavailable, ask PA for CSV.
                </li>
                <li>
                  <strong>Doctify:</strong> export bookings if the portal offers calendar sync;
                  otherwise enter free/booked slots via CSV or the form.
                </li>
                <li>
                  Free/busy or summaries containing “Available” import as available; other events
                  import as booked. Patient names are not stored.
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 shadow">
            <h3 className="mb-4 font-bold">Add slot manually</h3>
            <form onSubmit={onManualSubmit} className="space-y-3">
              <label className="block text-sm">
                <span className="mb-1 block font-medium">Source</span>
                <select
                  value={manual.source}
                  onChange={(e) =>
                    setManual((m) => ({
                      ...m,
                      source: e.target.value as AvailabilitySource,
                    }))
                  }
                  className="w-full rounded border border-neutral-300 px-3 py-2"
                >
                  {AVAILABILITY_SOURCES.map((source) => (
                    <option key={source} value={source}>
                      {SOURCE_LABELS[source]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium">Hospital / place</span>
                <input
                  required
                  list="hospital-options"
                  value={manual.hospital}
                  onChange={(e) => setManual((m) => ({ ...m, hospital: e.target.value }))}
                  className="w-full rounded border border-neutral-300 px-3 py-2"
                />
              </label>
              <datalist id="hospital-options">
                {HOSPITAL_OPTIONS.map((hospital) => (
                  <option key={hospital} value={hospital} />
                ))}
              </datalist>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium">Starts</span>
                  <input
                    required
                    type="datetime-local"
                    value={manual.startsAt || formatDateTimeLocal()}
                    onChange={(e) => setManual((m) => ({ ...m, startsAt: e.target.value }))}
                    className="w-full rounded border border-neutral-300 px-3 py-2"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium">Ends (optional)</span>
                  <input
                    type="datetime-local"
                    value={manual.endsAt}
                    onChange={(e) => setManual((m) => ({ ...m, endsAt: e.target.value }))}
                    className="w-full rounded border border-neutral-300 px-3 py-2"
                  />
                </label>
              </div>
              <label className="block text-sm">
                <span className="mb-1 block font-medium">Status</span>
                <select
                  value={manual.status}
                  onChange={(e) =>
                    setManual((m) => ({
                      ...m,
                      status: e.target.value as AvailabilityStatus,
                    }))
                  }
                  className="w-full rounded border border-neutral-300 px-3 py-2"
                >
                  <option value="available">Available</option>
                  <option value="booked">Booked</option>
                </select>
              </label>
              <button
                type="submit"
                disabled={busy}
                className="rounded bg-neutral-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                Save slot
              </button>
            </form>
          </div>
        </section>

        <section className="rounded-lg bg-white p-5 shadow">
          <h3 className="mb-3 font-bold">All upcoming slots</h3>
          {filteredSlots.length === 0 ? (
            <p className="text-sm text-neutral-500">No slots yet. Import a calendar or add one manually.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b text-neutral-500">
                  <tr>
                    <th className="px-2 py-2 font-medium">When</th>
                    <th className="px-2 py-2 font-medium">Hospital</th>
                    <th className="px-2 py-2 font-medium">Source</th>
                    <th className="px-2 py-2 font-medium">Status</th>
                    <th className="px-2 py-2 font-medium" />
                  </tr>
                </thead>
                <tbody>
                  {filteredSlots
                    .filter((s) => new Date(s.startsAt).getTime() >= Date.now() - 86400000)
                    .slice(0, 100)
                    .map((slot: AvailabilitySlot) => (
                      <tr key={slot.id} className="border-b border-neutral-100">
                        <td className="px-2 py-2">
                          {new Date(slot.startsAt).toLocaleString("en-GB", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="px-2 py-2">{slot.hospital}</td>
                        <td className="px-2 py-2">{SOURCE_LABELS[slot.source]}</td>
                        <td className="px-2 py-2 capitalize">{slot.status}</td>
                        <td className="px-2 py-2 text-right">
                          <button
                            type="button"
                            className="text-red-600 hover:underline"
                            onClick={() => void onDelete(slot.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
