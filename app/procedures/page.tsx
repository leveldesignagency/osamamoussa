"use client";

import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { procedures } from "./procedures-data";

export default function ProceduresPage() {
  return (
    <main className="min-h-screen bg-gradient-grey relative">
      {/* Smooth gradient overlay at top for header area */}
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none"></div>
      <Header backgroundColor="grey" />
      
      {/* Page Title */}
      <PageTitleSection />

      {/* Introduction Text */}
      <IntroductionSection />

      {/* Procedures Grid */}
      <ProceduresGrid procedures={procedures} />

      {/* Global Appointment Section */}
      <AppointmentSection />
    </main>
  );
}

function PageTitleSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="w-full pt-32 pb-2 sm:pb-12">
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 fade-in-on-scroll text-center sm:text-left ${isVisible ? "visible" : ""}`}
      >
        <h1 className="page-title page-title-main mx-auto font-bold leading-tight text-white sm:mx-0">
          Procedures
        </h1>
      </div>
    </section>
  );
}

function IntroductionSection() {
  const { ref: firstParaRef, isVisible: firstParaVisible } = useScrollAnimation();
  const { ref: secondParaRef, isVisible: secondParaVisible } = useScrollAnimation();
  const { ref: desktopRef, isVisible: desktopVisible } = useScrollAnimation();
  
  return (
    <section className="w-full py-16">
      {/* Mobile: First paragraph - ~10px under title */}
      <div 
        ref={firstParaRef}
        className={`w-full pt-0 pb-12 px-4 sm:hidden bg-transparent fade-in-on-scroll ${firstParaVisible ? "visible" : ""}`}
      >
        <div className="container mx-auto paragraph-block paragraph-block-full">
          <p className="text-2xl text-white font-medium leading-relaxed text-center">
            Osama delivers Laparoscopic and Robotic surgical services at West
            Hertfordshire NHS Teaching Trust. He is trained in various benign
            Upper GI and General surgical procedures. Minimally invasive surgery
            took a significant step forward with the introduction of robotically
            assisted procedures. Osama is trained in not one but two robotic
            modules (Versius and Intuitive). In the hands of Osama&apos;s skill set,
            both robotic and laparoscopic surgery is very safe. Both have
            significant benefits when compared to open surgery, including a
            shorter hospital stay, shorter recovery as well as a lower risk of
            incisional hernias, infection, blood loss and pain.
          </p>
        </div>
      </div>
      
      {/* Mobile: Second paragraph - styled like about page */}
      <div 
        ref={secondParaRef}
        className={`w-full py-20 px-4 sm:hidden bg-transparent fade-in-on-scroll ${secondParaVisible ? "visible" : ""}`}
      >
        <div className="container mx-auto paragraph-block paragraph-block-full">
          <p className="text-2xl text-white font-medium leading-relaxed text-center">
            His special interest is benign oesophagogastric surgery, which
            includes managing acid reflux disease through laparoscopic hiatus
            hernia repair, fundoplication, paraesophageal hernia repair, and
            achalasia cardia. He has trained in advanced oesophago-gastric units
            around Northwest London and has extensive exposure to various
            procedures. He performs various general surgical procedures such as
            gallbladder surgery and inguinal hernia repairs and incisional
            hernias. He also performs diagnostic endoscopy.
          </p>
        </div>
      </div>
      
      {/* Desktop: Both paragraphs - original styling */}
      <div 
        ref={desktopRef}
        className={`hidden sm:block container mx-auto px-4 sm:px-6 lg:px-8 fade-in-on-scroll ${desktopVisible ? "visible" : ""}`}
      >
        <div className="space-y-8 text-lg sm:text-xl text-gray-200 leading-relaxed text-center lg:text-left paragraph-block paragraph-block-full">
            <p>
              Osama delivers Laparoscopic and Robotic surgical services at West
              Hertfordshire NHS Teaching Trust. He is trained in various benign
              Upper GI and General surgical procedures. Minimally invasive surgery
              took a significant step forward with the introduction of robotically
              assisted procedures. Osama is trained in not one but two robotic
              modules (Versius and Intuitive). In the hands of Osama&apos;s skill set,
              both robotic and laparoscopic surgery is very safe. Both have
              significant benefits when compared to open surgery, including a
              shorter hospital stay, shorter recovery as well as a lower risk of
              incisional hernias, infection, blood loss and pain.
            </p>
            <p>
              His special interest is benign oesophagogastric surgery, which
              includes managing acid reflux disease through laparoscopic hiatus
              hernia repair, fundoplication, paraesophageal hernia repair, and
              achalasia cardia. He has trained in advanced oesophago-gastric units
              around Northwest London and has extensive exposure to various
              procedures. He performs various general surgical procedures such as
              gallbladder surgery and inguinal hernia repairs and incisional
              hernias. He also performs diagnostic endoscopy.
            </p>
        </div>
      </div>
    </section>
  );
}

type Procedure = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageLeft: boolean;
};

function ProceduresGrid({ procedures }: { procedures: Procedure[] }) {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-14 lg:gap-y-20">
          {procedures.map((procedure, index) => (
            <ProcedureCard key={index} procedure={procedure} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcedureCard({ procedure, index }: { procedure: Procedure, index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex flex-col fade-in-on-scroll pb-4 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      {/* Image on top - clickable */}
      <Link
        href={`/procedures/${procedure.slug}`}
        className="relative w-full rounded-lg overflow-hidden aspect-[3/2] block focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <Image
          src={procedure.image}
          alt={procedure.title}
          fill
          className="object-cover rounded-lg"
          style={procedure.image === "/linx-procedure.png" ? { objectPosition: "center 30%" } : {}}
        />
        <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
          boxShadow: 'inset 0 4px 12px 0 rgba(0, 0, 0, 0.25), inset 0 0 40px 0 rgba(0, 0, 0, 0.15)',
          zIndex: 10
        }}></div>
      </Link>
      {/* Text underneath - title clickable */}
      <div className="mt-6 sm:mt-8 text-left paragraph-block text-left">
        <h2 className="page-title mb-2 font-bold leading-tight text-white sm:mb-3">
          <Link
            href={`/procedures/${procedure.slug}`}
            className="text-white hover:underline focus:outline-none focus-visible:underline"
          >
            {procedure.title}
          </Link>
        </h2>
        <p className="text-base sm:text-lg text-white leading-relaxed">
          {procedure.description}
        </p>
      </div>
    </div>
  );
}

