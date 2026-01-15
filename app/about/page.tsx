import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6E6E6E] via-[#7a7a7a] to-[#6E6E6E]">
      <Header backgroundColor="grey" />

      {/* About Section */}
      <section className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
        {/* Container to clip the growing image */}
        <div className="absolute" style={{ top: '80px', left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          {/* Background Image - starts at 80px from top */}
          <div className="absolute image-slide" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <Image
              src="/OM6.jpg"
              alt="About Osama Moussa"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
              priority
              sizes="100vw"
            />
          </div>
        </div>
        
        {/* Grey feather at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#6E6E6E] to-transparent z-20"></div>
        
        {/* Grey glass overlay on left */}
        <div 
          className="absolute backdrop-blur-xl z-10"
          style={{
            top: '80px',
            left: 0,
            bottom: '20px',
            width: '60%',
            background: 'linear-gradient(to right, rgba(110, 110, 110, 0.3) 0%, rgba(110, 110, 110, 0.3) 85%, rgba(110, 110, 110, 0) 100%)',
            maskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)'
          }}
        ></div>
        
        {/* Title - positioned to match other pages */}
        <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '128px', paddingBottom: '48px' }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-tight">
            About Osama Moussa
          </h1>
        </div>
        
        {/* Content */}
        <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-1/2 space-y-4 text-lg text-white leading-relaxed pr-12 sm:pr-16 lg:pr-24">
            <p>
              Mr. Moussa is a distinguished Consultant General Surgeon specialising in Upper GI and General Surgery at West Hertfordshire Hospitals NHS Trust. His extensive training includes rotations through hospitals in Liverpool, Newcastle, Scotland, and Northwest London, culminating in his CCT.
            </p>
            <p>
              Mr. Moussa has worked at prestigious institutions like Imperial College London, the Royal Marsden, University College London, and Chelsea & Westminster hospitals, gaining extensive experience in open, laparoscopic, and robotic Upper GI surgery, including benign, bariatric, and oncological procedures.
            </p>
            <p>
              He holds a Postgraduate Diploma in Minimal Access Surgery and completed a research Medical Doctorate at Imperial College London in 2017. He also completed a Royal College of Surgeons-approved laparoscopic, anti-reflux, and bariatric surgery fellowship.
            </p>
            <p>
              Mr. Moussa is actively involved in research, focusing on metabolic health in obesity. His work has been published in high-impact journals. His dedication to surgical excellence is pivotal in advancing benign Upper GI Surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="w-full bg-gradient-to-b from-[#6E6E6E] via-[#7a7a7a] to-[#6E6E6E] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-12 uppercase">
            Accreditations
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image - Left side, no left padding, square edges */}
            <div className="relative h-[600px] lg:h-[800px] overflow-hidden -ml-4 sm:-ml-6 lg:-ml-8" style={{ width: 'calc(100% + 1rem)', maxWidth: 'calc(100% + 1rem)' }}>
              <div className="absolute inset-0 image-slide overflow-hidden">
                <Image
                  src="/OM7.jpg"
                  alt="Osama Moussa Accreditations"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Accreditations List - Right side */}
            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Postgraduate
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  Fellow of the Royal College of Surgeons of England (F.R.C.S. Gen)
                  <br />
                  Diploma in Minimal Access Surgery (Northeast Laparoscopic Centre)
                  <br />
                  Medical Doctorate (By Research) -Imperial College London
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Qualifications
                </h3>
                <p className="text-lg text-white leading-relaxed mb-2">
                  Bachelor of Sciences (Honours)
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Bachelor of Medicine and Bachelor of Surgery M.B.B.S.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Registration
                </h3>
                <p className="text-lg text-white leading-relaxed mb-2">
                  The General Medical Council (6043402)
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Royal College of Surgeons
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Speciality
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  Laparoscopic Surgery, Robotic Surgery, Benign Upper GI Surgery,
                  Anti-reflux surgery, General Surgery
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Professional Memberships
                </h3>
                <p className="text-lg text-white leading-relaxed">
                  Fellow of the Royal College of Surgeons of England
                  <br />
                  British Medical Association (BMA)
                  <br />
                  Association of Upper GI Surgeons (AUGIS)
                  <br />
                  British Obesity and Metabolic Surgery Society (BOMSS)
                  <br />
                  Federation of Surgical Obesity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Appointment Section */}
      <AppointmentSection />
    </main>
  );
}

