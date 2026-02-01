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
    {
      text: "I was admitted via A&E. Dr Moussa made the decision to remove my gallbladder despite me being 87 years old. It was the right decision as my gallbladder had ruptured. His bedside manner was extremely caring, he explained everything in detail and I felt completely confident under his care. During my follow up appointment he took his time assessing my health and treated me like I was one of his family. I have never experienced such wonderful care from any other health professionals.",
      rating: 5,
    },
    {
      text: "For the past two years I was in so much pain it was absolutely horrendous and my quality of life was affected. After a few appointments with my GP I was finally referred to see Mr Osama Moussa and within a matter of weeks I had my surgery to remove my gallbladder. I have to say a very big thank you to Mr Moussa, who in my opinion is an exceptional surgeon and a really nice person, he is very easy to talk with. Mr Moussa you have now taken away all that pain that made my life so uncomfortable, I am very grateful to you.",
      rating: 5,
    },
    {
      text: "Dr Moussa is a great surgeon who listens to everything you tell him. I am truly grateful for him doing my surgery after suffering badly for 2 years or more.",
      rating: 5,
    },
    {
      text: "The surgery was very efficient and I recovered well. I did find some of the administration was confusing. However Dr Moussa's secretary was extremely efficient and helpful. All the staff I saw were helpful and caring and working under a great deal of pressure.",
      rating: 4,
    },
    {
      text: "I immediately felt that I was in good hands. He took on board all I said and how I presented and gave a clear explanation as to what the issue was.",
      rating: 5,
    },
    {
      text: "Husband underwent Laparoscopic cholecystectomy by Dr Moussa and Team. Excellent care and bedside manner. Professional throughout. The healing went exactly as they said it would. Recovered quickly. Fantastic!",
      rating: 5,
    },
    {
      text: "Dr Moussa is an excellent surgeon and he did my surgery for gallbladder at Wellington Hospital and there after I had seen him twice. I will recommend consultant Dr Moussa—a wonderful surgeon. I am very happy.",
      rating: 5,
    },
    {
      text: "I had the pleasure of seeing Mr Moussa for a pre- and post-consultation in relation to the hernia repair he recently performed on me. I have nothing but the highest regard for his professionalism from start to finish and the genuine care he showed at all times.",
      rating: 5,
    },
    {
      text: "Very professional and lovely person.",
      rating: 5,
    },
    {
      text: "Mr Moussa was very reassuring and really understood what I was trying to say. He has explained everything to me and I am very reassured. His admin team were helpful and quick to respond to my queries.",
      rating: 5,
    },
    {
      text: "Mr Moussa showed me great concern and care. I could not have been treated any better. Very pleased with outcome!",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Page Title */}
      <section className="w-full pt-32 pb-2 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="bg-black inline-block px-6 py-4">
            <h1
              ref={titleRef}
              className={`page-title page-title-main font-bold text-white leading-tight fade-in-on-scroll text-center sm:text-left ${titleVisible ? "visible" : ""}`}
            >
              Reviews
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction - same title-to-paragraph gap as Procedures page */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 paragraph-block">
          <p
            ref={introRef}
            className={`text-2xl sm:text-lg text-white font-medium sm:font-normal leading-relaxed fade-in-on-scroll text-center lg:text-left ${introVisible ? "visible" : ""}`}
          >
            Mr Moussa is a distinguished Consultant General Surgeon, deeply committed
            to delivering surgical excellence in Upper GI Surgery. His wealth of
            experience and expertise, initially qualified in the Middle East and
            further developed in the UK, is a testament to his dedication. He brings
            this commitment to his role at West Hertfordshire Hospitals NHS Trust.
          </p>
        </div>
      </section>

      {/* Reviews - masonry-style so card heights are natural */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={reviewsRef}
            className={`columns-1 md:columns-2 lg:columns-3 gap-8 fade-in-on-scroll ${reviewsVisible ? "visible" : ""}`}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`break-inside-avoid bg-white rounded-lg shadow-lg px-4 sm:px-6 lg:px-8 py-6 mb-8 fade-in-on-scroll ${reviewsVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-black leading-relaxed italic font-serif text-lg sm:text-base">
                  &quot;{review.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section - title in black container outside border; paragraph + links inside border */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={resourcesRef} className={`fade-in-on-scroll ${resourcesVisible ? "visible" : ""}`}>
            <div className="mb-4 sm:mb-6 text-center sm:text-left">
              <div className="bg-black inline-block px-6 py-4">
                <h2 className="page-title page-title-main font-bold text-white leading-tight">
                  Useful Resources
                </h2>
              </div>
            </div>
            <div className="w-full border-2 border-white p-4 sm:p-6 lg:p-8 mb-8">
              <p className="text-white mb-6 text-2xl sm:text-lg font-medium sm:font-normal leading-snug text-center lg:text-left">
                Here are some resources for you to look through which can aid in your
                understanding of Osama&apos;s Medical Background, and any queries or concerns
                you have based around your surgery...
              </p>
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
        </div>
      </section>

    </>
  );
}
