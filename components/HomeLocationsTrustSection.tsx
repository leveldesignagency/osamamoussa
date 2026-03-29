"use client";

import Link from "next/link";
import { hospitals, locationPages } from "@/app/locations/location-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/** Stable Google SERP for brand + knowledge panel; avoids long session-specific URLs. */
export const GOOGLE_PROFILE_SEARCH_URL =
  "https://www.google.com/search?q=Osama+Moussa";

const PRIORITY_LOCATION_SLUGS = [
  "west-london",
  "hertfordshire",
  "watford",
  "chelsea",
  "notting-hill",
  "hemel-hempstead",
  "bushey",
  "st-albans",
] as const;

const procedureLinks = [
  { href: "/procedures/hernia-repair-surgery", label: "Hernia repair" },
  { href: "/procedures/gallbladder-surgery-cholecystectomy", label: "Gallbladder & gallstones" },
  { href: "/procedures/gastroesophageal-reflux-disease-gord", label: "Acid reflux (GORD)" },
] as const;

export default function HomeLocationsTrustSection() {
  const { ref, isVisible } = useScrollAnimation();

  const locationLinks = PRIORITY_LOCATION_SLUGS.map((slug) =>
    locationPages.find((p) => p.slug === slug)
  ).filter(Boolean) as typeof locationPages;

  return (
    <section
      className="relative w-full border-t border-black/10 bg-neutral-100 text-black"
      aria-labelledby="home-locations-trust-heading"
    >
      <div
        ref={ref}
        className={`container mx-auto w-full max-w-7xl px-4 py-16 transition-all duration-700 ease-out sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="mb-12 max-w-3xl">
          <p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Practice locations
          </p>
          <h2
            id="home-locations-trust-heading"
            className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-black"
            style={{ fontFamily: '"ITC Avant Garde Gothic", "Century Gothic", sans-serif' }}
          >
            Where Mr Moussa practises
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <p
              className="text-base leading-relaxed text-neutral-700 sm:text-lg"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Consultant{" "}
              <strong className="font-semibold text-black">Upper GI surgeon</strong> offering{" "}
              <strong className="font-semibold text-black">
                minimally invasive (laparoscopic) and robotic surgery
              </strong>{" "}
              for benign Upper GI conditions. Appointments across{" "}
              <strong className="font-semibold text-black">West London</strong>,{" "}
              <strong className="font-semibold text-black">Hertfordshire</strong>, and surrounding
              areas.
            </p>

            <div>
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Common procedures
              </p>
              <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1 sm:gap-y-2">
                {procedureLinks.map((item, i) => (
                  <li key={item.href} className="flex items-center gap-1 sm:inline-flex">
                    {i > 0 && (
                      <span
                        className="hidden text-neutral-300 sm:inline"
                        aria-hidden
                      >
                        ·
                      </span>
                    )}
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-black underline decoration-black/25 underline-offset-[5px] transition-colors hover:decoration-black"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Area guides
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              {locationLinks.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="group flex min-h-[3.25rem] items-center justify-between gap-3 border-2 border-black bg-white px-4 py-3 transition-colors duration-300 hover:bg-black hover:text-white"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    <span className="text-left text-sm font-semibold leading-snug sm:text-[15px]">
                      {loc.title}
                    </span>
                    <span
                      className="shrink-0 text-lg font-light text-black/40 transition-colors group-hover:text-white/90"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-black/10 pt-14 lg:mt-16 lg:pt-16">
          <h3
            className="mb-8 text-xl font-bold tracking-tight text-black sm:text-2xl"
            style={{ fontFamily: '"ITC Avant Garde Gothic", "Century Gothic", sans-serif' }}
          >
            Hospitals &amp; NHS trust
          </h3>
          <ul className="divide-y divide-black/10 border border-black/10 bg-white">
            {hospitals.map((h) => (
              <li key={h.name} className="p-0">
                <a
                  href={h.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-1 px-4 py-4 transition-colors hover:bg-neutral-50/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:px-6 sm:py-5"
                  aria-label={`${h.name}, ${h.address} — open in Google Maps`}
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  <span className="font-semibold text-black">{h.name}</span>
                  <span className="text-sm leading-relaxed text-neutral-600 underline decoration-neutral-300 underline-offset-[3px] transition-colors hover:text-black hover:decoration-black sm:max-w-md sm:text-right">
                    {h.address}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-8">
          <Link
            href="/procedures/contact"
            className="button-swipe button-swipe-black inline-flex w-fit items-center justify-center border-2 border-black bg-transparent px-8 py-3 text-sm font-medium text-black transition-all duration-300"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Book a consultation
          </Link>
          <div
            className="flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-8"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            <a
              href={GOOGLE_PROFILE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-black underline decoration-black/30 underline-offset-[5px] transition-colors hover:decoration-black"
            >
              Google profile &amp; reviews
              <span aria-hidden>↗</span>
            </a>
            <Link
              href="/locations"
              className="font-semibold text-black underline decoration-black/30 underline-offset-[5px] transition-colors hover:decoration-black"
            >
              All location pages
            </Link>
            <Link
              href="/procedures/contact"
              className="text-neutral-600 underline decoration-neutral-300 underline-offset-[5px] transition-colors hover:text-black hover:decoration-black"
            >
              Full contact &amp; booking
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
