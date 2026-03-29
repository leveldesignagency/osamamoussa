"use client";

import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { publications } from "./publications-data";

export default function ResearchPage() {

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      {/* Smooth gradient overlay at top for header area */}
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none"></div>
      <Header backgroundColor="grey" />
      
      {/* Page Title with Links */}
      <TitleSection />

      {/* Research Description Section - extra gap below buttons, above first paragraph */}
      <section className="w-full pt-8 sm:pt-16 pb-16">
        {/* Mobile: First paragraph - ~10px under title */}
        <div className="w-full pt-0 pb-12 px-4 sm:hidden bg-transparent">
          <div className="container mx-auto paragraph-block">
            <p className="text-2xl text-white font-medium leading-relaxed text-center">
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
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="hidden sm:block space-y-4 sm:space-y-6 text-base sm:text-lg text-white leading-relaxed text-center lg:text-left paragraph-block">
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
            <div className="relative w-full h-64 sm:h-80 lg:h-[500px] rounded-lg overflow-hidden mt-6 lg:mt-0">
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
    <section className="w-full pt-32 pb-2 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 items-center sm:items-stretch">
          <div className="bg-black inline-block px-6 py-4">
            <h1 
              ref={titleRef}
              className={`page-title page-title-main font-bold text-white leading-tight fade-in-on-scroll text-center sm:text-left ${titleVisible ? "visible" : ""}`}
            >
              Research
            </h1>
          </div>
          <div 
            ref={linksRef}
            className={`flex flex-row gap-3 sm:gap-4 fade-in-on-scroll items-center justify-center sm:justify-end ${linksVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <Link
              href="https://www.researchgate.net/profile/Osama-Moussa-7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-0 flex-1 items-center justify-center border-2 border-white bg-white/10 px-7 py-2.5 text-center text-sm font-medium text-white backdrop-blur-sm transition-colors duration-200 button-swipe text-white sm:w-fit sm:flex-none md:px-8 md:text-base"
            >
              Researchgate
            </Link>
            <Link
              href="https://scholargps.com/scholars/40596147119067/osama-moussa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-0 flex-1 items-center justify-center border-2 border-white bg-white/10 px-7 py-2.5 text-center text-sm font-medium text-white backdrop-blur-sm transition-colors duration-200 button-swipe text-white sm:w-fit sm:flex-none md:px-8 md:text-base"
            >
              Scholargps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type PublicationItemProps = {
  pub: { title: string; slug: string; url: string };
  index: number;
};

function PublicationItem({ pub, index }: PublicationItemProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pb-4 sm:pb-8 border-b border-white/20 last:border-0 hover:bg-white/5 transition-colors duration-200 rounded-lg px-4 sm:px-6 py-3 sm:py-4 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h2 className="page-title font-bold text-white text-center lg:text-left leading-tight normal-case">
        {pub.title}
      </h2>
      <div className="flex flex-wrap justify-center lg:justify-end gap-3">
        <Link
          href={`/research/publications/${pub.slug}`}
          className="inline-block px-6 py-3 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium transition-colors duration-200 text-center button-swipe text-white"
        >
          View Publication
        </Link>
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium transition-colors duration-200 text-center button-swipe text-white"
        >
          Visit
        </a>
      </div>
    </div>
  );
}

function MorePublicationsSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="w-full bg-white pt-16 pb-8 sm:py-16 min-h-0">
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-3xl text-center sm:text-left paragraph-block">
          <h2 className="page-title font-bold text-gray-900 mb-6 leading-tight">
            More Publications
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you are interested in viewing many more of Osama Moussa&apos;s
            publications, please download this PDF which titles all of his
            publications and contributions over the years.
          </p>
          <Link
            href="/ac3c0f_d8b35d56a8244ff7a4114e8c2242f65d.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-swipe button-swipe-black inline-flex items-center justify-center border-2 border-black bg-transparent px-7 py-2.5 text-sm font-medium text-black transition-all duration-300 md:px-8 md:text-base"
          >
            Download
          </Link>
        </div>
      </div>
    </section>
  );
}

