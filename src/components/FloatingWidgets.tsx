import React, { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FloatingWidgetsProps {
  onBookClick?: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onBookClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onBookClick) {
      onBookClick();
    }
  };

  return (
    <>
      {/* Right Edge Circular Button: Scroll to Top removed */}

      {/* Floating Bottom-Right Action Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {/* Google Maps link pill */}
        <a
          href="https://maps.google.com/?cid=10707454133710309999"
          target="_blank"
          rel="noreferrer"
          className={`hidden md:flex items-center gap-1.5 text-xs font-mono px-3.5 py-2.5 rounded-full border shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
            isDark
              ? 'bg-[#141516]/90 hover:bg-[#202122] text-white border-white/20'
              : 'bg-white/90 hover:bg-neutral-100 text-neutral-800 border-neutral-300'
          }`}
        >
          <MapPin size={13} className={isDark ? 'text-lime-400' : 'text-emerald-600'} />
          <span>NW 7th St Clinic</span>
        </a>

        {/* Book Appointment CTA Pill */}
        <button
          onClick={scrollToJourney}
          className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer ${
            isDark
              ? 'bg-white text-black hover:bg-neutral-100'
              : 'bg-neutral-900 text-white hover:bg-neutral-800'
          }`}
        >
          <Calendar size={14} className="group-hover:rotate-12 transition-transform" />
          <span>Book Visit</span>
        </button>
      </div>
    </>
  );
};
