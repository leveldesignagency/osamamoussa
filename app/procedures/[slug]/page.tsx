import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import { getProcedureBySlug, getProcedureSlugs, procedures } from "../procedures-data";
import ProcedureSidebar from "@/components/ProcedureSidebar";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProcedureSlugs()
    .filter((slug) => slug !== "robotic-surgery")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) return { title: "Procedure" };
  const title = procedure.seoTitle ?? `${procedure.title} London & Hertfordshire`;
  const description = procedure.seoDescription ?? procedure.description;
  return {
    title: title,
    description: description,
    openGraph: {
      title: `${title} | Mr Osama Moussa - Consultant General Surgeon`,
      description: description,
      url: `https://www.osamamoussa.co.uk/procedures/${slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://www.osamamoussa.co.uk/procedures/${slug}`,
    },
  };
}

function BackToProcedures() {
  return (
    <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-4 sm:pb-6 flex justify-start">
      <Link
        href="/procedures"
        className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium"
      >
        <span aria-hidden>←</span>
        Back to Procedures
      </Link>
    </div>
  );
}

export default async function ProcedurePage({ params }: Props) {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) notFound();

  const baseUrl = "https://www.osamamoussa.co.uk";
  const pageUrl = `${baseUrl}/procedures/${slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Procedures", item: `${baseUrl}/procedures` },
      { "@type": "ListItem", position: 3, name: procedure.title, item: pageUrl },
    ],
  };

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: procedure.title,
    description: procedure.description,
    url: pageUrl,
    about: {
      "@type": "MedicalProcedure",
      name: procedure.title,
      description: procedure.description,
    },
    mainEntity: {
      "@type": "MedicalProcedure",
      name: procedure.title,
      description: procedure.description,
    },
  };

  const faqSchema =
    procedure.faqs && procedure.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: procedure.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      {/* Structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none" />
      <Header backgroundColor="grey" />

      <BackToProcedures />

      {/* Full-width hero image (not full height) with procedure title centred */}
      <section className="w-full px-0">
        <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] max-h-[50vh]">
          <Image
            src={procedure.image}
            alt={`${procedure.title} – Mr Osama Moussa, Consultant General Surgeon`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={procedure.image === "/linx-procedure.png" ? { objectPosition: "center 30%" } : {}}
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40"
            aria-hidden
          />
          <h1 className="absolute inset-0 flex items-center justify-start px-4 sm:justify-center sm:px-6">
            <span className="page-title page-title-main page-title-hero max-w-5xl text-left font-bold text-white drop-shadow-lg sm:text-center">
              {procedure.title}
            </span>
          </h1>
        </div>
      </section>

      {/* Expanded content + sidebar */}
      <section className="w-full py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-10 xl:gap-12">
            {/* Main content + FAQ (left column) */}
            <div className="space-y-10 text-left sm:space-y-16">
              {procedure.expandedContent.map((block, i) => (
                <div key={i} className="space-y-4 sm:space-y-6">
                  <h2 className="page-title mb-4 font-bold text-white sm:mb-6">
                    {block.heading}
                  </h2>
                  <div className="paragraph-block space-y-4 text-left text-lg leading-relaxed text-gray-200">
                    {block.paragraphs.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                  {block.link && (
                    <p className="pt-2">
                      <Link
                        href={block.link.href}
                        className="button-swipe button-swipe-black inline-flex items-center gap-2 border-2 border-white px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 sm:text-base"
                      >
                        {block.link.label}
                        <span aria-hidden>→</span>
                      </Link>
                    </p>
                  )}
                </div>
              ))}

              {/* FAQ section (when present) - under main article content */}
              {procedure.faqs && procedure.faqs.length > 0 && (
                <div className="space-y-6 text-left">
                  <h2 className="page-title mb-4 font-bold text-white sm:mb-6">
                    Frequently asked questions
                  </h2>
                  <ul className="space-y-6">
                    {procedure.faqs.map((faq, i) => (
                      <li key={i} className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                        <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right sidebar - sticky on desktop; centred on mobile when stacked */}
            <ProcedureSidebar slug={slug} procedures={procedures} />
          </div>
        </div>
      </section>

      {/* Back to procedures - bottom */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 flex justify-start">
        <Link
          href="/procedures"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium"
        >
          <span aria-hidden>←</span>
          Back to Procedures
        </Link>
      </div>

      <AppointmentSection />
    </main>
  );
}
