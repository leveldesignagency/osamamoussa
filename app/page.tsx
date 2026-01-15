import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import LogosSection from "@/components/LogosSection";
import ReviewsSection from "@/components/ReviewsSection";
import TopDoctorsWidget from "@/components/TopDoctorsWidget";
import AppointmentSection from "@/components/AppointmentSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#6E6E6E]">
      <Header />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <LogosSection />
      <ReviewsSection />
      <TopDoctorsWidget />
      <AppointmentSection />
    </main>
  );
}

