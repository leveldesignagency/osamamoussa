"use client";

import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TopDoctorsWidget() {
  const scriptsLoaded = useRef(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    // Prevent duplicate script loading
    if (scriptsLoaded.current) return;

    // Load Doctify category rating widget autoresize script
    const existingDoctifyCategory = document.getElementById("doctify-category-widget-script");
    if (!existingDoctifyCategory) {
      const doctifyCategoryScript = document.createElement("script");
      doctifyCategoryScript.type = "text/javascript";
      doctifyCategoryScript.src =
        "https://www.doctify.com/wv2/doctify-widget-autoresize-plugin.js?tenantId=athena-uk&widgetName=average-category-rating-widget&containerId=0lv5zseb";
      doctifyCategoryScript.async = true;
      doctifyCategoryScript.id = "doctify-category-widget-script";
      document.body.appendChild(doctifyCategoryScript);
    }

    scriptsLoaded.current = true;
  }, []);

  return (
    <>
      {/* Doctify Category Rating Widget - Full Width, No Padding */}
      <section className="w-full bg-white">
        <div className="w-full" style={{ padding: 0, margin: 0 }}>
          <iframe
            id="0lv5zseb"
            className="doctify-widget w-full"
            src="https://www.doctify.com/wv2/average-category-rating-widget?containerId=0lv5zseb&keyword=Upper%20GI%20(Gastrointestinal)%20Surgery&language=en&profileType=specialist&slugs=osama-moussa&tenantId=athena-uk&theme=darkNavy&widgetName=average-category-rating-widget"
            width="100%"
            frameBorder="0"
            scrolling="no"
            name="average-category-rating-widget"
            title="Doctify Category Rating Widget"
            style={{ padding: 0, margin: 0, display: 'block' }}
          />
        </div>
      </section>
    </>
  );
}

