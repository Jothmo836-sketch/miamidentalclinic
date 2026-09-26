import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onRequestDemo: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-6 md:px-12 flex items-center justify-between ${
          scrolled
            ? isDark
              ? 'backdrop-blur-md bg-black/75 border-b border-white/10 py-2.5 shadow-xl'
              : 'backdrop-blur-md bg-white/85 border-b border-neutral-200/90 py-2.5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="flex flex-col group"
          >
            <span
              className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                isDark
                  ? 'text-white group-hover:text-lime-300'
                  : 'text-neutral-900 group-hover:text-emerald-700'
              }`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Miami Dental Clinic
            </span>
            <span
              className={`text-[10px] font-mono tracking-wider uppercase transition-colors -mt-0.5 ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            >
              Health & Cosmetic Dental Care
            </span>
          </a>
        </div>

        {/* Center Pill Nav (Desktop only: lg+) */}
        <nav
          className={`hidden lg:flex items-center backdrop-blur-md rounded-full px-4 py-1.5 transition-colors ${
            isDark
              ? 'bg-[#151616]/80 border border-white/10 shadow-lg'
              : 'bg-white/90 border border-neutral-300/80 shadow-md'
          }`}
        >
          <button
            onClick={() => scrollTo('services')}
            className={`text-xs uppercase tracking-wider font-medium px-3 py-1 transition-colors ${
              isDark
                ? 'text-white/80 hover:text-white'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('about')}
            className={`text-xs uppercase tracking-wider font-medium px-3 py-1 transition-colors ${
              isDark
                ? 'text-white/80 hover:text-white'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className={`text-xs uppercase tracking-wider font-medium px-3 py-1 transition-colors ${
              isDark
                ? 'text-white/80 hover:text-white'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollTo('journey')}
            className={`text-xs uppercase tracking-wider font-semibold px-3 py-1 transition-colors ${
              isDark
                ? 'text-lime-400 hover:text-lime-300'
                : 'text-emerald-700 hover:text-emerald-800'
            }`}
          >
            Book Visit
          </button>
        </nav>

        {/* Right Actions: Phone + Dark/Light Toggle + Book Appointment (Desktop only: lg+) */}
        <div className="hidden lg:flex items-center gap-3 lg:gap-4">
          <a
            href="tel:3056469222"
            className={`flex items-center gap-1.5 text-xs font-mono transition-colors ${
              isDark
                ? 'text-neutral-300 hover:text-white'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <Phone size={13} className={isDark ? 'text-lime-400' : 'text-emerald-600'} />
            <span>(305) 646-9222</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className={`p-2 rounded-full border transition-all duration-200 active:scale-90 flex items-center justify-center cursor-pointer ${
              isDark
                ? 'bg-white/10 hover:bg-white/20 text-amber-300 border-white/15'
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-300 shadow-xs'
            }`}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => scrollTo('journey')}
            className={`text-xs font-semibold px-4 py-2 rounded-md transition-all duration-200 active:scale-95 shadow-sm flex items-center gap-1.5 cursor-pointer ${
              isDark
                ? 'bg-white text-black hover:bg-neutral-200'
                : 'bg-neutral-900 text-white hover:bg-neutral-800'
            }`}
          >
            <Calendar size={13} />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile & Tablet Action Group (Theme toggle + hamburger: visible below lg) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className={`p-2 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/10 text-amber-300 border-white/15'
                : 'bg-neutral-100 text-neutral-800 border-neutral-300'
            }`}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? 'text-white bg-white/10 hover:bg-white/20'
                : 'text-neutral-900 bg-neutral-100 hover:bg-neutral-200'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 backdrop-blur-xl pt-24 px-8 flex flex-col lg:hidden animate-in fade-in duration-200 ${
            isDark ? 'bg-black/95 text-white' : 'bg-white/95 text-neutral-900'
          }`}
        >
          <div className="flex flex-col space-y-4 text-center">
            <button
              onClick={() => scrollTo('services')}
              className={`text-lg font-medium py-2 border-b ${
                isDark
                  ? 'text-white/90 hover:text-white border-white/10'
                  : 'text-neutral-800 hover:text-black border-neutral-200'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('about')}
              className={`text-lg font-medium py-2 border-b ${
                isDark
                  ? 'text-white/90 hover:text-white border-white/10'
                  : 'text-neutral-800 hover:text-black border-neutral-200'
              }`}
            >
              About Practice
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className={`text-lg font-medium py-2 border-b ${
                isDark
                  ? 'text-white/90 hover:text-white border-white/10'
                  : 'text-neutral-800 hover:text-black border-neutral-200'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollTo('journey')}
              className={`text-lg font-semibold py-2 border-b ${
                isDark
                  ? 'text-lime-400 hover:text-lime-300 border-white/10'
                  : 'text-emerald-700 hover:text-emerald-800 border-neutral-200'
              }`}
            >
              Book Treatment
            </button>

            {/* Theme Toggle within Mobile Menu */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center gap-2 py-3 rounded-lg border mt-2 ${
                isDark
                  ? 'bg-white/5 border-white/10 text-neutral-200'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-800'
              }`}
            >
              {isDark ? (
                <>
                  <Sun size={18} className="text-amber-300" />
                  <span>Switch to Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} className="text-neutral-700" />
                  <span>Switch to Dark Mode</span>
                </>
              )}
            </button>

            <a
              href="tel:3056469222"
              className={`pt-2 flex items-center justify-center gap-2 font-mono text-sm ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              <Phone size={16} className={isDark ? 'text-lime-400' : 'text-emerald-600'} />
              <span>(305) 646-9222</span>
            </a>

            <button
              onClick={() => scrollTo('journey')}
              className={`mt-4 font-semibold py-3 rounded-lg text-base shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                isDark
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800'
              }`}
            >
              <Calendar size={18} /> Book Your Visit
            </button>
          </div>
        </div>
      )}
    </>
  );
};
