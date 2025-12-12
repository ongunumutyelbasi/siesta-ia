// components/TransitionLayout.tsx
"use client";

import React from 'react';
// 🚨 Removed AnimatePresence, motion, and useRouter imports
// import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Still needed for potential future re-enabling
import { Header } from './Header'; 

// 🚨 Removed the variants object

interface TransitionLayoutProps {
    children: React.ReactNode;
}

export function TransitionLayout({ children }: TransitionLayoutProps) {
    // 🚨 We keep usePathname() here in case you quickly switch back to an animated version
    const pathname = usePathname(); 

    return (
        <React.Fragment> 
            
            {/* 1. Static Header */}
            <Header /> 
            
            {/* 2. Transition Stage Wrapper (Keeps stable layout and white background) */}
            <div className="relative min-h-screen w-full bg-white"> 
                
                {/* 3. Page Content Container (Simple div replacement for motion.div) */}
                <div className="w-full h-full"> 
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
}