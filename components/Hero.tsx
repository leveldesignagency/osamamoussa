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
      const topDoctorsScript = document.createElement("script");
      topDoctorsScript.type = "text/javascript";
      topDoctorsScript.src =
        "https://staticnew-prod.topdoctors.co.uk/static/widgets/main.min.js#type=8&apikey=IkCuQgS4Bq74_3NI8FWd4sRj58VWbQ%3D%3D&environment=prod&config=dW5kZWZpbmVk&country=gb&storage=https%3A%2F%2Fstaticnew-prod.topdoctors.co.uk&apiurl=https%3A%2F%2Fwww.topdoctors.co.uk%2Fapi&hostname=https%3A%2F%2Fwww.topdoctors.co.uk";
      topDoctorsScript.async = true;
      topDoctorsScript.id = "topdoctors-widget-script-8";
      document.body.appendChild(topDoctorsScript);
      
      // Ensure widget loads after script
      topDoctorsScript.onload = () => {
        // Widget should auto-initialize
      };
    }

    scriptsLoaded.current = true;
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/1-2.jpg"
          alt="Osama Moussa"
          fill
          className="object-cover hero-breathe"
          priority
          quality={90}
        />
      </div>
      {/* Subtle vignette overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.2) 100%)'
        }}
      ></div>
      {/* Gradient fade at bottom transitioning to #6E6E6E */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(110, 110, 110, 0.3) 75%, #6E6E6E 100%)'
        }}
      ></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-8 leading-tight max-w-3xl animate-fade-in-up">
            A leader in Upper GI Surgery in London and Hertfordshire
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
                <Link
                  href="/procedures/contact"
                  className="inline-block px-8 py-4 border-2 border-black bg-gray-500/10 text-black font-medium hover:bg-white hover:text-black hover:border-black transition-all duration-300 text-center shimmer-hover"
                >
                  Book Now
                </Link>
                <Link
                  href="mailto:pa@osamamoussa.co.uk?subject=Hi!%20Can%20you%20help%20me%3F"
                  className="inline-block px-8 py-4 border-2 border-black bg-gray-500/10 text-black font-medium hover:bg-white hover:text-black hover:border-black transition-all duration-300 text-center shimmer-hover"
                >
                  Email Us
                </Link>
              </div>
        </div>
      </div>

      {/* Widgets Overlay at Bottom - aligned with buttons above */}
      <div className="absolute bottom-8 z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col sm:flex-row gap-2 items-start">
            {/* TopDoctors Widget - first, same size */}
            <div className="w-full sm:w-auto" style={{ width: "200px", flexShrink: 0, display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
              <div
                id="topdoctors-gb-widget-container-8"
                style={{ 
                  width: "200px"
                }}
              ></div>
            </div>

            {/* Doctify Widget - second, same size */}
            <div className="w-full sm:w-auto" style={{ width: "200px", flexShrink: 0, display: "flex", alignItems: "flex-start" }}>
              <iframe
                id="09in4nm9"
                className="doctify-widget"
                src="https://www.doctify.com/wv2/average-rating-widget?containerId=09in4nm9&language=en&profileType=specialist&slugs=osama-moussa&tenantId=athena-uk&theme=darkNavy&widgetName=average-rating-widget"
                width="200"
                frameBorder="0"
                scrolling="no"
                name="average-rating-widget"
                title="Doctify Rating Widget"
                style={{ display: "block", border: "none", width: "200px", maxWidth: "200px", verticalAlign: "top" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

