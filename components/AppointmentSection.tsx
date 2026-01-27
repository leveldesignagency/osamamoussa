"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentSection() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    if (scriptsLoaded.current) return;


    scriptsLoaded.current = true;
  }, []);
  const insuranceLogos = [
    "/aviva.png",
    "/aetna.png",
    "/axa health.jpg",
    "/bupda.jpg",
    "/Alliance_Healthcare_logo.svg.png",
    "/cigna.jpg",
    "/vitality.png",
    "/healix.png",
    "/wpa.png",
    "/allianz.png",
  ];

  return (
    <>
      {/* Book Appointment Section */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        {/* Image Container - movable for positioning */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute image-grow-shrink" style={{ top: '-50px', left: 0, right: 0, bottom: '-50px' }}>
            <Image
              src="/book_now_global.png"
              alt="Book Your Appointment"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center', width: 'auto' }}
              priority
              sizes="100vw"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center sm:justify-end">
            <div className="max-w-md text-center sm:text-right">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-white mb-4 sm:mb-6">
                Book Your<br />
                Appointment<br />
                Today!
              </p>
              <Link
                href="/procedures/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium hover:border-black transition-all duration-300 text-center button-swipe text-white text-sm sm:text-base"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Logos - Horizontal Auto-Scrolling Marquee */}
      <section className="w-full bg-white py-8 overflow-hidden">
        <div className="relative">
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set of logos */}
              {insuranceLogos.map((logo, index) => {
                const isAxa = logo === "/axa health.jpg";
                return (
                  <div 
                    key={`logo-1-${index}`}
                    className="marquee-item"
                  >
                    <Image
                      src={logo}
                      alt={`Insurance ${index + 1}`}
                      width={isAxa ? 150 : 100}
                      height={isAxa ? 75 : 50}
                      className="object-contain"
                      style={{ 
                        maxWidth: isAxa ? '150px' : '100px', 
                        maxHeight: isAxa ? '75px' : '50px', 
                        width: 'auto', 
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {insuranceLogos.map((logo, index) => {
                const isAxa = logo === "/axa health.jpg";
                return (
                  <div 
                    key={`logo-2-${index}`}
                    className="marquee-item"
                  >
                    <Image
                      src={logo}
                      alt={`Insurance ${index + 1}`}
                      width={isAxa ? 150 : 100}
                      height={isAxa ? 75 : 50}
                      className="object-contain"
                      style={{ 
                        maxWidth: isAxa ? '150px' : '100px', 
                        maxHeight: isAxa ? '75px' : '50px', 
                        width: 'auto', 
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

