"use client";

import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProceduresPage() {
  const procedures = [
    {
      title: "Advanced Upper Gastrointestinal (GI) Surgery",
      description:
        "Specialising in Upper Gastrointestinal (GI) Surgery, Osama offers advanced surgical solutions to address a wide range of conditions affecting the upper digestive tract with precision and expertise. With a commitment to patient-centred care and the latest surgical techniques, he ensures that each procedure is tailored to meet the unique needs of the patient while promoting optimal outcomes and improved quality of life.",
      image: "/Advanced UGI surgery.jpg",
      imageLeft: true,
    },
    {
      title: "Laparoscopic Surgery",
      description:
        "Osama utilises laparoscopic surgery to perform minimally invasive procedures on the upper gastrointestinal tract, including conditions such as hernias and gallbladder issues. With smaller incisions and advanced technology, laparoscopic surgery offers patients faster recovery times and reduced post-operative pain.",
      image: "/laparoscopic-surgery.jpeg",
      imageLeft: false,
    },
    {
      title: "Robotic Surgery",
      description:
        "Employing state-of-the-art robotic technology, Osama performs complex upper GI surgeries with enhanced precision and control. Robotic surgery allows for intricate procedures with minimal trauma to surrounding tissues, resulting in shorter hospital stays and improved patient outcomes.",
      image: "/Robotic surgery.webp",
      imageLeft: true,
    },
    {
      title: "Gallbladder Surgery / Cholecystectomy",
      description:
        "Specialising in gallbladder surgery, Osama offers cholecystectomy procedures to patients suffering from gallstones or other gallbladder-related conditions. Using advanced laparoscopic techniques, he ensures safe and effective removal of the gallbladder, relieving symptoms and restoring digestive health.",
      image: "/Gallbladder_Gallstone.jpg",
      imageLeft: false,
    },
    {
      title: "Gastroesophageal Reflux Disease/GORD",
      description:
        "Osama offers comprehensive treatments for Gastroesophageal Reflux Disease (GORD), including minimally invasive procedures like laparoscopic hiatus hernia repair and fundoplication. With his expertise in benign oesophagogastric surgery, he provides effective solutions to manage GORD symptoms and improve patients' quality of life.",
      image: "/Gastrooesophageal reflux disease.webp",
      imageLeft: true,
    },
    {
      title: "Hernia Repair Surgery",
      description:
        "Specialising in hernia repair surgery, Osama offers various techniques, including laparoscopic and robotic approaches, to address different types of hernias affecting the upper GI tract. With a focus on patient safety and optimal outcomes, he ensures each procedure is tailored to meet the individual needs of the patient.",
      image: "/Hernia repair surgery.png",
      imageLeft: false,
    },
    {
      title: "LINX Device for GORD Treatment",
      description:
        "Osama provides innovative treatments like the LINX device for GORD, offering patients a minimally invasive solution to manage reflux symptoms. By implanting the LINX device, he helps restore the natural function of the oesophagus and provides long-term relief from GORD-related issues.",
      image: "/linx-procedure.png",
      imageLeft: true,
    },
    {
      title: "Inguinal Hernia Surgery",
      description:
        "Osama specialises in inguinal hernia surgery, offering both traditional and minimally invasive approaches to repair hernias in the groin area. With his expertise, patients can expect safe and effective hernia repair procedures that minimize post-operative discomfort and promote swift recovery.",
      image: "/Laparoscopic inguinal hernia surgery.jpg",
      imageLeft: false,
    },
    {
      title: "Trans Abdominal Pre Peritoneal Hernia Surgery (TAPP)",
      description:
        "Utilising advanced techniques like TAPP surgery, Osama provides minimally invasive options for patients requiring hernia repair in the abdominal region. TAPP surgery offers the advantage of reduced post-operative pain and quicker return to normal activities compared to traditional open surgery.",
      image: "/Incisional hernia surgery.jpg",
      imageLeft: true,
    },
    {
      title: "Epigastric Hernia Surgery",
      description:
        "For patients with epigastric hernias, Osama performs surgical procedures aimed at repairing the weakened abdominal wall and restoring its integrity. Through meticulous surgical techniques, he ensures optimal outcomes and minimal recurrence rates for patients undergoing epigastric hernia repair.",
      image: "/Hernia repair surgery.png",
      imageLeft: false,
    },
    {
      title: "Ventral Hernia Surgery",
      description:
        "Osama offers expert care for patients with ventral hernias, employing surgical techniques tailored to the specific needs of each individual. Whether through laparoscopic or traditional approaches, he ensures comprehensive hernia repair with minimal post-operative complications.",
      image: "/Ventral hernia surgery.jpg",
      imageLeft: true,
    },
    {
      title: "Umbilical and Paraumbilical Hernia Surgery",
      description:
        "Specialising in umbilical and paraumbilical hernia surgery, Osama provides patients with effective treatment options to address these common abdominal wall defects. With his expertise in minimally invasive surgery, he offers patients faster recovery times and reduced risk of complications.",
      image: "/Umbilical hernia surgery.jpg",
      imageLeft: false,
    },
    {
      title: "Abdominal Wall Reconstruction",
      description:
        "For patients requiring abdominal wall reconstruction due to trauma, injury, or previous surgeries, Osama offers specialised surgical procedures to restore abdominal integrity and function. Through personalised treatment plans, he aims to improve patients' quality of life and overall well-being.",
      image: "/Abdominal wall reconstruction.webp",
      imageLeft: true,
    },
    {
      title: "Skin Lumps & Lipomas",
      description:
        "Osama provides expert evaluation and surgical management of skin lumps, ensuring accurate diagnosis and appropriate treatment options. With his expertise in minimally invasive techniques, he offers patients safe and effective removal of skin lumps with minimal scarring. With his expertise in soft tissue surgery, he ensures precise and thorough removal of lipomas with minimal risk of complications.",
      image: "/Lipoma surgery.jpg",
      imageLeft: false,
    },
  ];


  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6E6E6E] via-[#7a7a7a] to-[#6E6E6E]">
      <Header backgroundColor="grey" />
      
      {/* Page Title */}
      <PageTitleSection />

      {/* Introduction Text */}
      <IntroductionSection />

      {/* Procedures Grid */}
      <ProceduresGrid procedures={procedures} />

      {/* Global Appointment Section */}
      <AppointmentSection />
    </main>
  );
}

function PageTitleSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="w-full pt-32 pb-12">
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-tight">
          Procedures
        </h1>
      </div>
    </section>
  );
}

function IntroductionSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="w-full py-16">
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      >
        <div className="space-y-8 text-lg sm:text-xl text-gray-200 leading-relaxed">
            <p>
              Osama delivers Laparoscopic and Robotic surgical services at West
              Hertfordshire NHS Teaching Trust. He is trained in various benign
              Upper GI and General surgical procedures. Minimally invasive surgery
              took a significant step forward with the introduction of robotically
              assisted procedures. Osama is trained in not one but two robotic
              modules (Versius and Intuitive). In the hands of Osama's skill set,
              both robotic and laparoscopic surgery is very safe. Both have
              significant benefits when compared to open surgery, including a
              shorter hospital stay, shorter recovery as well as a lower risk of
              incisional hernias, infection, blood loss and pain.
            </p>
            <p>
              His special interest is benign oesophagogastric surgery, which
              includes managing acid reflux disease through laparoscopic hiatus
              hernia repair, fundoplication, paraesophageal hernia repair, and
              achalasia cardia. He has trained in advanced oesophago-gastric units
              around Northwest London and has extensive exposure to various
              procedures. He performs various general surgical procedures such as
              gallbladder surgery and inguinal hernia repairs and incisional
              hernias. He also performs diagnostic endoscopy.
            </p>
        </div>
      </div>
    </section>
  );
}

type Procedure = {
  title: string;
  description: string;
  image: string;
  imageLeft: boolean;
};

function ProceduresGrid({ procedures }: { procedures: Procedure[] }) {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {procedures.map((procedure, index) => (
            <ProcedureCard key={index} procedure={procedure} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcedureCard({ procedure, index }: { procedure: Procedure, index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center fade-in-on-scroll ${isVisible ? "visible" : ""} ${
        procedure.imageLeft ? "" : "lg:flex-row-reverse"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
                {procedure.imageLeft ? (
                  <>
                    <div className={`relative w-full rounded-lg overflow-hidden ${procedure.image === "/linx-procedure.png" ? "h-72 lg:h-96" : "h-64 lg:h-80"}`}>
                      <Image
                        src={procedure.image}
                        alt={procedure.title}
                        fill
                        className="object-cover"
                        style={procedure.image === "/linx-procedure.png" ? { objectPosition: "center 30%" } : {}}
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
                        {procedure.title}
                      </h2>
                      <p className="text-lg text-white leading-relaxed">
                        {procedure.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
                        {procedure.title}
                      </h2>
                      <p className="text-lg text-white leading-relaxed">
                        {procedure.description}
                      </p>
                    </div>
                    <div className={`relative w-full rounded-lg overflow-hidden ${procedure.image === "/linx-procedure.png" ? "h-72 lg:h-96" : "h-64 lg:h-80"}`}>
                      <Image
                        src={procedure.image}
                        alt={procedure.title}
                        fill
                        className="object-cover"
                        style={procedure.image === "/linx-procedure.png" ? { objectPosition: "center 30%" } : {}}
                      />
                    </div>
                  </>
                )}
    </div>
  );
}

