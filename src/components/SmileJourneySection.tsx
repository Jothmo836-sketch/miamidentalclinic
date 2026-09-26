import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const SmileJourneySection: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: 'Comprehensive Exam & Cleaning',
    bestTime: 'Morning',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          service: 'Comprehensive Exam & Cleaning',
          bestTime: 'Morning',
        });
      }, 5000);
    }
  };

  return (
    <section
      id="journey"
      className={`min-h-screen w-full flex flex-col justify-center px-6 md:px-16 py-20 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0b0c0d] text-white' : 'bg-[#fdfaf5] text-[#141516]'
      }`}
    >
      {/* Soft warm aura glow background */}
      <div
        className={`absolute inset-0 bg-radial via-transparent to-transparent pointer-events-none ${
          isDark ? 'from-lime-400/[0.04]' : 'from-amber-500/[0.04]'
        }`}
      />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight transition-colors ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Start your smile journey.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-sm sm:text-base font-normal max-w-xl mx-auto transition-colors ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}
          >
            Real transformations backed by expertise, delivering consistent results.
          </motion.p>
        </div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`rounded-2xl p-10 text-center shadow-xl space-y-4 border ${
                  isDark
                    ? 'bg-[#141517] border-white/10 text-white'
                    : 'bg-white/90 backdrop-blur-md border-neutral-200/80 text-neutral-900'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-semibold tracking-tight ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  Appointment Request Received
                </h3>
                <p
                  className={`text-sm max-w-md mx-auto leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  Thank you,{' '}
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {formData.firstName}
                  </span>
                  ! Dr. Gretell Rodriguez's office at 4150 NW 7th St Ste 103 will call you at{' '}
                  <span className={`font-mono font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {formData.phone}
                  </span>{' '}
                  during the {formData.bestTime.toLowerCase()} to finalize your appointment time.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:3056469222"
                    className={`inline-flex items-center gap-2 text-xs font-mono font-semibold underline ${
                      isDark ? 'text-lime-400 hover:text-lime-300' : 'text-neutral-800 hover:text-black'
                    }`}
                  >
                    Need faster assistance? Call (305) 646-9222
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 2x2 Underline Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  {/* First Name */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={`w-full bg-transparent border-b px-0 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none transition-colors ${
                        isDark
                          ? 'border-neutral-700 focus:border-lime-400 text-white'
                          : 'border-neutral-400/80 focus:border-neutral-900 text-neutral-900'
                      }`}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={`w-full bg-transparent border-b px-0 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none transition-colors ${
                        isDark
                          ? 'border-neutral-700 focus:border-lime-400 text-white'
                          : 'border-neutral-400/80 focus:border-neutral-900 text-neutral-900'
                      }`}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-transparent border-b px-0 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none transition-colors ${
                        isDark
                          ? 'border-neutral-700 focus:border-lime-400 text-white'
                          : 'border-neutral-400/80 focus:border-neutral-900 text-neutral-900'
                      }`}
                    />
                  </div>

                  {/* Service Select */}
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full bg-transparent border-b px-0 py-2.5 text-sm focus:outline-none transition-colors cursor-pointer ${
                        isDark
                          ? 'border-neutral-700 focus:border-lime-400 text-white [&>option]:bg-[#141517] [&>option]:text-white'
                          : 'border-neutral-400/80 focus:border-neutral-900 text-neutral-900 [&>option]:bg-white [&>option]:text-neutral-900'
                      }`}
                    >
                      <option value="Comprehensive Exam & Cleaning">Comprehensive Exam & Cleaning</option>
                      <option value="Dental Implants & Surgery Consultation">Dental Implants & Surgery Consultation</option>
                      <option value="Cosmetic Teeth Whitening & Veneers">Cosmetic Teeth Whitening & Veneers</option>
                      <option value="Porcelain Crown or Bridge">Porcelain Crown or Bridge</option>
                      <option value="Root Canal Therapy (Endodontics)">Root Canal Therapy (Endodontics)</option>
                      <option value="Tooth Extraction / Oral Surgery">Tooth Extraction / Oral Surgery</option>
                      <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
                      <option value="Periodontal Deep Cleaning">Periodontal Deep Cleaning</option>
                    </select>
                  </div>
                </div>

                {/* Best Time to Connect Radio Options */}
                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <span
                    className={`font-semibold text-sm transition-colors ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    Best time to connect:
                  </span>

                  <label
                    className={`flex items-center gap-2 cursor-pointer text-sm transition-colors ${
                      isDark ? 'text-neutral-300' : 'text-neutral-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="bestTime"
                      value="Morning"
                      checked={formData.bestTime === 'Morning'}
                      onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 accent-emerald-500 cursor-pointer"
                    />
                    <span>Morning</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 cursor-pointer text-sm transition-colors ${
                      isDark ? 'text-neutral-300' : 'text-neutral-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="bestTime"
                      value="Afternoon"
                      checked={formData.bestTime === 'Afternoon'}
                      onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 accent-emerald-500 cursor-pointer"
                    />
                    <span>Afternoon</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 cursor-pointer text-sm transition-colors ${
                      isDark ? 'text-neutral-300' : 'text-neutral-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="bestTime"
                      value="Anytime"
                      checked={formData.bestTime === 'Anytime'}
                      onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 accent-emerald-500 cursor-pointer"
                    />
                    <span>Anytime</span>
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className={`w-full font-semibold text-xs sm:text-sm tracking-wider uppercase py-4 rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer ${
                      isDark
                        ? 'bg-white hover:bg-neutral-200 text-black'
                        : 'bg-[#394958] hover:bg-[#2e3b47] text-white'
                    }`}
                  >
                    REQUEST MY VISIT
                  </button>
                </div>

                {/* Bottom Assurance Note */}
                <div
                  className={`flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm pt-1 transition-colors ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  <p className="flex items-center gap-1.5">
                    <span className="text-sky-400">🩵</span>
                    <span>No commitment required. We'll chat to discuss your options first</span>
                  </p>

                  <a
                    href="https://maps.google.com/?cid=10707454133710309999"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1 text-xs underline font-mono transition-colors ${
                      isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    <MapPin size={12} />
                    <span>View Clinic on Google Maps</span>
                  </a>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
