import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ResourceCard {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

const RESOURCE_CARDS: ResourceCard[] = [
  {
    id: 'restorative-implants',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85',
    alt: 'High precision dental implant and restorative technology at Miami Dental Clinic',
    title: 'Dental Implants & Oral Surgery',
    description: 'Permanent, lifelike tooth replacements restoring full chewing function, bone health, and smile aesthetics.',
  },
  {
    id: 'preventive-hygiene',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85',
    alt: 'Clean and modern Miami Dental Clinic (Health & Cosmetic Dental Care) operatory at 4150 NW 7th St',
    title: 'Cosmetic Whitening & Veneers',
    description: 'Custom porcelain veneers, aesthetic composite bonding, and professional in-office whitening.',
  },
  {
    id: 'insurance-estimates',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85',
    alt: 'Smiling patient holding insurance and consultation estimates at Health & Cosmetic Dental Care',
    title: 'PPO Insurance, Medicaid & Financing',
    description: 'We accept all PPO insurance plans, Medicaid, CareCredit, and provide clear, itemized treatment estimates.',
  },
];

export const ResourcesSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="resources"
      className={`min-h-screen w-full flex flex-col justify-center px-6 md:px-16 py-16 md:py-24 border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[#121314] text-white border-neutral-800'
          : 'bg-[#f7f6f2] text-[#141516] border-neutral-300/60'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Top Header Block */}
        <div className="mb-12">
          <span
            className={`font-mono text-xs uppercase tracking-widest mb-3 block transition-colors ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            }`}
          >
            [PATIENT RESOURCES]
          </span>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-xl transition-colors ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Patient Resources & Dental Guides
            </h2>
            <p
              className={`text-sm md:text-base max-w-lg leading-relaxed transition-colors ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              As a top-rated Miami dentist, we empower our patients with transparent treatment clarity, guidance on implant dentistry Miami, and direct assistance for emergency dental care across North Miami and Miami-Dade.
            </p>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {RESOURCE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ${
                isDark
                  ? 'bg-[#1a1b1d] border border-neutral-800'
                  : 'bg-[#edeae1] border border-neutral-300/40'
              }`}
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Accent Line Bar */}
              <div
                className={`w-full h-1 ${isDark ? 'bg-lime-400' : 'bg-[#ccff00]'}`}
              />

              {/* Card Content Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-2">
                  <h3
                    className={`text-lg font-semibold tracking-tight transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-lime-300'
                        : 'text-neutral-900 group-hover:text-black'
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-normal transition-colors ${
                      isDark ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div>
                  <a
                    href="#journey"
                    aria-label={`Learn more about ${card.title}`}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs group/btn ${
                      isDark
                        ? 'bg-neutral-800 hover:bg-lime-400 hover:text-black text-neutral-200 border border-neutral-700'
                        : 'bg-[#e4e0d5] hover:bg-neutral-900 hover:text-white text-neutral-800 border border-neutral-300/80'
                    }`}
                  >
                    <ArrowRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
