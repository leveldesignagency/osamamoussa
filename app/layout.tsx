import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "@/components/Footer";
import { GlobalErrorHandler } from "./global-error-handler";
import SmoothScroll from "@/components/SmoothScroll";
import MobileFAB from "@/components/MobileFAB";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.osamamoussa.co.uk"),
  title: {
    default: "Mr Osama Moussa – Upper GI & Hernia Surgeon London | Robotic Surgery Specialist",
    template: "%s | Mr Osama Moussa - Consultant General Surgeon"
  },
  description: "Mr Osama Moussa is a Consultant General Surgeon specialising in Upper GI and Robotic Surgery. Expert in robotic surgery, laparoscopic surgery, hernia repair, gallbladder surgery (cholecystectomy), GORD treatment, fundoplication, LINX device, and benign Upper GI procedures. Serving London (Chelsea, Belgravia, Fitzrovia, Holland Park, West London), Hertfordshire, Watford, Hemel Hempstead. Available at Spire Bushey, Circle Health Group, and West Hertfordshire NHS Trust.",
  keywords: [
    "Osama Moussa",
    "Consultant General Surgeon",
    "Upper GI Surgeon",
    "Robotic Surgery",
    "Robotic Surgery London",
    "Robotic Surgery Hertfordshire",
    "Robotic Surgeon",
    "Robotic Surgeon London",
    "Upper GI Surgeon London",
    "Upper GI Doctor London",
    "Upper GI Specialist London",
    "Acid Reflux Doctor London",
    "Acid Reflux Doctor Near Me",
    "GORD Doctor London",
    "GERD Doctor London",
    "Laparoscopic Surgeon",
    "Laparoscopic Surgery London",
    "Bariatric Surgeon",
    "Gastric Surgeon",
    "Hernia Surgeon",
    "Hernia Repair Surgery",
    "Gallbladder Surgeon",
    "Cholecystectomy",
    "Fundoplication",
    "Hiatal Hernia Repair",
    "LINX Device GORD",
    "Inguinal Hernia Surgery",
    "TAPP Hernia Surgery",
    "London Surgeon",
    "Hertfordshire Surgeon",
    "Watford Surgeon",
    "Chelsea Surgeon",
    "Belgravia Surgeon",
    "Fitzrovia Surgeon",
    "Holland Park Surgeon",
    "West London Surgeon",
    "Hemel Hempstead Surgeon",
    "West Hertfordshire Hospitals",
    "Spire Bushey",
    "Circle Health Group",
    "Bishops Wood Hospital",
    "Wellington Hospital",
    "Upper Gastrointestinal Surgery",
    "Minimal Access Surgery",
    "Anti-reflux Surgery",
    "Gastric Bypass",
    "Sleeve Gastrectomy",
    "Gastric Cancer Surgery",
    "Oesophageal Surgery",
    "General Surgery London",
    "NHS Consultant Surgeon",
    "Private Surgeon London",
    "Upper GI Surgeon Chelsea",
    "Upper GI Surgeon Belgravia",
    "Upper GI Surgeon Fitzrovia",
    "Upper GI Surgeon Holland Park",
    "Upper GI Surgeon West London",
    "Upper GI Surgeon Hemel Hempstead",
    "Acid Reflux Specialist London",
    "GORD Specialist London",
    "GERD Specialist London",
    "Ventral Hernia Surgery",
    "Umbilical Hernia Surgery",
    "Abdominal Wall Reconstruction"
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
  verification: {
    google: "SohRd1aIyCt4rOvTEP3mPODWSSbBdosOF2V5wTfV1Ho",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.osamamoussa.co.uk",
    siteName: "Mr Osama Moussa - Consultant General Surgeon",
    title: "Mr Osama Moussa | Upper GI & Robotic Surgery | London & Hertfordshire",
    description: "Consultant General Surgeon specialising in Upper GI and Robotic Surgery. Expert in robotic surgery, laparoscopic surgery, hernia repair, gallbladder surgery, GORD treatment, and fundoplication. Serving London and Hertfordshire.",
    images: [
      {
        url: "/Osama Moussa Social Share.png",
        width: 1200,
        height: 630,
        alt: "Mr Osama Moussa - Consultant General Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Osama Moussa | Upper GI & Robotic Surgery | London & Hertfordshire",
    description: "Consultant General Surgeon specialising in Upper GI and Robotic Surgery. Expert in robotic surgery, laparoscopic surgery, hernia repair, GORD treatment, and fundoplication.",
    images: ["/Osama Moussa Social Share.png"],
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
    "description": "Consultant General Surgeon specialising in Upper GI and Robotic Surgery. Expert in robotic surgery, laparoscopic surgery, hernia repair, gallbladder surgery (cholecystectomy), GORD treatment, fundoplication, LINX device, and benign Upper GI procedures in London and Hertfordshire.",
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
        "name": "Chelsea"
      },
      {
        "@type": "City",
        "name": "Belgravia"
      },
      {
        "@type": "City",
        "name": "Fitzrovia"
      },
      {
        "@type": "City",
        "name": "Holland Park"
      },
      {
        "@type": "City",
        "name": "West London"
      },
      {
        "@type": "City",
        "name": "Hertfordshire"
      },
      {
        "@type": "City",
        "name": "Watford"
      },
      {
        "@type": "City",
        "name": "Hemel Hempstead"
      },
      {
        "@type": "City",
        "name": "Bushey"
      },
      {
        "@type": "City",
        "name": "Northwood"
      }
    ],
    "medicalSpecialty": [
      "General Surgery",
      "Upper Gastrointestinal Surgery",
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Bariatric Surgery",
      "Acid Reflux Treatment",
      "GORD Treatment",
      "GERD Treatment",
      "Hernia Surgery",
      "Gallbladder Surgery",
      "Cholecystectomy",
      "Fundoplication",
      "Hiatal Hernia Repair",
      "Inguinal Hernia Surgery",
      "Ventral Hernia Surgery",
      "Umbilical Hernia Surgery",
      "Abdominal Wall Reconstruction",
      "Gastric Surgery",
      "LINX Device",
      "Minimal Access Surgery"
    ],
    "priceRange": "$$"
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Mr Osama Moussa",
    "jobTitle": "Consultant General Surgeon",
    "description": "Consultant General Surgeon specialising in Upper GI and Robotic Surgery at West Hertfordshire Hospitals NHS Trust. Expert in robotic surgery, laparoscopic surgery, hernia repair, gallbladder surgery, GORD treatment, and fundoplication.",
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
    "worksFor": [
      {
        "@type": "Hospital",
        "name": "West Hertfordshire Hospitals NHS Trust",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vicarage Road",
          "addressLocality": "Watford",
          "postalCode": "WD18 0HB",
          "addressCountry": "GB"
        }
      },
      {
        "@type": "Hospital",
        "name": "Spire Bushey Healthcare",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Heathbourne Rd",
          "addressLocality": "Bushey",
          "postalCode": "WD23 1RD",
          "addressCountry": "GB"
        }
      },
      {
        "@type": "Hospital",
        "name": "Bishops Wood Hospital",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rickmansworth Road",
          "addressLocality": "Northwood",
          "postalCode": "HA6 2JW",
          "addressCountry": "GB"
        }
      },
      {
        "@type": "Hospital",
        "name": "The Wellington Hospital",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8A Wellington Place",
          "addressLocality": "London",
          "postalCode": "NW8 9LE",
          "addressCountry": "GB"
        }
      }
    ],
    "medicalSpecialty": [
      "General Surgery",
      "Upper Gastrointestinal Surgery",
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Bariatric Surgery",
      "Acid Reflux Treatment",
      "GORD Treatment",
      "GERD Treatment",
      "Hernia Surgery",
      "Gallbladder Surgery",
      "Cholecystectomy",
      "Fundoplication",
      "Hiatal Hernia Repair",
      "Inguinal Hernia Surgery",
      "Ventral Hernia Surgery",
      "Umbilical Hernia Surgery",
      "Abdominal Wall Reconstruction",
      "Gastric Surgery",
      "LINX Device",
      "Minimal Access Surgery"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Imperial College London"
      }
    ],
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "GMC Number",
        "value": "6043402",
        "url": "https://www.gmc-uk.org/registration-and-licensing/register-search"
      }
    ],
    "memberOf": [
      { "@type": "Organization", "name": "Royal College of Surgeons of England", "url": "https://www.rcseng.ac.uk/" },
      { "@type": "Organization", "name": "British Medical Association", "url": "https://www.bma.org.uk/" },
      { "@type": "Organization", "name": "BOMSS", "url": "https://bomss.org/" },
      { "@type": "Organization", "name": "AUGIS", "url": "https://www.augis.org/" },
      { "@type": "Organization", "name": "IFSO", "url": "https://www.ifso.com/" }
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
      "https://www.topdoctors.co.uk/doctor/osama-moussa",
      "https://www.gmc-uk.org/registration-and-licensing/register-search"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w"
        />
        {/* Browser tab favicon (Chrome, etc.) - 32x32 from favicon2026.png */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.png"
        />
        {/* Apple touch icon */}
        <link
          rel="apple-touch-icon"
          href="/Logo_Osama_Moussa_Compartment-02.png"
        />
        {/* Google Fonts - Plus Jakarta Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
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
      <body className="overflow-x-hidden">
        <GlobalErrorHandler />
        <SmoothScroll />
        {children}
        <Footer />
        <MobileFAB />
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

