"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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

    // Check if TopDoctors script (type 8) already exists
    const existingTopDoctors8 = document.getElementById("topdoctors-widget-script-8");
    if (!existingTopDoctors8) {
      let retryCount = 0;
      const maxRetries = 3;
      
      const loadTopDoctorsScript = () => {
        const topDoctorsScript = document.createElement("script");
        topDoctorsScript.type = "text/javascript";
        topDoctorsScript.src =
          "https://staticnew-prod.topdoctors.co.uk/static/widgets/main.min.js#type=8&apikey=IkCuQgS4Bq74_3NI8FWd4sRj58VWbQ%3D%3D&environment=prod&config=dW5kZWZpbmVk&country=gb&storage=https%3A%2F%2Fstaticnew-prod.topdoctors.co.uk&apiurl=https%3A%2F%2Fwww.topdoctors.co.uk%2Fapi&hostname=https%3A%2F%2Fwww.topdoctors.co.uk";
        topDoctorsScript.async = true;
        topDoctorsScript.id = "topdoctors-widget-script-8";
        
        topDoctorsScript.onload = () => {
          // Widget should auto-initialize, but wait a bit and check
          setTimeout(() => {
            const widgetContainer = document.getElementById("topdoctors-gb-widget-container-8");
            if (widgetContainer && widgetContainer.children.length === 0 && retryCount < maxRetries) {
              // Widget didn't load, retry
              retryCount++;
              if (topDoctorsScript.parentNode) {
                topDoctorsScript.parentNode.removeChild(topDoctorsScript);
              }
              setTimeout(loadTopDoctorsScript, 1000 * retryCount);
            }
          }, 2000);
        };
        
        topDoctorsScript.onerror = () => {
          if (retryCount < maxRetries) {
            retryCount++;
            if (topDoctorsScript.parentNode) {
              topDoctorsScript.parentNode.removeChild(topDoctorsScript);
            }
            setTimeout(loadTopDoctorsScript, 1000 * retryCount);
          }
        };
        
        document.body.appendChild(topDoctorsScript);
      };
      
      loadTopDoctorsScript();
    }

    scriptsLoaded.current = true;
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" style={{ overflow: 'hidden' }}>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/1-2.jpg"
          alt="Osama Moussa"
          fill
          className="object-cover hero-breathe hero-image-mobile"
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
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center sm:items-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white sm:text-black mb-8 leading-tight max-w-3xl animate-fade-in-up text-center sm:text-left">
            A leader in Upper GI Surgery in London and Hertfordshire
          </h1>
          
          <div className="flex flex-row gap-2 sm:gap-4 animate-fade-in-up justify-center sm:justify-start" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
                <Link
                  href="/procedures/contact"
                  className="inline-block px-4 sm:px-8 py-3 sm:py-4 border-2 border-white sm:border-black bg-white/10 sm:bg-white backdrop-blur-sm sm:backdrop-blur-none text-white sm:text-black font-medium hover:border-white sm:hover:border-black transition-all duration-300 text-center button-swipe text-sm sm:text-base"
                >
                  Book Now
                </Link>
                <Link
                  href="mailto:pa@osamamoussa.co.uk?subject=Hi!%20Can%20you%20help%20me%3F"
                  className="inline-block px-4 sm:px-8 py-3 sm:py-4 border-2 border-white sm:border-black bg-white/10 sm:bg-white backdrop-blur-sm sm:backdrop-blur-none text-white sm:text-black font-medium hover:border-white sm:hover:border-black transition-all duration-300 text-center button-swipe text-sm sm:text-base"
                >
                  Email Us
                </Link>
              </div>
        </div>
      </div>

      {/* Widgets Overlay at Bottom - vertically stacked on mobile, horizontal on desktop */}
      <div className="absolute bottom-20 sm:bottom-8 z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center sm:justify-start">
            {/* Doctify Widget - Top on mobile, first on desktop */}
            <div style={{ width: "200px", flexShrink: 0, display: "flex", alignItems: "flex-start", justifyContent: "center", overflow: "hidden" }}>
              <iframe
                id="09in4nm9"
                className="doctify-widget"
                src="https://www.doctify.com/wv2/average-rating-widget?containerId=09in4nm9&language=en&profileType=specialist&slugs=osama-moussa&tenantId=athena-uk&theme=darkNavy&widgetName=average-rating-widget"
                width="200"
                frameBorder="0"
                scrolling="no"
                name="average-rating-widget"
                title="Doctify Rating Widget"
                style={{ display: "block", border: "none", width: "200px", maxWidth: "200px", minWidth: "200px", verticalAlign: "top", margin: "0 auto" }}
              />
            </div>

            {/* TopDoctors Widget - Hidden on mobile, shown on desktop */}
            <div className="hidden sm:block" style={{ width: "245px", flexShrink: 0, display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
              <div
                id="topdoctors-gb-widget-container-8"
                style={{ 
                  width: "245px",
                  minWidth: "245px",
                  maxWidth: "245px"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

