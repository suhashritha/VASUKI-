/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Instagram, Calendar } from 'lucide-react';
import { GENERATED_HERO_IMAGE } from '../data';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const triggerScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFFDF7]/85 to-[#FFF5F2] dark:from-[#120D16] dark:via-[#191222] dark:to-[#120D16] transition-colors duration-500"
    >
      {/* Aesthetic Background Ornaments */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-pink-100/30 dark:bg-purple-950/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-100/30 dark:bg-amber-950/10 blur-3xl pointer-events-none" />
      
      {/* Traditional Indian Paisley / Mandala Motif in background (curated decorative svg pattern) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] flex items-center justify-center pointer-events-none pointer-events-none select-none">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor" className="text-amber-600 dark:text-amber-100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M50 10 Q60 30 50 50 Q40 30 50 10 M50 90 Q60 70 50 50 Q40 70 50 90" />
          <path d="M10 50 Q30 60 50 50 Q30 40 10 50 M90 50 Q70 60 50 50 Q70 40 90 50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Copywriting Text details */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-center lg:self-start bg-amber-100/50 dark:bg-purple-950/45 px-4 py-2 rounded-full border border-amber-200/30 dark:border-amber-600/20 mb-6"
            >
              <Sparkles size={14} className="text-[#C9A86A] animate-pulse" />
              <span className="text-xs font-sans tracking-[0.25em] font-extrabold uppercase text-[#967C4A] dark:text-amber-200">
                Aesthetic Pastel Wear
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3E2F1E] dark:text-amber-50 leading-tight sm:leading-none"
            >
              Elegance Woven <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A86A] via-[#EBCFC4] to-[#C9A86A] dark:from-amber-200 dark:via-[#DDE5D0] dark:to-amber-300 font-serif font-black">
                Into Every Thread
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 font-sans text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Discover handcrafted ethnic wear that celebrates culture, beauty, and individuality. Designed dynamically for the modern woman who cherishes her subcontinental roots.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary Call to Action */}
              <button
                id="hero-shop-collection-btn"
                onClick={() => triggerScroll('#collections-section')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 overflow-hidden rounded-full font-bold uppercase tracking-widest text-xs bg-neutral-900 text-white dark:bg-amber-100 dark:text-neutral-950 shadow-xl hover:shadow-2xl transition duration-300 transform active:scale-95 cursor-pointer"
              >
                <span>Shop Collection</span>
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* Secondary Call to Action */}
              <button
                id="hero-book-consult-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs bg-white text-neutral-800 dark:bg-[#1E1726] dark:text-amber-100 border border-amber-200 dark:border-purple-900/60 shadow-md hover:bg-neutral-50 dark:hover:bg-[#281E32] transition duration-300 active:scale-95 cursor-pointer"
              >
                <Calendar size={15} className="text-[#C9A86A]" />
                <span>Book Consultation</span>
              </button>
            </motion.div>

            {/* Quick trust indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start border-t border-amber-200/20 dark:border-purple-900/40 pt-6 text-xs text-neutral-500 dark:text-neutral-400 font-sans tracking-widest font-semibold uppercase"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                Hand-loom Silks
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                Bridal Customization
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                Worldwide Insured Express
              </div>
            </motion.div>
          </div>

          {/* Column 2: Gorgeous Archway image display with floral flourishes */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Outer Golden Traditional Arch Border SVG backdrop decoration */}
              <div className="absolute inset-0 border-[3px] border-double border-amber-300/60 dark:border-amber-500/40 rounded-[140px_140px_24px_24px] pointer-events-none -m-4 transform scale-105" />
              <div className="absolute inset-0 border border-neutral-200/50 dark:border-purple-900/40 rounded-[135px_135px_20px_20px] pointer-events-none -m-2" />
              
              {/* Custom Image Wrapper with traditional Arch styling */}
              <div className="relative overflow-hidden shadow-2xl rounded-[130px_130px_16px_16px] border border-amber-100 dark:border-purple-950 aspect-[3/4]">
                <img
                  id="hero-img-model"
                  src={GENERATED_HERO_IMAGE}
                  alt="Vasuki Premium Wedding Lehenga Look"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[2.5s]"
                />
                
                {/* Visual Label Card Overlay inside image bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent p-6 text-white text-center">
                  <p className="font-serif text-sm italic tracking-widest text-amber-200 leading-none">The Bridal Heirloom Edit</p>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-300 mt-1">Vasuki Signature Lehenga</p>
                </div>
              </div>

              {/* Little Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -right-6 lg:-right-10 top-1/3 bg-white dark:bg-[#1E1726] border border-amber-200 dark:border-purple-900/50 p-3 rounded-2xl shadow-xl flex items-center gap-3 transition-colors duration-500 whitespace-nowrap"
              >
                <div className="w-10 h-10 rounded-full bg-pink-100/50 dark:bg-purple-950/60 flex items-center justify-center">
                  <Sparkles size={18} className="text-[#C9A86A]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xs font-bold text-neutral-800 dark:text-amber-100">Handcrafted</span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-neutral-400">By Master Weavers</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -left-6 bottom-10 bg-white dark:bg-[#1E1726] border border-amber-200 dark:border-purple-900/50 p-3 rounded-2xl shadow-xl flex items-center gap-3 transition-colors duration-500"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <div className="w-2.5 h-2.5 absolute rounded-full bg-emerald-600" />
                </div>
                <div className="flex flex-col text-left whitespace-nowrap">
                  <span className="font-serif text-xs font-bold text-neutral-800 dark:text-amber-100">Live Support</span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-neutral-400">Book Slots Open</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
