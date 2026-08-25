"use client";

import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ValueCardProps {
  videoSrc: string;
  title: string;
  description: string;
  audioEnabled: boolean;
  onEnableAudio: () => void;
}

/* ── Legacy layout (2-col grid, square cards) — kept for reference / rollback ──
function ValueCardLegacy({ videoSrc, title, description, index, audioEnabled }: ValueCardProps & { index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = true;
      videoRef.current.volume = 1;
    }
  }, []);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    if (videoRef.current) {
      try {
        videoRef.current.volume = 1;
        if (audioEnabled) {
          videoRef.current.muted = false;
          await videoRef.current.play();
        } else {
          videoRef.current.muted = true;
          await videoRef.current.play();
        }
      } catch (error) {
        console.error("Error playing video:", error);
        if (videoRef.current) {
          videoRef.current.muted = true;
          await videoRef.current.play().catch((err) => console.error("Error playing video:", err));
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
      <div className="relative w-full aspect-square overflow-hidden bg-black shadow-lg drop-shadow-xl rounded-3xl">
        <video ref={videoRef} src={videoSrc} className="w-full h-full object-cover" muted loop playsInline preload="none" />
        <div className="absolute bottom-0 left-0 right-0 w-full bg-black/95 backdrop-blur-sm pt-3 sm:pt-4 md:pt-6 lg:pt-8 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 rounded-b-2xl shadow-lg z-10 flex flex-col min-h-[30%]">
          <h3 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2 text-left">{title}</h3>
          <p className="text-white text-xs sm:text-sm md:text-base text-left leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
── End legacy ── */

function useVideoHover(audioEnabled: boolean, onEnableAudio: () => void) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const preferMutedRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = true;
      videoRef.current.volume = 1;
    }
  }, []);

  const playVideo = async (withSound: boolean) => {
    if (!videoRef.current) return;
    try {
      videoRef.current.volume = 1;
      videoRef.current.muted = !withSound;
      setIsSoundOn(withSound);
      await videoRef.current.play();
    } catch {
      if (videoRef.current) {
        videoRef.current.muted = true;
        setIsSoundOn(false);
        await videoRef.current.play().catch(() => undefined);
      }
    }
  };

  const handleMouseEnter = async () => {
    setIsHovered(true);
    const withSound = (audioEnabled || isSoundOn) && !preferMutedRef.current;
    await playVideo(withSound);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    preferMutedRef.current = false;
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      setIsSoundOn(false);
    }
  };

  const handleAudioToggle = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (isSoundOn) {
      preferMutedRef.current = true;
      await playVideo(false);
      return;
    }

    onEnableAudio();
    preferMutedRef.current = false;
    setIsHovered(true);
    await playVideo(true);
  };

  return { videoRef, isHovered, isSoundOn, handleMouseEnter, handleMouseLeave, handleAudioToggle };
}

function ValueCardWide({
  videoSrc,
  title,
  description,
  index,
  audioEnabled,
  onEnableAudio,
  reverse = false,
}: ValueCardProps & { index: number; reverse?: boolean }) {
  const { ref, isVisible } = useScrollAnimation();
  const { videoRef, isSoundOn, handleMouseEnter, handleMouseLeave, handleAudioToggle } =
    useVideoHover(audioEnabled, onEnableAudio);

  return (
    <article
      ref={ref}
      className={`group relative w-full fade-in-on-scroll ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative flex min-h-0 flex-col overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-white/10 sm:rounded-[2rem] lg:min-h-[19rem] lg:flex-row xl:min-h-[21rem] ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Video — full face visible, no text overlay */}
        <div className="relative aspect-[16/10] w-full shrink-0 bg-black sm:aspect-[2/1] lg:aspect-auto lg:min-h-[19rem] lg:w-[58%] xl:min-h-[21rem] xl:w-[60%]">
          <video
            ref={videoRef}
            src={videoSrc}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ objectPosition: reverse ? "55% center" : "45% center" }}
            muted
            loop
            playsInline
            preload="none"
          />

          {/* Audio override — bottom corner opposite text panel */}
          <button
            type="button"
            onClick={handleAudioToggle}
            className={`absolute bottom-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-black/90 sm:bottom-5 sm:px-4 sm:py-2.5 sm:text-sm ${
              reverse ? "right-4 sm:right-5" : "left-4 sm:left-5"
            } ${isSoundOn ? "border-white/60" : ""}`}
            aria-label={isSoundOn ? "Turn sound off" : "Turn sound on"}
          >
            {isSoundOn ? (
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
              </svg>
            ) : (
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
            <span>{isSoundOn ? "Sound off" : "Play sound"}</span>
          </button>
        </div>

        {/* Text panel — beside video with shaped inner seam */}
        <div className="relative flex flex-1 flex-col justify-center bg-black px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10 xl:px-12">
          {/* Diagonal seam wrapping into video edge (desktop) */}
          <div
            aria-hidden
            className={`pointer-events-none absolute top-0 hidden h-full w-10 bg-black lg:block xl:w-12 ${
              reverse ? "-right-10 xl:-right-12" : "-left-10 xl:-left-12"
            }`}
            style={{
              clipPath: reverse ? "polygon(0 0, 100% 0, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%)",
            }}
          />

          <p
            className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-xs ${
              reverse ? "lg:text-right" : ""
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            className={`mb-4 text-xl font-bold leading-snug text-white sm:text-2xl lg:text-[1.55rem] lg:leading-tight xl:text-[1.65rem] ${
              reverse ? "lg:text-right" : ""
            }`}
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed text-white/80 sm:text-base lg:leading-[1.65] ${
              reverse ? "lg:text-right" : ""
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ValuesSection() {
  const [audioEnabled, setAudioEnabled] = useState(false);

  const enableAudio = () => setAudioEnabled(true);

  useEffect(() => {
    const enableAudioFromInteraction = () => {
      enableAudio();
      document.removeEventListener("click", enableAudioFromInteraction);
      document.removeEventListener("touchstart", enableAudioFromInteraction);
    };
    document.addEventListener("click", enableAudioFromInteraction, { once: true });
    document.addEventListener("touchstart", enableAudioFromInteraction, { once: true });
    return () => {
      document.removeEventListener("click", enableAudioFromInteraction);
      document.removeEventListener("touchstart", enableAudioFromInteraction);
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
    <section className="w-full bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* New: one wide video per row */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
          {values.map((value, index) => (
            <ValueCardWide
              key={index}
              index={index}
              reverse={index % 2 === 1}
              videoSrc={value.video}
              title={value.title}
              description={value.description}
              audioEnabled={audioEnabled}
              onEnableAudio={enableAudio}
            />
          ))}
        </div>

        {/* Legacy grid — swap back by rendering ValueCardLegacy in a 2-col grid instead
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
          {values.map((value, index) => (
            <ValueCardLegacy key={index} index={index} videoSrc={value.video} title={value.title} description={value.description} audioEnabled={audioEnabled} />
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
