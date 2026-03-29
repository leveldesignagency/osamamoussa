"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackContact, trackCTAClick } from "@/lib/contact-analytics";

export default function Hero() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    // Prevent duplicate script loading
    if (scriptsLoaded.current) return;

    // Check if Doctify script already exists
    const existingDoctify = document.querySelector(
      'script[src*="doctify-widget-autoresize-plugin"]'
    );
    if (!existingDoctify) {
      const doctifyScript = document.createElement("script");
      doctifyScript.type = "text/javascript";
      doctifyScript.src =
        "https://www.doctify.com/wv2/doctify-widget-autoresize-plugin.js?tenantId=athena-uk&widgetName=average-rating-widget&containerId=09in4nm9";
      doctifyScript.async = true;
      doctifyScript.id = "doctify-widget-script";
      document.body.appendChild(doctifyScript);
    }


    scriptsLoaded.current = true;
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" style={{ overflow: 'hidden' }}>
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile Image */}
        <Image
          src="/OsamaHeroMobile.png"
          alt="Mr Osama Moussa – Consultant General Surgeon, Upper GI and Robotic Surgery, London and Hertfordshire"
          fill
          className="object-cover hero-breathe hero-image-mobile sm:hidden"
          priority
          quality={90}
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            objectPosition: 'center center',
          }}
          sizes="100vw"
        />
        {/* Desktop Image */}
        <Image
          src="/1-2.jpg"
          alt="Mr Osama Moussa – Consultant General Surgeon, Upper GI and Robotic Surgery, London and Hertfordshire"
          fill
          className="object-cover hero-breathe hidden sm:block"
          priority
          quality={90}
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            objectPosition: '50% center',
          }}
          sizes="100vw"
        />
      </div>
      {/* Subtle vignette overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.2) 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
        }}
      ></div>
      
      {/* Hero Content - left align */}
      <div className="relative z-10 h-full flex flex-col justify-end sm:justify-center items-center sm:items-start pb-32 sm:pb-0 sm:pt-40">
        <div className="container mx-auto pl-2 sm:pl-2 lg:pl-3 pr-4 sm:pr-6 lg:pr-8 w-full">
          <h1 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-white sm:text-black mb-4 max-w-3xl animate-fade-in-up text-center sm:text-left tracking-wide uppercase" style={{ fontFamily: '"ITC Avant Garde Gothic", "Century Gothic", sans-serif', fontWeight: 700, lineHeight: 1.2 }}>
            Consultant Upper GI
            <br />
            & Robotic Surgeon
          </h1>
          <p
            className="text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold text-white sm:text-black/90 mb-6 max-w-2xl animate-fade-in-up text-center sm:text-left tracking-wide uppercase opacity-95"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1.35 }}
          >
            London &amp; Hertfordshire
          </p>
          <p
            className="text-xs sm:text-sm md:text-base text-white/95 sm:text-black/80 mb-8 max-w-2xl animate-fade-in-up text-center sm:text-left leading-snug"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Hernia repair · Gallbladder &amp; gallstones · Acid reflux (GORD) · Minimally invasive laparoscopic surgery
          </p>
          
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up justify-center sm:justify-start mb-8 items-stretch" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
                {/* Mobile - Book Now + Call Now */}
                <Link
                  href="/procedures/contact"
                  onClick={() => trackCTAClick("Book Now", "hero")}
                  className="sm:hidden inline-flex items-center justify-center px-6 py-4 text-base border-2 border-white bg-black text-white font-medium transition-all duration-300 hover:bg-white hover:text-black active:bg-white active:text-black rounded-full"
                >
                  Book Now
                </Link>
                <a
                  href="tel:07352167642"
                  onClick={() => trackContact("call", "mobile", "hero")}
                  className="sm:hidden inline-flex items-center justify-center px-6 py-4 text-base border-2 border-white bg-black text-white font-medium transition-all duration-300 hover:bg-white hover:text-black active:bg-white active:text-black rounded-full"
                >
                  Call Now
                </a>
                {/* Desktop - Book Now + Call Now (expands on hover to show number) */}
                <Link
                  href="/procedures/contact"
                  onClick={() => trackCTAClick("Book Now", "hero")}
                  className="hidden sm:inline-flex items-center px-10 py-4 text-lg border-2 border-black text-black font-medium transition-all duration-300 button-swipe button-swipe-black"
                >
                  Book Now
                </Link>
                <a
                  href="tel:07352167642"
                  onClick={() => trackContact("call", "desktop", "hero")}
                  className="hidden sm:inline-flex items-center py-4 px-10 overflow-hidden border-2 border-black text-black font-medium transition-all duration-300 button-swipe button-swipe-black group/call text-lg"
                >
                  <span className="whitespace-nowrap flex-shrink-0">Call Now</span>
                  <span className="inline-flex items-center overflow-hidden max-w-0 group-hover/call:max-w-[160px] transition-[max-width] duration-300 ease-out flex-shrink-0">
                    <span className="min-w-px w-px h-5 bg-black/50 group-hover/call:bg-white flex-shrink-0 mx-2 transition-colors duration-300" aria-hidden />
                    <span className="whitespace-nowrap pl-0 ml-0">07352167642</span>
                  </span>
                </a>
              </div>

            {/* Doctify Widget - Desktop only, under buttons; left padding so badge sits between Book Now and Call Now */}
            <div className="hidden sm:block mt-6 pl-[6.5rem]">
            <iframe
              id="09in4nm9"
              className="doctify-widget"
              src="https://www.doctify.com/wv2/average-rating-widget?containerId=09in4nm9&language=en&profileType=specialist&slugs=osama-moussa&tenantId=athena-uk&theme=darkNavy&widgetName=average-rating-widget"
              width="200"
              height="200"
              frameBorder="0"
              scrolling="no"
              name="average-rating-widget"
              title="Doctify Rating Widget"
              style={{
                display: "block",
                border: "none",
                width: "200px",
                maxWidth: "200px",
                minWidth: "200px",
                height: "200px",
                maxHeight: "200px",
                minHeight: "200px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Signature - Desktop only, bottom right, bigger and white */}
      <div className="absolute bottom-24 right-16 z-20 hidden sm:block" style={{ pointerEvents: "none" }}>
        <div className="signature-container">
          <Image
            src="/Signatures-01.svg"
            alt="Osama Moussa Signature"
            width={500}
            height={220}
            className="signature-image signature-white"
            priority={false}
            style={{ width: 'auto', height: '220px' }}
          />
        </div>
      </div>

    </section>
  );
}

// Mobile Widgets Section - Separate section below hero
export function MobileWidgetsSection() {
  return (
    <section className="w-full bg-transparent py-8 sm:hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 items-center justify-center">
          {/* Doctify Widget - Mobile */}
          <div 
            style={{ 
              width: "200px", 
              flexShrink: 0, 
              display: "flex", 
              alignItems: "flex-start", 
              justifyContent: "center", 
              overflow: "hidden"
            }}
          >
            <iframe
              id="09in4nm9-mobile"
              className="doctify-widget"
              src="https://www.doctify.com/wv2/average-rating-widget?containerId=09in4nm9&language=en&profileType=specialist&slugs=osama-moussa&tenantId=athena-uk&theme=darkNavy&widgetName=average-rating-widget"
              width="200"
              height="200"
              frameBorder="0"
              scrolling="no"
              name="average-rating-widget-mobile"
              title="Doctify Rating Widget"
              style={{ 
                display: "block", 
                border: "none", 
                width: "200px", 
                maxWidth: "200px", 
                minWidth: "200px",
                height: "200px",
                maxHeight: "200px",
                minHeight: "200px",
                verticalAlign: "top", 
                margin: "0 auto"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

