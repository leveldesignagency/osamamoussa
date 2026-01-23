"use client";

import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TopDoctorsWidget() {
  const scriptsLoaded = useRef(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    // Prevent duplicate script loading
    if (scriptsLoaded.current) return;

    // Load TopDoctors widget script
    const existingTopDoctors = document.getElementById("topdoctors-widget-script-14");
    if (!existingTopDoctors) {
      const topDoctorsScript = document.createElement("script");
      topDoctorsScript.type = "text/javascript";
      topDoctorsScript.src =
        "https://staticnew-prod.topdoctors.co.uk/static/widgets/main.min.js#type=14&apikey=rKS7JLHPIxSPtYYUA9mvR9tedZB2MQ%3D%3D&environment=prod&config=dW5kZWZpbmVk&country=gb&storage=https%3A%2F%2Fstaticnew-prod.topdoctors.co.uk&apiurl=https%3A%2F%2Fwww.topdoctors.co.uk%2Fapi&hostname=https%3A%2F%2Fwww.topdoctors.co.uk";
      topDoctorsScript.async = true;
      topDoctorsScript.id = "topdoctors-widget-script-14";
      document.body.appendChild(topDoctorsScript);
    }

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
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="container mx-auto max-w-7xl">
          <div
            ref={ref}
            className={`flex justify-center fade-in-on-scroll ${isVisible ? "visible" : ""}`}
          >
            <div
              id="topdoctors-gb-widget-container-14"
              style={{ maxWidth: "1080px", width: "100%" }}
            ></div>
          </div>
        </div>
      </section>

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

