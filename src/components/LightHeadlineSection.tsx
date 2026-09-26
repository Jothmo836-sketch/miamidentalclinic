import React from 'react';
import { motion } from 'motion/react';
import { Scan, Award, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const LightHeadlineSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="services"
      className={`relative min-h-screen w-full flex flex-col justify-between px-6 md:px-16 py-16 md:py-24 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#111213] text-white' : 'bg-[#fbfbfb] text-[#111213]'
      }`}
    >
      {/* Neon lime glow at the top seam */}
      <div className="absolute top-0 left-0 right-0 h-24 lime-seam-glow-top pointer-events-none" />

      {/* Main Display Heading */}
      <div className="w-full max-w-6xl mx-auto my-auto pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 md:space-y-4"
        >
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.06] transition-colors ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Healthy Smiles.
          </h2>
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.06] transition-colors ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Exceptional Care. Lifelong Confidence.
          </h2>
        </motion.div>
      </div>

      {/* 3 Pillars Row at bottom of section */}
      <div className="w-full max-w-6xl mx-auto pt-12 pb-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t pt-8 transition-colors ${
            isDark ? 'border-neutral-800' : 'border-neutral-200/80'
          }`}
        >
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs transition-colors ${
                  isDark ? 'bg-neutral-800 text-lime-400' : 'bg-neutral-900 text-lime-400'
                }`}
              >
                <Scan size={14} />
              </span>
              <h3
                className={`font-semibold text-base tracking-tight transition-colors ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Precision Diagnostics
              </h3>
            </div>
            <p
              className={`text-sm leading-relaxed transition-colors ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              Low-radiation digital radiography and thorough periodontal evaluations ensure complete clarity and proactive treatment.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs transition-colors ${
                  isDark ? 'bg-neutral-800 text-lime-400' : 'bg-neutral-900 text-lime-400'
                }`}
              >
                <Award size={14} />
              </span>
              <h3
                className={`font-semibold text-base tracking-tight transition-colors ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Restorative Longevity
              </h3>
            </div>
            <p
              className={`text-sm leading-relaxed transition-colors ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              Custom-shaded porcelain crowns, bridges, and durable dental implants engineered for natural aesthetics and chewing function.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs transition-colors ${
                  isDark ? 'bg-neutral-800 text-lime-400' : 'bg-neutral-900 text-lime-400'
                }`}
              >
                <MapPin size={14} />
              </span>
              <h3
                className={`font-semibold text-base tracking-tight transition-colors ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                NW 7th St & Flagami Location
              </h3>
            </div>
            <p
              className={`text-sm leading-relaxed transition-colors ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              Conveniently located at 4150 NW 7th St Ste 103, Miami, FL 33126 with abundant free patient parking, proudly serving Miami-Dade with 5-star clinical care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
