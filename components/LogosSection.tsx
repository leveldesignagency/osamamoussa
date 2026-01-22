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
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: isVisible ? 1 : 0 }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={250}
                height={130}
                className="h-28 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

