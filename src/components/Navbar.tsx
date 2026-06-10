/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode, onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero-section' },
    { name: 'Our Heritage', href: '#about-section' },
    { name: 'Services', href: '#services-section' },
    { name: 'Collections', href: '#collections-section' },
    { name: 'Portfolio', href: '#portfolio-section' },
    { name: 'Reviews', href: '#testimonials-section' },
    { name: 'FAQ', href: '#faq-section' },
    { name: 'Contact', href: '#contact-section' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="vasuki-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FFFDF7]/95 dark:bg-[#120D16]/95 backdrop-blur-md py-4 shadow-md border-b border-amber-200/20 dark:border-purple-900/40'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Brand Logo */}
            <a
              id="navbar-logo"
              href="#hero-section"
              onClick={(e) => handleScrollTo(e, '#hero-section')}
              className="flex flex-col group"
            >
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-[#5F4E36] dark:text-amber-100 transition-colors duration-300">
                VASUKI
              </span>
              <span className="text-[9px] font-sans tracking-[0.35em] text-[#C9A86A] uppercase font-semibold transition-opacity group-hover:opacity-85">
                Ethnic Wear
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`navlink-${link.name.toLowerCase().replace(' ', '-')}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-sans text-sm tracking-widest uppercase font-medium text-neutral-600 dark:text-neutral-300 hover:text-[#C9A86A] dark:hover:text-amber-200 transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A86A] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Utility Controls */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Dark mode switch */}
              <button
                id="darkmode-toggle-btn"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode option"
                className="p-2.5 rounded-full hover:bg-[#F5E7D3]/40 dark:hover:bg-[#1E1726] text-[#5F4E36] dark:text-amber-100 transition-colors duration-300"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Consultation CTA button */}
              <button
                id="explore-collection-cta"
                onClick={onOpenConsultation}
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-[#C9A86A] to-[#EBCFC4] dark:from-[#C9A86A] dark:to-[#4A3254] hover:shadow-lg text-neutral-900 dark:text-amber-50 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all duration-300 border border-amber-200/20 active:scale-95"
              >
                <Sparkles size={14} className="animate-pulse" />
                <span>Book Consult</span>
              </button>

              {/* Mobile Menu Toggle button */}
              <button
                id="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile drawer"
                className="lg:hidden p-2.5 rounded-full hover:bg-[#F5E7D3]/40 dark:hover:bg-[#1E1726] text-[#5F4E36] dark:text-amber-100 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-45 bg-neutral-900/60 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              id="mobile-drawer-container"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#FFFDF7] dark:bg-[#13111C] p-6 shadow-2xl flex flex-col justify-between border-l border-amber-200/20 dark:border-purple-900/40"
            >
              <div className="mt-8 flex flex-col">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex flex-col">
                    <span className="font-serif text-2xl font-extrabold tracking-widest text-[#5F4E36] dark:text-amber-100">
                      VASUKI
                    </span>
                    <span className="text-[9px] font-sans tracking-widest text-[#C9A86A] uppercase font-semibold">
                      Authentic Indian Wear
                    </span>
                  </div>
                  <button
                    id="mobile-drawer-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-full text-[#5F4E36] dark:text-amber-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav id="mobile-nav-links" className="flex flex-col space-y-4">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      id={`mobile-navlink-${link.name.toLowerCase().replace(' ', '-')}`}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="font-sans text-base tracking-widest uppercase font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#C9A86A] border-b border-amber-100/30 dark:border-purple-900/20 pb-2 transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Botton CTA inside mobile drawer */}
              <div className="mt-auto pt-8 flex flex-col space-y-4">
                <button
                  id="mobile-drawer-consult-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full text-center bg-gradient-to-r from-[#C9A86A] to-[#EBCFC4] dark:from-[#C9A86A] dark:to-[#4A3254] text-neutral-900 dark:text-amber-50 font-bold text-xs uppercase tracking-widest py-3.5 rounded-full shadow-lg"
                >
                  Book Bridal Consultation
                </button>
                <p className="text-center text-[10px] text-neutral-400 dark:text-neutral-500 font-medium">
                  Celebrating Tradition with Timeless Elegance
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
