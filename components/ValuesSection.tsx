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
      {/* Video Card */}
      <div className="relative w-full aspect-square overflow-hidden bg-black shadow-lg drop-shadow-xl">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          muted={true}
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Text Card - hovering over video with rounded top corners */}
      <div className="relative w-full bg-black pt-12 px-8 pb-6 -mt-20 z-10 rounded-t-lg shadow-lg drop-shadow-xl min-h-[280px] flex flex-col">
        {/* Title */}
        <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-6 text-left">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white text-xs sm:text-sm lg:text-base text-left leading-relaxed flex-grow">
          {description}
        </p>
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
      video: "https://wu0h7bvzfe6rners.public.blob.vercel-storage.com/Value%201.mp4",
      title: "Exceptional Expertise in Upper GI Surgery",
      description:
        "With a distinguished background in upper gastrointestinal surgery, Osama Moussa brings a wealth of expertise to his practice. His commitment to delivering surgical excellence in this specialised field ensures that patients receive the highest standard of care tailored to their unique needs.",
    },
    {
      video: "https://wu0h7bvzfe6rners.public.blob.vercel-storage.com/Values%202.mp4",
      title: "Extensive Training and Experience",
      description:
        "Osama Moussa's professional journey has been marked by extensive training and experience across various eminent medical institutions in the UK. From teaching centres in cities like Liverpool and Newcastle to renowned London tertiary centres such as Imperial College London, University College London and the Royal Marsden, he has acquired a breadth of clinical insight and exposure to complex surgical cases.",
    },
    {
      video: "https://wu0h7bvzfe6rners.public.blob.vercel-storage.com/Values%203.mp4",
      title: "Multidisciplinary Approach",
      description:
        "Osama Moussa's comprehensive training has equipped him with skills in open, laparoscopic, and robotic upper GI surgery. His expertise extends beyond traditional surgical methods to include advanced techniques such as laparoscopy and robotic-assisted surgery, ensuring patients have access to the latest innovations in surgical care.",
    },
    {
      video: "https://wu0h7bvzfe6rners.public.blob.vercel-storage.com/Values%204.mp4",
      title: "Commitment to Academic Excellence",
      description:
        "Osama Moussa's dedication to advancing his skills and knowledge is evident through his pursuit of academic excellence. From obtaining a Postgraduate Diploma in Minimal Access Surgery to completing a research Medical Doctorate at Imperial College London, he demonstrates a commitment to staying at the forefront of medical advancements in his field. His research, particularly in metabolic health in obesity, highlights his commitment to innovation.",
    },
  ];

  return (
    <section className="w-full bg-[#6E6E6E] py-16">
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

