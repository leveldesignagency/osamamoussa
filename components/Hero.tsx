"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileButton from "./MobileButton";

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
          alt="Osama Moussa"
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
          alt="Osama Moussa"
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
      
      {/* Hero Content - left align matches header logo (pl-2 sm:pl-2 lg:pl-3) */}
      <div className="relative z-10 h-full flex flex-col justify-end sm:justify-center items-center sm:items-start pb-32 sm:pb-0 sm:pt-40">
        <div className="container mx-auto pl-2 sm:pl-2 lg:pl-3 pr-4 sm:pr-6 lg:pr-8 w-full">
          <h1 className="text-[27px] sm:text-[33px] md:text-[45px] lg:text-[57px] font-bold text-white sm:text-black mb-8 max-w-3xl animate-fade-in-up text-center sm:text-left tracking-wide" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, lineHeight: 1 }}>
            A Leader in Upper GI
            <br />
            & Robotic Surgery
          </h1>
          
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4 animate-fade-in-up justify-center sm:justify-start mb-8 items-stretch" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
                {/* Mobile - Book Now + Call Now */}
                <MobileButton href="/procedures/contact" className="sm:hidden">
                  Book Now
                </MobileButton>
                <a
                  href="tel:07352167642"
                  className="sm:hidden inline-flex items-center justify-center px-4 py-3 border-2 border-white bg-black text-white font-medium transition-all duration-300 text-sm sm:text-base hover:bg-white hover:text-black active:bg-white active:text-black rounded-full"
                  style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
                >
                  Call Now
                </a>
                {/* Desktop - Book Now + Call Now (expands on hover to show number) */}
                <Link
                  href="/procedures/contact"
                  className="hidden sm:inline-flex items-center px-10 py-4 text-lg border-2 border-black text-black font-medium transition-all duration-300 button-swipe button-swipe-black"
                >
                  Book Now
                </Link>
                <a
                  href="tel:07352167642"
                  className="hidden sm:inline-flex items-center py-4 px-10 overflow-hidden border-2 border-black text-black font-medium transition-all duration-300 button-swipe button-swipe-black group/call text-lg"
                >
                  <span className="whitespace-nowrap flex-shrink-0">Call Now</span>
                  <span className="inline-flex items-center overflow-hidden max-w-0 group-hover/call:max-w-[160px] transition-[max-width] duration-300 ease-out flex-shrink-0">
                    <span className="min-w-px w-px h-5 bg-black/50 group-hover/call:bg-white flex-shrink-0 mx-2 transition-colors duration-300" aria-hidden />
                    <span className="whitespace-nowrap pl-0 ml-0">07352167642</span>
                  </span>
                </a>
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

      {/* Widgets Overlay at Bottom - Desktop only (down 20px, left 20px from previous position) */}
      <div className="absolute bottom-[12px] left-0 z-20 w-full hidden sm:block" style={{ pointerEvents: "none" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-row gap-2 items-center justify-start" style={{ position: "relative", marginLeft: '-20px' }}>
            {/* Doctify Widget - Desktop */}
            <div 
              style={{ 
                width: "200px", 
                flexShrink: 0, 
                display: "flex", 
                alignItems: "flex-start", 
                justifyContent: "center", 
                overflow: "hidden",
                position: "relative",
                pointerEvents: "auto"
              }}
            >
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
                  verticalAlign: "top", 
                  margin: "0 auto"
                }}
              />
            </div>
          </div>
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

