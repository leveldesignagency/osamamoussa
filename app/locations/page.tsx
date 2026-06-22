import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import { locationPages } from "./location-data";

export const metadata: Metadata = {
  title: "Locations | Upper GI Surgeon London and Hertfordshire",
  description:
    "Service area pages for Mr Osama Moussa, Consultant Upper GI surgeon serving West London, Hertfordshire, and surrounding areas.",
  alternates: {
    canonical: "https://www.osamamoussa.co.uk/locations",
  },
};

export default function LocationsIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-grey relative">
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none" />
      <Header backgroundColor="grey" />

      <section className="w-full pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="page-title page-title-main mb-8 font-bold text-white">
            Locations
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed paragraph-block max-w-4xl">
            Explore location-specific pages for Upper GI, hernia, reflux, and
            gallbladder surgery services. Each page includes local context and
            relevant procedure pathways while clinic details remain centralised on
            the contact page.
          </p>
        </div>
      </section>

      <section className="w-full pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationPages.map((location) => (
              <article
                key={location.slug}
                className="bg-black/40 border border-white/15 rounded-xl p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-3">
                  <Link
                    href={`/locations/${location.slug}`}
                    className="hover:text-gray-200 transition-colors"
                  >
                    {location.title}
                  </Link>
                </h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  {location.seoDescription}
                </p>
                <Link
                  href={`/locations/${location.slug}`}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium"
                >
                  View location page <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AppointmentSection />
    </main>
  );
}
