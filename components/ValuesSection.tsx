"use client";

import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ValueCardProps {
  videoSrc: string;
  title: string;
  description: string;
  audioEnabled: boolean;
}

function ValueCard({ videoSrc, title, description, index, audioEnabled }: ValueCardProps & { index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    // Preload and prepare video for immediate playback
    if (videoRef.current) {
      videoRef.current.load();
      // Keep muted initially but ready to unmute on hover
      videoRef.current.muted = true;
      videoRef.current.volume = 1;
    }
  }, []);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    // Dispatch event to pause background music
    window.dispatchEvent(new CustomEvent("videoHoverStart"));
    
    if (videoRef.current) {
      try {
        videoRef.current.volume = 1;
        // If audio is enabled (user has interacted), unmute and play
        if (audioEnabled) {
          videoRef.current.muted = false;
          await videoRef.current.play();
        } else {
          // Otherwise play muted
          videoRef.current.muted = true;
          await videoRef.current.play();
        }
      } catch (error) {
        console.error("Error playing video:", error);
        // If play fails, try with muted
        if (videoRef.current) {
          videoRef.current.muted = true;
          await videoRef.current.play().catch((err) => {
            console.error("Error playing video:", err);
          });
        }
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Dispatch event to resume background music
    window.dispatchEvent(new CustomEvent("videoHoverEnd"));
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  };

  return (
    <div
      ref={ref}
      className={`relative flex flex-col fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Card - Rounded all corners */}
      <div className="relative w-full aspect-square overflow-hidden bg-black shadow-lg drop-shadow-xl rounded-3xl">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          muted={true}
          loop
          playsInline
          preload="auto"
        />
        
        {/* Text Card - Overlaying bottom 20% of video */}
        <div className="absolute bottom-0 left-0 right-0 w-full bg-black pt-8 px-6 pb-6 rounded-b-2xl shadow-lg z-10 flex flex-col" style={{ height: '20%' }}>
          {/* Title */}
          <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-left line-clamp-1">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white text-xs sm:text-sm lg:text-base text-left leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ValuesSection() {
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Enable audio on first user interaction
  useEffect(() => {
    const enableAudio = () => {
      setAudioEnabled(true);
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
    };
    document.addEventListener('click', enableAudio, { once: true });
    document.addEventListener('touchstart', enableAudio, { once: true });
    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
    };
  }, []);

  const values = [
    {
      video: "/Value 1.mp4",
      title: "Exceptional Expertise in Upper GI Surgery",
      description:
        "With a distinguished background in upper gastrointestinal surgery, Osama Moussa brings a wealth of expertise to his practice. His commitment to delivering surgical excellence in this specialised field ensures that patients receive the highest standard of care tailored to their unique needs.",
    },
    {
      video: "/Values 2.mp4",
      title: "Extensive Training and Experience",
      description:
        "Osama Moussa's professional journey has been marked by extensive training and experience across various eminent medical institutions in the UK. From teaching centres in cities like Liverpool and Newcastle to renowned London tertiary centres such as Imperial College London, University College London and the Royal Marsden, he has acquired a breadth of clinical insight and exposure to complex surgical cases.",
    },
    {
      video: "/Values 3.mp4",
      title: "Multidisciplinary Approach",
      description:
        "Osama Moussa's comprehensive training has equipped him with skills in open, laparoscopic, and robotic upper GI surgery. His expertise extends beyond traditional surgical methods to include advanced techniques such as laparoscopy and robotic-assisted surgery, ensuring patients have access to the latest innovations in surgical care.",
    },
    {
      video: "/Values 4.mp4",
      title: "Commitment to Academic Excellence",
      description:
        "Osama Moussa's dedication to advancing his skills and knowledge is evident through his pursuit of academic excellence. From obtaining a Postgraduate Diploma in Minimal Access Surgery to completing a research Medical Doctorate at Imperial College London, he demonstrates a commitment to staying at the forefront of medical advancements in his field. His research, particularly in metabolic health in obesity, highlights his commitment to innovation.",
    },
  ];

  return (
    <section className="w-full bg-transparent py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              index={index}
              videoSrc={value.video}
              title={value.title}
              description={value.description}
              audioEnabled={audioEnabled}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

