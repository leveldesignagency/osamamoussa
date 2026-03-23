import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import {
  getLocationBySlug,
  getLocationSlugs,
  hospitals,
} from "../location-data";
import { getProcedureBySlug } from "@/app/procedures/procedures-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) return { title: "Location" };

  const canonical = `https://www.osamamoussa.co.uk/locations/${slug}`;

  return {
    title: location.seoTitle,
    description: location.seoDescription,
    alternates: { canonical },
    openGraph: {
      title: `${location.seoTitle} | Mr Osama Moussa`,
      description: location.seoDescription,
      url: canonical,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const servingHospitals = hospitals.filter((hospital) =>
    hospital.areasServed.includes(slug)
  );

  const relatedProcedures = location.relatedProcedureSlugs
    .map((procedureSlug) => getProcedureBySlug(procedureSlug))
    .filter(Boolean);

  const baseUrl = "https://www.osamamoussa.co.uk";
  const pageUrl = `${baseUrl}/locations/${slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${baseUrl}/locations` },
      { "@type": "ListItem", position: 3, name: location.title, item: pageUrl },
    ],
  };
  const faqSchema =
    location.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: location.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none" />
      <Header backgroundColor="grey" />

      <section className="w-full pt-32 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium mb-6"
          >
            <span aria-hidden>←</span>
            All locations
          </Link>
          <div className="bg-black inline-block px-6 py-4 mb-8">
            <h1 className="page-title page-title-main font-bold text-white">
              {location.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <article className="space-y-10 text-center lg:text-left">
              {location.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg sm:text-xl text-gray-200 leading-relaxed paragraph-block"
                >
                  {paragraph}
                </p>
              ))}

              <div>
                <h2 className="page-title font-bold text-white mb-4 uppercase">
                  Nearby areas
                </h2>
                <p className="text-gray-200 leading-relaxed">
                  {location.nearbyAreas.join(", ")}
                </p>
              </div>

              <div>
                <h2 className="page-title font-bold text-white mb-4 uppercase">
                  Why patients choose this service
                </h2>
                <ul className="space-y-3">
                  {location.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-200 leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {location.faqs.length > 0 && (
                <div>
                  <h2 className="page-title font-bold text-white mb-6 uppercase">
                    Frequently asked questions
                  </h2>
                  <ul className="space-y-6">
                    {location.faqs.map((faq, index) => (
                      <li key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">
                          {faq.question}
                        </h3>
                        <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>

            <aside className="space-y-6">
              <div className="bg-black/40 border border-white/15 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Hospitals serving this area
                </h2>
                <ul className="space-y-4">
                  {servingHospitals.map((hospital) => (
                    <li key={hospital.name} className="space-y-1">
                      <p className="text-white font-medium">{hospital.name}</p>
                      <p className="text-gray-300 text-sm">{hospital.address}</p>
                      <a
                        href={hospital.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white text-sm underline"
                      >
                        Hospital website
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/procedures/contact"
                  className="inline-flex items-center gap-2 mt-5 text-white/90 hover:text-white transition-colors font-medium"
                >
                  Full contact and hospital list <span aria-hidden>→</span>
                </Link>
              </div>

              <div className="bg-black/40 border border-white/15 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Related procedures
                </h2>
                <ul className="space-y-3">
                  {relatedProcedures.map((procedure) => (
                    <li key={procedure!.slug}>
                      <Link
                        href={`/procedures/${procedure!.slug}`}
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        {procedure!.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <AppointmentSection />
    </main>
  );
}
