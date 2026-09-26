import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ShowcaseItem {
  id: string;
  tag: string;
  badgeCode: string;
  badgeTitle: string;
  title: string;
  image: string;
  alt: string;
  reverseLayout: boolean;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'stage-1',
    tag: '01 / IMPLANT DENTISTRY MIAMI & RESTORATIVE SURGERY',
    badgeCode: '01',
    badgeTitle: 'Implant Dentistry Miami',
    title:
      'Recognized for exceptional implant dentistry Miami, we provide permanent titanium and zirconia implant restorations, custom porcelain crowns, and bone grafting to return 100% chewing strength.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85',
    alt: 'Implant dentistry Miami patient smiling with restored porcelain teeth',
    reverseLayout: false,
  },
  {
    id: 'stage-2',
    tag: '02 / COSMETIC & AESTHETIC DENTISTRY',
    badgeCode: '02',
    badgeTitle: 'Cosmetic Smile Design',
    title:
      'From custom porcelain veneers and crowns to clinical in-office whitening, Dr. Gretell Rodriguez designs natural, vibrant smiles that inspire lasting confidence.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=85',
    alt: 'Dr. Gretell Rodriguez dental consultation with patient at Health & Cosmetic Dental Care',
    reverseLayout: true,
  },
  {
    id: 'stage-3',
    tag: '03 / EMERGENCY DENTAL CARE NORTH MIAMI & MIAMI-DADE',
    badgeCode: '03',
    badgeTitle: 'Emergency Dental Relief',
    title:
      'Need emergency dental care in North Miami, Flagami, or Greater Miami? We accommodate same-day urgent visits for severe tooth pain, fractured crowns, extractions, and trauma.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=85',
    alt: 'Emergency dental care Miami patient receiving gentle pain relief treatment',
    reverseLayout: false,
  },
];

export const SplitShowcaseSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        isDark ? 'bg-[#0e0f10] text-white' : 'bg-[#fbfbfb] text-[#111213]'
      }`}
    >
      {SHOWCASE_ITEMS.map((item, index) => {
        return (
          <section
            key={item.id}
            id={`showcase-${index + 1}`}
            className="min-h-screen w-full flex items-center justify-center px-6 md:px-16 py-12 md:py-20 relative overflow-hidden"
          >
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: item.reverseLayout ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-center ${
                  item.reverseLayout ? 'order-1 lg:order-2' : 'order-1'
                }`}
              >
                <span
                  className={`font-mono text-xs uppercase tracking-widest mb-6 transition-colors ${
                    isDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}
                >
                  {item.tag}
                </span>
                <p
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-[1.3] max-w-lg tracking-tight transition-colors ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {item.title}
                </p>
              </motion.div>

              {/* Image Media Container Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative w-full ${
                  item.reverseLayout ? 'order-2 lg:order-1' : 'order-2'
                }`}
              >
                <div
                  className={`relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 group transition-colors ${
                    isDark ? 'border border-white/10' : 'border border-black/10'
                  }`}
                >
                  {/* Subtle crosshair dot grid */}
                  <div className="absolute inset-0 z-10 pointer-events-none dot-crosshair-pattern opacity-20" />

                  {/* Corner Crosshairs */}
                  <div className="absolute top-4 left-4 z-10 text-white/40 text-xs font-mono">+</div>
                  <div className="absolute top-4 right-4 z-10 text-white/40 text-xs font-mono">+</div>
                  <div className="absolute bottom-4 left-4 z-10 text-white/40 text-xs font-mono">+</div>
                  <div className="absolute bottom-4 right-4 z-10 text-white/40 text-xs font-mono">+</div>

                  {/* Photo in Full Color */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Centered Frosted Glass Pill Badge */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center p-4 pointer-events-none">
                    <div
                      className={`px-6 sm:px-8 py-3 rounded-lg flex items-center justify-between w-64 sm:w-84 text-white shadow-xl ${
                        isDark
                          ? 'frosted-glass-pill border border-white/25'
                          : 'bg-black/60 backdrop-blur-md border border-white/30'
                      }`}
                    >
                      <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-lime-300">
                        {item.badgeCode}
                      </span>
                      <span className="text-xs sm:text-sm font-medium tracking-wide text-white">
                        {item.badgeTitle}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
