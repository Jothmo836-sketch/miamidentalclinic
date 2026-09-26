import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroSlide {
  id: string;
  code: string;
  label: string;
  image: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: '1',
    code: '01',
    label: 'Dental Implants & Oral Surgery',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85',
    alt: 'High-tech dental operatory at Health & Cosmetic Dental Care in Miami',
  },
  {
    id: '2',
    code: '02',
    label: 'Cosmetic Dentistry & Whitening',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=85',
    alt: 'Radiant cosmetic smile transformation patient in Miami',
  },
  {
    id: '3',
    code: '03',
    label: 'Porcelain Crowns, Bridges & Restorations',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=85',
    alt: 'Precision ceramic restorative dentistry instruments and crowns',
  },
  {
    id: '4',
    code: '04',
    label: 'Compassionate Care • Se Habla Español',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=2000&q=85',
    alt: 'Dr. Gretell Rodriguez and bilingual dental team consulting with patient',
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full flex flex-col justify-between items-center px-4 md:px-8 pt-24 pb-10 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0c0d0d]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Blurry atmospheric background image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=80"
          alt="Dental office interior background"
          aria-hidden="true"
          className={`w-full h-full object-cover object-center scale-110 filter blur-3xl transition-opacity duration-500 ${
            isDark ? 'opacity-30' : 'opacity-20'
          }`}
        />
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isDark
              ? 'bg-gradient-to-b from-[#0c0d0d]/85 via-[#0c0d0d]/80 to-[#0c0d0d]'
              : 'bg-gradient-to-b from-[#f8fafc]/90 via-[#f8fafc]/80 to-[#f8fafc]'
          }`}
        />
      </div>

      {/* Background ambient lighting */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-radial to-transparent pointer-events-none z-[1] ${
          isDark ? 'from-lime-400/[0.06]' : 'from-emerald-400/[0.08]'
        }`}
      />

      {/* Top Hero Text */}
      <div className="w-full max-w-4xl text-center mx-auto z-10 pt-4 md:pt-6">
        {/* Rating & Location Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium mb-3 backdrop-blur-md border shadow-xs transition-colors bg-white/5 border-white/10 text-neutral-300">
          <span className="text-amber-400 font-bold">★ 5.0 Top Rated Miami Dentist</span>
          <span>•</span>
          <span>500+ Patient Reviews</span>
          <span>•</span>
          <span className={isDark ? 'text-lime-300' : 'text-emerald-700'}>Se Habla Español</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-3 transition-colors ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Miami Dental Clinic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed px-4 transition-colors ${
            isDark ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Health & Cosmetic Dental Care
          </span>{' '}
          led by{' '}
          <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Dr. Gretell Rodriguez, DDS
          </span>
          . Specialized in premier <strong>implant dentistry Miami</strong>, cosmetic smile makeovers, and immediate <strong>emergency dental care North Miami</strong> & Miami-Dade at 4150 NW 7th St.
        </motion.p>
      </div>

      {/* Hero Media Showcase Container */}
      <div className="w-full max-w-5xl mx-auto my-auto relative pt-4 pb-2 z-10">
        <div
          className={`relative w-full h-[280px] sm:h-[380px] md:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-colors ${
            isDark
              ? 'border border-white/15 bg-black'
              : 'border border-neutral-300/80 bg-neutral-950'
          }`}
        >
          {/* Subtle crosshair dot grid overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none dot-crosshair-pattern opacity-25" />

          {/* Crosshair accents in corners */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none text-white/40 text-xs font-mono">+</div>
          <div className="absolute top-4 right-4 z-20 pointer-events-none text-white/40 text-xs font-mono">+</div>
          <div className="absolute bottom-4 left-4 z-20 pointer-events-none text-white/40 text-xs font-mono">+</div>
          <div className="absolute bottom-4 right-4 z-20 pointer-events-none text-white/40 text-xs font-mono">+</div>

          {/* Media image with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {/* Interactive slide controllers */}
          <div className="absolute bottom-4 right-4 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 border border-white/15">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1 px-1">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? 'w-4 bg-white' : 'bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
