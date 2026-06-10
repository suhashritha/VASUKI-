/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="vasuki-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFDF7] dark:bg-[#120D16] transition-colors duration-500"
        >
          <div className="relative flex flex-col items-center">
            {/* Spinning decorative gold mandala rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute -inset-10 border border-amber-300/40 dark:border-amber-500/25 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute -inset-14 border border-dashed border-amber-400/20 dark:border-amber-400/15 rounded-full"
            />
            
            {/* Soft pulse glow center */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-100 to-amber-100 dark:from-purple-950/40 dark:to-amber-950/40 flex items-center justify-center border border-amber-200/50 dark:border-amber-600/30 shadow-lg"
            >
              <span className="font-serif text-3xl font-bold text-[#C9A86A] tracking-wider">V</span>
            </motion.div>

            {/* Typography brand names appearing */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 font-serif text-3xl tracking-widest text-[#5F4E36] dark:text-amber-100 font-medium font-serif"
            >
              VASUKI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A]"
            >
              Timeless Ethnic Elegance
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
