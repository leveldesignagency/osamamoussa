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
  return getProcedureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) return { title: "Procedure" };
  return {
    title: procedure.title,
    description: procedure.description,
    openGraph: {
      title: `${procedure.title} | Mr Osama Moussa - Consultant General Surgeon`,
      description: procedure.description,
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
    <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-4 sm:pb-6 flex justify-center sm:justify-start">
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

      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none" />
      <Header backgroundColor="grey" />

      <BackToProcedures />

      {/* Full-width hero image (not full height) with procedure title centred */}
      <section className="w-full px-0">
        <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] max-h-[50vh]">
          <Image
            src={procedure.image}
            alt=""
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
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-center font-bold px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide drop-shadow-lg">
            {procedure.title}
          </h1>
        </div>
      </section>

      {/* Expanded content + sidebar */}
      <section className="w-full py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-10 xl:gap-12">
            {/* Main content - centred on mobile */}
            <div className="space-y-10 sm:space-y-16 text-center lg:text-left">
              {procedure.expandedContent.map((block, i) => (
                <div key={i} className="space-y-4 sm:space-y-6">
                  <h2 className="page-title font-bold text-white mb-4 sm:mb-6 uppercase">
                    {block.heading}
                  </h2>
                  <div className="space-y-4 text-lg text-gray-200 leading-relaxed paragraph-block">
                    {block.paragraphs.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right sidebar - sticky on desktop; centred on mobile when stacked */}
            <ProcedureSidebar slug={slug} procedures={procedures} />
          </div>
        </div>
      </section>

      {/* Back to procedures - bottom */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 flex justify-center sm:justify-start">
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
