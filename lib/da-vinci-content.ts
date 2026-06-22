/** Intuitive Surgical press resources - terms: https://www.intuitive.com/en-us/about-us/newsroom/press-resources */

export const INTUITIVE_COPYRIGHT = "Copyright © 2025–2026 Intuitive Surgical Operations, Inc.";

export const INTUITIVE_PRESS_URL =
  "https://www.intuitive.com/en-us/about-us/newsroom/press-resources";

export const daVinciHero = {
  eyebrow: "Robotic surgery · London & Hertfordshire",
  title: "The da Vinci\nsurgical system",
  subtitle:
    "Surgeon-controlled robotic technology for selected Upper GI and general surgical procedures, delivered by Mr Osama Moussa at NHS and private hospitals.",
  videoSrc: "/davinci/da-vinci-5-promotional.mp4",
  posterSrc: "/davinci/da-vinci-5-console-or.jpg",
  videoCopyright: INTUITIVE_COPYRIGHT,
} as const;

export const surgeonSection = {
  heading: "Surgeon-controlled precision",
  paragraphs: [
    "Mr Osama Moussa is a Consultant Upper GI and General Surgeon with extensive experience in minimally invasive surgery. He is trained on both Versius (CMR) and Intuitive (da Vinci) robotic platforms, and uses robotic surgery for selected procedures where it may offer advantages in precision, vision, and recovery.",
    "Robotic surgery is not suitable for every patient or condition. At your consultation, Mr Moussa will discuss whether robotic, laparoscopic, or open surgery is the most appropriate approach for you, based on your diagnosis, anatomy, and overall health.",
  ],
  image: {
    src: "/OM10.jpg",
    alt: "Mr Osama Moussa beside a da Vinci robotic surgical system in theatre",
  },
} as const;

export type DaVinciFeature = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const daVinciFeatures: DaVinciFeature[] = [
  {
    title: "da Vinci 5 surgeon console",
    description:
      "The surgeon sits at an ergonomic console with a magnified, high-definition view of the operative field, controlling instruments with precise, scaled movements and tremor filtration.",
    image: "/davinci/da-vinci-5-console-headrest.jpg",
    alt: "da Vinci 5 surgeon console with ergonomic headrest in an operating room",
  },
  {
    title: "Force feedback technology",
    description:
      "Selected da Vinci systems incorporate force feedback capabilities designed to relay tactile information to the surgeon, supporting careful tissue handling during complex dissection.",
    image: "/davinci/da-vinci-5-force-feedback.jpg",
    alt: "da Vinci 5 force feedback technology on the surgeon console",
  },
  {
    title: "Digital instrument interface",
    description:
      "An integrated digital interface supports efficient instrument management at the console, helping the surgical team maintain focus during demanding Upper GI operations.",
    image: "/davinci/da-vinci-5-digital-interface.jpg",
    alt: "da Vinci 5 digital swap user interface on the surgeon console",
  },
  {
    title: "Complete system configuration",
    description:
      "The da Vinci platform brings together the surgeon console, patient-side cart, and vision tower, a coordinated setup used in leading hospitals for minimally invasive robotic surgery.",
    image: "/davinci/da-vinci-5-system.jpg",
    alt: "Complete da Vinci 5 surgical system in an operating room",
  },
];

export const systemComponents = [
  {
    id: "console",
    label: "Surgeon console",
    image: "/davinci/da-vinci-5-console-or.jpg",
    alt: "da Vinci 5 surgeon console in a hospital operating room",
    text: "From the console, the surgeon controls wristed instruments with a three-dimensional view of the surgical site, translating hand movements into precise motions inside the body.",
  },
  {
    id: "cart",
    label: "Patient cart",
    image: "/davinci/da-vinci-5-patient-cart.jpg",
    alt: "da Vinci 5 patient cart with robotic instrument arms",
    text: "The patient-side cart holds the robotic arms and EndoWrist instruments that enter the body through small incisions, enabling minimally invasive access.",
  },
  {
    id: "tower",
    label: "Vision tower",
    image: "/davinci/da-vinci-5-tower.jpg",
    alt: "da Vinci 5 vision tower and system components",
    text: "The vision tower processes high-definition imaging and supports the surgical team with clear visualisation throughout the procedure.",
  },
  {
    id: "instruments",
    label: "EndoWrist instruments",
    image: "/davinci/endowrist-instruments.jpg",
    alt: "da Vinci Xi EndoWrist surgical instruments",
    text: "Specialised instruments articulate beyond the natural range of the human wrist, supporting precise work in confined spaces, particularly valuable in Upper GI and hernia surgery.",
  },
] as const;

export const videoSection = {
  heading: "Inside the da Vinci platform",
  intro:
    "An overview of the da Vinci surgical system configuration, including the surgeon console, patient cart, and integrated technology that supports minimally invasive robotic procedures.",
  src: "/davinci/da-vinci-system-introduction.mp4",
  poster: "/davinci/da-vinci-xi-system-lineup.jpg",
  copyright: INTUITIVE_COPYRIGHT,
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  span: "normal" | "wide" | "tall" | "hero";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/davinci/da-vinci-5-console-or.jpg",
    alt: "da Vinci 5 surgeon console in a hospital operating room",
    span: "hero",
  },
  {
    src: "/davinci/da-vinci-xi-or-staff.jpg",
    alt: "da Vinci Xi system with operating room staff",
    span: "tall",
  },
  {
    src: "/davinci/surgeon-at-console.jpg",
    alt: "Surgeon at the da Vinci surgeon console in theatre",
    span: "normal",
  },
  {
    src: "/davinci/da-vinci-5-console-headrest.jpg",
    alt: "Surgeon using the da Vinci 5 console in an operating room",
    span: "normal",
  },
  {
    src: "/davinci/or-staff-with-patient-cart.jpg",
    alt: "Operating room staff with the da Vinci patient-side cart",
    span: "wide",
  },
  {
    src: "/davinci/or-staff-with-vision-cart.jpg",
    alt: "Operating room staff with the da Vinci vision cart in theatre",
    span: "normal",
  },
  {
    src: "/davinci/sp-or-setup.jpg",
    alt: "da Vinci SP surgical system set up in an operating room",
    span: "normal",
  },
];

export const proceduresSection = {
  heading: "Conditions Mr Moussa treats robotically",
  intro:
    "Robotic surgery may be considered for selected Upper GI and general surgical conditions. Explore the procedures below, or book a consultation to discuss your options.",
  links: [
    {
      href: "/procedures/hernia-repair-surgery",
      title: "Hernia repair",
      description: "Inguinal, ventral, umbilical, and complex abdominal wall hernias.",
    },
    {
      href: "/procedures/gastroesophageal-reflux-disease-gord",
      title: "Acid reflux (GORD)",
      description: "Fundoplication and anti-reflux surgery for suitable patients.",
    },
    {
      href: "/procedures/gallbladder-surgery-cholecystectomy",
      title: "Gallbladder surgery",
      description: "Laparoscopic and robotic cholecystectomy for gallstones.",
    },
    {
      href: "/procedures/advanced-upper-gastrointestinal-gi-surgery",
      title: "Advanced Upper GI surgery",
      description: "Complex benign Upper GI conditions and minimally invasive options.",
    },
    {
      href: "/procedures/laparoscopic-surgery",
      title: "Laparoscopic surgery",
      description: "Keyhole alternatives when robotics is not required.",
    },
  ],
} as const;

export const complianceNotice = {
  heading: "Image & video attribution",
  paragraphs: [
    "Images and videos on this page are Intuitive Surgical press resources, used in accordance with Intuitive's Press Resources Terms of Use to provide information about medical services utilising Intuitive products.",
    "Intuitive Surgical, Inc. does not endorse, sponsor, or approve Mr Osama Moussa or this website. Nothing on this page represents Intuitive's views or opinions.",
    "Robotic systems and procedures shown are subject to applicable regulatory clearance. Mr Moussa uses robotic technology only for indications consistent with official product labelling and his clinical judgement. Suitability for robotic surgery is assessed individually at consultation.",
  ],
  copyright: INTUITIVE_COPYRIGHT,
  pressUrl: INTUITIVE_PRESS_URL,
} as const;
