"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function LogosSection() {
  const { ref, isVisible } = useScrollAnimation();
  const logos = [
    "/VECTORS-01.png",
    "/VECTORS-02.png",
    "/VECTORS-03.png",
    "/VECTORS-04.png",
    "/VECTORS-05.png",
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Feathered top fade - blends with grey gradient section above */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 100%)",
        }}
      ></div>
      <div className="container mx-auto max-w-7xl relative z-0">
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={250}
                height={130}
                className="h-32 sm:h-36 lg:h-40 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

