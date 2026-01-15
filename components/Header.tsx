"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  backgroundColor?: string;
}

const menuItems = [
  { href: "/about", label: "ABOUT", pageTitle: "ABOUT" },
  { href: "/procedures", label: "PROCEDURES", pageTitle: "PROCEDURES" },
  { href: "/research", label: "RESEARCH", pageTitle: "RESEARCH" },
  { href: "/reviews", label: "REVIEWS", pageTitle: "REVIEWS" },
  { href: "/procedures/contact", label: "CONTACT", pageTitle: "CONTACT" },
];

export default function Header({ backgroundColor = "transparent" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItemIndex, setClickedItemIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPageName, setTransitionPageName] = useState<string>("");
  const router = useRouter();

  const bgClass = backgroundColor === "grey" ? "bg-[#6E6E6E]" : "bg-transparent";
  // Menu items should always be white when menu is open
  const textColor = isMenuOpen ? "text-white" : (backgroundColor === "grey" ? "text-white" : "text-black");

  return (
    <>
      {/* Page Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-[#6E6E6E] flex flex-col items-center justify-center">
          {/* Small Logo at Top */}
          <div className="absolute top-8 animate-scale-in">
            <Image
              src="/Osama Moussa Logo-01.svg"
              alt="Osama Moussa Logo"
              width={200}
              height={50}
              className="w-[200px] h-auto brightness-0 invert"
              priority
            />
          </div>
          {/* Page Name - Large, matching page title style */}
          <div className="animate-scale-in">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-sans font-bold text-white uppercase tracking-tight">
              {transitionPageName}
            </h1>
          </div>
        </div>
      )}
      <header className={`absolute top-0 left-0 right-0 z-50 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Top Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/Osama Moussa Logo-01.svg"
                alt="Osama Moussa Logo"
                width={200}
                height={50}
                className={`h-12 w-auto ${backgroundColor === "grey" ? "brightness-0 invert" : ""}`}
                priority
              />
            </Link>
          </div>

          {/* Right Side - Phone, Social Icons, Hamburger */}
          <div className="flex items-center gap-6 mr-4 sm:mr-8">
            {/* Phone Number */}
            <a
              href="tel:07352167642"
              className={`${textColor} font-medium hover:opacity-80 transition-opacity hidden sm:block text-lg`}
            >
              07352167642
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/osama-moussa-1610o/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} hover:opacity-80 transition-opacity shimmer-hover`}
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/mromoussa"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} hover:opacity-80 transition-opacity shimmer-hover`}
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Hamburger Menu - Clickable with Hover Stay */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${textColor} hover:opacity-80 transition-opacity p-2`}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Full Height Menu - Right Aligned Text */}
              {isMenuOpen && (
                <div
                  className="fixed inset-0 z-40"
                  onMouseLeave={() => setIsMenuOpen(false)}
                  style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, auto" }}
                >
                  {/* Blur Backdrop */}
                  <div 
                    className="absolute inset-0 bg-black/20 backdrop-blur-md"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, auto" }}
                  ></div>
                  
                  {/* Close Button - Top Right */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`absolute top-8 right-8 z-[60] ${textColor} hover:opacity-80 transition-all duration-200 p-2 hover:scale-110`}
                    aria-label="Close menu"
                    type="button"
                    style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  
                  {/* Menu Container - Right Aligned */}
                  <nav 
                    className="absolute top-0 right-0 h-full flex items-center justify-end pr-8 sm:pr-12 lg:pr-16 z-50"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}
                  >
                    <div className="flex flex-col gap-6 py-8" style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}>
                      {menuItems.map((item, index) => {
                        const isClicked = clickedItemIndex === index;
                        const shouldSlideOut = clickedItemIndex !== null && index !== clickedItemIndex;
                        // Calculate delay: items before clicked item slide out first (in order), then items after
                        let slideDelay = 0;
                        if (clickedItemIndex !== null && shouldSlideOut) {
                          if (index < clickedItemIndex) {
                            // Items before clicked item: slide out in order (0, 1, 2...)
                            slideDelay = index * 100;
                          } else {
                            // Items after clicked item: slide out after all before items are done
                            slideDelay = clickedItemIndex * 100 + (index - clickedItemIndex) * 100;
                          }
                        }
                        
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              setClickedItemIndex(index);
                              setTransitionPageName(item.pageTitle);
                              
                              // Wait for slide-out animation to complete (600ms for all items), then show page name
                              setTimeout(() => {
                                setIsTransitioning(true);
                                // Navigate after page name appears
                                setTimeout(() => {
                                  router.push(item.href);
                                  setIsMenuOpen(false);
                                  setTimeout(() => {
                                    setClickedItemIndex(null);
                                    setIsTransitioning(false);
                                    setTransitionPageName("");
                                  }, 1500);
                                }, 1000);
                              }, 600);
                            }}
                            className={`${textColor} font-bold text-right text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider transition-all duration-500 relative group pb-2 hover:opacity-80 hover:blur-[0.5px] hover:brightness-110 ${
                              shouldSlideOut ? 'translate-x-full opacity-0' : ''
                            }`}
                            style={{
                              transitionDelay: shouldSlideOut ? `${slideDelay}ms` : '0ms',
                              cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer"
                            }}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </header>
    </>
  );
}

