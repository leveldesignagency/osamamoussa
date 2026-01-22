"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ReviewsPageContent() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: reviewsRef, isVisible: reviewsVisible } = useScrollAnimation();
  const { ref: resourcesRef, isVisible: resourcesVisible } = useScrollAnimation();

  const resources = [
    {
      title: "NHS Gateway – info for patients",
      url: "https://www.nhs.uk/",
    },
    {
      title: "International Federation for the Surgery of Obesity (IFSO)",
      url: "https://www.ifso.com/",
    },
    {
      title: "American Society for Metabolic and Bariatric Surgery (ASMBS)",
      url: "https://asmbs.org/",
    },
    {
      title: "British Hernia Society",
      url: "https://www.britishherniasociety.org/",
    },
    {
      title: "American College of Surgeons",
      url: "https://www.facs.org/",
    },
    {
      title: "The Royal College of Surgeons of England",
      url: "https://www.rcseng.ac.uk/",
    },
    {
      title: "Royal College of Surgeons of Edinburgh",
      url: "https://www.rcsed.ac.uk/",
    },
    {
      title: "World Health Organization",
      url: "https://www.who.int/",
    },
  ];

  const reviews = [
    {
      text: 'Dr Moussa was excellent, the whole experience was very professional and the whole experience was outstanding.',
      rating: 5,
    },
    {
      text: 'A very professional doctor who understands the needs of the patients! Great knowledge and a fantastic sense of humour and great empathy!',
      rating: 5,
    },
    {
      text: 'Mr Moussa is an excellent surgeon with an excellent bedside manner. I work alongside him and have seen many patients benefit from his skills.',
      rating: 5,
    },
    {
      text: 'Had inguinal hernia surgery on August 20th 2024 performed by Dr Moussa at the Spires Bushey. Just wanted to say what a fantastic experience I had from my initial assessment through to surgery. Dr Moussa is an excellent clinician and great character who I can highly recommend! First Class',
      rating: 5,
    },
    {
      text: 'I had nissan fundoplication surgery and cannot praise Mr Moussa enough. He has changed my life,, he is such a lovely man very kind and patient explaining exactly what it would entail. Recovery was painless and no more reflux!!',
      rating: 5,
    },
    {
      text: 'Just to say what great care I got from Mr Moussa recently. Was in Watford Hospital. He came to see me before op and after. I felt I was in good hands explained all what was going on and after care. A very nice gentleman.',
      rating: 5,
    },
    {
      text: 'Mr Moussa was the only surgeon that listened to me and I cannot thank him enough! I am no longer in any pain after my surgery, after many months in excruciating pain. Thank you',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Page Title */}
      <section className="w-full pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            ref={titleRef}
            className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-tight fade-in-on-scroll text-center lg:text-left ${titleVisible ? "visible" : ""}`}
          >
            Reviews
          </h1>
        </div>
      </section>

      {/* Introduction - Full Width, No Container */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p
            ref={introRef}
            className={`text-lg text-white leading-relaxed fade-in-on-scroll text-center lg:text-left ${introVisible ? "visible" : ""}`}
          >
            Mr Moussa is a distinguished Consultant General Surgeon, deeply committed
            to delivering surgical excellence in Upper GI Surgery. His wealth of
            experience and expertise, initially qualified in the Middle East and
            further developed in the UK, is a testament to his dedication. He brings
            this commitment to his role at West Hertfordshire Hospitals NHS Trust.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={reviewsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg px-4 sm:px-6 lg:px-8 py-6 fade-in-on-scroll ${reviewsVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-black leading-relaxed italic font-serif">
                  &quot;{review.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section - Full Width */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={resourcesRef}
            className={`w-full border-2 border-white p-4 sm:p-6 lg:p-8 mb-8 fade-in-on-scroll ${resourcesVisible ? "visible" : ""}`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
              Here are some resources for you to look through which can aid in your
              understanding of Osama&apos;s Medical Background, and any queries or concerns
              you have based around your surgery...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-2 border-white p-4 text-center text-white transition-all duration-300 button-swipe text-white rounded-lg fade-in-on-scroll ${resourcesVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <p className="text-sm font-sans font-bold">{resource.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
