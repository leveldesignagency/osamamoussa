"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Image from "next/image";
import Link from "next/link";
import { trackContact, getDevice } from "@/lib/contact-analytics";
import { hospitals, locationPages, getHospitalMapEmbedSrc } from "@/app/locations/location-data";

const contactHighlights = [
  {
    title: "Quick response",
    description:
      "Enquiries are usually answered within one working day. Phone and email both reach the practice team directly.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Expert consultation",
    description:
      "A full assessment of your symptoms, scans where needed, and a clear discussion of surgical and non-surgical options.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Multiple locations",
    description:
      "Consultations and surgery at NHS and private hospitals across Hertfordshire and London, with booking via each hospital site.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
] as const;

export default function ContactPage() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    scriptsLoaded.current = true;
  }, []);

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      <Header backgroundColor="grey" textColor="white" />
      
      {/* Contact Information - Background Image Section */}
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-grey">
        {/* Background Image Container - Full height from top, goes under header - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
            <Image
            src="/OMCONTACT.JPG"
            alt="Contact Mr Osama Moussa – Book a consultation for Upper GI and robotic surgery in London and Hertfordshire"
            fill
            className="object-cover image-grow-shrink"
            style={{ 
              objectPosition: '18% center',
              maskImage: 'linear-gradient(to right, black 0%, black 42%, rgba(0, 0, 0, 0.75) 52%, rgba(0, 0, 0, 0.35) 62%, rgba(0, 0, 0, 0.08) 72%, transparent 82%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 42%, rgba(0, 0, 0, 0.75) 52%, rgba(0, 0, 0, 0.35) 62%, rgba(0, 0, 0, 0.08) 72%, transparent 82%)',
            }}
            priority
            quality={75}
            sizes="(max-width: 768px) 1px, 100vw"
          />
          {/* Bottom fade overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0.7) 100%)',
            }}
          ></div>
        </div>
        
        {/* Subtle vignette overlay for depth - Hidden on mobile */}
        <div 
          className="absolute inset-0 pointer-events-none hidden sm:block"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.2) 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
          }}
        ></div>
        
        <div className="relative z-10 flex min-h-screen w-full flex-col">
          <div className="container mx-auto flex flex-1 flex-col px-4 pb-8 pt-28 sm:px-6 sm:pb-10 sm:pt-32 lg:px-8 lg:pb-12">
            <div className="grid flex-1 grid-cols-1 md:grid-cols-[minmax(0,46%)_minmax(0,54%)] md:gap-x-8 xl:grid-cols-[minmax(0,48%)_minmax(0,52%)] xl:gap-x-10">
              {/* Portrait column — keep clear */}
              <div className="hidden md:block" aria-hidden />

              {/* Right column — centred between left and right */}
              <div className="flex w-full max-w-lg flex-col items-start space-y-5 pt-4 md:col-start-2 md:max-w-xl md:translate-x-10 md:justify-self-center md:pt-10 lg:translate-x-14 lg:pt-14 xl:translate-x-16">
                <a
                  href="tel:07352167642"
                  onClick={() => trackContact("call", getDevice(), "contact_page")}
                  className="group inline-flex w-fit items-center gap-3 text-lg font-semibold text-white transition-all duration-300 sm:text-xl"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  <svg
                    className="h-6 w-6 shrink-0 text-white transition-colors duration-300 group-hover:text-white/80 sm:h-7 sm:w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="underline decoration-white/40 underline-offset-4 transition-colors group-hover:decoration-white">
                    07352167642
                  </span>
                </a>

                <a
                  href="mailto:pa@osamamoussa.co.uk"
                  onClick={() => trackContact("email", getDevice(), "contact_page")}
                  className="group inline-flex w-fit items-center gap-3 text-lg font-semibold text-white transition-all duration-300 sm:text-xl"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  <svg
                    className="h-6 w-6 shrink-0 text-white transition-colors duration-300 group-hover:text-white/80 sm:h-7 sm:w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="underline decoration-white/40 underline-offset-4 transition-colors group-hover:decoration-white">
                    pa@osamamoussa.co.uk
                  </span>
                </a>

                <div className="max-w-xl space-y-5 pt-4 text-left lg:max-w-2xl">
                  <p
                    className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    <span className="block whitespace-nowrap">Book a consultation with</span>
                    <span className="block">Mr Osama Moussa</span>
                  </p>
                  <p className="text-base leading-relaxed text-white/85 sm:text-lg">
                    Consultant Upper GI and Robotic Surgeon serving London and Hertfordshire.
                    Contact the practice team by phone or email, or book directly through one
                    of the hospital locations below.
                  </p>
                  <ul className="space-y-3 text-left text-sm leading-relaxed text-white/80 sm:text-base">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" aria-hidden />
                      <span>Enquiries are usually answered within one working day</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" aria-hidden />
                      <span>NHS and private appointments across Watford, Bushey, Northwood, and central London</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" aria-hidden />
                      <span>
                        Private medical insurance accepted{" "}
                        <Link href="/insurance" className="underline underline-offset-2 hover:text-white">
                          view providers
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Book via hospital — full width, bottom-left */}
            <div className="mt-auto border-t border-white/15 pt-6 sm:pt-8">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
                <p className="shrink-0 text-sm font-semibold uppercase tracking-wide text-white/70">
                  Book via hospital
                </p>
                <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                  {hospitals.map((hospital) => (
                    <li key={hospital.name}>
                      <Link
                        href={hospital.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white sm:text-base"
                      >
                        {hospital.name}
                        <span aria-hidden>↗</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="relative w-full overflow-hidden border-y border-white/10 bg-black">
        <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mb-10 text-center lg:mb-12 lg:text-left">
            <h2
              className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              What to expect
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
              From first contact through to booking, this is how the practice supports new
              and existing patients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {contactHighlights.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-5 rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.07] sm:flex-row sm:items-start sm:p-8 lg:flex-col lg:gap-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <h3
                    className="text-xl font-bold leading-snug text-white sm:text-2xl"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals Section */}
      <section className="w-full pt-8 pb-16 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="mx-auto mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Hospital locations
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Full details, maps, and direct booking links for each hospital Mr Moussa
              practises at across London and Hertfordshire.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {locationPages.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="inline-block px-4 py-2 border border-white/40 rounded-full text-white/90 hover:text-white hover:border-white transition-all text-sm sm:text-base"
                >
                  {location.title}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {hospitals.map((hospital, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                {/* Map Embed */}
                <div className="relative h-52 w-full overflow-hidden sm:h-64">
                  <iframe
                    title={`Map showing ${hospital.name}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={getHospitalMapEmbedSrc(hospital)}
                    className="absolute inset-0 h-full w-full sm:group-hover:scale-110 sm:transition-transform sm:duration-500"
                  ></iframe>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                {/* Hospital Info */}
                <div className="p-6 overflow-hidden">
                  <h3 className="text-2xl font-bold text-black mb-4 break-words group-hover:text-[#1a1a1a] transition-colors tracking-wide" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    <Link
                      href={hospital.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block break-words"
                    >
                      {hospital.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#6E6E6E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-[#6E6E6E] break-words flex-1">
                        <Link
                          href={hospital.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group/link hover:opacity-80 transition-opacity break-words"
                        >
                          {hospital.address}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E6E6E] group-hover/link:w-full transition-all duration-300"></span>
                        </Link>
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#6E6E6E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-[#6E6E6E] break-words">
                        <a
                          href={`tel:${hospital.phone.replace(/\s/g, "")}`}
                          className="relative group/link hover:opacity-80 transition-opacity break-words"
                        >
                          {hospital.phone}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E6E6E] group-hover/link:w-full transition-all duration-300"></span>
                        </a>
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#6E6E6E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <p className="text-[#6E6E6E] break-words break-all">
                        <Link
                          href={hospital.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group/link hover:opacity-80 transition-opacity break-words break-all"
                        >
                          {hospital.website.replace(/^https?:\/\//, '')}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E6E6E] group-hover/link:w-full transition-all duration-300"></span>
                        </Link>
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6">
                    <Link
                      href={hospital.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block min-w-[220px] px-8 py-3 text-center border-2 border-black bg-white/10 backdrop-blur-sm text-black rounded-full font-semibold hover:border-black transition-all duration-300 button-swipe button-swipe-black sm:min-w-[240px] sm:px-10"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Book Appointment
                    </Link>
                    <Link
                      href={hospital.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-base font-semibold text-[#6E6E6E] underline decoration-[#6E6E6E]/50 underline-offset-4 transition-colors hover:text-black hover:decoration-black"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      View on map
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Appointment Section */}
      <AppointmentSection />
    </main>
  );
}

