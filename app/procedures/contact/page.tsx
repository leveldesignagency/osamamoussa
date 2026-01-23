"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    if (scriptsLoaded.current) return;

    // Load TopDoctors widget script type 14
    const existingTopDoctors14 = document.getElementById("topdoctors-widget-script-14");
    if (!existingTopDoctors14) {
      const topDoctorsScript14 = document.createElement("script");
      topDoctorsScript14.type = "text/javascript";
      topDoctorsScript14.src =
        "https://staticnew-prod.topdoctors.co.uk/static/widgets/main.min.js#type=14&apikey=rKS7JLHPIxSPtYYUA9mvR9tedZB2MQ%3D%3D&environment=prod&config=dW5kZWZpbmVk&country=gb&storage=https%3A%2F%2Fstaticnew-prod.topdoctors.co.uk&apiurl=https%3A%2F%2Fwww.topdoctors.co.uk%2Fapi&hostname=https%3A%2F%2Fwww.topdoctors.co.uk";
      topDoctorsScript14.async = true;
      topDoctorsScript14.id = "topdoctors-widget-script-14";
      document.body.appendChild(topDoctorsScript14);
    }

    // Load TopDoctors widget script type 6
    const existingTopDoctors6 = document.getElementById("topdoctors-widget-script-6");
    if (!existingTopDoctors6) {
      const topDoctorsScript6 = document.createElement("script");
      topDoctorsScript6.type = "text/javascript";
      topDoctorsScript6.src =
        "https://staticnew-prod.topdoctors.co.uk/static/widgets/main.min.js#type=6&apikey=rKS7JLHPIxSPtYYUA9mvR9tedZB2MQ%3D%3D&environment=prod&config=W29iamVjdCBPYmplY3Rd&country=gb&storage=https%3A%2F%2Fstaticnew-prod.topdoctors.co.uk&apiurl=https%3A%2F%2Fwww.topdoctors.co.uk%2Fapi&hostname=https%3A%2F%2Fwww.topdoctors.co.uk";
      topDoctorsScript6.async = true;
      topDoctorsScript6.id = "topdoctors-widget-script-6";
      document.body.appendChild(topDoctorsScript6);
    }

    scriptsLoaded.current = true;
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    procedures: "",
    message: "",
  });
  const [isProceduresOpen, setIsProceduresOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hospitals = [
    {
      name: "West Hertfordshire NHS Trust",
      address: "Vicarage Road, Watford, WD18 0HB",
      phone: "01923 244 366",
      website: "https://www.westhertshospitals.nhs.uk/",
      mapUrl:
        "https://www.google.com/maps/place/Watford+General+Hospital/@51.6495051,-0.4062333,17z/data=!4m9!1m2!2m1!1sVicarage+Road+Watford+WDS8+0HB!3m5!1s0x48766add427ddfd1:0xe6737457e2df3710!8m2!3d51.6482886!4d-0.4038784!16s%2Fm%2F0m0q811?entry=ttu",
    },
    {
      name: "Spire Bushey Healthcare",
      address: "Heathbourne Rd, Bushey, WD23 1RD",
      phone: "020 8950 9090",
      website: "https://www.spirehealthcare.com/spire-bushey-hospital/",
      mapUrl:
        "https://www.google.com/maps?sca_esv=5916dc4a4d004541&rlz=1C5CHFA_enGB1104GB1104&biw=1728&bih=993&sxsrf=ADLYWIL5DwE835fzPeMuhnIpY9M8z28RpQ:1719416946508&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIjJidXNoZXkgaGVhbHRoY2FyZSBIZWF0aGJvdXJuZSBSb2FkIEJ1c2hleSBXRDIzIDFSRDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGKIEGIkFSNkbUIIGWP0acAF4AZABAJgBpAKgAdAOqgEGMTAuNy4xuAEDyAEA-AEBmAIQoALFCsICChAAGLADGNYEGEfCAgcQIxiwAhgnwgIIEAAYBxgIGB7CAggQABgFGAcYHsICCBAAGAgYDRgewgILEAAYgAQYhgMYigXCAgYQABgIGB7CAgQQIRgKmAMAiAYBkAYIkgcEMTAuNqAH5IQB&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=KSkYbmX_FHZIMULZu5UksWQY&daddr=Heathbourne+Rd,+Bushey+WD23+1RD",
    },
    {
      name: "Bishops Wood Hospital",
      address: "Rickmansworth Road, Northwood, HA6 2JW",
      phone: "01923 835 814",
      website:
        "https://www.circlehealthgroup.co.uk/hospitals/bishops-wood-hospital",
      mapUrl:
        "https://www.google.com/maps?rlz=1C5CHFA_enGB1104GB1104&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIGCAMQRRg7MgcIBBAAGIAEMgcIBRAuGIAEMhAIBhAuGK8BGMcBGIAEGI4FMgYIBxBFGDzSAQgyNTY0ajFqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kc1Nr_iUa3ZIMcHNagAmeXaS&daddr=Rickmansworth+Rd,+Northwood+HA6+2JW",
    },
    {
      name: "The Wellington Hospital",
      address: "8A Wellington Place, London, NW8 9LE",
      phone: "020 3733 5344",
      website:
        "https://www.circlehealthgroup.co.uk/hospitals/bishops-wood-hospital",
      mapUrl:
        "https://www.google.com/maps?rlz=1C5CHFA_enGB1104GB1104&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIGCAMQRRg7MgcIBBAAGIAEMgcIBRAuGIAEMhAIBhAuGK8BGMcBGIAEGI4FMgYIBxBFGDzSAQgyNTY0ajFqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kc1Nr_iUa3ZIMcHNagAmeXaS&daddr=Rickmansworth+Rd,+Northwood+HA6+2JW",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      {/* Smooth gradient overlay at top for header area */}
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none"></div>
      <Header backgroundColor="grey" />
      
      {/* Page Title */}
      <section className="w-full pt-32 pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-tight text-center lg:text-left">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="w-full py-8 pb-4 md:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info - Image hidden on mobile, contact card shown on mobile above form */}
            <div className="relative hidden lg:block" style={{ height: '100%', minHeight: '700px' }}>
              <div className="relative w-full h-full" style={{ height: '100%', minHeight: '700px', overflow: 'visible' }}>
                <div className="absolute flex items-start justify-center" style={{ transform: 'scale(0.75)', top: '-15%', left: 0, right: 0, height: '130%' }}>
                  <Image
                    src="/Osama Moussa_Contact_Final.png"
                    alt="Osama Moussa"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
              {/* Contact Pills - Desktop only (overlaid on image) */}
              <div className="absolute bottom-32 left-0 pl-6 lg:pl-8 space-y-4 lg:space-y-6 text-white z-10">
                {/* Phone Number Pill */}
                <div className="w-fit border-2 border-black bg-black/70 backdrop-blur-md rounded-full px-6 py-4">
                  <a
                    href="tel:07352167642"
                    className="flex items-center gap-3 text-white text-xl font-sans font-semibold hover:opacity-60 transition-opacity"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>07352167642</span>
                  </a>
                </div>
                
                {/* Email Pill */}
                <div className="w-fit border-2 border-black bg-black/70 backdrop-blur-md rounded-full px-6 py-4">
                  <a
                    href="mailto:pa@osamamoussa.co.uk"
                    className="flex items-center gap-3 text-white text-xl font-sans font-semibold hover:opacity-60 transition-opacity"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>pa@osamamoussa.co.uk</span>
                  </a>
                </div>
              </div>
              
              {/* Contact Paragraph - Desktop only (separate container) */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md p-6 lg:p-8 text-white z-10">
                <p className="text-base leading-relaxed">
                  You can contact my Personal Assistant directly or via the contact
                  form, alternatively you can make a booking via the hospitals websites
                  from the list below.
                </p>
              </div>
            </div>

            {/* Contact Card - Mobile only, above form */}
            <div className="lg:hidden space-y-4 mb-8 text-center">
              {/* Phone Number Pill */}
              <div className="w-full max-w-md mx-auto border-2 border-black bg-black/70 backdrop-blur-md rounded-full px-6 py-4">
                <a
                  href="tel:07352167642"
                  className="flex items-center justify-center gap-3 text-white text-xl font-sans font-semibold hover:opacity-60 transition-opacity"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>07352167642</span>
                </a>
              </div>
              
              {/* Email Pill */}
              <div className="w-full max-w-md mx-auto border-2 border-black bg-black/70 backdrop-blur-md rounded-full px-6 py-4">
                <a
                  href="mailto:pa@osamamoussa.co.uk"
                  className="flex items-center justify-center gap-3 text-white text-xl font-sans font-semibold hover:opacity-60 transition-opacity"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>pa@osamamoussa.co.uk</span>
                </a>
              </div>
              
              {/* Contact Paragraph */}
              <div className="bg-black/70 backdrop-blur-md p-6 text-white">
                <p className="text-base leading-relaxed">
                  You can contact my Personal Assistant directly or via the contact
                  form, alternatively you can make a booking via the hospitals websites
                  from the list below.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-black/70 backdrop-blur-md p-6 space-y-4 border-2 border-white/20">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-sans font-semibold text-center lg:text-left">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border-2 border-white text-[#6E6E6E] font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-sans font-semibold text-center lg:text-left">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border-2 border-white text-[#6E6E6E] font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2 font-sans font-semibold text-center lg:text-left">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-2 bg-white border-2 border-white text-[#6E6E6E] font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                />
              </div>

              <div className="relative">
                <label htmlFor="procedures" className="block text-white mb-2 font-sans font-semibold text-center lg:text-left">
                  Procedures <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProceduresOpen(!isProceduresOpen)}
                    className="w-full px-4 py-2 bg-white border-2 border-white text-[#6E6E6E] font-semibold focus:outline-none focus:ring-2 focus:ring-white text-left flex items-center justify-between hover:bg-gray-50 transition-all"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    <span className={`${formData.procedures ? "text-[#6E6E6E]" : "text-gray-400"} font-semibold`}>
                      {formData.procedures 
                        ? formData.procedures === "upper-gi" ? "Upper GI Surgery"
                        : formData.procedures === "laparoscopic" ? "Laparoscopic Surgery"
                        : formData.procedures === "robotic" ? "Robotic Surgery"
                        : formData.procedures === "gallbladder" ? "Gallbladder Surgery"
                        : formData.procedures === "gord" ? "GORD Treatment"
                        : formData.procedures === "hernia" ? "Hernia Repair"
                        : formData.procedures === "other" ? "Other"
                        : formData.procedures
                        : "Select a procedure"}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#6E6E6E] transition-transform duration-200 ${isProceduresOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isProceduresOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsProceduresOpen(false)}
                      ></div>
                      <div className="absolute z-20 bg-white border-2 border-white shadow-lg overflow-hidden" style={{ width: '100%', left: 0, right: 0, marginTop: '8px' }}>
                        <div className="max-h-60 overflow-y-auto">
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, procedures: "upper-gi" });
                              setIsProceduresOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-[#6E6E6E] font-semibold hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                          >
                            Upper GI Surgery
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, procedures: "laparoscopic" });
                              setIsProceduresOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-[#6E6E6E] font-semibold hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                          >
                            Laparoscopic Surgery
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, procedures: "robotic" });
                              setIsProceduresOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-[#6E6E6E] font-semibold hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                          >
                            Robotic Surgery
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, procedures: "gallbladder" });
                              setIsProceduresOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-[#6E6E6E] font-semibold hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                          >
                            Gallbladder Surgery
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, procedures: "gord" });
                              setIsProceduresOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-[#6E6E6E] font-semibold hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                          >
                            GORD Treatment
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, procedures: "hernia" });
                              setIsProceduresOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-[#6E6E6E] font-semibold hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                          >
                            Hernia Repair
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, procedures: "other" });
                              setIsProceduresOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-[#6E6E6E] hover:bg-gray-100 transition-colors"
                          >
                            Other
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <input
                  type="hidden"
                  name="procedures"
                  value={formData.procedures}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-sans font-semibold text-center lg:text-left">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your concern"
                  rows={4}
                  className="w-full px-4 py-2 bg-white border-2 border-white text-[#6E6E6E] font-semibold focus:outline-none focus:ring-2 focus:ring-white transition-all resize-none"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 border-2 border-white bg-white text-[#6E6E6E] font-semibold transition-all duration-300 button-swipe button-swipe-white-bg text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="w-full py-8 md:py-16 min-h-0 md:min-h-[600px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column - TOP DOCTOR CERTIFIED - Hidden on mobile */}
            <div className="p-8 min-h-[500px] hidden md:block">
              <h2 className="text-3xl font-sans font-bold text-white mb-4 text-center lg:text-left">
                TOP DOCTOR CERTIFIED
              </h2>
              <p className="text-lg text-white leading-relaxed mb-8 text-center lg:text-left">
                Registered and Certified through topdoctors.co.uk you can safely and
                securely Book Online or register for an e - Consultation via this widget.
              </p>
              <div
                id="topdoctors-gb-widget-container-14"
                style={{ maxWidth: "1080px", width: "100%", minHeight: "400px" }}
              ></div>
            </div>
            {/* Right Column - Widget Type 6 in iPhone Mockup - Hidden on mobile */}
            <div className="p-8 min-h-[500px] flex justify-center items-start hidden md:flex">
              {/* iPhone Mockup - Flat */}
              <div className="relative">
                <div 
                  className="relative mx-auto"
                  style={{
                    width: '375px',
                    height: '700px',
                    background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
                    borderRadius: '50px',
                    padding: '12px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Notch */}
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30"
                    style={{
                      width: '150px',
                      height: '30px',
                      background: '#000',
                      borderRadius: '0 0 20px 20px',
                      marginTop: '12px'
                    }}
                  ></div>
                  
                  {/* Screen */}
                  <div 
                    className="relative w-full h-full bg-black rounded-[38px] overflow-hidden"
                    style={{
                      position: 'relative'
                    }}
                  >
                    {/* Status Bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 z-30"
                      style={{ 
                        paddingTop: '8px',
                        top: '12px'
                      }}
                    >
                      <span className="text-white text-xs font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white rounded-sm"></div>
                        <div className="w-6 h-2 border border-white rounded-sm"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Widget Container - Scrollable */}
                    <div 
                      className="absolute"
                      style={{
                        top: '50px',
                        left: '10px',
                        right: '10px',
                        bottom: '20px',
                        overflow: 'hidden',
                        boxSizing: 'border-box'
                      }}
                    >
                      <div 
                        className="w-full h-full overflow-y-auto iphone-scroll"
                        style={{
                          boxSizing: 'border-box'
                        }}
                      >
                        <div
                          id="topdoctors-gb-widget-container-6"
                          style={{ 
                            width: "100%", 
                            maxWidth: "100%",
                            minHeight: "700px",
                            position: 'relative',
                            boxSizing: 'border-box',
                            margin: '0',
                            padding: '0',
                            overflow: 'hidden'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div 
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
                    style={{
                      width: '134px',
                      height: '5px',
                      background: 'rgba(255,255,255,0.3)',
                      borderRadius: '3px'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals Section */}
      <section className="w-full pt-8 pb-16 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-center lg:text-left">
            {hospitals.map((hospital, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Map Embed */}
                <div className="w-full h-48 sm:h-64 relative">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(hospital.address)}&output=embed&zoom=15`}
                  ></iframe>
                </div>
                {/* Hospital Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-sans font-bold text-black mb-4">
                    <Link
                      href={hospital.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group hover:opacity-80 transition-opacity"
                    >
                      {hospital.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </h3>
                  <p className="text-[#6E6E6E] mb-2">
                    <Link
                      href={hospital.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group hover:opacity-80 transition-opacity inline-block"
                    >
                      {hospital.address}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E6E6E] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </p>
                  <p className="text-[#6E6E6E] mb-2">
                    <a
                      href={`tel:${hospital.phone.replace(/\s/g, "")}`}
                      className="relative group hover:opacity-80 transition-opacity inline-block"
                    >
                      {hospital.phone}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E6E6E] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </p>
                  <p className="text-[#6E6E6E]">
                    <Link
                      href={hospital.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group hover:opacity-80 transition-opacity inline-block"
                    >
                      {hospital.website.replace(/^https?:\/\//, '')}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E6E6E] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Appointment Section */}
      <AppointmentSection />
    </main>
  );
}

