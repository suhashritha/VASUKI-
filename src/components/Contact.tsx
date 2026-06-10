/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Clock, Facebook, Instagram, Youtube, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ContactProps {
  inquiryProduct: Product | null;
  clearInquiryProduct: () => void;
}

export default function Contact({ inquiryProduct, clearInquiryProduct }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occasionType: 'wedding',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  // Auto populate message if an inquiry product is received
  useEffect(() => {
    if (inquiryProduct) {
      setFormData((prev) => ({
        ...prev,
        occasionType: inquiryProduct.category.toLowerCase().includes('wedding') ? 'wedding' : 'festive',
        message: `Namaste Vasuki team! I am highly interested in inquiring about the "${inquiryProduct.name}" (${inquiryProduct.category}, priced at ${inquiryProduct.price}). Could you please guide me on sizing options, tailoring schedules, and delivery details?`,
      }));

      // Smooth scroll directly to contact form inputs
      if (formSectionRef.current) {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [inquiryProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a contact number';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide an email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please input a brief message';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        occasionType: 'wedding',
        message: '',
      });
      clearInquiryProduct();
    }, 1500);
  };

  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110052.5414841961!2d78.0263686!3d30.3164966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c35b3e2049%3A0x275932c8151413a3!2sDehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1781085200000!5m2!1sen!2sin";

  return (
    <section
      id="contact-section"
      className="py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFFDF7]/80 to-[#FFF5F2]/50 dark:from-[#13111C] dark:via-[#191222] dark:to-[#120D16] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-[0.3em] text-[#C9A86A] uppercase font-bold">
            Reserve Your Slot
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3E2F1E] dark:text-amber-100 mt-2 leading-tight">
            Consult With Our Experts
          </h2>
          <div className="w-16 h-1 bg-[#C9A86A] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Content: Details vs Form */}
        <div ref={formSectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info & Map */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="bg-white/60 dark:bg-[#1E1726]/40 border border-amber-200/20 p-8 rounded-3xl backdrop-blur-md shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#3E2F1E] dark:text-amber-100 mb-6 font-serif">
                Vasuki Luxury Atelier
              </h3>

              <div id="contact-details" className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-[#341F3D] flex items-center justify-center text-[#C9A86A] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold text-[#C9A86A] uppercase tracking-wider">Call or WhatsApp</h4>
                    <p className="font-sans text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                      +91 99999 88888
                    </p>
                    <p className="font-sans text-[10px] text-neutral-400">Consultation Lines Open: 9 AM – 7 PM IST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-[#341F3D] flex items-center justify-center text-[#C9A86A] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold text-[#C9A86A] uppercase tracking-wider">Email Support</h4>
                    <p className="font-sans text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                      contact@vasuki.com
                    </p>
                    <p className="font-sans text-[10px] text-neutral-400">General & Wholesale inquiries</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-[#341F3D] flex items-center justify-center text-[#C9A86A] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold text-[#C9A86A] uppercase tracking-wider">Our Boutique Location</h4>
                    <p className="font-sans text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-1 leading-relaxed">
                      14, Rajpur Road, Near Jakhan Chowk, <br />
                      Dehradun, Uttarakhand - 248001, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels inside info box */}
              <div className="border-t border-amber-100/30 dark:border-purple-900/10 pt-6 mt-8 flex items-center justify-between">
                <span className="font-serif text-xs italic text-neutral-400">Connect with our pages:</span>
                <div id="contact-social-icons" className="flex items-center gap-3">
                  <a href="#" className="p-2 sm:p-2.5 rounded-full bg-amber-50 dark:bg-[#341F3D] text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className="p-2 sm:p-2.5 rounded-full bg-amber-50 dark:bg-[#341F3D] text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="p-2 sm:p-2.5 rounded-full bg-amber-50 dark:bg-[#341F3D] text-[#C9A86A] hover:bg-[#C9A86A] hover:text-white transition-colors">
                    <Youtube size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Custom Google Maps IFrame wrapper card */}
            <div className="overflow-hidden bg-[#FFFDF7] dark:bg-[#1E1726] rounded-3xl shadow-md border border-amber-200/20 overflow-hidden h-[220px]">
              <iframe
                id="google-maps"
                title="Vasuki Atelier Dehradun Location"
                src={mapIframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 2: Inquiry form widget */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1E1726] border border-amber-200/20 dark:border-purple-900/40 p-8 rounded-[2rem] shadow-xl relative transition-all duration-500">
              
              {/* Overlay success prompt if completed */}
              <AnimatePresence>
                {isSubmitSuccess && (
                  <motion.div
                    id="contact-success-notification"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-white dark:bg-[#1E1726] rounded-[2rem] z-20 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      animate={{ scale: [0.9, 1.1, 1] }}
                      className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-6"
                    >
                      <CheckCircle size={36} />
                    </motion.div>

                    <h3 className="font-serif text-2xl font-bold text-neutral-800 dark:text-amber-100 mb-3">
                      Inquiry Received!
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed mb-8">
                      Pranam! Your request has been logged successfully. An expert designer from the Atelier will contact you over WhatsApp or phone call inside <b>2 Business Hours</b> to schedule fittings.
                    </p>

                    <button
                      id="reset-success-contact-btn"
                      onClick={() => setIsSubmitSuccess(false)}
                      className="px-6 py-3 bg-[#C9A86A] text-neutral-900 dark:text-amber-50 text-xs font-bold font-sans uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-102 active:scale-98"
                    >
                      New Booking
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3E2F1E] dark:text-amber-150 mb-2 font-serif">
                Send Consultation Request
              </h3>
              <p className="font-sans text-xs text-neutral-400 mb-8">
                Request custom borders, specific sleeve styles, bridal theme colors, or fabric previews.
              </p>

              {/* Inquiry target indicator */}
              {inquiryProduct && (
                <div id="inquiry-badge-indicator" className="mb-6 p-4 rounded-xl bg-pink-50/50 dark:bg-[#2F1F3B] border border-amber-300/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={inquiryProduct.image}
                      alt={inquiryProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover object-top border"
                    />
                    <div className="text-left">
                      <span className="text-[8px] uppercase tracking-wider text-neutral-400">Currently Inquiring</span>
                      <h4 className="text-xs font-extrabold text-[#3E2F1E] dark:text-amber-100 line-clamp-1">{inquiryProduct.name}</h4>
                    </div>
                  </div>
                  <button
                    id="clear-product-inquiry"
                    onClick={clearInquiryProduct}
                    className="text-[10px] uppercase font-sans font-extrabold text-neutral-400 hover:text-neutral-600 dark:hover:text-amber-200"
                    title="Remove item link"
                  >
                    Clear Link
                  </button>
                </div>
              )}

              {/* Contact Form */}
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Row 1: Name and Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Deepika Grewal"
                      className={`px-4 py-3 rounded-xl border font-sans text-sm bg-amber-50/10 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C9A86A] focus:border-[#C9A86A] transition-colors ${
                        formErrors.name ? 'border-red-400 ring-1 ring-red-400/20' : 'border-amber-200/30'
                      }`}
                    />
                    {formErrors.name && <span className="text-[10px] text-red-500 mt-1 font-semibold">{formErrors.name}</span>}
                  </div>

                  {/* Occasion type Selection */}
                  <div className="flex flex-col">
                    <label htmlFor="occasionType" className="font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">
                      Occasion Selection
                    </label>
                    <select
                      id="occasionType"
                      name="occasionType"
                      value={formData.occasionType}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-amber-200/30 font-sans text-sm bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-150 focus:outline-none focus:ring-1 focus:ring-[#C9A86A] transition-colors"
                    >
                      <option value="wedding">Bridal / Wedding Event</option>
                      <option value="festive">Diwali / Eid / Festive</option>
                      <option value="reception">Reception / Banquet</option>
                      <option value="cocktail">Cocktail & Sangeet Party</option>
                      <option value="casual">Contemporary Boutique wear</option>
                      <option value="wholesale">Bespoke Custom Fitting Only</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Mail & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., +91 98765 43210"
                      className={`px-4 py-3 rounded-xl border font-sans text-sm bg-amber-50/10 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C9A86A] transition-colors ${
                        formErrors.phone ? 'border-red-400 ring-1 ring-red-400/20' : 'border-amber-200/30'
                      }`}
                    />
                    {formErrors.phone && <span className="text-[10px] text-red-500 mt-1 font-semibold">{formErrors.phone}</span>}
                  </div>

                  {/* Mail */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., deepika@example.com"
                      className={`px-4 py-3 rounded-xl border font-sans text-sm bg-amber-50/10 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C9A86A] transition-colors ${
                        formErrors.email ? 'border-red-400 ring-1 ring-red-400/20' : 'border-amber-200/30'
                      }`}
                    />
                    {formErrors.email && <span className="text-[10px] text-red-500 mt-1 font-semibold">{formErrors.email}</span>}
                  </div>
                </div>

                {/* Row 3: Message Textbox */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">
                    Your Requirements / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your theme, sleeve preferences, color hues or sizing adjustments..."
                    className={`px-4 py-3 rounded-xl border font-sans text-sm bg-amber-50/10 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#C9A86A] transition-colors ${
                      formErrors.message ? 'border-red-400 ring-1 ring-red-400/20' : 'border-amber-200/30'
                    }`}
                  />
                  {formErrors.message && <span className="text-[10px] text-red-500 mt-1 font-semibold">{formErrors.message}</span>}
                </div>

                {/* Submission CTA Indicator */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[10px] sm:text-xs text-neutral-400 flex items-center gap-1.5 font-medium text-center sm:text-left">
                    <Clock size={14} className="text-[#C9A86A]" />
                    Atelier response is guaranteed inside 2 working hours.
                  </span>

                  <button
                    id="submit-contact-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white dark:bg-amber-100 dark:text-neutral-950 font-sans text-xs uppercase tracking-widest font-bold rounded-full flex items-center justify-center gap-2 hover:scale-102 hover:shadow-lg transition-transform active:scale-98 disabled:opacity-50 cursor-pointer text-center"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Reserving...</span>
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>Submit Request</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
