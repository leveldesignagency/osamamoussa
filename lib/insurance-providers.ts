/**
 * Private medical insurers shown on the homepage marquee and /insurance page.
 * Links open each insurer’s main website homepage (opens in a new tab).
 */

export type InsuranceProvider = {
  id: string;
  name: string;
  logoSrc: string;
  /** Insurer’s main website homepage */
  contactUrl: string;
  /** Short label for the quick-link button */
  linkLabel: string;
};

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  {
    id: "aviva",
    name: "Aviva",
    logoSrc: "/aviva.png",
    contactUrl: "https://www.aviva.co.uk/",
    linkLabel: "Aviva website",
  },
  {
    id: "aetna",
    name: "Aetna International",
    logoSrc: "/aetna.png",
    contactUrl: "https://www.aetnainternational.com/",
    linkLabel: "Aetna website",
  },
  {
    id: "axa",
    name: "AXA Health",
    logoSrc: "/axa health.jpg",
    contactUrl: "https://www.axahealth.co.uk/",
    linkLabel: "AXA Health website",
  },
  {
    id: "bupa",
    name: "Bupa",
    logoSrc: "/bupda.jpg",
    contactUrl: "https://www.bupa.co.uk/",
    linkLabel: "Bupa website",
  },
  {
    id: "alliance",
    name: "Alliance Healthcare",
    logoSrc: "/Alliance_Healthcare_logo.svg.png",
    contactUrl: "https://www.alliancehealthcare.co.uk/",
    linkLabel: "Alliance Healthcare website",
  },
  {
    id: "cigna",
    name: "Cigna",
    logoSrc: "/cigna.jpg",
    contactUrl: "https://www.cigna.co.uk/",
    linkLabel: "Cigna website",
  },
  {
    id: "vitality",
    name: "Vitality",
    logoSrc: "/vitality.png",
    contactUrl: "https://www.vitality.co.uk/",
    linkLabel: "Vitality website",
  },
  {
    id: "healix",
    name: "Healix",
    logoSrc: "/healix.png",
    contactUrl: "https://www.healix.com/",
    linkLabel: "Healix website",
  },
  {
    id: "wpa",
    name: "WPA",
    logoSrc: "/wpa.png",
    contactUrl: "https://www.wpa.org.uk/",
    linkLabel: "WPA website",
  },
  {
    id: "allianz",
    name: "Allianz Care",
    logoSrc: "/allianz.png",
    contactUrl: "https://www.allianzcare.com/",
    linkLabel: "Allianz Care website",
  },
];

export function isAxaLogo(logoSrc: string): boolean {
  return logoSrc === "/axa health.jpg";
}
