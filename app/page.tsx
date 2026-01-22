import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import LogosSection from "@/components/LogosSection";
import ReviewsSection from "@/components/ReviewsSection";
import TopDoctorsWidget from "@/components/TopDoctorsWidget";
import AppointmentSection from "@/components/AppointmentSection";
import ScrollCTA from "@/components/ScrollCTA";

export const metadata: Metadata = {
  title: "Osama Moussa",
  description: "Mr Osama Moussa - A leader in Upper GI Surgery in London and Hertfordshire. Consultant General Surgeon specialising in laparoscopic, robotic, and open surgery for benign, bariatric, and oncological procedures. Book your consultation today.",
  keywords: [
    "Upper GI Surgeon London",
    "General Surgeon Hertfordshire",
    "Laparoscopic Surgeon Watford",
    "Robotic Surgery London",
    "Bariatric Surgeon UK",
    "Gastric Surgeon London",
    "Hernia Surgeon Hertfordshire",
    "Gallbladder Surgeon",
    "GORD Surgeon",
    "Anti-reflux Surgery",
    "West Hertfordshire Hospitals",
    "NHS Consultant Surgeon",
    "Private Surgeon London"
  ],
  openGraph: {
    title: "Mr Osama Moussa | Consultant General Surgeon | Upper GI Surgery London & Hertfordshire",
    description: "A leader in Upper GI Surgery in London and Hertfordshire. Expert Consultant General Surgeon specialising in laparoscopic, robotic, and open surgery.",
    url: "https://www.osamamoussa.co.uk",
    type: "website",
  },
  alternates: {
    canonical: "https://www.osamamoussa.co.uk",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-grey">
      <Header />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <LogosSection />
      <ReviewsSection />
      <TopDoctorsWidget />
      <AppointmentSection />
      <ScrollCTA />
    </main>
  );
}

