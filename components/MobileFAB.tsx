"use client";

import { useState, useRef, useEffect } from "react";
import { trackContact } from "@/lib/contact-analytics";

const PHONE = "07352167642";
const PHONE_E164 = "447352167642";
const EMAIL = "pa@osamamoussa.co.uk";
const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`;

/** Scroll past this (px) before FAB fades in (keeps it hidden near hero). */
const FAB_VISIBLE_AFTER_SCROLL = 380;

export default function MobileFAB() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > FAB_VISIBLE_AFTER_SCROLL);
    };
    onScroll(); // initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div
      className="fixed bottom-6 right-6 z-[60] sm:hidden flex flex-col items-end transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      ref={panelRef}
    >
      {/* List modal - above FAB; glassmorphic, full-width within safe margin */}
      {open && (
        <div className="absolute bottom-full right-0 mb-2 rounded-2xl min-w-[260px] w-[min(320px,calc(100vw-2rem))] overflow-hidden border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-3 w-full px-5 py-4 text-left text-white hover:bg-white/10 active:bg-white/15 transition-colors"
            onClick={() => {
              trackContact("call", "mobile", "fab");
              setOpen(false);
            }}
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-black/40 text-white shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            <span className="font-semibold">Call Now</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full px-5 py-4 text-left text-white hover:bg-white/10 active:bg-white/15 transition-colors border-t border-white/10"
            onClick={() => {
              trackContact("whatsapp", "mobile", "fab");
              setOpen(false);
            }}
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366]/90 text-white shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <span className="font-semibold">WhatsApp</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 w-full px-5 py-4 text-left text-white hover:bg-white/10 active:bg-white/15 transition-colors border-t border-white/10"
            onClick={() => {
              trackContact("email", "mobile", "fab");
              setOpen(false);
            }}
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-600/80 text-white shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="font-semibold">Email Me</span>
          </a>
        </div>
      )}

      {/* FAB button - white border to match hero buttons */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact menu" : "Contact options"}
        aria-expanded={open}
        className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white bg-black text-white shadow-lg hover:bg-gray-800 active:scale-95 transition-all duration-200"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
