import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surgical Procedures & Robotic Surgery",
  description: "Upper GI and Robotic Surgery procedures with Mr Osama Moussa: robotic surgery, laparoscopic surgery, advanced Upper GI surgery, gallbladder surgery (cholecystectomy), GORD treatment, fundoplication, LINX device, hernia repair (inguinal, ventral, umbilical, hiatal, TAPP, epigastric), abdominal wall reconstruction, and lipoma removal. Expert care in London and Hertfordshire.",
  keywords: [
    "Robotic Surgery",
    "Robotic Surgery London",
    "Robotic Surgery Hertfordshire",
    "Upper GI Surgery procedures",
    "Laparoscopic surgery London",
    "Advanced Upper GI Surgery",
    "Gallbladder surgery",
    "Cholecystectomy",
    "Hernia repair surgery",
    "Inguinal hernia surgery",
    "Ventral hernia surgery",
    "Umbilical hernia surgery",
    "Hiatal hernia repair",
    "TAPP hernia surgery",
    "Epigastric hernia surgery",
    "Abdominal wall reconstruction",
    "GORD treatment",
    "Fundoplication",
    "LINX Device GORD",
    "Gastroesophageal reflux surgery",
    "Bariatric surgery",
    "Gastric bypass",
    "Sleeve gastrectomy",
    "Anti-reflux surgery",
    "Gastric cancer surgery",
    "Oesophageal surgery",
    "Minimal access surgery",
    "Keyhole surgery",
    "Weight loss surgery",
    "Lipoma removal",
    "Skin lumps surgery"
  ],
  openGraph: {
    title: "Surgical Procedures & Robotic Surgery | Mr Osama Moussa - Consultant General Surgeon",
    description: "Upper GI and Robotic Surgery procedures: robotic surgery, laparoscopic surgery, hernia repair, gallbladder surgery, GORD treatment, fundoplication, LINX device. Expert care in London and Hertfordshire.",
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



