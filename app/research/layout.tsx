import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "View Mr Osama Moussa's research publications and contributions to Upper GI surgery. Published in high-impact journals, focusing on metabolic health in obesity and advancing benign Upper GI Surgery.",
  keywords: [
    "Osama Moussa research",
    "Upper GI surgery research",
    "Bariatric surgery publications",
    "Metabolic health research",
    "Obesity research",
    "Surgical research papers",
    "Medical publications",
    "Researchgate Osama Moussa",
    "Scholargps Osama Moussa",
    "Surgical journal publications",
    "Academic surgeon",
    "Clinical research",
    "Surgical outcomes research"
  ],
  openGraph: {
    title: "Research & Publications | Mr Osama Moussa",
    description: "Research publications and contributions to Upper GI surgery, focusing on metabolic health in obesity. Published in high-impact journals.",
    url: "https://www.osamamoussa.co.uk/research",
    type: "website",
  },
  alternates: {
    canonical: "https://www.osamamoussa.co.uk/research",
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



