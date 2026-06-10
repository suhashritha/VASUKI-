/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq-section"
      className="py-24 bg-[#FFFDF7] dark:bg-[#13111C] border-b border-amber-200/20 dark:border-purple-900/40 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordions */}
        <div id="faq-accordions" className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="border border-amber-200/25 dark:border-purple-950/80 bg-white/40 dark:bg-[#1E1726]/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
              >
                {/* Accordion Trigger */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans text-sm sm:text-base font-bold text-neutral-800 dark:text-amber-100/90 hover:text-[#C9A86A] transition-colors"
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle size={18} className="text-[#C9A86A] mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  
                  {/* Dynamic rotating Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-neutral-400 dark:text-neutral-500"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Accordion Expand Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed border-t border-amber-100/20 dark:border-purple-900/10">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Micro contact hint */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
            Have a different customization or bulk sizing question? 
            <a
              href="#contact-section"
              className="ml-1.5 font-bold text-amber-600 dark:text-amber-200 hover:underline inline-flex items-center gap-1.5"
            >
              Contact our team <MessageSquare size={13} />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
