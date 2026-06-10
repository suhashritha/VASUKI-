/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please input a valid email');
      return;
    }

    setError('');
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section id="newsletter-section" className="py-20 bg-[#FFFDF7] dark:bg-[#13111C] transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Decorative inner container */}
        <div className="relative overflow-hidden bg-gradient-to-tr from-[#FAD6BF]/30 via-[#FFFDF7] to-[#E8DFF5]/30 dark:from-[#211226]/40 dark:via-[#1E1726] dark:to-[#120D16] border border-amber-200/30 dark:border-purple-950 p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-lg text-center backdrop-blur-md">
          
          {/* Sparkle icons */}
          <div className="absolute top-8 left-8 text-amber-300 dark:text-purple-900/60 pointer-events-none">
            <Sparkles size={32} className="animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          <div className="absolute bottom-8 right-8 text-amber-300 dark:text-purple-900/60 pointer-events-none">
            <Sparkles size={24} className="animate-pulse" />
          </div>

          <div className="max-w-xl mx-auto relative z-10">
            <span className="font-serif text-xs tracking-[0.35em] text-[#C9A86A] uppercase font-bold block mb-4">
              Seasonal Releases
            </span>

            <h2 className="font-serif text-2xl sm:text-3.5xl font-extrabold text-[#3E2F1E] dark:text-amber-100 leading-tight">
              Join the Vasuki Family
            </h2>

            <p className="mt-4 font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
              Receive updates on new collections, handloom launches, festive styling edits, and priority bridal reservation invitations.
            </p>

            {/* Newsletter input segment */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 max-w-sm mx-auto"
                  >
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-sans text-xs sm:text-sm font-bold">
                      <CheckCircle size={16} />
                      <span>Welcome to the Family! Check your inbox.</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-md mx-auto"
                  >
                    <div className="flex-grow relative flex flex-col items-start">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                        <Mail size={16} />
                      </div>
                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="Enter your email address"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-white dark:bg-[#1E1726]/40 text-neutral-800 dark:text-neutral-100 font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#C9A86A] transition-all ${
                          error ? 'border-red-400 focus:ring-red-400 text-red-500' : 'border-amber-200/40'
                        }`}
                      />
                      {error && <span className="text-[10px] text-red-500 mt-1 font-semibold">{error}</span>}
                    </div>

                    <button
                      id="newsletter-submit"
                      type="submit"
                      className="px-6 py-3 bg-neutral-900 border border-transparent hover:bg-neutral-800 text-white dark:bg-amber-100 dark:text-neutral-900 font-sans text-[11px] font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-95"
                    >
                      Subscribe
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Quick un-sub hint */}
            <span className="text-[9px] text-neutral-450 dark:text-neutral-500 font-sans block mt-6">
              🔒 We value your privacy. Unsubscribe completely anytime inside single tap.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
