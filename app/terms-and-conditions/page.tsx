import Header from "@/components/Header";
import AppointmentSection from "@/components/AppointmentSection";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6E6E6E] via-[#7a7a7a] to-[#6E6E6E]">
      <Header backgroundColor="grey" />
      
      {/* Page Title */}
      <section className="w-full pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-tight">
            Terms and Conditions
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
                Welcome to the website of Osama Moussa, Consultant General Surgeon. These terms and conditions govern your use of this website. By accessing and using this website, you accept and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">2. Medical Information</h2>
              <p className="text-lg leading-relaxed">
                The information provided on this website is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment. The content on this website should not be considered a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">3. No Doctor-Patient Relationship</h2>
              <p className="text-lg leading-relaxed">
                The use of this website does not create a doctor-patient relationship between you and Osama Moussa. Any communication through this website, including but not limited to contact forms or email, does not establish a doctor-patient relationship. A doctor-patient relationship is only established through a formal consultation in a clinical setting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">4. Website Content</h2>
              <p className="text-lg leading-relaxed">
                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-lg leading-relaxed">
                To the fullest extent permitted by law, Osama Moussa and his representatives shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of this website or any information contained herein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">6. External Links</h2>
              <p className="text-lg leading-relaxed">
                This website may contain links to external websites that are not provided or maintained by or in any way affiliated with Osama Moussa. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">7. Intellectual Property</h2>
              <p className="text-lg leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Osama Moussa or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">8. Privacy</h2>
              <p className="text-lg leading-relaxed">
                Your use of this website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">9. Modifications</h2>
              <p className="text-lg leading-relaxed">
                We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of this website after any such modifications constitutes your acceptance of the new terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">10. Governing Law</h2>
              <p className="text-lg leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-4">11. Contact Information</h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at pa@osamamoussa.co.uk or call 07352167642.
              </p>
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


