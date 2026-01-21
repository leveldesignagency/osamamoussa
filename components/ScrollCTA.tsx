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
      return;
    }

    const handleScroll = () => {
      // Don't show if dismissed
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
          setLastScrollY(currentScrollY);
          return;
        }
      }
      
      // Show after scrolling past 500px
      if (currentScrollY > 500) {
        // Show on scroll down, hide on scroll up
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setIsVisible(true);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

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
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ maxWidth: '90%', width: '100%' }}
    >
      <div className="bg-white rounded-full shadow-2xl overflow-hidden border-2 border-gray-200">
        <div className="relative">
          {/* Content */}
          <div className="container mx-auto px-6 sm:px-8 lg:px-10 py-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
                Book Your Appointment Today
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/procedures/contact"
                  className="inline-block px-6 py-3 border-2 border-black bg-transparent text-black font-semibold button-swipe whitespace-nowrap"
                >
                  Book Now
                </Link>
                <button
                  onClick={handleDismiss}
                  className="px-6 py-3 border-2 border-black bg-transparent text-black font-semibold button-swipe button-swipe-white-bg whitespace-nowrap opacity-30 hover:opacity-100 transition-opacity duration-200"
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

