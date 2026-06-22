import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import DaVinciPageContent from "@/components/da-vinci/DaVinciPageContent";

const baseUrl = "https://www.osamamoussa.co.uk";
const pageUrl = `${baseUrl}/procedures/robotic-surgery`;

export const metadata: Metadata = {
  title: "Robotic Surgery London & Hertfordshire | da Vinci | Mr Osama Moussa",
  description:
    "Robotic and da Vinci surgery with Mr Osama Moussa, Consultant Upper GI and Robotic Surgeon in London and Hertfordshire. Surgeon-controlled robotic surgery for selected hernia, reflux, and gallbladder procedures. NHS and private.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: pageUrl,
    siteName: "Mr Osama Moussa - Consultant General Surgeon",
    title: "Robotic Surgery | da Vinci | Mr Osama Moussa | London & Hertfordshire",
    description:
      "The da Vinci surgical system and robotic Upper GI surgery with Mr Osama Moussa at NHS and private hospitals in London and Hertfordshire.",
    images: [
      {
        url: "/davinci/da-vinci-5-console-or.jpg",
        width: 1200,
        height: 800,
        alt: "da Vinci 5 surgeon console, Mr Osama Moussa robotic surgery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robotic Surgery | da Vinci | Mr Osama Moussa",
    description:
      "Surgeon-controlled da Vinci robotic surgery for selected Upper GI procedures in London and Hertfordshire.",
    images: ["/davinci/da-vinci-5-console-or.jpg"],
  },
};

export default function RoboticSurgeryPage() {
  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Robotic Surgery | da Vinci | Mr Osama Moussa",
    description:
      "Information about robotic and da Vinci surgery and Mr Osama Moussa's Upper GI surgical practice in London and Hertfordshire.",
    url: pageUrl,
    about: {
      "@type": "MedicalProcedure",
      name: "Robotic surgery (da Vinci)",
      description:
        "Surgeon-controlled minimally invasive robotic surgery using the Intuitive da Vinci surgical system.",
    },
    author: {
      "@type": "Physician",
      name: "Mr Osama Moussa",
      url: baseUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Procedures", item: `${baseUrl}/procedures` },
      { "@type": "ListItem", position: 3, name: "Robotic Surgery", item: pageUrl },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-gradient-grey">
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-40 h-32 header-gradient-overlay" />
      <Header backgroundColor="grey" textColor="white" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="absolute left-0 right-0 top-24 z-30 sm:top-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/procedures"
            className="inline-flex items-center gap-2 font-medium text-white/90 transition-colors hover:text-white"
          >
            <span aria-hidden>←</span>
            Back to Procedures
          </Link>
        </div>
      </div>

      <DaVinciPageContent />
      <AppointmentSection />
    </main>
  );
}
