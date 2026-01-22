"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ScrollCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't show if dismissed (only for current session)
      if (isDismissed) {
        setIsVisible(false);
        return;
      }

      const currentScrollY = window.scrollY;
      
      // Find reviews section and check if we've reached it
      const reviewsSection = document.getElementById('reviews-section');
      
      if (reviewsSection) {
        const reviewsTop = reviewsSection.offsetTop;
        const windowHeight = window.innerHeight;
        
        // Hide if we're at or past the reviews section
        if (currentScrollY + windowHeight >= reviewsTop - 100) {
          setIsVisible(false);
          lastScrollY.current = currentScrollY;
          return;
        }
      }
      
      // Show after scrolling past 500px
      if (currentScrollY > 500) {
        // Show on scroll down, hide on scroll up
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
          setIsVisible(true);
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // No localStorage - banner will show again on page refresh
  };

  if (isDismissed) {
    return null; // Don't render if dismissed
  }

  return (
    <div 
      className={`fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ maxWidth: '95%', width: 'auto', minWidth: 'min(95%, 800px)' }}
    >
      <div className="bg-white rounded-full sm:rounded-full shadow-2xl overflow-hidden border-2 border-gray-200">
        <div className="relative">
          {/* Content */}
          <div className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
              <p className="text-black text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:text-left">
                Book Your Appointment Today
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="/procedures/contact"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-2 border-black bg-transparent text-black font-semibold button-swipe button-swipe-black whitespace-nowrap text-sm sm:text-base"
                >
                  Book Now
                </Link>
                <button
                  onClick={handleDismiss}
                  className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-black bg-transparent text-black font-semibold button-swipe button-swipe-white-bg whitespace-nowrap opacity-30 hover:opacity-100 transition-opacity duration-200 text-sm sm:text-base"
                  aria-label="Close banner"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

