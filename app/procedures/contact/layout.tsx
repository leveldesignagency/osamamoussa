import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book Appointment",
  description: "Contact Mr Osama Moussa to book your consultation. Located at West Hertfordshire Hospitals NHS Trust, serving London and Hertfordshire. Book your appointment for Upper GI surgery consultation today.",
  keywords: [
    "Book appointment Osama Moussa",
    "Contact surgeon London",
    "Upper GI consultation",
    "Book surgery consultation",
    "Watford surgeon contact",
    "Hertfordshire surgeon",
    "West Hertfordshire Hospitals",
    "Surgical consultation booking",
    "Private consultation",
    "NHS consultation",
    "Surgeon phone number",
    "Surgeon email",
    "Hospital locations",
    "Surgical appointment"
  ],
  openGraph: {
    title: "Contact & Book Appointment | Mr Osama Moussa",
    description: "Book your consultation with Mr Osama Moussa. Serving London and Hertfordshire at West Hertfordshire Hospitals NHS Trust.",
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



