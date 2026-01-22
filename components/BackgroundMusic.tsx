"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showMuteButton, setShowMuteButton] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    // Set initial volume
    audioRef.current.volume = 0.3;

    // Check if audio file loads successfully
    const handleCanPlay = () => {
      // Audio file loaded successfully
      console.log("Background music file loaded");
    };

    const handleError = (e: Event) => {
      // Audio file failed to load
      console.error("Background music file not found. Please add /background-music.mp3 to the public folder.");
      console.error("Audio error:", e);
    };

    audioRef.current.addEventListener("canplay", handleCanPlay);
    audioRef.current.addEventListener("error", handleError);

    // Try to autoplay on load
    const tryAutoplay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          // Success - music is playing
          setShowMuteButton(false);
        } catch (error) {
          // Autoplay failed - show mute/unmute button
          console.log("Autoplay blocked, showing mute button");
          setShowMuteButton(true);
        }
      }
    };

    // Try autoplay after a short delay to ensure audio is ready
    const timer = setTimeout(tryAutoplay, 500);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.removeEventListener("canplay", handleCanPlay);
        audioRef.current.removeEventListener("error", handleError);
      }
    };
  }, []);

  const toggleMute = async () => {
    if (!audioRef.current) return;

    if (isMuted) {
      // Unmute and play
      audioRef.current.muted = false;
      setIsMuted(false);
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Error playing background music:", error);
      }
    } else {
      // Mute
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;

    // Set initial volume
    audioRef.current.volume = 0.3;

    // Handle video hover events via custom events
    const handleVideoHoverStart = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPaused(true);
      }
    };

    const handleVideoHoverEnd = () => {
      if (audioRef.current && !isPaused) {
        audioRef.current.play().catch((error) => {
          console.error("Error resuming background music:", error);
        });
      }
    };

    // Listen for custom events from video components
    window.addEventListener("videoHoverStart", handleVideoHoverStart);
    window.addEventListener("videoHoverEnd", handleVideoHoverEnd);

    return () => {
      window.removeEventListener("videoHoverStart", handleVideoHoverStart);
      window.removeEventListener("videoHoverEnd", handleVideoHoverEnd);
    };
  }, [isPaused]);

  // Handle audio ended event to loop
  useEffect(() => {
    if (!audioRef.current) return;

    const handleEnded = () => {
      if (audioRef.current && !isPaused && !isMuted) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          console.error("Error looping background music:", error);
        });
      }
    };

    const audio = audioRef.current;
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isPaused, isMuted]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: "none" }}
      >
        {/* You'll need to add your background music file here */}
        <source src="/background-music.mp3" type="audio/mpeg" />
        <source src="/background-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      
      {/* Mute/Unmute Button - Only shows if autoplay fails */}
      {showMuteButton && (
        <button
          onClick={toggleMute}
          className="fixed bottom-4 right-4 z-50 bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          title={isMuted ? "Unmute background music" : "Mute background music"}
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M17 10l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
