"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Custom smooth scroll function with easing
    const smoothScrollTo = (target: number, duration: number = 1200) => {
      const start = window.pageYOffset;
      const distance = target - start;
      let startTime: number | null = null;

      // Easing function for smooth deceleration
      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, start + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Handle anchor link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link && link.hash) {
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for header
          smoothScrollTo(offsetTop, 1200);
        }
      }
    };

    // Handle programmatic scrolls (like scrollIntoView)
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function(options?: boolean | ScrollIntoViewOptions) {
      if (typeof options === 'object' && options?.behavior === 'smooth') {
        const rect = this.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top - 80;
        smoothScrollTo(offsetTop, 1200);
        return;
      }
      return originalScrollIntoView.call(this, options);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      Element.prototype.scrollIntoView = originalScrollIntoView;
    };
  }, []);

  return null;
}
