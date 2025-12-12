// components/PageTransitionWrapper.tsx
"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

// Define the animation properties
const variants = {
  // Initial state (before the page mounts)
  hidden: { opacity: 0, y: 20 },
  // State when the page is fully mounted and visible
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  // State when the page is exiting (optional, but good for symmetry)
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  // usePathname is crucial: it changes when the user navigates, 
  // forcing Framer Motion to re-run the animation cycle.
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