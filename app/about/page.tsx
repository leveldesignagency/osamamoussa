"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSentenceReveal } from "@/hooks/useSentenceReveal";

export default function AboutPage() {
  // Set page metadata
  useEffect(() => {
    document.title = "About Mr Osama Moussa";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mr Osama Moussa is a distinguished Consultant General Surgeon specialising in Upper GI and General Surgery at West Hertfordshire Hospitals NHS Trust. Extensive training at Imperial College London, Royal Marsden, UCL, and Chelsea & Westminster hospitals. Expert in open, laparoscopic, and robotic Upper GI surgery.');
    }
  }, []);

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  // Sentence-by-sentence reveal for paragraphs
  const firstParaText = "Mr. Moussa is a distinguished Consultant General Surgeon specialising in Upper GI and General Surgery at West Hertfordshire Hospitals NHS Trust. His extensive training includes rotations through hospitals in Liverpool, Newcastle, Scotland, and Northwest London, culminating in his CCT.";
  const { ref: firstParaRef, sentences: firstParaSentences, visibleSentences: firstParaVisible } = useSentenceReveal(firstParaText, 1000, 500);
  
  const secondParaText = "Mr. Moussa has worked at prestigious institutions like Imperial College London, the Royal Marsden, University College London, and Chelsea & Westminster hospitals, gaining extensive experience in open, laparoscopic, and robotic Upper GI surgery, including benign, bariatric, and oncological procedures.";
  const { ref: secondParaRef, sentences: secondParaSentences, visibleSentences: secondParaVisible } = useSentenceReveal(secondParaText, 1000, 500);
  
  const thirdParaText = "He holds a Postgraduate Diploma in Minimal Access Surgery and completed a research Medical Doctorate at Imperial College London in 2017. He also completed a Royal College of Surgeons-approved laparoscopic, anti-reflux, and bariatric surgery fellowship.";
  const { ref: thirdParaRef, sentences: thirdParaSentences, visibleSentences: thirdParaVisible } = useSentenceReveal(thirdParaText, 1000, 500);
  
  const fourthParaText = "Mr. Moussa is actively involved in research, focusing on metabolic health in obesity. His work has been published in high-impact journals. His dedication to surgical excellence is pivotal in advancing benign Upper GI Surgery.";
  const { ref: fourthParaRef, sentences: fourthParaSentences, visibleSentences: fourthParaVisible } = useSentenceReveal(fourthParaText, 1000, 500);
  
  // Desktop paragraphs - separate hooks
  const { ref: desktopFirstParaRef, sentences: desktopFirstParaSentences, visibleSentences: desktopFirstParaVisible } = useSentenceReveal(firstParaText, 1000, 500);
  const { ref: desktopSecondParaRef, sentences: desktopSecondParaSentences, visibleSentences: desktopSecondParaVisible } = useSentenceReveal(secondParaText, 1000, 500);
  const { ref: desktopThirdParaRef, sentences: desktopThirdParaSentences, visibleSentences: desktopThirdParaVisible } = useSentenceReveal(thirdParaText, 1000, 500);
  const { ref: desktopFourthParaRef, sentences: desktopFourthParaSentences, visibleSentences: desktopFourthParaVisible } = useSentenceReveal(fourthParaText, 1000, 500);
  
  const { ref: accreditationsRef, isVisible: accreditationsVisible } = useScrollAnimation();
  const { ref: accreditationsImageRef, isVisible: accreditationsImageVisible } = useScrollAnimation();
  const { ref: accreditationsListRef, isVisible: accreditationsListVisible } = useScrollAnimation();

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      <Header backgroundColor="grey" textColor="black" />

      {/* About Section */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Container to clip the growing image - full height from top */}
        <div className="absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          {/* Mobile Image - full height from top */}
          <div className="absolute image-slide sm:hidden" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <Image
              src="/osama about.png"
              alt="About Osama Moussa"
              fill
              className="object-cover about-hero-image"
              style={{ 
                objectPosition: 'center top',
                maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                opacity: 0.7
              }}
              priority
              sizes="100vw"
            />
          </div>
          {/* Desktop Image - full height from top */}
          <div className="absolute image-slide hidden sm:block" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <Image
              src="/OM6.jpg"
              alt="About Osama Moussa"
              fill
              className="object-cover about-hero-image"
              style={{ 
                objectPosition: 'center top',
                maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                opacity: 0.7
              }}
              priority
              sizes="100vw"
            />
          </div>
        </div>
        
        {/* Grey glass overlay on left - full height to match image - Hidden on mobile */}
        <div 
          className="absolute backdrop-blur-xl z-10 hidden sm:block"
          style={{
            top: 0,
            left: 0,
            bottom: 0,
            width: '60%',
            background: 'linear-gradient(to right, rgba(110, 110, 110, 0.3) 0%, rgba(110, 110, 110, 0.3) 85%, rgba(110, 110, 110, 0) 100%)',
            maskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)'
          }}
        ></div>
        
        {/* Title and Content - aligned to left margin on desktop, centered on mobile */}
        <div className="relative z-30" style={{ paddingTop: '128px', paddingBottom: '80px' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 ref={titleRef} className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-black uppercase tracking-tight mb-6 text-center lg:text-left fade-in-on-scroll ${titleVisible ? "visible" : ""}`}>
              About Osama Moussa
            </h1>
            
            {/* Mobile: First paragraph only - larger text, black, over image, medium weight, sentence reveal */}
            <div ref={firstParaRef} className="w-full space-y-4 text-2xl sm:text-base text-black font-medium leading-relaxed text-center sm:text-left mx-auto sm:mx-0 pb-8 sm:hidden" style={{ paddingBottom: '200px' }}>
              <p>
                {firstParaSentences.slice(0, firstParaVisible).map((sentence, index) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {sentence}{' '}
                  </span>
                ))}
              </p>
            </div>
            
            {/* Desktop: All paragraphs - larger text, medium weight, sentence reveal */}
            <div className="hidden sm:block w-full lg:w-1/2 space-y-6 text-xl sm:text-xl lg:text-2xl text-black font-medium leading-relaxed pr-0 lg:pr-12 xl:pr-16 2xl:pr-24 text-center lg:text-left mx-auto lg:mx-0 pb-16 sm:pb-24">
              <p ref={desktopFirstParaRef}>
                {desktopFirstParaSentences.slice(0, desktopFirstParaVisible).map((sentence, index) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {sentence}{' '}
                  </span>
                ))}
              </p>
              <p ref={desktopSecondParaRef}>
                {desktopSecondParaSentences.slice(0, desktopSecondParaVisible).map((sentence, index) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {sentence}{' '}
                  </span>
                ))}
              </p>
              <p ref={desktopThirdParaRef}>
                {desktopThirdParaSentences.slice(0, desktopThirdParaVisible).map((sentence, index) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {sentence}{' '}
                  </span>
                ))}
              </p>
              <p ref={desktopFourthParaRef}>
                {desktopFourthParaSentences.slice(0, desktopFourthParaVisible).map((sentence, index) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {sentence}{' '}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: Second paragraph section - transparent background, white text, medium weight, more gap, sentence reveal */}
      <section ref={secondParaRef} className="w-full py-20 px-4 sm:hidden bg-transparent">
        <div className="container mx-auto">
          <p className="text-2xl text-white font-medium leading-relaxed text-center">
            {secondParaSentences.slice(0, secondParaVisible).map((sentence, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {sentence}{' '}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Mobile: Third paragraph section - transparent background, white text, medium weight, more gap, sentence reveal */}
      <section ref={thirdParaRef} className="w-full py-20 px-4 sm:hidden bg-transparent">
        <div className="container mx-auto">
          <p className="text-2xl text-white font-medium leading-relaxed text-center">
            {thirdParaSentences.slice(0, thirdParaVisible).map((sentence, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {sentence}{' '}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Mobile: Fourth paragraph section - transparent background, white text, medium weight, more gap, sentence reveal */}
      <section ref={fourthParaRef} className="w-full py-20 px-4 sm:hidden bg-transparent">
        <div className="container mx-auto">
          <p className="text-2xl text-white font-medium leading-relaxed text-center">
            {fourthParaSentences.slice(0, fourthParaVisible).map((sentence, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {sentence}{' '}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Accreditations Section */}
      <section ref={accreditationsRef} className={`w-full py-16 fade-in-on-scroll ${accreditationsVisible ? "visible" : ""}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-12 uppercase text-center lg:text-left">
            Accreditations
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image - Left side, no left padding, rounded corners with shadows */}
            <div ref={accreditationsImageRef} className={`relative h-[400px] sm:h-[500px] lg:h-[800px] overflow-hidden -mx-4 sm:-mx-6 lg:-ml-8 lg:mr-0 rounded-3xl fade-in-on-scroll ${accreditationsImageVisible ? "visible" : ""}`} style={{ 
              width: 'calc(100% + 2rem)', 
              maxWidth: 'calc(100% + 2rem)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              <div className="absolute inset-0 image-slide overflow-hidden rounded-3xl">
                <Image
                  src="/OM7.jpg"
                  alt="Osama Moussa Accreditations"
                  fill
                  className="object-cover rounded-3xl about-accred-image"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
              {/* Inner shadow overlay - above the image */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ 
                boxShadow: 'inset 0 4px 12px 0 rgba(0, 0, 0, 0.25), inset 0 0 40px 0 rgba(0, 0, 0, 0.15)',
                zIndex: 10
              }}></div>
            </div>

            {/* Accreditations List - Right side, centered on mobile */}
            <div ref={accreditationsListRef} className={`space-y-8 text-white text-center lg:text-left fade-in-on-scroll ${accreditationsListVisible ? "visible" : ""}`}>
              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Postgraduate
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  Fellow of the Royal College of Surgeons of England (F.R.C.S. Gen)
                  <br />
                  Diploma in Minimal Access Surgery (Northeast Laparoscopic Centre)
                  <br />
                  Medical Doctorate (By Research) -Imperial College London
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Qualifications
                </h3>
                <p className="text-lg text-white leading-relaxed mb-2">
                  Bachelor of Sciences (Honours)
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Bachelor of Medicine and Bachelor of Surgery M.B.B.S.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Registration
                </h3>
                <p className="text-lg text-white leading-relaxed mb-2">
                  The General Medical Council (6043402)
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Royal College of Surgeons
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Speciality
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  Laparoscopic Surgery, Robotic Surgery, Benign Upper GI Surgery,
                  Anti-reflux surgery, General Surgery
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Professional Memberships
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  Fellow of the Royal College of Surgeons of England
                  <br />
                  British Medical Association (BMA)
                  <br />
                  Association of Upper GI Surgeons (AUGIS)
                  <br />
                  British Obesity and Metabolic Surgery Society (BOMSS)
                  <br />
                  Federation of Surgical Obesity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Appointment Section */}
      <AppointmentSection />
    </main>
  );
}

