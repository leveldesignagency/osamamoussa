export type HospitalLocation = {
  name: string;
  address: string;
  phone: string;
  website: string;
  mapUrl: string;
  mapLat: number;
  mapLng: number;
  areasServed: string[];
};

export function getHospitalMapEmbedSrc(hospital: HospitalLocation): string {
  return `https://www.google.com/maps?q=${hospital.mapLat},${hospital.mapLng}&hl=en&z=16&output=embed`;
}

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
    mapLat: 51.6482886,
    mapLng: -0.4038784,
    areasServed: [
      "hertfordshire",
      "watford",
      "hemel-hempstead",
      "st-albans",
      "rickmansworth",
      "bushey",
    ],
  },
  {
    name: "Spire Bushey Healthcare",
    address: "Heathbourne Rd, Bushey, WD23 1RD",
    phone: "020 8950 9090",
    website: "https://www.spirehealthcare.com/spire-bushey-hospital/",
    mapUrl:
      "https://www.google.com/maps?sca_esv=5916dc4a4d004541&rlz=1C5CHFA_enGB1104GB1104&biw=1728&bih=993&sxsrf=ADLYWIL5DwE835fzPeMuhnIpY9M8z28RpQ:1719416946508&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIjJidXNoZXkgaGVhbHRoY2FyZSBIZWF0aGJvdXJuZSBSb2FkIEJ1c2hleSBXRDIzIDFSRDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGKIEGIkFSNkbUIIGWP0acAF4AZABAJgBpAKgAdAOqgEGMTAuNy4xuAEDyAEA-AEBmAIQoALFCsICChAAGLADGNYEGEfCAgcQIxiwAhgnwgIIEAAYBxgIGB7CAggQABgFGAcYHsICCBAAGAgYDRgewgILEAAYgAQYhgMYigXCAgYQABgIGB7CAgQQIRgKmAMAiAYBkAYIkgcEMTAuNqAH5IQB&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=KSkYbmX_FHZIMULZu5UksWQY&daddr=Heathbourne+Rd,+Bushey+WD23+1RD",
    mapLat: 51.653659,
    mapLng: -0.360278,
    areasServed: ["hertfordshire", "watford", "bushey", "st-albans"],
  },
  {
    name: "Bishops Wood Hospital",
    address: "Rickmansworth Road, Northwood, HA6 2JW",
    phone: "01923 835 814",
    website:
      "https://www.circlehealthgroup.co.uk/hospitals/bishops-wood-hospital",
    mapUrl:
      "https://www.google.com/maps?rlz=1C5CHFA_enGB1104GB1104&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIGCAMQRRg7MgcIBBAAGIAEMgcIBRAuGIAEMhAIBhAuGK8BGMcBGIAEGI4FMgYIBxBFGDzSAQgyNTY0ajFqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kc1Nr_iUa3ZIMcHNagAmeXaS&daddr=Rickmansworth+Rd,+Northwood+HA6+2JW",
    mapLat: 51.622849,
    mapLng: -0.419722,
    areasServed: [
      "west-london",
      "hertfordshire",
      "chelsea",
      "notting-hill",
      "holland-park",
      "belgravia",
    ],
  },
  {
    name: "The Wellington Hospital",
    address: "8A Wellington Place, London, NW8 9LE",
    phone: "020 3733 5344",
    website: "https://www.hcahealthcare.co.uk/facilities/the-wellington-hospital",
    mapUrl:
      "https://www.google.com/maps/place/The+Wellington+Hospital/@51.5356281,-0.1750156,17z",
    mapLat: 51.5356281,
    mapLng: -0.1750156,
    areasServed: [
      "west-london",
      "chelsea",
      "notting-hill",
      "holland-park",
      "belgravia",
      "fitzrovia",
      "st-johns-wood",
      "central-london",
    ],
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
      "Upper GI Surgeon Hertfordshire | Private Hernia, Reflux and Gallbladder Surgery",
    seoDescription:
      "Consultant Upper GI surgeon in Hertfordshire. Private hernia surgery specialists Hertfordshire – inguinal, umbilical, and abdominal wall repair. Also reflux and gallbladder surgery with Mr Osama Moussa.",
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
      {
        question: "Do you offer private hernia surgery for Hertfordshire patients?",
        answer:
          "Yes. Mr Moussa provides private hernia surgery across Hertfordshire for inguinal, umbilical, epigastric, femoral, and other abdominal wall hernias, with laparoscopic and open options depending on your case.",
      },
    ],
  },
  {
    slug: "hemel-hempstead",
    title: "Gallbladder and Hernia Surgery near Hemel Hempstead",
    seoTitle:
      "Gallbladder & Hernia Surgery Hemel Hempstead | Upper GI Specialist",
    seoDescription:
      "Looking for gallbladder or hernia surgery near Hemel Hempstead? Hernia surgery Hemel Hempstead, gallstone treatment, and gastro / Upper GI specialist care with Mr Osama Moussa. Minimally invasive options available.",
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
      {
        question: "Can I see a hernia or Upper GI specialist near Hemel Hempstead?",
        answer:
          "Yes. Mr Osama Moussa sees patients near Hemel Hempstead for hernia surgery, gallbladder and gallstone treatment, and Upper GI / gastro-oesophageal conditions, with private and NHS pathways available.",
      },
    ],
  },
  {
    slug: "chelsea",
    title: "Upper GI Surgeon in Chelsea",
    seoTitle:
      "Upper GI Surgeon Chelsea | Reflux, Hernia and Gallbladder Surgery",
    seoDescription:
      "Consultant Upper GI surgeon serving Chelsea. Mr Osama Moussa offers specialist assessment and minimally invasive surgery for reflux, hernia and gallbladder conditions.",
    intro: [
      "Mr Osama Moussa supports patients in Chelsea with consultant Upper GI and general surgical care, including diagnostics, second opinions, and surgery where needed.",
      "Common presentations include reflux symptoms, hernia discomfort, and biliary pain. Surgical planning is personalised with clear discussion of risks, benefits, and recovery.",
    ],
    nearbyAreas: ["Belgravia", "South Kensington", "Knightsbridge", "Westminster"],
    highlights: [
      "Specialist consultant-led Upper GI care",
      "Laparoscopic and robotic options for suitable patients",
      "Access to private hospital pathways in London",
    ],
    relatedProcedureSlugs: [
      "gastroesophageal-reflux-disease-gord",
      "hernia-repair-surgery",
      "gallbladder-surgery-cholecystectomy",
      "robotic-surgery",
    ],
    faqs: [
      {
        question: "Can I get treatment for acid reflux in Chelsea?",
        answer:
          "Yes. Reflux and hiatus hernia are assessed with a tailored workup and treated using medical or surgical pathways such as anti-reflux surgery when indicated.",
      },
      {
        question: "Is keyhole surgery available for Chelsea patients?",
        answer:
          "Yes. Laparoscopic surgery is commonly used for hernia and gallbladder procedures and may allow faster recovery in suitable cases.",
      },
    ],
  },
  {
    slug: "notting-hill",
    title: "Upper GI Surgeon in Notting Hill",
    seoTitle:
      "Upper GI Surgeon Notting Hill | Hernia, Reflux and Laparoscopic Surgery",
    seoDescription:
      "Mr Osama Moussa provides specialist Upper GI consultation for Notting Hill patients, including hernia repair, reflux treatment, and gallbladder surgery.",
    intro: [
      "Patients in Notting Hill can access specialist Upper GI assessment and treatment planning with Mr Osama Moussa for benign oesophagogastric and general surgical conditions.",
      "Care pathways focus on symptom control, accurate diagnosis, and minimally invasive surgery where appropriate.",
    ],
    nearbyAreas: ["Holland Park", "Kensington", "Paddington", "Ladbroke Grove"],
    highlights: [
      "Comprehensive consultant assessment before surgery",
      "Modern minimally invasive techniques",
      "Structured follow-up after treatment",
    ],
    relatedProcedureSlugs: [
      "laparoscopic-surgery",
      "gastroesophageal-reflux-disease-gord",
      "hernia-repair-surgery",
      "advanced-upper-gastrointestinal-gi-surgery",
    ],
    faqs: [
      {
        question: "What symptoms should I discuss with an Upper GI surgeon?",
        answer:
          "Persistent reflux, swallowing issues, upper abdominal pain, hernia discomfort, or recurrent gallbladder attacks should be reviewed with specialist input.",
      },
      {
        question: "Do you treat hernias for Notting Hill patients?",
        answer:
          "Yes. Inguinal, ventral, umbilical and other abdominal wall hernias are assessed with treatment tailored to symptoms, examination findings, and patient goals.",
      },
    ],
  },
  {
    slug: "watford",
    title: "Upper GI Surgeon in Watford",
    seoTitle:
      "Upper GI Surgeon Watford | Inguinal Hernia and Gallbladder Surgery",
    seoDescription:
      "Consultant Upper GI surgeon in Watford. Mr Osama Moussa treats reflux, hernia, and gallbladder conditions with laparoscopic and robotic options.",
    intro: [
      "Mr Osama Moussa provides Upper GI and general surgery care for patients in Watford, including common conditions such as inguinal hernia and gallbladder disease.",
      "Where surgery is indicated, minimally invasive pathways are offered whenever clinically suitable to support recovery.",
    ],
    nearbyAreas: ["Bushey", "Rickmansworth", "Northwood", "Hemel Hempstead"],
    highlights: [
      "Strong focus on hernia and gallbladder pathways",
      "Consultant-led diagnosis, treatment, and follow-up",
      "Accessible hospital options in and around Watford",
    ],
    relatedProcedureSlugs: [
      "inguinal-hernia-surgery",
      "hernia-repair-surgery",
      "gallbladder-surgery-cholecystectomy",
      "laparoscopic-surgery",
    ],
    faqs: [
      {
        question: "Can I see a hernia surgeon in Watford?",
        answer:
          "Yes. Hernia consultations include symptom review, examination, and discussion of watchful waiting versus repair, including laparoscopic techniques where appropriate.",
      },
      {
        question: "Do you offer gallbladder removal surgery in Watford?",
        answer:
          "Yes. Laparoscopic cholecystectomy is offered when clinically indicated following assessment and imaging review.",
      },
    ],
  },
  {
    slug: "st-albans",
    title: "Upper GI Surgeon near St Albans",
    seoTitle:
      "Upper GI Surgeon St Albans | Reflux, Hernia and Gallbladder Treatment",
    seoDescription:
      "Upper GI specialist care near St Albans with Mr Osama Moussa, including reflux surgery, hernia repair, and gallbladder treatment.",
    intro: [
      "Patients from St Albans can access specialist consultation for reflux, gallbladder, and hernia symptoms with clear pathways for investigation and treatment.",
      "Management may include conservative care or minimally invasive surgery depending on diagnosis and symptom burden.",
    ],
    nearbyAreas: ["St Albans", "Harpenden", "Radlett", "Watford"],
    highlights: [
      "Specialist benign Upper GI focus",
      "Tailored care plans and follow-up",
      "Access to nearby hospital consultation options",
    ],
    relatedProcedureSlugs: [
      "gastroesophageal-reflux-disease-gord",
      "gallbladder-surgery-cholecystectomy",
      "inguinal-hernia-surgery",
      "laparoscopic-surgery",
    ],
    faqs: [
      {
        question: "Do you see patients from St Albans for reflux surgery?",
        answer:
          "Yes. Reflux-related symptoms can be assessed with appropriate tests and treated with medical or surgical options such as fundoplication where suitable.",
      },
      {
        question: "Is laparoscopic hernia surgery available near St Albans?",
        answer:
          "Yes. Many hernia repairs can be performed laparoscopically, depending on hernia type and individual clinical factors.",
      },
    ],
  },
  {
    slug: "bushey",
    title: "Upper GI Surgeon in Bushey",
    seoTitle:
      "Upper GI Surgeon Bushey | Hernia Repair and Gallbladder Surgery",
    seoDescription:
      "Mr Osama Moussa provides consultant Upper GI and general surgery care in Bushey, including hernia, reflux, and gallbladder treatment pathways.",
    intro: [
      "Bushey patients can access specialist Upper GI and hernia care with a consultant-led pathway from initial assessment to post-operative follow-up.",
      "Treatment options include laparoscopic and robotic approaches where clinically appropriate.",
    ],
    nearbyAreas: ["Watford", "Stanmore", "Elstree", "Northwood"],
    highlights: [
      "Minimally invasive surgery expertise",
      "Clear communication around treatment options",
      "Convenient local private hospital access",
    ],
    relatedProcedureSlugs: [
      "hernia-repair-surgery",
      "inguinal-hernia-surgery",
      "gallbladder-surgery-cholecystectomy",
      "robotic-surgery",
    ],
    faqs: [
      {
        question: "What hernia types are treated for Bushey patients?",
        answer:
          "Inguinal, ventral, epigastric, and umbilical hernias are commonly assessed, with recommendations based on symptoms and examination findings.",
      },
      {
        question: "Can I book a consultation from Bushey for gallbladder symptoms?",
        answer:
          "Yes. Gallbladder symptoms can be reviewed with scan findings and treatment options discussed, including keyhole surgery where indicated.",
      },
    ],
  },
  {
    slug: "holland-park",
    title: "Upper GI Surgeon in Holland Park",
    seoTitle:
      "Upper GI Surgeon Holland Park | Reflux, Hernia and Robotic Surgery",
    seoDescription:
      "Specialist Upper GI care for Holland Park patients with Mr Osama Moussa, including reflux treatment, hernia repair, and robotic surgery options.",
    intro: [
      "Holland Park patients can access specialist assessment for benign Upper GI and abdominal wall conditions with consultant-led treatment planning.",
      "Minimally invasive surgery options are considered where they are likely to improve recovery and outcomes.",
    ],
    nearbyAreas: ["Notting Hill", "Kensington", "Shepherd's Bush", "West London"],
    highlights: [
      "Expertise in reflux and hernia pathways",
      "Laparoscopic and robotic surgical techniques",
      "Focused post-operative recovery planning",
    ],
    relatedProcedureSlugs: [
      "gastroesophageal-reflux-disease-gord",
      "hernia-repair-surgery",
      "robotic-surgery",
      "advanced-upper-gastrointestinal-gi-surgery",
    ],
    faqs: [
      {
        question: "Is robotic surgery available for Holland Park patients?",
        answer:
          "Yes. Robotic surgery may be offered for selected Upper GI and hernia conditions after individual assessment and discussion of options.",
      },
      {
        question: "Can reflux and hiatus hernia be managed together?",
        answer:
          "Yes. Reflux and hiatus hernia often overlap and are frequently managed together with a combined diagnostic and treatment pathway.",
      },
    ],
  },
  {
    slug: "belgravia",
    title: "Upper GI Surgeon in Belgravia",
    seoTitle:
      "Upper GI Surgeon Belgravia | Hernia, Reflux and Gallbladder Specialist",
    seoDescription:
      "Consultant Upper GI surgeon for Belgravia patients. Mr Osama Moussa offers specialist treatment for reflux, hernia, and gallbladder conditions.",
    intro: [
      "Mr Osama Moussa provides consultant Upper GI care for Belgravia patients seeking specialist opinion and treatment for benign oesophagogastric and general surgical conditions.",
      "Care includes full assessment, diagnostic planning, and minimally invasive surgical options where appropriate.",
    ],
    nearbyAreas: ["Chelsea", "Victoria", "Knightsbridge", "Pimlico"],
    highlights: [
      "Specialist consultant assessment",
      "Evidence-based treatment planning",
      "Access to central and west London hospital pathways",
    ],
    relatedProcedureSlugs: [
      "gastroesophageal-reflux-disease-gord",
      "hernia-repair-surgery",
      "gallbladder-surgery-cholecystectomy",
      "laparoscopic-surgery",
    ],
    faqs: [
      {
        question: "Which surgeries are most common for Belgravia patients?",
        answer:
          "Common pathways include reflux surgery, hernia repair, and laparoscopic gallbladder surgery depending on diagnosis and symptom severity.",
      },
      {
        question: "Do you offer second opinions for Upper GI surgery?",
        answer:
          "Yes. Second opinions are available to review diagnosis, scan findings, and treatment plans before deciding on surgery.",
      },
    ],
  },
  {
    slug: "fitzrovia",
    title: "Upper GI Surgeon in Fitzrovia",
    seoTitle:
      "Upper GI Surgeon Fitzrovia | Laparoscopic and Robotic Surgery",
    seoDescription:
      "Mr Osama Moussa offers consultant Upper GI care for Fitzrovia patients, including reflux, hernia, and gallbladder treatment with minimally invasive techniques.",
    intro: [
      "Patients in Fitzrovia can access specialist Upper GI and abdominal wall care with a consultant-led process from diagnosis through treatment.",
      "Where surgery is recommended, laparoscopic and robotic approaches are considered based on individual needs and clinical suitability.",
    ],
    nearbyAreas: ["Marylebone", "Bloomsbury", "Soho", "Regent's Park"],
    highlights: [
      "Focused benign Upper GI expertise",
      "Minimally invasive surgery pathways",
      "Structured aftercare and follow-up",
    ],
    relatedProcedureSlugs: [
      "laparoscopic-surgery",
      "robotic-surgery",
      "gastroesophageal-reflux-disease-gord",
      "hernia-repair-surgery",
    ],
    faqs: [
      {
        question: "Can I be treated for reflux near Fitzrovia?",
        answer:
          "Yes. Reflux symptoms can be assessed comprehensively and managed with non-operative or surgical treatment depending on findings and symptom severity.",
      },
      {
        question: "Are robotic procedures available for Fitzrovia patients?",
        answer:
          "Yes. Robotic surgery may be suitable for selected conditions and is discussed alongside laparoscopic and open alternatives.",
      },
    ],
  },
  {
    slug: "rickmansworth",
    title: "Upper GI Surgeon near Rickmansworth",
    seoTitle:
      "Upper GI Surgeon Rickmansworth | Hernia and Gallbladder Treatment",
    seoDescription:
      "Consultant Upper GI surgeon near Rickmansworth for hernia repair, gallbladder surgery, and reflux management with minimally invasive options.",
    intro: [
      "Rickmansworth patients can access specialist Upper GI consultation for hernia, reflux, and gallbladder symptoms with clear pathways for treatment.",
      "Where surgery is needed, minimally invasive options are considered to support recovery and reduce time in hospital.",
    ],
    nearbyAreas: ["Northwood", "Watford", "Croxley", "Bushey"],
    highlights: [
      "Common hernia and gallbladder pathways covered",
      "Consultant-led assessment and planning",
      "Nearby hospital access for appointments and surgery",
    ],
    relatedProcedureSlugs: [
      "inguinal-hernia-surgery",
      "hernia-repair-surgery",
      "gallbladder-surgery-cholecystectomy",
      "laparoscopic-surgery",
    ],
    faqs: [
      {
        question: "Do you treat inguinal hernias near Rickmansworth?",
        answer:
          "Yes. Inguinal hernia repair options are discussed based on symptoms, activity levels, and hernia characteristics.",
      },
      {
        question: "Can gallbladder surgery be done as keyhole surgery?",
        answer:
          "Yes. Laparoscopic cholecystectomy is commonly used where appropriate after clinical assessment and scan review.",
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
