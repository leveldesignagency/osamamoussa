import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "@/components/Footer";
import { GlobalErrorHandler } from "./global-error-handler";
import SmoothScroll from "@/components/SmoothScroll";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.osamamoussa.co.uk"),
  title: {
    default: "Mr Osama Moussa | Consultant General Surgeon | Upper GI & Robotic Surgery | London & Hertfordshire",
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
        {/* Sticky Call button - mobile only, icon only */}
        <a
          href="tel:07352167642"
          aria-label="Call now"
          className="fixed bottom-6 right-6 z-[60] sm:hidden flex items-center justify-center w-14 h-14 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 active:scale-95 transition-all duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

