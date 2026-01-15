import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6E6E6E] via-[#7a7a7a] to-[#6E6E6E]">
      <Header backgroundColor="grey" />
      
      {/* Page Title */}
      <section className="w-full pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-white space-y-8">
            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">1. Introduction</h2>
              <p className="text-lg leading-relaxed">
                Osama Moussa, Consultant General Surgeon, is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">2. Information We Collect</h2>
              <p className="text-lg leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when contacting us or booking an appointment.</li>
                <li><strong>Medical Information:</strong> Information about your medical condition, symptoms, and treatment history that you voluntarily provide when seeking consultation.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and website usage data collected automatically when you visit our website.</li>
                <li><strong>Cookies:</strong> We may use cookies and similar tracking technologies to enhance your experience on our website.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed ml-4">
                <li>To respond to your inquiries and provide medical consultation services</li>
                <li>To schedule and manage appointments</li>
                <li>To send you appointment reminders and important updates</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">4. Medical Confidentiality</h2>
              <p className="text-lg leading-relaxed">
                As a medical professional, Osama Moussa is bound by strict confidentiality obligations under the General Medical Council (GMC) guidelines and UK data protection laws. All medical information you provide is treated with the utmost confidentiality and is only used for the purpose of providing medical care and treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">5. Disclosure of Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                We may disclose your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed ml-4">
                <li>To other healthcare professionals involved in your care, with your consent</li>
                <li>When required by law or legal process</li>
                <li>To protect the health and safety of you or others</li>
                <li>To service providers who assist us in operating our website and providing services (under strict confidentiality agreements)</li>
                <li>With your explicit consent for any other purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">6. Data Security</h2>
              <p className="text-lg leading-relaxed">
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">7. Your Rights</h2>
              <p className="text-lg leading-relaxed mb-4">
                Under UK data protection laws, including the UK GDPR, you have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed ml-4">
                <li><strong>Right to Access:</strong> You have the right to request access to your personal information</li>
                <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate information</li>
                <li><strong>Right to Erasure:</strong> You have the right to request deletion of your information in certain circumstances</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to request restriction of processing of your information</li>
                <li><strong>Right to Data Portability:</strong> You have the right to receive your information in a structured format</li>
                <li><strong>Right to Object:</strong> You have the right to object to processing of your information in certain circumstances</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">8. Cookies</h2>
              <p className="text-lg leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">9. Third-Party Links</h2>
              <p className="text-lg leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">10. Data Retention</h2>
              <p className="text-lg leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Medical records are typically retained in accordance with NHS guidelines and legal requirements for medical record retention.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">11. Children's Privacy</h2>
              <p className="text-lg leading-relaxed">
                Our website is not intended for children under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-lg leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">13. Contact Us</h2>
              <p className="text-lg leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-lg leading-relaxed">
                <p>Email: pa@osamamoussa.co.uk</p>
                <p>Phone: 07352167642</p>
              </div>
            </div>

            <div className="pt-8 text-sm text-gray-300">
              <p>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Appointment Section */}
      <AppointmentSection />
    </main>
  );
}


