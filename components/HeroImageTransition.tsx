// components/HeroImageTransition.tsx

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGE_PATHS = {
  light: "/images/hero-light.jpg",
  dark: "/images/hero-dark.jpg",
};

// Interval for continuous swapping (e.g., every 7 seconds after the first one)
const CONTINUOUS_INTERVAL = 7000; 
// 🚨 NEW: Delay before the FIRST transition starts (e.g., 500ms or 1000ms)
const INITIAL_DELAY = 500; // 0.5 seconds - Set this low for a snappy start

export function HeroImageTransition() {
  // Start with the dark image visible
  const [isDarkVisible, setIsDarkVisible] = useState(true);

  useEffect(() => {
    // 1. 🚨 FIX: Use a short timeout to trigger the FIRST transition quickly after mount
    const initialTimeout = setTimeout(() => {
      setIsDarkVisible(false); // Trigger the first fade-out
    }, INITIAL_DELAY);

    // 2. Set up the continuous timer for ALL subsequent swaps
    // We start the interval *after* the initial timeout + transition duration,
    // but for simplicity, let's keep the interval running consistently.
    const continuousTimer = setInterval(() => {
      setIsDarkVisible(prev => !prev);
    }, CONTINUOUS_INTERVAL);

    // Cleanup function
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(continuousTimer);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="relative w-full aspect-[16/8] md:aspect-[16/7] overflow-hidden bg-gray-100">
      
      {/* 1. Base Image (Light Version) */}
      <Image
        src={IMAGE_PATHS.light}
        alt="Architectural interior, light version"
        fill
        priority 
        sizes="100vw"
        className="object-cover"
      />

      {/* 2. Layered Image (Dark Version) */}
      <Image
        src={IMAGE_PATHS.dark}
        alt="Architectural interior, dark version"
        fill
        sizes="100vw"
        className={`
          object-cover absolute top-0 left-0 transition-opacity 
          duration-1000 // 1 second transition (from last fix)
          ${isDarkVisible ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* DARK OVERLAY LAYER */}
      <div className="absolute inset-0 bg-black/20 z-5"></div> 

      {/* Main SIESTA.ia Text Overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
         <h1 
            className="text-7xl sm:text-8xl lg:text-9xl font-light tracking-tighter leading-none text-white drop-shadow-2xl"
         >
            SIESTA.ia
         </h1>
      </div>
    </div>
  );
}