import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "@/components/Footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.osamamoussa.co.uk"),
  title: {
    default: "Mr Osama Moussa | Consultant General Surgeon | Upper GI Surgery | London & Hertfordshire",
    template: "%s | Mr Osama Moussa - Consultant General Surgeon"
  },
  description: "Mr Osama Moussa is a Consultant General Surgeon specialising in Upper GI and General Surgery at West Hertfordshire Hospitals NHS Trust. Expert in laparoscopic, robotic, and open surgery for benign, bariatric, and oncological procedures. Serving London and Hertfordshire.",
  keywords: [
    "Osama Moussa",
    "Consultant General Surgeon",
    "Upper GI Surgeon",
    "Laparoscopic Surgeon",
    "Robotic Surgeon",
    "Bariatric Surgeon",
    "Gastric Surgeon",
    "Hernia Surgeon",
    "Gallbladder Surgeon",
    "London Surgeon",
    "Hertfordshire Surgeon",
    "Watford Surgeon",
    "West Hertfordshire Hospitals",
    "Upper Gastrointestinal Surgery",
    "Minimal Access Surgery",
    "Anti-reflux Surgery",
    "Gastric Bypass",
    "Sleeve Gastrectomy",
    "Hiatal Hernia Repair",
    "Fundoplication",
    "Gastric Cancer Surgery",
    "Oesophageal Surgery",
    "General Surgery London",
    "NHS Consultant Surgeon",
    "Private Surgeon London"
  ],
  authors: [{ name: "Mr Osama Moussa" }],
  creator: "Mr Osama Moussa",
  publisher: "Mr Osama Moussa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.osamamoussa.co.uk",
    siteName: "Mr Osama Moussa - Consultant General Surgeon",
    title: "Mr Osama Moussa | Consultant General Surgeon | Upper GI Surgery",
    description: "Consultant General Surgeon specialising in Upper GI and General Surgery. Expert in laparoscopic, robotic, and open surgery. Serving London and Hertfordshire.",
    images: [
      {
        url: "/Osama Moussa Logo-01.svg",
        width: 1200,
        height: 630,
        alt: "Mr Osama Moussa - Consultant General Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Osama Moussa | Consultant General Surgeon",
    description: "Consultant General Surgeon specialising in Upper GI and General Surgery. Expert in laparoscopic, robotic, and open surgery.",
    images: ["/Osama Moussa Logo-01.svg"],
  },
  alternates: {
    canonical: "https://www.osamamoussa.co.uk",
  },
  category: "Medical",
  classification: "Medical Practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Medical Practice
  const medicalPracticeSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Mr Osama Moussa - Consultant General Surgeon",
    "description": "Consultant General Surgeon specialising in Upper GI and General Surgery",
    "url": "https://www.osamamoussa.co.uk",
    "logo": "https://www.osamamoussa.co.uk/Osama Moussa Logo-01.svg",
    "image": "https://www.osamamoussa.co.uk/Osama Moussa Logo-01.svg",
    "telephone": "+44-20-8216-4000",
    "email": "pa@osamamoussa.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Watford",
      "addressRegion": "Hertfordshire",
      "addressCountry": "GB"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "London"
      },
      {
        "@type": "City",
        "name": "Hertfordshire"
      },
      {
        "@type": "City",
        "name": "Watford"
      }
    ],
    "medicalSpecialty": [
      "General Surgery",
      "Upper Gastrointestinal Surgery",
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Bariatric Surgery"
    ],
    "priceRange": "$$"
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Mr Osama Moussa",
    "jobTitle": "Consultant General Surgeon",
    "description": "Consultant General Surgeon specialising in Upper GI and General Surgery at West Hertfordshire Hospitals NHS Trust",
    "url": "https://www.osamamoussa.co.uk",
    "image": "https://www.osamamoussa.co.uk/Osama Moussa Logo-01.svg",
    "email": "pa@osamamoussa.co.uk",
    "telephone": "+44-20-8216-4000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Watford",
      "addressRegion": "Hertfordshire",
      "addressCountry": "GB"
    },
    "worksFor": {
      "@type": "Hospital",
      "name": "West Hertfordshire Hospitals NHS Trust"
    },
    "medicalSpecialty": [
      "General Surgery",
      "Upper Gastrointestinal Surgery",
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Bariatric Surgery"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Imperial College London"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mr Osama Moussa - Consultant General Surgeon",
    "url": "https://www.osamamoussa.co.uk",
    "logo": "https://www.osamamoussa.co.uk/Osama Moussa Logo-01.svg",
    "sameAs": [
      "https://www.researchgate.net/profile/Osama-Moussa-7",
      "https://scholargps.com/scholars/40596147119067/osama-moussa",
      "https://www.iwantgreatcare.org/doctors/mr-osama-m-moussa",
      "https://www.topdoctors.co.uk/doctor/osama-moussa"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* SVG Favicon with dark/light mode support */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="/cursor.svg"
        />
        {/* Fallback PNG favicon */}
        <link
          rel="icon"
          type="image/png"
          href="/Logo_Osama_Moussa_Compartment-02.png"
        />
        {/* Apple touch icon */}
        <link
          rel="apple-touch-icon"
          href="/Logo_Osama_Moussa_Compartment-02.png"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalPracticeSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physicianSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

