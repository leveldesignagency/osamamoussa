import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero, { MobileWidgetsSection } from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import KeyProceduresSection from "@/components/KeyProceduresSection";
import LogosSection from "@/components/LogosSection";
import ReviewsSection from "@/components/ReviewsSection";
import AppointmentSection from "@/components/AppointmentSection";

export const metadata: Metadata = {
  title: "Mr Osama Moussa – Upper GI & Hernia Surgeon London | Robotic Surgery Specialist",
  description: "Mr Osama Moussa – Upper GI and hernia surgeon London and Hertfordshire. Robotic surgery specialist. Expert in laparoscopic surgery, gallbladder surgery, acid reflux (GORD) and hernia repair. Spire Bushey, Circle Health Group, West Herts NHS. Book your consultation today.",
  keywords: [
    "Robotic Surgery London",
    "Robotic Surgery Hertfordshire",
    "Robotic Surgeon London",
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
    "Laparoscopic Surgery London",
    "Bariatric Surgeon UK",
    "Gastric Surgeon London",
    "Hernia Surgeon Hertfordshire",
    "Hernia Repair Surgery",
    "Gallbladder Surgeon",
    "Cholecystectomy",
    "Fundoplication",
    "GORD Surgeon",
    "Anti-reflux Surgery",
    "LINX Device",
    "West Hertfordshire Hospitals",
    "Spire Bushey",
    "Circle Health Group",
    "Bishops Wood Hospital",
    "Wellington Hospital",
    "NHS Consultant Surgeon",
    "Private Surgeon London"
  ],
  openGraph: {
    title: "Mr Osama Moussa – Upper GI & Hernia Surgeon London | Robotic Surgery Specialist",
    description: "Upper GI and hernia surgeon London and Hertfordshire. Robotic surgery specialist. Expert in laparoscopic surgery, gallbladder surgery, acid reflux and hernia repair. Book your consultation.",
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
      <KeyProceduresSection />
      <LogosSection />
      <ReviewsSection />
      <AppointmentSection />
    </main>
  );
}

