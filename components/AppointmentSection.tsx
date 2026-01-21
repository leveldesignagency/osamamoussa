"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentSection() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    if (scriptsLoaded.current) return;

    // Load TopDoctors widget script type 2
    const existingTopDoctors2 = document.getElementById("topdoctors-widget-script-2");
    if (!existingTopDoctors2) {
      const topDoctorsScript2 = document.createElement("script");
      topDoctorsScript2.type = "text/javascript";
      topDoctorsScript2.src =
        "https://staticnew-prod.topdoctors.co.uk/static/widgets/main.min.js#type=2&apikey=rKS7JLHPIxSPtYYUA9mvR9tedZB2MQ%3D%3D&environment=prod&config=dW5kZWZpbmVk&country=gb&storage=https%3A%2F%2Fstaticnew-prod.topdoctors.co.uk&apiurl=https%3A%2F%2Fwww.topdoctors.co.uk%2Fapi&hostname=https%3A%2F%2Fwww.topdoctors.co.uk";
      topDoctorsScript2.async = true;
      topDoctorsScript2.id = "topdoctors-widget-script-2";
      document.body.appendChild(topDoctorsScript2);
    }

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
              style={{ objectPosition: 'center center' }}
              priority
              sizes="100vw"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
            <div className="max-w-md text-right">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-white mb-6">
                Book Your<br />
                Appointment<br />
                Today!
              </p>
              <Link
                href="/procedures/contact"
                className="inline-block px-8 py-4 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium hover:border-black transition-all duration-300 text-center button-swipe text-white"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TopDoctors Widget Section - White background, overlapping */}
      <section className="w-full bg-white py-8 relative" style={{ padding: 0, margin: 0, overflow: 'visible' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: '-65px',
            left: 'calc(50% - 180px)',
            zIndex: 30,
            width: '130px'
          }}
        >
          <div
            id="topdoctors-gb-widget-container-2"
            style={{ 
              maxWidth: "130px", 
              width: "130px",
              margin: 0,
              padding: 0,
              display: "block",
              position: "relative"
            }}
          ></div>
        </div>
      </section>

      {/* Insurance Logos - One Line, Smaller */}
      <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 overflow-x-auto">
            {insuranceLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0" 
                style={{ 
                  width: '80px', 
                  height: '40px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <Image
                  src={logo}
                  alt={`Insurance ${index + 1}`}
                  width={80}
                  height={40}
                  className="object-contain opacity-100"
                  style={{ 
                    maxWidth: '80px', 
                    maxHeight: '40px', 
                    width: 'auto', 
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

