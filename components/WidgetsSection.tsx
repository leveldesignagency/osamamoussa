"use client";

import { useEffect } from "react";

export default function WidgetsSection() {
  useEffect(() => {
    // Load Doctify widget autoresize script
    const doctifyScript = document.createElement("script");
    doctifyScript.type = "text/javascript";
    doctifyScript.src =
      "https://www.doctify.com/wv2/doctify-widget-autoresize-plugin.js?tenantId=athena-uk&widgetName=average-rating-widget&containerId=09in4nm9";
    doctifyScript.async = true;
    document.body.appendChild(doctifyScript);

    return () => {
      // Cleanup scripts on unmount
      if (doctifyScript.parentNode) {
        doctifyScript.parentNode.removeChild(doctifyScript);
      }
    };
  }, []);

  return (
    <section className="w-full bg-gradient-grey py-12 px-4 sm:px-6 lg:px-8 pb-24 sm:pb-12">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center">
          {/* Doctify Widget */}
          <div className="flex justify-center">
            <iframe
              id="09in4nm9"
              className="doctify-widget"
              src="https://www.doctify.com/wv2/average-rating-widget?containerId=09in4nm9&language=en&profileType=specialist&slugs=osama-moussa&tenantId=athena-uk&theme=darkNavy&widgetName=average-rating-widget"
              width="100%"
              frameBorder="0"
              scrolling="no"
              name="average-rating-widget"
              title="Doctify Rating Widget"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

