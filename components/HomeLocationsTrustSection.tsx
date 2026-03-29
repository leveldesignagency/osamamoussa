import Link from "next/link";
import { hospitals, locationPages } from "@/app/locations/location-data";

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

export default function HomeLocationsTrustSection() {
  const locationLinks = PRIORITY_LOCATION_SLUGS.map((slug) =>
    locationPages.find((p) => p.slug === slug)
  ).filter(Boolean) as typeof locationPages;

  return (
    <section
      className="relative w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/30 border-y border-white/10"
      aria-labelledby="home-locations-trust-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          id="home-locations-trust-heading"
          className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mb-3 text-center"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          Where Mr Moussa practises
        </h2>
        <p className="text-white/85 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8 paragraph-block">
          Consultant{" "}
          <strong className="text-white font-semibold">Upper GI surgeon</strong>{" "}
          offering{" "}
          <strong className="text-white font-semibold">
            minimally invasive (laparoscopic) and robotic surgery
          </strong>{" "}
          for{" "}
          <Link
            href="/procedures/hernia-repair-surgery"
            className="text-white underline underline-offset-2 hover:text-white/90"
          >
            hernia repair
          </Link>
          ,{" "}
          <Link
            href="/procedures/gallbladder-surgery-cholecystectomy"
            className="text-white underline underline-offset-2 hover:text-white/90"
          >
            gallstones and gallbladder surgery
          </Link>
          ,{" "}
          <Link
            href="/procedures/gastroesophageal-reflux-disease-gord"
            className="text-white underline underline-offset-2 hover:text-white/90"
          >
            acid reflux (GORD)
          </Link>
          , and other benign Upper GI conditions. Appointments across{" "}
          <strong className="text-white font-semibold">West London</strong>,{" "}
          <strong className="text-white font-semibold">Hertfordshire</strong>{" "}
          and surrounding areas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10">
          {locationLinks.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="block rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm sm:text-base text-white/95 hover:bg-white/10 hover:border-white/35 transition-colors text-center sm:text-left"
            >
              <span className="font-semibold">{loc.title}</span>
              <span className="text-white/60 text-xs sm:text-sm block mt-0.5">
                Local information &amp; services →
              </span>
            </Link>
          ))}
        </div>

        <div className="rounded-xl border border-white/20 bg-black/40 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center sm:text-left">
            Hospitals &amp; NHS trust
          </h3>
          <ul className="space-y-3 text-gray-200 text-sm sm:text-base mb-6">
            {hospitals.map((h) => (
              <li key={h.name} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="font-medium text-white">{h.name}</span>
                <span className="text-white/70">{h.address}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-center justify-center sm:justify-start pt-4 border-t border-white/15">
            <a
              href={GOOGLE_PROFILE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-white/50 hover:border-white pb-0.5 transition-colors"
            >
              Google profile &amp; reviews
              <span aria-hidden>↗</span>
            </a>
            <Link
              href="/procedures/contact"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base underline underline-offset-2"
            >
              Full contact details &amp; booking →
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base underline underline-offset-2"
            >
              All location pages →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
