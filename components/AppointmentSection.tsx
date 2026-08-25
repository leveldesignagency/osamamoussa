"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackContact, trackCTAClick } from "@/lib/contact-analytics";
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
              src="/book_now_global.jpg"
              alt="Book Your Appointment"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
              sizes="100vw"
              quality={75}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto flex w-full justify-center px-4 sm:justify-end sm:px-6 lg:px-8">
            <div className="max-w-lg text-center sm:max-w-xl sm:text-right">
              <p
                className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl lg:text-5xl"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Book your
                <br />
                appointment
                <br />
                today
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end sm:gap-4">
                <Link
                  href="/procedures/contact"
                  onClick={() => trackCTAClick("Book Now", "appointment-banner")}
                  className="button-swipe inline-block border-2 border-white bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-black sm:px-8 sm:py-4 sm:text-base"
                >
                  Book Now
                </Link>
                <a
                  href="tel:07352167642"
                  onClick={() => trackContact("call", "mobile", "appointment-banner")}
                  className="button-swipe inline-block border-2 border-white bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-black sm:px-8 sm:py-4 sm:text-base"
                >
                  Call Now
                </a>
              </div>
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
