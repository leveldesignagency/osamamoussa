import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const baseUrl = "https://www.osamamoussa.co.uk";
/** Same asset as root layout OG / Twitter / Physician schema — replace `public/og-social-share.jpg` to update everywhere. */
const officialOgImagePath = "/og-social-share.jpg";
const officialOgImageUrl = `${baseUrl}/og-social-share.jpg`;

export const metadata: Metadata = {
  title: "Official image — search & social preview",
  description:
    "Canonical Open Graph image for Mr Osama Moussa — Consultant Upper GI & Robotic Surgeon, London & Hertfordshire. Used for link previews in Google, social platforms, and structured data.",
  alternates: {
    canonical: `${baseUrl}/opengraph`,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${baseUrl}/opengraph`,
    siteName: "Mr Osama Moussa - Consultant General Surgeon",
    title: "Mr Osama Moussa — Official Open Graph image",
    description:
      "Official portrait and preview image for Mr Osama Moussa, Consultant Upper GI & Robotic Surgeon.",
    images: [
      {
        url: officialOgImagePath,
        width: 1200,
        height: 720,
        alt: "Mr Osama Moussa — Consultant Upper GI & Robotic Surgeon, London & Hertfordshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Osama Moussa — Official Open Graph image",
    description:
      "Official portrait and preview image for Mr Osama Moussa, Consultant Upper GI & Robotic Surgeon.",
    images: [officialOgImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OpenGraphPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Official Open Graph image — Mr Osama Moussa",
    description:
      "Canonical page for the official Open Graph / social preview image on osamamoussa.co.uk.",
    url: `${baseUrl}/opengraph`,
    isPartOf: {
      "@type": "WebSite",
      name: "Mr Osama Moussa - Consultant General Surgeon",
      url: baseUrl,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: officialOgImageUrl,
      width: 1200,
      height: 720,
      caption:
        "Mr Osama Moussa — Consultant Upper GI & Robotic Surgeon (official website preview image)",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none" />
      <Header backgroundColor="grey" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 max-w-4xl">
        <div className="bg-black inline-block px-6 py-4 mb-8">
          <h1 className="page-title page-title-main font-bold text-white text-center sm:text-left leading-tight">
            Official preview image
          </h1>
        </div>
        <p className="text-gray-200 text-lg leading-relaxed mb-8 paragraph-block">
          This is the canonical <strong className="text-white">1200 × 720</strong> image used for{" "}
          <strong className="text-white">Open Graph</strong> (link previews),{" "}
          <strong className="text-white">Twitter/X cards</strong>, and{" "}
          <strong className="text-white">structured data</strong> on this website. Replace{" "}
          <code className="text-white/90 bg-white/10 px-1.5 py-0.5 rounded text-sm">
            public/og-social-share.jpg
          </code>{" "}
          to update previews (keep under ~1–2&nbsp;MB so WhatsApp and other apps fetch it reliably).
        </p>

        <div className="rounded-xl overflow-hidden border border-white/20 bg-black/30 shadow-xl">
          <Image
            src={officialOgImagePath}
            alt="Mr Osama Moussa — Consultant Upper GI & Robotic Surgeon, London & Hertfordshire (official Open Graph image)"
            width={1200}
            height={720}
            className="w-full h-auto object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <p className="text-gray-400 text-sm mt-6">
          Public URL for the image file:{" "}
          <a
            href={officialOgImageUrl}
            className="text-white/90 underline underline-offset-2 break-all hover:text-white"
          >
            {officialOgImageUrl}
          </a>
        </p>

        <p className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
          >
            <span aria-hidden>←</span> Back to home
          </Link>
        </p>
      </section>
    </main>
  );
}
