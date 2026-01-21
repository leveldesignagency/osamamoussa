"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ScrollCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed state is in local storage
    const dismissedState = localStorage.getItem('scrollCTADismissed');
    if (dismissedState === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't show if dismissed
      if (isDismissed) {
        setIsVisible(false);
        return;
      }
      
      // Find reviews section and check if we've reached it
      const reviewsSection = document.getElementById('reviews-section');
      
      if (reviewsSection) {
        const reviewsTop = reviewsSection.offsetTop;
        const windowHeight = window.innerHeight;
        
        // Hide if we're at or past the reviews section
        if (currentScrollY + windowHeight >= reviewsTop - 100) {
          setIsVisible(false);
          return;
        }
      }
      
      // Show after scrolling past 500px
      if (currentScrollY > 500) {
        // Show on scroll down, hide on scroll up
        if (currentScrollY > lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('scrollCTADismissed', 'true'); // Persist dismissal
  };

  if (isDismissed) {
    return null; // Don't render if dismissed
  }

  return (
    <div 
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ maxWidth: '90%', width: '100%' }}
    >
      <div className="relative">
        {/* Close Button - Outside banner, top right */}
        <button
          onClick={handleDismiss}
          className="absolute -top-8 -right-8 w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 z-10 shadow-lg border border-gray-300"
          aria-label="Close banner"
        >
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <div className="bg-white rounded-full shadow-2xl overflow-hidden border-2 border-gray-200">
          <div className="relative">
            {/* Content */}
            <div className="container mx-auto px-6 sm:px-8 lg:px-10 py-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Book Your Appointment Today
                </p>
                <Link
                  href="/procedures/contact"
                  className="inline-block px-6 py-3 border-2 border-black bg-transparent text-black font-semibold button-swipe whitespace-nowrap"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

