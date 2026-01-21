"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ReviewsSection() {
  const reviews = [
    "Just to say what great care I got from Mr Moussa recently. Was in Watford Hospital. He came to see me before operation & after. I felt I was in good hands explained all what was going on and after care. A very nice gentleman.",
    "Mr Moussa showed me great concern and care. I could not have been treated any better. Very pleased with outcome!",
    "Mr Moussa was the only surgeon that listened to me and I cannot thank him enough! I am no longer in any pain after my surgery, after many months in excruciating pain. Thank You.",
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="reviews-section" className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image with feathered bottom */}
          <div
            ref={imageRef}
            className={`relative overflow-hidden fade-in-on-scroll ${imageVisible ? "visible" : ""}`}
          >
            <div className="relative">
              <Image
                src="/OM1-2.png"
                alt="Osama Moussa"
                width={2000}
                height={2600}
                className="w-auto h-auto object-contain mx-auto lg:mx-0"
                style={{ maxWidth: 'none', width: '180%', marginLeft: '-40%' }}
              />
              {/* Feathered bottom fade - only on bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,1) 100%)",
                }}
              ></div>
            </div>
          </div>

          {/* Right Side - Reviews */}
          <div
            ref={contentRef}
            className={`flex flex-col items-center lg:items-start fade-in-on-scroll ${contentVisible ? "visible" : ""}`}
          >
            {/* Star Rating */}
            <div className="flex gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-10 h-10 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Auto-scrolling Reviews */}
            <div className="relative w-full min-h-[250px] mb-10">
              {/* Review Text */}
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl text-gray-800 leading-relaxed font-serif">
                  {reviews[currentReview]}
                </p>
              </div>

              {/* Review Indicators */}
              <div className="flex justify-center lg:justify-start gap-3 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentReview
                        ? "bg-black w-10"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* More Reviews Button */}
            <Link
              href="https://www.iwantgreatcare.org/doctors/mr-osama-m-moussa?page=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-lg border-2 border-black text-black font-medium transition-colors duration-200 button-swipe button-swipe-black"
            >
              More Reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

