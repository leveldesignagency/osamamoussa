import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book Appointment",
  description: "Contact Mr Osama Moussa to book your Upper GI or Robotic Surgery consultation. Available at Spire Bushey, Circle Health Group hospitals (Bishops Wood Hospital, The Wellington Hospital), and West Hertfordshire NHS Trust. Serving London (Chelsea, Belgravia, Fitzrovia, Holland Park, West London), Hertfordshire, Watford, Hemel Hempstead. Book robotic surgery, hernia repair, gallbladder surgery, or GORD treatment today.",
  keywords: [
    "Book appointment Osama Moussa",
    "Contact surgeon London",
    "Robotic surgery consultation",
    "Upper GI consultation",
    "Upper GI consultation London",
    "Acid Reflux consultation London",
    "GORD consultation London",
    "Book surgery consultation",
    "Book robotic surgery",
    "Watford surgeon contact",
    "Hertfordshire surgeon",
    "Chelsea surgeon contact",
    "Belgravia surgeon contact",
    "Fitzrovia surgeon contact",
    "Holland Park surgeon contact",
    "West London surgeon contact",
    "Hemel Hempstead surgeon contact",
    "West Hertfordshire Hospitals",
    "Spire Bushey contact",
    "Circle Health Group contact",
    "Bishops Wood Hospital",
    "Wellington Hospital contact",
    "Surgical consultation booking",
    "Private consultation",
    "NHS consultation",
    "Surgeon phone number",
    "Surgeon email",
    "Hospital locations",
    "Surgical appointment"
  ],
  openGraph: {
    title: "Contact & Book Appointment | Mr Osama Moussa - Robotic & Upper GI Surgery",
    description: "Book your Upper GI or Robotic Surgery consultation with Mr Osama Moussa. Available at Spire Bushey, Circle Health Group, and West Hertfordshire NHS Trust. London and Hertfordshire.",
    url: "https://www.osamamoussa.co.uk/procedures/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://www.osamamoussa.co.uk/procedures/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



