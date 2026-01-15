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

    // Load TopDoctors widget script
    const topDoctorsScript = document.createElement("script");
    topDoctorsScript.type = "text/javascript";
    topDoctorsScript.src =
      "https://staticnew-prod.topdoctors.co.uk/static/widgets/main.min.js#type=8&apikey=IkCuQgS4Bq74_3NI8FWd4sRj58VWbQ%3D%3D&environment=prod&config=dW5kZWZpbmVk&country=gb&storage=https%3A%2F%2Fstaticnew-prod.topdoctors.co.uk&apiurl=https%3A%2F%2Fwww.topdoctors.co.uk%2Fapi&hostname=https%3A%2F%2Fwww.topdoctors.co.uk";
    topDoctorsScript.async = true;
    document.body.appendChild(topDoctorsScript);

    return () => {
      // Cleanup scripts on unmount
      if (doctifyScript.parentNode) {
        doctifyScript.parentNode.removeChild(doctifyScript);
      }
      if (topDoctorsScript.parentNode) {
        topDoctorsScript.parentNode.removeChild(topDoctorsScript);
      }
    };
  }, []);

  return (
    <section className="w-full bg-[#6E6E6E] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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

          {/* TopDoctors Widget */}
          <div className="flex justify-center">
            <div
              id="topdoctors-gb-widget-container-8"
              style={{ maxWidth: "245px" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

