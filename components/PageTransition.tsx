"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Trigger transition when pathname changes
    setIsTransitioning(true);
    setShowLogo(true);

    // Hide logo and transition after delay
    const timer = setTimeout(() => {
      setShowLogo(false);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-[#6E6E6E] flex items-center justify-center transition-opacity duration-500">
          {showLogo && (
            <div className="animate-scale-in">
              <Image
                src="/Osama Moussa Logo-01.svg"
                alt="Osama Moussa Logo"
                width={600}
                height={150}
                className="w-[600px] h-auto brightness-0 invert"
                priority
              />
            </div>
          )}
        </div>
      )}
      <div className={isTransitioning ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}

