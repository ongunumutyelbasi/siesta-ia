// components/Footer.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion'; 
import { useState } from 'react'; 

// Define the links for navigation and legal sections (UNCHANGED)
const studioLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
];

const legalLinks = [
  { label: 'Gizlilik Politikası', href: '/gizlilik' }, 
  { label: 'Kullanım Şartları', href: '/sartlar' },   
];

// Reusable component for the animated link style (for Next/Link)
function AnimatedLink({ href, label }: { href: string, label: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            href={href} 
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
            {/* The animated underline element */}
            <motion.span
                className="absolute left-0 w-full h-[1px] bg-gray-900 bottom-[-2px] origin-left" 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ 
                    duration: 0.2, 
                    ease: "easeInOut"
                    // 🚨 FIX 1: REMOVED originX: 0 
                }}
            />
        </Link>
    );
}

// Reusable component for animated Anchor (for mailto/tel links)
function AnimatedAnchor({ href, label }: { href: string, label: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a 
            href={href} 
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
            {/* The animated underline element */}
            <motion.span
                className="absolute left-0 w-full h-[1px] bg-gray-900 bottom-[-2px] origin-left" 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ 
                    duration: 0.2, 
                    ease: "easeInOut"
                    // 🚨 FIX 2: REMOVED originX: 0 
                }}
            />
        </a>
    );
}


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (

    <footer className="w-full bg-[var(--offWhite)] mt-0 md:mt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 md:pt-20">
        
        {/* 1. Main Grid Layout (Logo + Links) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 border-b border-gray-100 pb-12">
          
          {/* Logo / Brand Name */}
          <div className="col-span-2 lg:col-span-2">
            <Link 
              href="/" 
              className="text-3xl font-light text-gray-900 mb-4 block hover:text-gray-700 transition-colors"
            >
              SIESTA.ia
            </Link>
            <p className="text-sm text-gray-500 max-w-xs font-light">
              Sakin sadelik ve doğal ışığa dayanan mimari ve iç mimarlık stüdyosu.
            </p>
          </div>

          {/* Studio Navigation Links - USING AnimatedLink */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Stüdyo</h3>
            <ul className="space-y-3">
              {studioLinks.map((link) => (
                <li key={link.label}>
                  <AnimatedLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information (Placeholder) */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base font-medium text-gray-900 mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li>
                {/* USED AnimatedAnchor */}
                <AnimatedAnchor href="mailto:info@siestaia.com" label="info@siestaia.com" />
              </li>
              <li>
                {/* USED AnimatedAnchor and updated phone number */}
                <AnimatedAnchor href="tel:+905340784419" label="+90 534 078 4419" />
              </li>
              <li className="text-sm font-light text-gray-600">
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Copyright and Legal Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-8 pb-8">
          
          {/* Copyright */}
          <p className="text-xs text-gray-400 font-light order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} SIESTA.ia. Tüm hakları saklıdır.
          </p>
          
          {/* Legal Links - Fixed with Tailwind hover underline */}
          <ul className="flex space-x-6 order-1 md:order-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  className="text-xs font-light text-gray-500 hover:text-gray-700 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-[-1px] w-full h-[1px] bg-gray-500 scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </footer>
  );
}