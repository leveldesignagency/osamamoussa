"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [headingVisible, setHeadingVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Fade in heading first
      setTimeout(() => setHeadingVisible(true), 200);
      // Then description
      setTimeout(() => setDescriptionVisible(true), 600);
      // Then button
      setTimeout(() => setButtonVisible(true), 1000);
    }
  }, [isVisible]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      
      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Main Heading - Serif font, larger, elegant */}
        <h1 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-wide transition-all duration-1000 ease-out ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          A steady hand, a sharp mind, a compassionate heart: Your health in safe and skilled hands
        </h1>
        
        {/* Descriptive Text - Sans-serif, smaller */}
        <p 
          className={`text-base sm:text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 ease-out ${
            descriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Osama&apos;s experience nurtured a vast exposure in open, laparoscopic and robotic Upper GI surgery ranging from benign, bariatric to oncological.
        </p>
        
        {/* Learn More Button - Thin white border, light grey fill, white text */}
        <Link
          href="/procedures"
          className={`inline-block px-10 py-4 border border-white bg-[#9a9a9a] text-white font-normal transition-all duration-1000 ease-out button-swipe text-white relative ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

