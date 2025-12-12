// components/HeroImageTransition.tsx

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGE_PATHS = {
  light: "/images/hero-light.jpg",
  dark: "/images/hero-dark.jpg",
};

// 🚨 FIX 1: ADJUST TIMING 
// Let's speed up the interval (how often it swaps) to 7 seconds.
const TRANSITION_INTERVAL = 7000; 

// Let's set a fast, noticeable transition duration of 1 second (1000ms).
// Note: We don't use this variable, we use a Tailwind class, but keeping it 
// here for clarity if you need a duration variable elsewhere.
// const TRANSITION_DURATION_MS = 1000; 

export function HeroImageTransition() {
  const [isDarkVisible, setIsDarkVisible] = useState(true);

  useEffect(() => {
    // Timer to swap the images every 7 seconds
    const timer = setInterval(() => {
      setIsDarkVisible(prev => !prev);
    }, TRANSITION_INTERVAL);

    return () => clearInterval(timer);
  }, []);

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
          // 🚨 FIX 2: Changed from duration-5000 (5s) to duration-1000 (1s)
          duration-1000 
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