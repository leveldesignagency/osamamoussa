"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackContact, trackCTAClick } from "@/lib/contact-analytics";
import HeroKeyTreatmentsStrip from "@/components/HeroKeyTreatmentsStrip";

export default function Hero() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    if (scriptsLoaded.current) return;

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
    <section className="relative flex h-auto min-h-[130dvh] w-full flex-col overflow-x-hidden sm:h-screen sm:min-h-screen sm:overflow-hidden">
      <div className="absolute inset-0 overflow-hidden animate-fade-in">
        <Image
          src="/OsamaHeroMobile.png"
          alt="Mr Osama Moussa – Consultant Upper GI and Robotic Surgeon, London and Hertfordshire"
          fill
          className="object-cover hero-breathe hero-image-mobile sm:hidden"
          priority
          quality={90}
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          }}
          sizes="100vw"
        />
        <Image
          src="/1-2.jpg"
          alt="Mr Osama Moussa – Consultant Upper GI and Robotic Surgeon, London and Hertfordshire"
          fill
          className="object-cover hero-breathe hidden sm:block"
          priority
          quality={90}
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            objectPosition: "50% center",
          }}
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 animate-fade-in"
        style={{
          animationDelay: "0.15s",
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.2) 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      />

      {/* Mobile: flex spacer pushes copy + key treatments below the portrait; sm+: bottom-anchored as before */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col sm:justify-end">
        <div
          className="min-h-[44dvh] flex-1 sm:hidden"
          aria-hidden
        />
        <div className="container mx-auto w-full px-4 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pt-[max(4rem,env(safe-area-inset-top,0px))] sm:px-2 sm:pb-3 sm:pt-16 lg:pl-3 lg:pr-3">
          <div className="flex w-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <h1
              className="animate-fade-in-up max-w-3xl text-[26px] font-bold tracking-tight text-white sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] sm:text-black"
              style={{
                fontFamily: '"ITC Avant Garde Gothic", "Century Gothic", sans-serif',
                fontWeight: 700,
                lineHeight: 1.15,
                animationDelay: "0s",
              }}
            >
              Consultant Upper GI
              <br />
              &amp; Robotic Surgeon
            </h1>
            <p
              className="animate-fade-in-up max-w-2xl text-base font-semibold tracking-tight text-white opacity-95 sm:text-lg sm:text-black/90 md:text-xl lg:text-2xl"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                lineHeight: 1.35,
                animationDelay: "0.12s",
              }}
            >
              London &amp; Hertfordshire
            </p>
            <p
              className="animate-fade-in-up max-w-2xl text-xs leading-snug text-white/95 sm:text-sm sm:text-black/80 md:text-base"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                animationDelay: "0.24s",
              }}
            >
              Specialising in hernia repair, gallbladder and gallstone surgery,
              <br />
              acid reflux (GORD), and minimally invasive laparoscopic surgery.
            </p>

            <div
              className="animate-fade-in-up flex flex-row flex-wrap items-stretch justify-center gap-3 sm:justify-start sm:gap-4"
              style={{ animationDelay: "0.36s" }}
            >
              <Link
                href="/procedures/contact"
                onClick={() => trackCTAClick("Book Now", "hero")}
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black active:bg-white active:text-black sm:hidden"
              >
                Book Now
              </Link>
              <a
                href="tel:07352167642"
                onClick={() => trackContact("call", "mobile", "hero")}
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black active:bg-white active:text-black sm:hidden"
              >
                Call Now
              </a>
              <Link
                href="/procedures/contact"
                onClick={() => trackCTAClick("Book Now", "hero")}
                className="button-swipe button-swipe-black hidden border-2 border-black px-7 py-2.5 text-sm font-medium text-black transition-all duration-300 sm:inline-flex sm:items-center md:px-8 md:text-base"
              >
                Book Now
              </Link>
              <a
                href="tel:07352167642"
                onClick={() => trackContact("call", "desktop", "hero")}
                className="group/call button-swipe button-swipe-black relative hidden overflow-hidden border-2 border-black py-2.5 pl-8 pr-8 text-sm font-medium text-black transition-all duration-300 sm:inline-flex sm:items-center md:py-3 md:pl-9 md:pr-9 md:text-base"
              >
                <span className="flex-shrink-0 whitespace-nowrap">Call Now</span>
                <span className="inline-flex max-w-0 flex-shrink-0 items-center overflow-hidden transition-[max-width] duration-300 ease-out group-hover/call:max-w-[160px]">
                  <span
                    className="mx-2 h-5 min-w-px w-px flex-shrink-0 bg-black/50 transition-colors duration-300 group-hover/call:bg-white"
                    aria-hidden
                  />
                  <span className="ml-0 whitespace-nowrap pl-0">07352167642</span>
                </span>
              </a>
            </div>

            <div className="animate-fade-in-up w-full" style={{ animationDelay: "0.42s" }}>
              <HeroKeyTreatmentsStrip />
            </div>
          </div>
        </div>
      </div>

      {/* Signature: positioned from top/right so it never participates in the bottom stack with key treatments */}
      <div className="pointer-events-none absolute right-10 top-[24%] z-20 hidden w-[min(38vw,200px)] sm:right-12 sm:block md:right-16 md:top-[23%] lg:right-20 lg:top-[22%] lg:w-[min(34vw,220px)]">
        <div className="signature-container">
          <Image
            src="/Signatures-01.svg"
            alt="Osama Moussa Signature"
            width={360}
            height={160}
            className="signature-image signature-black h-auto w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px]"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}

/** Doctify widget below hero on small screens only (desktop widget lives in Hero). */
export function MobileWidgetsSection() {
  return (
    <section className="w-full bg-transparent py-8 sm:hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            style={{
              width: "200px",
              flexShrink: 0,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <iframe
              id="09in4nm9-mobile"
              className="doctify-widget"
              src="https://www.doctify.com/wv2/average-rating-widget?containerId=09in4nm9&language=en&profileType=specialist&slugs=osama-moussa&tenantId=athena-uk&theme=darkNavy&widgetName=average-rating-widget"
              referrerPolicy="no-referrer-when-downgrade"
              width={200}
              height={200}
              frameBorder={0}
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
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
