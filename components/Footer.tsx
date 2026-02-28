"use client";

import Image from "next/image";
import Link from "next/link";

const ACCREDITATION_LINKS = [
  { url: "https://www.rcseng.ac.uk/", name: "Royal College of Surgeons of England", src: "/VECTORS-01.png" },
  { url: "https://www.bma.org.uk/", name: "British Medical Association", src: "/VECTORS-02.png" },
  { url: "https://bomss.org/", name: "BOMSS", src: "/VECTORS-03.png" },
  { url: "https://www.augis.org/", name: "AUGIS", src: "/VECTORS-04.png" },
  { url: "https://www.ifso.com/", name: "IFSO", src: "/VECTORS-05.png" },
];

export default function Footer() {
  return (
    <footer className="w-full text-white min-h-[100dvh] sm:min-h-0 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full sm:h-auto">
        {/* Mobile */}
        <div className="flex flex-col sm:hidden justify-between min-h-[calc(100dvh-2rem)] py-10">
          <div className="flex flex-col items-center gap-8">
            <Link href="/" className="inline-block">
              <Image
                src="/Osama Moussa Logo-01.svg"
                alt="Osama Moussa Logo"
                width={200}
                height={50}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <nav className="flex flex-col items-center gap-5" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              <Link href="/about" className="text-white/90 hover:text-white uppercase tracking-widest text-xl font-semibold transition-colors">
                About
              </Link>
              <Link href="/procedures" className="text-white/90 hover:text-white uppercase tracking-widest text-xl font-semibold transition-colors">
                Procedures
              </Link>
              <Link href="/research" className="text-white/90 hover:text-white uppercase tracking-widest text-xl font-semibold transition-colors">
                Research
              </Link>
              <Link href="/reviews" className="text-white/90 hover:text-white uppercase tracking-widest text-xl font-semibold transition-colors">
                Reviews
              </Link>
              <Link href="/procedures/contact" className="text-white/90 hover:text-white uppercase tracking-widest text-xl font-semibold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Accreditations - mobile: 2 rows (3 top, 2 bottom), bigger; desktop has its own band below */}
          <div className="flex flex-col items-center py-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">Accreditations & memberships</p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-center items-center gap-4 sm:gap-5">
                {ACCREDITATION_LINKS.slice(0, 3).map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="transition-all duration-200 hover:opacity-90 hover:scale-105"
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={200}
                      height={108}
                      className="h-20 w-auto max-w-[140px] object-contain brightness-0 invert"
                    />
                  </a>
                ))}
              </div>
              <div className="flex justify-center items-center gap-4 sm:gap-5">
                {ACCREDITATION_LINKS.slice(3, 5).map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="transition-all duration-200 hover:opacity-90 hover:scale-105"
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={200}
                      height={108}
                      className="h-20 w-auto max-w-[140px] object-contain brightness-0 invert"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/osama-moussa-1610o/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://x.com/mromoussa" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <div className="text-center text-[11px] text-white/50 space-y-1">
              <p>
                Designed by{" "}
                <Link href="http://www.leveldesignagency.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  LEVEL DESIGN AGENCY LTD
                </Link>
              </p>
              <div className="flex items-center justify-center gap-2">
                <Link href="/terms-and-conditions" className="hover:text-white/80 transition-colors">Terms</Link>
                <span className="text-white/40">·</span>
                <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden sm:block">
          {/* Top row: equal-width sides so nav is truly centred */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 py-8 lg:py-10">
            <div className="flex justify-start">
              <Link href="/" className="shrink-0">
                <Image
                  src="/Osama Moussa Logo-01.svg"
                  alt="Osama Moussa Logo"
                  width={200}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <nav className="flex items-center gap-1 flex-wrap justify-center" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              <Link href="/about" className="px-3 py-2 text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">About</Link>
              <span className="text-white/30">|</span>
              <Link href="/procedures" className="px-3 py-2 text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">Procedures</Link>
              <span className="text-white/30">|</span>
              <Link href="/research" className="px-3 py-2 text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">Research</Link>
              <span className="text-white/30">|</span>
              <Link href="/reviews" className="px-3 py-2 text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">Reviews</Link>
              <span className="text-white/30">|</span>
              <Link href="/procedures/contact" className="px-3 py-2 text-white/80 hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors">Contact</Link>
            </nav>
            <div className="flex justify-end">
              <div className="flex items-center gap-5 shrink-0">
              <a href="https://www.linkedin.com/in/osama-moussa-1610o/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://x.com/mromoussa" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
            </div>
          </div>

          {/* Accreditations band - full width, bigger icons */}
          <div className="border-t border-white/10 py-8 lg:py-10">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 text-center mb-6">Accreditations & memberships</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-10">
              {ACCREDITATION_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="transition-all duration-200 hover:opacity-90 hover:scale-105"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={240}
                    height={130}
                    className="h-20 lg:h-24 xl:h-28 w-auto object-contain brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 py-4 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/50">
            <p>
              Designed by{" "}
              <Link href="http://www.leveldesignagency.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                LEVEL DESIGN AGENCY LTD
              </Link>
            </p>
            <div className="flex items-center gap-3">
              <Link href="/terms-and-conditions" className="hover:text-white/80 transition-colors">Terms and Conditions</Link>
              <span className="text-white/30">·</span>
              <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
