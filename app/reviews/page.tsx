import type { Metadata } from "next";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import ReviewsPageContent from "./ReviewsPageContent";

export const metadata: Metadata = {
  title: "Patient Reviews & Resources",
  description: "Read patient reviews and testimonials for Mr Osama Moussa. Access helpful resources and links for patients seeking Upper GI surgical care in London and Hertfordshire.",
  keywords: [
    "Osama Moussa reviews",
    "Patient testimonials",
    "Surgeon reviews London",
    "Upper GI surgeon reviews",
    "Patient feedback",
    "Surgical patient reviews",
    "IWantGreatCare reviews",
    "TopDoctors reviews",
    "NHS patient resources",
    "Surgical care resources"
  ],
  openGraph: {
    title: "Patient Reviews & Resources | Mr Osama Moussa",
    description: "Read patient reviews and testimonials. Access helpful resources for Upper GI surgical care.",
    url: "https://www.osamamoussa.co.uk/reviews",
    type: "website",
  },
  alternates: {
    canonical: "https://www.osamamoussa.co.uk/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gradient-grey relative">
      {/* Smooth gradient overlay at top for header area */}
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none"></div>
      <Header backgroundColor="grey" />
      <ReviewsPageContent />
      <AppointmentSection />
    </main>
  );
}

