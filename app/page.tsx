import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero, { MobileWidgetsSection } from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import LogosSection from "@/components/LogosSection";
import ReviewsSection from "@/components/ReviewsSection";
import AppointmentSection from "@/components/AppointmentSection";

export const metadata: Metadata = {
  title: "Osama Moussa",
  description: "Mr Osama Moussa - Leading Upper GI Surgeon in London (Chelsea, Belgravia, Fitzrovia, Holland Park, West London) and Hertfordshire. Expert Consultant General Surgeon specialising in acid reflux, GORD, laparoscopic, robotic, and open surgery. Available at Spire Bushey, Circle Health Group hospitals, and West Hertfordshire NHS Trust. Book your consultation today.",
  keywords: [
    "Upper GI Surgeon London",
    "Upper GI Doctor London",
    "Upper GI Specialist London",
    "Acid Reflux Doctor London",
    "Acid Reflux Doctor Near Me",
    "GORD Doctor London",
    "GERD Doctor London",
    "Acid Reflux Specialist London",
    "GORD Specialist London",
    "GERD Specialist London",
    "Upper GI Surgeon Chelsea",
    "Upper GI Surgeon Belgravia",
    "Upper GI Surgeon Fitzrovia",
    "Upper GI Surgeon Holland Park",
    "Upper GI Surgeon West London",
    "Upper GI Surgeon Hemel Hempstead",
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
    "Spire Bushey",
    "Circle Health Group",
    "Bishops Wood Hospital",
    "Wellington Hospital",
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
    <main className="min-h-screen bg-gradient-grey overflow-x-hidden">
      <Header />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <LogosSection />
      <ReviewsSection />
      <AppointmentSection />
    </main>
  );
}

