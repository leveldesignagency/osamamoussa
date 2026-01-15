"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#6E6E6E]">
      
      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      >
        {/* Main Heading - Serif font, larger, elegant */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight font-light">
          A steady hand, a sharp mind, a compassionate heart: Your health in safe and skilled hands
        </h1>
        
        {/* Descriptive Text - Sans-serif, smaller */}
        <p className="text-base sm:text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Osama's experience nurtured a vast exposure in open, laparoscopic and robotic Upper GI surgery ranging from benign, bariatric to oncological.
        </p>
        
        {/* Learn More Button - Thin white border, light grey fill, white text */}
        <Link
          href="/procedures"
          className="inline-block px-10 py-4 border border-white bg-[#9a9a9a] text-white font-normal hover:bg-[#b0b0b0] transition-colors duration-200 shimmer-hover"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

