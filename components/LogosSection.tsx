"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ACCREDITATION_LINKS = [
  { url: "https://www.rcseng.ac.uk/", name: "Royal College of Surgeons of England" },
  { url: "https://www.bma.org.uk/", name: "British Medical Association" },
  { url: "https://bomss.org/", name: "BOMSS" },
  { url: "https://www.augis.org/", name: "AUGIS" },
  { url: "https://www.ifso.com/", name: "IFSO" },
];

const LOGO_SOURCES = [
  "/VECTORS-01.png",
  "/VECTORS-02.png",
  "/VECTORS-03.png",
  "/VECTORS-04.png",
  "/VECTORS-05.png",
];

export default function LogosSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          {LOGO_SOURCES.map((logo, index) => (
            <a
              key={index}
              href={ACCREDITATION_LINKS[index].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-opacity hover:opacity-80"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
              aria-label={ACCREDITATION_LINKS[index].name}
            >
              <Image
                src={logo}
                alt={ACCREDITATION_LINKS[index].name}
                width={250}
                height={130}
                className="h-32 sm:h-36 lg:h-40 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

