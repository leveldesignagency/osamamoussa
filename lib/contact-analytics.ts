/**
 * Contact performance tracking for agency analytics (you, not the client).
 * Events: "Contact - Call" | "Contact - WhatsApp" | "Contact - Email" | "CTA - Book Now"
 * Props: device ("mobile" | "desktop"), source (e.g. "fab", "header", "hero", "contact_page", "procedure_sidebar").
 *
 * FREE: Google Analytics 4 — set NEXT_PUBLIC_GA_ID in .env.local, then view in GA4 → Reports → Engagement → Events.
 * Optional: Vercel Analytics Pro shows custom events in the Vercel dashboard.
 */

import { track } from "@vercel/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type ContactAction = "call" | "whatsapp" | "email";

export function getDevice(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  return window.innerWidth >= 640 ? "desktop" : "mobile";
}

function sendToGA4(eventName: string, params: Record<string, string>): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export function trackContact(
  action: ContactAction,
  device: "mobile" | "desktop",
  source: string
): void {
  const eventName =
    action === "call"
      ? "Contact - Call"
      : action === "whatsapp"
        ? "Contact - WhatsApp"
        : "Contact - Email";
  const params = { device, source };
  sendToGA4(eventName, params);
  track(eventName, params);
}

/** Track CTA clicks (e.g. Book Now). Event: "CTA - Book Now" with props device, source. */
export function trackCTAClick(ctaName: string, source: string): void {
  const eventName = `CTA - ${ctaName}`;
  const params = { device: getDevice(), source };
  sendToGA4(eventName, params);
  track(eventName, params);
}
