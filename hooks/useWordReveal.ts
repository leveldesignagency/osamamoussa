"use client";

import { useEffect, useRef, useState } from "react";

export function useWordReveal(text: string, delay: number = 50) {
  const [visibleWords, setVisibleWords] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const words = text.split(' ');
      const interval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev < words.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, delay);

      return () => clearInterval(interval);
    }
  }, [isVisible, text, delay]);

  const words = text.split(' ');
  const displayText = words.slice(0, visibleWords).join(' ');

  return { ref, displayText, isComplete: visibleWords >= words.length };
}
