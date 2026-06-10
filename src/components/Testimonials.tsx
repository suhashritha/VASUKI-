/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const curr = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testimonials-section"
      className="py-24 bg-[#FFFDF7] dark:bg-[#13111C] border-b border-amber-200/20 dark:border-purple-900/40 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-100/30 dark:text-purple-950/15 pointer-events-none">
        <Quote size={200} strokeWidth={0.5} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            Real Bride Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight">
            Client Testimonials
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonial Active Display Card with transition */}
        <div className="relative pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={curr.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/60 dark:bg-[#1E1726]/40 border border-amber-100/30 dark:border-purple-950/80 p-8 sm:p-12 rounded-[2rem] shadow-lg text-center backdrop-blur-md relative"
            >
              {/* Star Rating details */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(curr.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Quote text */}
              <p className="font-sans text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed font-semibold italic max-w-2xl mx-auto">
                "{curr.review}"
              </p>

              {/* User Avatar details */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-200 border border-dashed rounded-full pointer-events-none -m-1" />
                  <img
                    src={curr.image}
                    alt={curr.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-base font-extrabold text-[#3E2F1E] dark:text-amber-100">
                    {curr.name}
                  </h4>
                  <p className="font-sans text-xs uppercase tracking-widest text-[#C9A86A] font-bold mt-0.5">
                    {curr.role} • <span className="text-neutral-400 font-medium">{curr.location}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="testimonial-prev-arrow"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white dark:bg-[#1E1726] border border-amber-200/20 text-[#5F4E36] dark:text-amber-100 hover:bg-[#C9A86A] hover:text-white dark:hover:bg-amber-300 dark:hover:text-neutral-900 transition-all flex items-center justify-center shadow-md active:scale-90"
              title="Previous Review"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pagination Bullet indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  id={`testimonial-bullet-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'bg-[#C9A86A] w-6'
                      : 'bg-amber-200/40 hover:bg-amber-300 dark:bg-purple-950 dark:hover:bg-purple-900'
                  }`}
                  aria-label={`Show review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-arrow"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white dark:bg-[#1E1726] border border-amber-200/20 text-[#5F4E36] dark:text-amber-100 hover:bg-[#C9A86A] hover:text-white dark:hover:bg-amber-300 dark:hover:text-neutral-900 transition-all flex items-center justify-center shadow-md active:scale-90"
              title="Next Review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Small trust banner */}
        <div className="mt-16 text-center border-t border-amber-100 dark:border-purple-900/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 font-medium">
            <MessageCircle size={15} className="text-[#C9A86A]" />
            <span>Over 1,200 verified reviews from Dehradun, Delhi, Mumbai, and Dehradun bridal circles.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
