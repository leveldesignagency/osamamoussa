"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { INSURANCE_PROVIDERS, isAxaLogo } from "@/lib/insurance-providers";

export default function AppointmentSection() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    if (scriptsLoaded.current) return;

    scriptsLoaded.current = true;
  }, []);

  return (
    <>
      {/* Book Appointment Section */}
      <section className="relative h-[400px] w-full overflow-hidden lg:h-[500px]">
        {/* Image Container - movable for positioning */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="image-grow-shrink absolute" style={{ top: "-50px", left: 0, right: 0, bottom: "-50px" }}>
            <Image
              src="/book_now_global.png"
              alt="Book Your Appointment"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto flex w-full justify-center px-4 sm:justify-end sm:px-6 lg:px-8">
            <div className="max-w-md text-center sm:text-right">
              <p
                className="mb-4 text-2xl font-bold uppercase tracking-wide text-white sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                BOOK YOUR<br />
                APPOINTMENT<br />
                TODAY!
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

      {/* Insurance logos — full banner links to /insurance */}
      <section className="w-full overflow-hidden bg-white py-8">
        <Link
          href="/insurance"
          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Private medical insurance: view accepted providers and quick links"
        >
          <p
            className="mb-3 px-4 text-center text-sm text-neutral-600 transition-colors group-hover:text-black"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Private medical insurance —{" "}
            <span className="font-semibold underline decoration-neutral-300 underline-offset-4 group-hover:decoration-black">
              view accepted providers
            </span>
          </p>
          <div className="relative">
            <div className="marquee-container">
              <div className="marquee-content">
                {INSURANCE_PROVIDERS.map((provider) => {
                  const axa = isAxaLogo(provider.logoSrc);
                  return (
                    <div key={`a-${provider.id}`} className="marquee-item">
                      <Image
                        src={provider.logoSrc}
                        alt=""
                        width={axa ? 150 : 100}
                        height={axa ? 75 : 50}
                        className="object-contain"
                        style={{
                          maxWidth: axa ? "150px" : "100px",
                          maxHeight: axa ? "75px" : "50px",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  );
                })}
                {INSURANCE_PROVIDERS.map((provider) => {
                  const axa = isAxaLogo(provider.logoSrc);
                  return (
                    <div key={`b-${provider.id}`} className="marquee-item">
                      <Image
                        src={provider.logoSrc}
                        alt=""
                        width={axa ? 150 : 100}
                        height={axa ? 75 : 50}
                        className="object-contain"
                        style={{
                          maxWidth: axa ? "150px" : "100px",
                          maxHeight: axa ? "75px" : "50px",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
