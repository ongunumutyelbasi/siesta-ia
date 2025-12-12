// components/Header.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Assumes lucide-react is installed

// Define the structure for your navigation links
interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // ADD font-sans HERE to apply the Helvetica Now typeface to the whole header
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans"> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section (LEFT) */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              // font-bold automatically selects HelveticaNowText-Bold.ttf (weight 700)
              className="text-2xl font-light text-gray-900"
            >
              SIESTA.ia
            </Link>
          </div>

          {/* Combined Right Section: Desktop Navigation + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    // font-medium automatically selects HelveticaNowText-Medium.ttf (weight 500)
                    className="rounded-md px-3 py-2 text-sm font-regular text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                // font-medium automatically selects the correct weight
                className="block rounded-md px-3 py-2 text-base font-regular text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}