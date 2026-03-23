export type HospitalLocation = {
  name: string;
  address: string;
  phone: string;
  website: string;
  mapUrl: string;
  areasServed: string[];
};

export type LocationPage = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  nearbyAreas: string[];
  highlights: string[];
  relatedProcedureSlugs: string[];
  faqs: { question: string; answer: string }[];
};

export const hospitals: HospitalLocation[] = [
  {
    name: "West Hertfordshire NHS Trust",
    address: "Vicarage Road, Watford, WD18 0HB",
    phone: "01923 244 366",
    website: "https://www.westhertshospitals.nhs.uk/",
    mapUrl:
      "https://www.google.com/maps/place/Watford+General+Hospital/@51.6495051,-0.4062333,17z/data=!4m9!1m2!2m1!1sVicarage+Road+Watford+WDS8+0HB!3m5!1s0x48766add427ddfd1:0xe6737457e2df3710!8m2!3d51.6482886!4d-0.4038784!16s%2Fm%2F0m0q811?entry=ttu",
    areasServed: ["hertfordshire", "watford", "hemel-hempstead"],
  },
  {
    name: "Spire Bushey Healthcare",
    address: "Heathbourne Rd, Bushey, WD23 1RD",
    phone: "020 8950 9090",
    website: "https://www.spirehealthcare.com/spire-bushey-hospital/",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5916dc4a4d004541&rlz=1C5CHFA_enGB1104GB1104&biw=1728&bih=993&sxsrf=ADLYWIL5DwE835fzPeMuhnIpY9M8z28RpQ:1719416946508&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIjJidXNoZXkgaGVhbHRoY2FyZSBIZWF0aGJvdXJuZSBSb2FkIEJ1c2hleSBXRDIzIDFSRDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGKIEGIkFSNkbUIIGWP0acAF4AZABAJgBpAKgAdAOqgEGMTAuNy4xuAEDyAEA-AEBmAIQoALFCsICChAAGLADGNYEGEfCAgcQIxiwAhgnwgIIEAAYBxgIGB7CAggQABgFGAcYHsICCBAAGAgYDRgewgILEAAYgAQYhgMYigXCAgYQABgIGB7CAgQQIRgKmAMAiAYBkAYIkgcEMTAuNqAH5IQB&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=KSkYbmX_FHZIMULZu5UksWQY&daddr=Heathbourne+Rd,+Bushey+WD23+1RD",
    areasServed: ["hertfordshire", "watford"],
  },
  {
    name: "Bishops Wood Hospital",
    address: "Rickmansworth Road, Northwood, HA6 2JW",
    phone: "01923 835 814",
    website:
      "https://www.circlehealthgroup.co.uk/hospitals/bishops-wood-hospital",
    mapUrl:
      "https://www.google.com/maps?rlz=1C5CHFA_enGB1104GB1104&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIGCAMQRRg7MgcIBBAAGIAEMgcIBRAuGIAEMhAIBhAuGK8BGMcBGIAEGI4FMgYIBxBFGDzSAQgyNTY0ajFqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kc1Nr_iUa3ZIMcHNagAmeXaS&daddr=Rickmansworth+Rd,+Northwood+HA6+2JW",
    areasServed: ["west-london", "hertfordshire"],
  },
  {
    name: "The Wellington Hospital",
    address: "8A Wellington Place, London, NW8 9LE",
    phone: "020 3733 5344",
    website: "https://www.hcahealthcare.co.uk/facilities/the-wellington-hospital",
    mapUrl:
      "https://www.google.com/maps/place/The+Wellington+Hospital/@51.5356281,-0.1750156,17z",
    areasServed: ["west-london"],
  },
];

export const locationPages: LocationPage[] = [
  {
    slug: "west-london",
    title: "Upper GI Surgeon in West London",
    seoTitle:
      "Upper GI Surgeon West London | Hernia, Reflux and Gallbladder Surgery",
    seoDescription:
      "Mr Osama Moussa is a Consultant Upper GI surgeon serving West London, offering laparoscopic and robotic surgery for reflux, hernia, and gallbladder conditions.",
    intro: [
      "Mr Osama Moussa provides consultant-led Upper GI and general surgical care for patients in West London, with access to private hospital appointments and planned surgery pathways.",
      "His practice covers common Upper GI conditions including acid reflux (GORD), hernia disease, and gallbladder problems, with minimally invasive laparoscopic and robotic options where suitable.",
    ],
    nearbyAreas: ["Chelsea", "Belgravia", "Fitzrovia", "Holland Park", "St John's Wood"],
    highlights: [
      "Consultant-led assessment and treatment planning",
      "Laparoscopic and robotic expertise for suitable cases",
      "Private consultation options with central/west London access",
    ],
    relatedProcedureSlugs: [
      "gastroesophageal-reflux-disease-gord",
      "hernia-repair-surgery",
      "gallbladder-surgery-cholecystectomy",
      "robotic-surgery",
    ],
    faqs: [
      {
        question: "What conditions does an Upper GI surgeon treat in West London?",
        answer:
          "Common conditions include acid reflux (GORD), hiatus hernia, inguinal and abdominal wall hernias, and gallbladder disease. Mr Moussa offers assessment and treatment planning based on symptoms, imaging, and endoscopy findings.",
      },
      {
        question: "Is robotic surgery available for West London patients?",
        answer:
          "Yes. Robotic surgery may be appropriate for selected Upper GI and hernia procedures. Mr Moussa is trained on both Versius and Intuitive robotic platforms and will advise whether robotic or laparoscopic surgery is best for your case.",
      },
    ],
  },
  {
    slug: "hertfordshire",
    title: "Upper GI Surgeon in Hertfordshire",
    seoTitle:
      "Upper GI Surgeon Hertfordshire | Inguinal Hernia, Reflux and Gallbladder Surgery",
    seoDescription:
      "Consultant Upper GI surgeon in Hertfordshire. Mr Osama Moussa offers laparoscopic and robotic surgery for reflux, hernia repair, and gallbladder conditions.",
    intro: [
      "Mr Osama Moussa supports patients across Hertfordshire with consultant Upper GI and general surgical care, including diagnosis, specialist opinion, and surgery where required.",
      "Many Hertfordshire patients are referred for inguinal hernia, abdominal wall hernia, acid reflux symptoms, and gallbladder pain. Treatment is tailored to each patient with clear follow-up planning.",
    ],
    nearbyAreas: ["Watford", "Bushey", "Hemel Hempstead", "St Albans", "Rickmansworth"],
    highlights: [
      "Direct access to specialist Upper GI assessment",
      "Experienced in keyhole surgery with modern minimally invasive techniques",
      "Convenient hospital options for Hertfordshire residents",
    ],
    relatedProcedureSlugs: [
      "inguinal-hernia-surgery",
      "hernia-repair-surgery",
      "gallbladder-surgery-cholecystectomy",
      "laparoscopic-surgery",
    ],
    faqs: [
      {
        question: "Can I see a hernia surgeon in Hertfordshire?",
        answer:
          "Yes. Mr Moussa sees Hertfordshire patients with inguinal, ventral, umbilical, and other abdominal wall hernias. He discusses non-operative management and surgical options based on your symptoms and examination.",
      },
      {
        question: "Do you treat gallbladder problems for Hertfordshire patients?",
        answer:
          "Yes. Gallbladder disease, including recurrent biliary pain and stones, is commonly managed with laparoscopic cholecystectomy when indicated after clinical review and scans.",
      },
    ],
  },
  {
    slug: "hemel-hempstead",
    title: "Gallbladder and Hernia Surgery near Hemel Hempstead",
    seoTitle:
      "Gallbladder Surgery Hemel Hempstead | Hernia and Laparoscopic Upper GI Surgery",
    seoDescription:
      "Looking for gallbladder or hernia surgery near Hemel Hempstead? Mr Osama Moussa provides specialist Upper GI consultation and minimally invasive surgery options.",
    intro: [
      "Patients searching for gallbladder surgery in Hemel Hempstead can access specialist Upper GI assessment and treatment pathways with Mr Osama Moussa.",
      "He also manages common hernia and reflux conditions, with laparoscopic and robotic techniques where clinically appropriate.",
    ],
    nearbyAreas: ["Hemel Hempstead", "Kings Langley", "Berkhamsted", "Watford"],
    highlights: [
      "Focused care for gallbladder and hernia symptoms",
      "Structured pre-op and post-op pathway",
      "Hospital access within reach of Hemel Hempstead",
    ],
    relatedProcedureSlugs: [
      "gallbladder-surgery-cholecystectomy",
      "inguinal-hernia-surgery",
      "laparoscopic-surgery",
      "advanced-upper-gastrointestinal-gi-surgery",
    ],
    faqs: [
      {
        question: "How quickly can I be seen for gallbladder symptoms near Hemel Hempstead?",
        answer:
          "Appointment timing depends on clinic availability and urgency, but you can arrange a consultation to review symptoms, scans, and treatment options including keyhole gallbladder surgery where indicated.",
      },
      {
        question: "Do you offer laparoscopic surgery for Hemel Hempstead patients?",
        answer:
          "Yes. Laparoscopic surgery is often used for gallbladder and hernia operations and may provide faster recovery compared with open surgery in suitable patients.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}

export function getLocationSlugs() {
  return locationPages.map((location) => location.slug);
}
