/**
 * Contact performance tracking for agency analytics (you, not the client).
 * Events: "Contact - Call" | "Contact - WhatsApp" | "Contact - Email"
 * Props: device ("mobile" | "desktop"), source (e.g. "fab", "header", "hero", "contact_page", "procedure_sidebar").
 * View: Vercel project → Analytics. Custom events require Vercel Pro or Enterprise.
 */

import { track } from "@vercel/analytics";

export type ContactAction = "call" | "whatsapp" | "email";

export function getDevice(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  return window.innerWidth >= 640 ? "desktop" : "mobile";
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
  track(eventName, { device, source });
}
