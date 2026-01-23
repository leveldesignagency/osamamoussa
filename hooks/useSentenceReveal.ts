"use client";

import { useEffect, useRef, useState } from "react";

export function useSentenceReveal(text: string, sentenceDelay: number = 1000, initialDelay: number = 500) {
  const [visibleSentences, setVisibleSentences] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Add initial delay before starting animation
          setTimeout(() => {
            setHasStarted(true);
          }, initialDelay);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px", // Start animation when element is more into view
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
  }, [isVisible, initialDelay]);

  // Split text into sentences
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);

  useEffect(() => {
    if (hasStarted) {
      const interval = setInterval(() => {
        setVisibleSentences((prev) => {
          if (prev < sentences.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, sentenceDelay);

      return () => clearInterval(interval);
    }
  }, [hasStarted, sentenceDelay, sentences.length]);

  return { ref, sentences, visibleSentences, isComplete: visibleSentences >= sentences.length };
}
