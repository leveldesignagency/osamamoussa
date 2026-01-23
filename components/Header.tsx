"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  backgroundColor?: string;
  textColor?: "black" | "white";
}

const menuItems = [
  { href: "/about", label: "ABOUT", pageTitle: "ABOUT" },
  { href: "/procedures", label: "PROCEDURES", pageTitle: "PROCEDURES" },
  { href: "/research", label: "RESEARCH", pageTitle: "RESEARCH" },
  { href: "/reviews", label: "REVIEWS", pageTitle: "REVIEWS" },
  { href: "/procedures/contact", label: "CONTACT", pageTitle: "CONTACT" },
];

export default function Header({ backgroundColor = "transparent", textColor: textColorProp }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItemIndex, setClickedItemIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPageName, setTransitionPageName] = useState<string>("");
  const router = useRouter();

  const bgClass = "bg-transparent";
  // Menu items should always be white when menu is open
  // Use prop if provided, otherwise default logic
  const textColor = isMenuOpen ? "text-white" : (textColorProp === "black" ? "text-black" : (textColorProp === "white" ? "text-white" : (backgroundColor === "grey" ? "text-white" : "text-black")));
  
  // Prevent body scroll when menu is open and pause gradient animation
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Page Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-gradient-grey flex flex-col items-center justify-center">
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
      <div className="container mx-auto pl-4 sm:pl-6 lg:pl-8 pr-2 sm:pr-3 lg:pr-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex-shrink-0 flex-1 sm:flex-none flex justify-center sm:justify-start">
            <Link href="/" className="block">
              <Image
                src="/Osama Moussa Logo-01.svg"
                alt="Osama Moussa Logo"
                width={200}
                height={50}
                className={`h-12 w-auto ${textColorProp === "black" ? "" : (backgroundColor === "grey" ? "brightness-0 invert" : "")}`}
                priority
              />
            </Link>
          </div>

          {/* Right Side - Phone, Social Icons, Hamburger - All together on desktop */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Phone and Social - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-4 sm:gap-6">
            {/* Phone Number */}
            <a
              href="tel:07352167642"
              className={`${textColor} font-medium transition-opacity text-lg phone-number-bounce`}
            >
              {"07352167642".split("").map((char, index) => (
                <span
                  key={index}
                  className="phone-char"
                  style={{
                    animationDelay: `${index * 0.04}s`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/osama-moussa-1610o/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} hover:opacity-60 transition-opacity duration-200`}
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
                className={`${textColor} hover:opacity-60 transition-opacity duration-200`}
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
            </div>

            {/* Hamburger Menu - Always visible on all screens */}
            <div className="relative flex-shrink-0">
              <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} hover:opacity-80 transition-opacity p-2`}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}
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

              {/* Desktop Menu - Right Aligned with Blur Backdrop */}
              {isMenuOpen && (
                <>
                  {/* Mobile Menu - Full Screen White Background (below lg breakpoint) */}
                  <div
                    className="fixed inset-0 z-40 bg-white lg:hidden"
                    style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, auto" }}
                  >
                    {/* Header Bar - Logo Left, Close Button Right */}
                    <div className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                          {/* Logo */}
                          <Link href="/" className="block" onClick={() => setIsMenuOpen(false)}>
                            <Image
                              src="/Osama Moussa Logo-01.svg"
                              alt="Osama Moussa Logo"
                              width={200}
                              height={50}
                              className="h-12 w-auto"
                              priority
                            />
                          </Link>
                          
                          {/* Close Button */}
                          <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[#6E6E6E] hover:opacity-80 transition-all duration-200 p-2"
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
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu Content - Right Aligned Vertical Links */}
                    <div className="flex flex-col h-full pt-32 sm:pt-40 pb-32">
                      <nav 
                        className="flex-1 flex flex-col items-end justify-center px-6 sm:px-8"
                        style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}
                      >
                        <div className="flex flex-col gap-6 sm:gap-8 text-right mobile-menu-nav-group w-full max-w-xs">
                          {menuItems.map((item, index) => {
                            const isClicked = clickedItemIndex === index;
                            const shouldSlideOut = clickedItemIndex !== null && index !== clickedItemIndex;
                            let slideDelay = 0;
                            if (clickedItemIndex !== null && shouldSlideOut) {
                              if (index < clickedItemIndex) {
                                slideDelay = index * 100;
                              } else {
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
                                  
                                  setTimeout(() => {
                                    setIsTransitioning(true);
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
                                className={`text-black font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider mobile-menu-item ${
                                  shouldSlideOut ? 'mobile-menu-transitioning' : ''
                                }`}
                                style={{
                                  transform: shouldSlideOut ? 'translateY(-20px) scale(0.95)' : 'translateY(0) scale(1)',
                                  opacity: shouldSlideOut ? 0 : 1,
                                  transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                                  transitionDelay: shouldSlideOut ? `${slideDelay}ms` : '0ms',
                                  cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer",
                                  paddingTop: '0.75rem',
                                  paddingBottom: '0.75rem'
                                }}
                              >
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      </nav>
                      
                      {/* Contact Info - Bottom Right Aligned */}
                      <div className="px-6 sm:px-8 pb-8">
                        <div className="max-w-xs ml-auto text-right space-y-4">
                          {/* Email */}
                          <a
                            href="mailto:info@osamamoussa.co.uk"
                            className="block text-black font-bold hover:opacity-70 transition-opacity text-base sm:text-lg"
                            style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}
                          >
                            info@osamamoussa.co.uk
                          </a>
                          
                          {/* Phone */}
                          <a
                            href="tel:07352167642"
                            className="block text-black font-bold hover:opacity-70 transition-opacity text-base sm:text-lg"
                            style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}
                          >
                            +44 (0)735 216 7642
                          </a>
                          
                          {/* Social Icons - Black, Right Aligned */}
                          <div className="flex items-center justify-end gap-3 pt-4">
                            <a
                              href="https://www.linkedin.com/in/osama-moussa-1610o/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-200 text-black"
                              aria-label="LinkedIn"
                              style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}
                            >
                              <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
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
                              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-200 text-black"
                              aria-label="X (Twitter)"
                              style={{ cursor: "url('/cursor.svg') 16 16, url('/cursor.png') 16 16, pointer" }}
                            >
                              <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Menu - Right Aligned (lg and above) */}
                  <div
                    className="hidden lg:block fixed inset-0 z-40"
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
                      className="absolute top-0 right-0 h-full flex items-center justify-end pr-8 sm:pr-12 lg:pr-16 z-50 menu-nav-group"
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
                              className={`${textColor} font-bold text-right text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider relative group pb-2 menu-item ${
                                shouldSlideOut ? 'menu-transitioning' : ''
                              }`}
                              style={{
                                transform: shouldSlideOut ? 'translateX(100%)' : 'translateX(0)',
                                opacity: shouldSlideOut ? 0 : 1,
                                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
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
                </>
              )}
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  );
}

