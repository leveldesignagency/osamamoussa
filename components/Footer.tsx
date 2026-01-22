"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-white py-12" style={{ background: 'transparent' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="mb-6 inline-block"
            >
              <Image
                src="/Osama Moussa Logo-01.svg"
                alt="Osama Moussa Logo"
                width={200}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col">
            <ul className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <li>
                <Link
                  href="/about"
                  className="relative text-white hover:text-black uppercase tracking-wide group pb-1 transition-colors duration-200"
                >
                  About
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="text-white/50">|</li>
              <li>
                <Link
                  href="/procedures"
                  className="relative text-white hover:text-black uppercase tracking-wide group pb-1 transition-colors duration-200"
                >
                  Procedures
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="text-white/50">|</li>
              <li>
                <Link
                  href="/research"
                  className="relative text-white hover:text-black uppercase tracking-wide group pb-1 transition-colors duration-200"
                >
                  Research
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="text-white/50">|</li>
              <li>
                <Link
                  href="/reviews"
                  className="relative text-white hover:text-black uppercase tracking-wide group pb-1 transition-colors duration-200"
                >
                  Reviews
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="text-white/50">|</li>
              <li>
                <Link
                  href="/procedures/contact"
                  className="relative text-white hover:text-black uppercase tracking-wide group pb-1 transition-colors duration-200"
                >
                  Contact
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
            {/* Accreditations */}
            <div className="mt-8 flex justify-center">
              <Image
                src="/Osama Moussa Accreditations.png"
                alt="Osama Moussa Accreditations"
                width={1600}
                height={400}
                className="w-full max-w-7xl h-auto"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </nav>

          {/* Social Media & Design Credit */}
          <div className="flex flex-col justify-between items-end">
            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://www.linkedin.com/in/osama-moussa-1610o/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
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
                className="text-white hover:text-black transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Design Credit */}
            <div className="text-sm text-right">
              <p className="mb-2 text-white/70">
                Designed by{" "}
                <Link
                  href="http://www.leveldesignagency.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-black transition-colors duration-200 inline-block"
                >
                  LEVEL DESIGN AGENCY LTD
                </Link>
              </p>
              <div className="text-xs text-white/70 space-x-3">
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-black transition-colors duration-200"
                >
                  Terms and Conditions
                </Link>
                <span className="text-white/70">|</span>
                <Link
                  href="/privacy-policy"
                  className="hover:text-black transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

