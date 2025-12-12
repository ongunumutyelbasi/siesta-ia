// components/PageTransitionWrapper.tsx
"use client";

// 🚨 FIX 1: Import Variants and Transition types
import { motion, Variants, Transition } from 'framer-motion'; 
import { usePathname } from 'next/navigation';
import React from 'react';

// Define the animation properties
// 🚨 FIX 2: Explicitly type the variants constant as Variants
const variants: Variants = {
  // Initial state (before the page mounts)
  hidden: { opacity: 0, y: 20 },
  
  // State when the page is fully mounted and visible
  enter: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0, 0, 0.2, 1]  // Standard cubic-bezier array for "easeOut"
    } as Transition // 🚨 FIX 3: Cast the transition object to the Transition type
  },
  
  // State when the page is exiting
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0, 1, 1] // Standard cubic-bezier array for "easeIn"
    } as Transition // 🚨 FIX 4: Cast the transition object to the Transition type
  },
};

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname();

  return (
    // AnimatePresence manages the mounting/unmounting of components based on a key change (pathname)
    <motion.div
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      // You may need to set an explicit width/height if your layout shifts during animation
      // className="w-full h-full" 
    >
      {children}
    </motion.div>
  );
}