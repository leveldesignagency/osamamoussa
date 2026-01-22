"use client";

import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ResearchPage() {
  const publications = [
    {
      title:
        "Effect of perioperative FLOT versus ECF/ECX on short-term outcomes after surgery for resectable oesophagogastric adenocarcinoma: propensity score-matched study",
      url: "https://doi.org/10.1093/bjsopen/zrac003",
    },
    {
      title:
        "Long-term incidence and outcomes of obesity-related peripheral vascular disease after bariatric surgery",
      url: "https://doi.org/10.1007/s00423-020-02066-9",
    },
    {
      title:
        "Obstructive Sleep Apnea in Obese Patients: a UK Population Analysis",
      url: "https://doi.org/10.1007/s11695-020-05196-7",
    },
    {
      title:
        "Impact of COVID-19 on Obesity Management Services in the United Kingdom (The COMS-UK study)",
      url: "https://doi.org/10.1007/s11695-020-05005-1",
    },
    {
      title:
        "Effect of bariatric surgery long-term cardiovascular outcomes: a nationwide nested cohort study",
      url: "https://doi.org/10.1093/eurheartj/ehaa069",
    },
    {
      title:
        "Atrial fibrillation and obesity: Long-term incidence and outcomes after bariatric surgery. Eur J Prev Cardiol",
      url: "https://doi.org/10.1177/2047487320904515",
    },
    {
      title:
        "Long-term Impact of Bariatric Surgery on Venous Thromboembolic Risk: A Matched Cohort Study. Ann Surg",
      url: "https://doi.org/10.1097/SLA.0000000000003750",
    },
    {
      title:
        "Effect of body mass index on depression in a UK cohort of 363037 obese patients: A longitudinal analysis of transition",
      url: "https://doi.org/10.1111/cob.12305",
    },
    {
      title:
        "Fate of the metabolically healthy obese-is this term a misnomer? A study from the Clinical Practice Research Datalink",
      url: "https://doi.org/10.1038/s41366-018-0096-z",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      {/* Smooth gradient overlay at top for header area */}
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none"></div>
      <Header backgroundColor="grey" />
      
      {/* Page Title with Links */}
      <TitleSection />

      {/* Research Description Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-white leading-relaxed">
              <p>
                Beyond his clinical endeavours, Mr Moussa is deeply invested in
                pioneering research, particularly in metabolic health and obesity. His
                scholarly pursuits have culminated in the publication of his work in
                very high-impact journals, contributing significantly to the
                advancement of medical knowledge in his field. Throughout his training,
                he was proactive in endorsing his evidence-based approach to surgery
                and continued to nurture his research skills. He finally undertook a
                statistically-based postgraduate degree and he pushed his boundaries to
                publish in very high-impact journals. Osama&apos;s work has also been
                referenced and used in the most recent NICE guidelines change for better
                Obesity management in the UK.
              </p>
              <p>
                Osama founded and led the Imperial Obesity Epidemiology Syndicate
                (I&apos;OBES), a research collaboration with various specialities that used
                extensive data analysis on long-term obesity outcomes. He has also
                supervised several BSc projects successfully to more publications.
              </p>
              <p className="text-xl font-sans font-bold text-white">
                This is a list of a few of his favourite research projects he has
                completed;
              </p>
            </div>
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/OM10.jpg"
                alt="Osama Moussa Research"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <PublicationItem key={index} pub={pub} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* More Publications Section */}
      <MorePublicationsSection />

      {/* Global Appointment Section */}
      <AppointmentSection />
    </main>
  );
}

function TitleSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation();
  
  return (
    <section className="w-full pt-32 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <h1 
            ref={titleRef}
            className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-tight fade-in-on-scroll ${titleVisible ? "visible" : ""}`}
          >
            Research
          </h1>
          <div 
            ref={linksRef}
            className={`flex flex-col sm:flex-row gap-4 fade-in-on-scroll ${linksVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <Link
              href="https://www.researchgate.net/profile/Osama-Moussa-7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium transition-colors duration-200 text-center button-swipe text-white"
            >
              Researchgate
            </Link>
            <Link
              href="https://scholargps.com/scholars/40596147119067/osama-moussa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium transition-colors duration-200 text-center button-swipe text-white"
            >
              Scholargps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type Publication = {
  title: string;
  url: string;
};

function PublicationItem({ pub, index }: { pub: Publication, index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pb-8 border-b border-white/20 last:border-0 hover:bg-white/5 transition-colors duration-200 rounded-lg p-4 -mx-4 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
        {pub.title}
      </h2>
      <div className="flex justify-start lg:justify-end">
        <Link
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium transition-colors duration-200 text-center button-swipe text-white"
        >
          View Publication
        </Link>
      </div>
    </div>
  );
}

function MorePublicationsSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="w-full bg-white py-16">
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-sans font-bold text-gray-900 mb-6">
            More Publications
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you are interested in viewing many more of Osama Moussa&apos;s
            publications, please download this PDF which titles all of his
            publications and contributions over the years.
          </p>
          <Link
            href="https://www.osamamoussa.co.uk/_files/ugd/ac3c0f_d8b35d56a8244ff7a4114e8c2242f65d.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-[#6E6E6E] bg-[#6E6E6E] text-white font-medium transition-colors duration-200 button-swipe text-white"
          >
            Download
          </Link>
        </div>
      </div>
    </section>
  );
}

