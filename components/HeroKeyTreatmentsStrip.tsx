"use client";

import Link from "next/link";
import { KEY_TREATMENT_LINKS } from "@/lib/key-treatments";

export default function HeroKeyTreatmentsStrip() {
  return (
    <div className="mt-20 w-full shrink-0 sm:mt-20 md:mt-24 lg:mt-28">
      {/* Title + pills MUST live in one column — never items-end/grid-align a 200px Doctify next to only the ul (that was the huge gap). */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_168px] sm:items-start sm:gap-x-5 md:grid-cols-[minmax(0,1fr)_180px]">
        <div className="flex min-w-0 flex-col items-center gap-2 sm:items-start sm:gap-2.5">
          <p
            className="text-center text-base font-semibold tracking-tight text-white sm:text-left sm:text-lg sm:text-black md:text-xl"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Key treatments
          </p>
          <ul className="flex w-full max-w-md flex-wrap justify-center gap-x-2 gap-y-2 pb-0.5 sm:max-w-none sm:flex-nowrap sm:justify-start sm:gap-2.5 sm:overflow-x-auto md:gap-3 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25 sm:[&::-webkit-scrollbar-thumb]:bg-black/20">
            {KEY_TREATMENT_LINKS.map((item) => (
              <li key={item.href} className="flex-shrink-0">
                <Link
                  href={item.href}
                  className="button-swipe button-swipe-black inline-block whitespace-nowrap border-2 border-white bg-transparent px-3 py-2 text-xs font-medium text-white transition-all duration-300 sm:border-black sm:px-4 sm:py-2.5 sm:text-sm sm:text-black md:px-4 md:py-3 md:text-[15px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pointer-events-auto hidden justify-center sm:flex sm:justify-end">
          <div className="doctify-rating-slot h-[168px] w-[168px] sm:h-[180px] sm:w-[180px]">
            <iframe
              id="09in4nm9"
              className="doctify-widget"
              src="https://www.doctify.com/wv2/average-rating-widget?containerId=09in4nm9&language=en&profileType=specialist&slugs=osama-moussa&tenantId=athena-uk&theme=darkNavy&widgetName=average-rating-widget"
              width="200"
              height="200"
              frameBorder="0"
              scrolling="no"
              name="average-rating-widget"
              title="Doctify Rating Widget"
              style={{ display: "block", border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
