"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactPage() {
  const scriptsLoaded = useRef(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  useEffect(() => {
    scriptsLoaded.current = true;
  }, []);

  const hospitals = [
    {
      name: "West Hertfordshire NHS Trust",
      address: "Vicarage Road, Watford, WD18 0HB",
      phone: "01923 244 366",
      website: "https://www.westhertshospitals.nhs.uk/",
      mapUrl:
        "https://www.google.com/maps/place/Watford+General+Hospital/@51.6495051,-0.4062333,17z/data=!4m9!1m2!2m1!1sVicarage+Road+Watford+WDS8+0HB!3m5!1s0x48766add427ddfd1:0xe6737457e2df3710!8m2!3d51.6482886!4d-0.4038784!16s%2Fm%2F0m0q811?entry=ttu",
    },
    {
      name: "Spire Bushey Healthcare",
      address: "Heathbourne Rd, Bushey, WD23 1RD",
      phone: "020 8950 9090",
      website: "https://www.spirehealthcare.com/spire-bushey-hospital/",
      mapUrl:
        "https://www.google.com/maps?sca_esv=5916dc4a4d004541&rlz=1C5CHFA_enGB1104GB1104&biw=1728&bih=993&sxsrf=ADLYWIL5DwE835fzPeMuhnIpY9M8z28RpQ:1719416946508&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIjJidXNoZXkgaGVhbHRoY2FyZSBIZWF0aGJvdXJuZSBSb2FkIEJ1c2hleSBXRDIzIDFSRDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGKIEGIkFSNkbUIIGWP0acAF4AZABAJgBpAKgAdAOqgEGMTAuNy4xuAEDyAEA-AEBmAIQoALFCsICChAAGLADGNYEGEfCAgcQIxiwAhgnwgIIEAAYBxgIGB7CAggQABgFGAcYHsICCBAAGAgYDRgewgILEAAYgAQYhgMYigXCAgYQABgIGB7CAgQQIRgKmAMAiAYBkAYIkgcEMTAuNqAH5IQB&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=KSkYbmX_FHZIMULZu5UksWQY&daddr=Heathbourne+Rd,+Bushey+WD23+1RD",
    },
    {
      name: "Bishops Wood Hospital",
      address: "Rickmansworth Road, Northwood, HA6 2JW",
      phone: "01923 835 814",
      website:
        "https://www.circlehealthgroup.co.uk/hospitals/bishops-wood-hospital",
      mapUrl:
        "https://www.google.com/maps?rlz=1C5CHFA_enGB1104GB1104&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIGCAMQRRg7MgcIBBAAGIAEMgcIBRAuGIAEMhAIBhAuGK8BGMcBGIAEGI4FMgYIBxBFGDzSAQgyNTY0ajFqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kc1Nr_iUa3ZIMcHNagAmeXaS&daddr=Rickmansworth+Rd,+Northwood+HA6+2JW",
    },
    {
      name: "The Wellington Hospital",
      address: "8A Wellington Place, London, NW8 9LE",
      phone: "020 3733 5344",
      website:
        "https://www.circlehealthgroup.co.uk/hospitals/bishops-wood-hospital",
      mapUrl:
        "https://www.google.com/maps?rlz=1C5CHFA_enGB1104GB1104&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIGCAMQRRg7MgcIBBAAGIAEMgcIBRAuGIAEMhAIBhAuGK8BGMcBGIAEGI4FMgYIBxBFGDzSAQgyNTY0ajFqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kc1Nr_iUa3ZIMcHNagAmeXaS&daddr=Rickmansworth+Rd,+Northwood+HA6+2JW",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      <Header backgroundColor="grey" textColor="white" />
      
      {/* Contact Information - Background Image Section */}
      <section className="relative w-full overflow-hidden bg-gradient-grey sm:min-h-screen">
        {/* Background Image Container - Full height from top, goes under header - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <Image
            src="/OMCONTACT.JPG"
            alt="Contact Background"
            fill
            className="object-cover image-grow-shrink"
            style={{ 
              objectPosition: 'center center',
              maskImage: 'linear-gradient(to right, black 0%, black 30%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 60%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 60%, transparent 70%)',
            }}
            priority
            sizes="100vw"
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
        
        {/* Title Section - matches about page */}
        <div className="relative z-30 pb-6">
          <div 
            ref={titleRef}
            className={`container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 fade-in-on-scroll ${titleVisible ? "visible" : ""}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white sm:text-black uppercase tracking-wide mb-6 text-center lg:text-left leading-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Contact
            </h1>
          </div>
        </div>
        
        {/* Content Container - Buttons centered vertically */}
        <div className="relative z-10 w-full sm:h-full sm:flex sm:items-center" style={{ minHeight: 'auto' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Spacer for layout */}
              <div className="hidden lg:block"></div>

              {/* Contact Buttons - Right side on desktop, centered on mobile */}
              <div className="flex flex-col justify-center items-center lg:items-end space-y-6 pb-8 sm:pb-0">
              {/* Phone Number Button */}
              <a
                href="tel:07352167642"
                className="w-full lg:w-[400px] border-2 border-white bg-white/10 backdrop-blur-sm rounded-full px-8 py-5 flex items-center justify-center gap-4 text-white text-xl font-semibold hover:border-black transition-all duration-300 text-center button-swipe text-white group"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                <svg
                  className="w-7 h-7 text-white group-hover:text-black transition-colors duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>07352167642</span>
              </a>
              
              {/* Email Button */}
              <a
                href="mailto:pa@osamamoussa.co.uk"
                className="w-full lg:w-[400px] border-2 border-white bg-white/10 backdrop-blur-sm rounded-full px-8 py-5 flex items-center justify-center gap-4 text-white text-xl font-semibold hover:border-black transition-all duration-300 text-center button-swipe text-white group"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                <svg 
                  className="w-7 h-7 text-white group-hover:text-black transition-colors duration-300 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>pa@osamamoussa.co.uk</span>
              </a>
              
              {/* Contact Paragraph Card - Below buttons */}
              <div className="w-full lg:w-[400px] border-2 border-white bg-white/10 backdrop-blur-sm p-6 text-white rounded-lg">
                <p className="text-base leading-relaxed text-center lg:text-left">
                  You can contact my Personal Assistant directly, alternatively you can make a booking via the hospitals websites
                  from the list below.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-black relative overflow-hidden">
        {/* Bottom feathering overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '100px',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)',
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
              {/* Response Time */}
              <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-white/30 hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-white transition-colors duration-300" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Quick Response</h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">We aim to respond to all enquiries within 24 hours</p>
              </div>

              {/* Consultation */}
              <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-white/30 hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-white transition-colors duration-300" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Expert Consultation</h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">Comprehensive assessment and personalized treatment plans</p>
              </div>

              {/* Multiple Locations */}
              <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-white/30 hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-white transition-colors duration-300" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Multiple Locations</h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">Convenient access across London and Hertfordshire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals Section */}
      <section className="w-full pt-8 pb-16 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mb-4 leading-tight fade-in-on-scroll" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Hospital Locations
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Dr. Moussa practices at multiple prestigious hospitals across London and Hertfordshire. 
              Book your consultation directly through each hospital&apos;s website.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {hospitals.map((hospital, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                {/* Map Embed */}
                <div className="w-full h-48 sm:h-64 relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(hospital.address)}&output=embed&zoom=15`}
                    className="group-hover:scale-110 transition-transform duration-500"
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
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 flex justify-center lg:justify-start">
                    <Link
                      href={hospital.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-fit px-2.5 py-3 text-center border-2 border-black bg-white/10 backdrop-blur-sm text-black rounded-full font-semibold hover:border-black transition-all duration-300 button-swipe button-swipe-black"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      Book Appointment
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

