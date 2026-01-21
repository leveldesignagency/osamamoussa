import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surgical Procedures & Treatments",
  description: "Comprehensive Upper GI surgical procedures including laparoscopic surgery, robotic surgery, gallbladder surgery, hernia repair, GORD treatment, bariatric surgery, and more. Expert surgical care in London and Hertfordshire.",
  keywords: [
    "Upper GI Surgery procedures",
    "Laparoscopic surgery London",
    "Robotic surgery Hertfordshire",
    "Gallbladder surgery",
    "Cholecystectomy",
    "Hernia repair surgery",
    "GORD treatment",
    "Gastroesophageal reflux surgery",
    "Bariatric surgery",
    "Gastric bypass",
    "Sleeve gastrectomy",
    "Hiatal hernia repair",
    "Fundoplication",
    "Anti-reflux surgery",
    "Gastric cancer surgery",
    "Oesophageal surgery",
    "Minimal access surgery",
    "Keyhole surgery",
    "Weight loss surgery",
    "Gastric band surgery"
  ],
  openGraph: {
    title: "Surgical Procedures | Mr Osama Moussa - Consultant General Surgeon",
    description: "Expert Upper GI surgical procedures including laparoscopic, robotic, and open surgery. Specialising in hernia repair, gallbladder surgery, GORD treatment, and bariatric surgery.",
    url: "https://www.osamamoussa.co.uk/procedures",
    type: "website",
  },
  alternates: {
    canonical: "https://www.osamamoussa.co.uk/procedures",
  },
};

export default function ProceduresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



