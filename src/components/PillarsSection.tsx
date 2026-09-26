import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, HeartHandshake, Smile } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Pillar {
  icon: (isDark: boolean) => React.ReactNode;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    icon: (isDark) => (
      <ShieldCheck
        className={`w-5 h-5 group-hover:scale-110 transition-transform ${
          isDark ? 'text-lime-400' : 'text-emerald-600'
        }`}
      />
    ),
    title: 'Preventive & Family Care',
    description:
      'Thorough dental exams, low-radiation digital radiography, and gentle cleanings to safeguard your natural teeth.',
  },
  {
    icon: (isDark) => (
      <Sparkles
        className={`w-5 h-5 group-hover:scale-110 transition-transform ${
          isDark ? 'text-lime-400' : 'text-emerald-600'
        }`}
      />
    ),
    title: 'Dental Implants & Surgery',
    description:
      'Permanent tooth replacement, precision implant restorations, oral surgery, and bone grafting for functional strength.',
  },
  {
    icon: (isDark) => (
      <Smile
        className={`w-5 h-5 group-hover:scale-110 transition-transform ${
          isDark ? 'text-lime-400' : 'text-emerald-600'
        }`}
      />
    ),
    title: 'Cosmetic Smile Makeovers',
    description:
      'In-office teeth whitening, custom porcelain veneers, crowns, and aesthetic bonding for a luminous, confident smile.',
  },
  {
    icon: (isDark) => (
      <HeartHandshake
        className={`w-5 h-5 group-hover:scale-110 transition-transform ${
          isDark ? 'text-lime-400' : 'text-emerald-600'
        }`}
      />
    ),
    title: 'Bilingual & PPO/Medicaid',
    description:
      'Dr. Gretell Rodriguez and our team provide warm, bilingual care (Se Habla Español) accepting all PPO plans and Medicaid.',
  },
];

export const PillarsSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`relative min-h-screen w-full flex flex-col justify-between px-6 md:px-12 py-12 transition-colors duration-300 overflow-hidden ${
        isDark
          ? 'bg-[#0b0c0c] text-white border-t border-white/10'
          : 'bg-white text-neutral-900 border-t border-neutral-200'
      }`}
    >
      {/* Top Panoramic Visual Strip in full vivid color */}
      <div className="w-full max-w-6xl mx-auto pt-4 pb-8 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className={`relative w-full h-[220px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden shadow-2xl group transition-colors ${
            isDark ? 'border border-white/10' : 'border border-neutral-200 shadow-lg'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2200&q=85"
            alt="Miami Dental Clinic (Health & Cosmetic Dental Care) clinical practice suite at 4150 NW 7th St"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div
            className={`absolute inset-x-0 bottom-0 h-20 transition-opacity ${
              isDark
                ? 'bg-gradient-to-t from-black/70 to-transparent'
                : 'bg-gradient-to-t from-black/40 to-transparent'
            }`}
          />
        </motion.div>
      </div>

      {/* 4 Feature Columns Bar */}
      <div className="w-full max-w-6xl mx-auto pb-4">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4 border-t transition-colors ${
            isDark ? 'border-white/10' : 'border-neutral-200'
          }`}
        >
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group flex flex-col justify-start space-y-3 p-4 rounded-xl transition-all duration-300 ${
                isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-neutral-50'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isDark
                    ? 'bg-white/5 border border-white/10 group-hover:border-lime-400/50 group-hover:bg-white/10'
                    : 'bg-neutral-100 border border-neutral-200 group-hover:border-emerald-400 group-hover:bg-neutral-200/60'
                }`}
              >
                {pillar.icon(isDark)}
              </div>
              <h3
                className={`text-base font-semibold tracking-tight transition-colors ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {pillar.title}
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed font-normal transition-colors ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
