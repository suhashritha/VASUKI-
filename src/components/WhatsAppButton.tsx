/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/919999999999?text=Hello%20Vasuki!%20I%20am%20interested%20in%20exploring%20your%20ethnic%20wear%20and%20booking%20a%20personal%20bridal/wedding%20consultation.";

  return (
    <div id="whatsapp-sticky" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="mb-3 bg-white dark:bg-[#1E1726] border border-amber-200 dark:border-purple-900 shadow-2xl p-4 rounded-2xl w-72 transition-colors duration-500"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Designer Support</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
              >
                <X size={15} />
              </button>
            </div>
            
            <p className="text-sm text-neutral-800 dark:text-neutral-200 font-sans mb-3 font-medium leading-relaxed">
              Namaste! 🙏 Welcome to Vasuki. Chat with our expert fashion consultants for custom tailoring or bridal wear design.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium text-xs rounded-xl shadow-md transition-colors"
            >
              <MessageSquare size={16} />
              Start Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        id="whatsapp-trigger-btn"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-emerald-500 to-green-600 dark:from-emerald-600 dark:to-green-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow relative group border-2 border-[#fffdf7] dark:border-purple-950"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 text-[9px] text-white font-serif items-center justify-center font-bold">1</span>
        </span>
        
        {/* Animated Custom Swapping Icon */}
        <MessageSquare size={26} className="text-white group-hover:rotate-12 transition-transform duration-300" />
      </motion.button>
    </div>
  );
}
