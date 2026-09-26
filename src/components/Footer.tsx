import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { isDark } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className={`w-full border-t px-6 md:px-16 pt-16 pb-12 transition-colors duration-300 ${
        isDark
          ? 'bg-[#090a0a] text-neutral-200 border-neutral-800'
          : 'bg-[#fbfbfb] text-[#111213] border-neutral-200/80'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Brand & Newsletter Column (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3
                  className={`text-3xl font-bold tracking-tight transition-colors ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Miami Dental Clinic
                </h3>
              </div>
              <p
                className={`text-xs font-mono uppercase tracking-widest mb-3 transition-colors ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                Health & Cosmetic Dental Care • Dr. Gretell Rodriguez, DDS
              </p>
            </div>

            {/* Direct Contact Info */}
            <div
              className={`space-y-2 text-xs font-mono transition-colors ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              <a
                href="https://maps.google.com/?cid=10707454133710309999"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 transition-colors ${
                  isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                }`}
              >
                <MapPin size={14} className={isDark ? 'text-white' : 'text-neutral-900'} />
                <span>4150 NW 7th St Ste 103, Miami, FL 33126</span>
                <ExternalLink size={11} className="text-neutral-400" />
              </a>

              <a
                href="tel:3056469222"
                className={`flex items-center gap-2 transition-colors ${
                  isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                }`}
              >
                <Phone size={14} className={isDark ? 'text-white' : 'text-neutral-900'} />
                <span>Phone: (305) 646-9222</span>
              </a>

              <div className="flex items-center gap-2">
                <Clock size={14} className={isDark ? 'text-white' : 'text-neutral-900'} />
                <span>Mon–Thu: 9:00 AM – 5:00 PM | Fri: 9:00 AM – 4:00 PM | Sat: 8:00 AM – 2:00 PM</span>
              </div>
            </div>

            {/* Newsletter / Patient Care Bulletin */}
            <div className="w-full max-w-md pt-2">
              <span
                className={`text-xs font-semibold uppercase tracking-wider block mb-2 transition-colors ${
                  isDark ? 'text-neutral-200' : 'text-neutral-800'
                }`}
              >
                Join our Patient Care Updates
              </span>
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all shadow-sm ${
                    isDark
                      ? 'bg-[#141517] border border-neutral-700 text-white placeholder:text-neutral-500 focus:border-white'
                      : 'bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900'
                  }`}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to updates"
                  className={`absolute right-1.5 top-1.5 bottom-1.5 px-3.5 rounded-md flex items-center justify-center transition-colors active:scale-95 shadow-sm cursor-pointer ${
                    isDark
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                >
                  {subscribed ? <Check size={16} className={isDark ? 'text-emerald-600' : 'text-lime-400'} /> : <ArrowRight size={16} />}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-emerald-500 mt-2 font-medium">
                  Thank you! You have been subscribed to dental health tips and office announcements.
                </p>
              )}
            </div>
          </div>

          {/* Spacer Column (1 Col) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Link Columns (Right 6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Column: Patients */}
            <div className="space-y-4">
              <h4
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Patients
              </h4>
              <ul
                className={`space-y-2.5 text-sm transition-colors ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                <li>
                  <button
                    onClick={() => scrollTo('journey')}
                    className={`transition-colors cursor-pointer ${
                      isDark ? 'hover:text-white' : 'hover:text-neutral-900'
                    }`}
                  >
                    Book Appointment
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('resources')}
                    className={`transition-colors cursor-pointer ${
                      isDark ? 'hover:text-white' : 'hover:text-neutral-900'
                    }`}
                  >
                    Insurance & PPO
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('faq')}
                    className={`transition-colors cursor-pointer ${
                      isDark ? 'hover:text-white' : 'hover:text-neutral-900'
                    }`}
                  >
                    Frequently Asked
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('team')}
                    className={`transition-colors cursor-pointer ${
                      isDark ? 'hover:text-white' : 'hover:text-neutral-900'
                    }`}
                  >
                    About Dr. Rodriguez
                  </button>
                </li>
                <li>
                  <a
                    href="tel:3056469222"
                    className={`transition-colors ${
                      isDark ? 'hover:text-white' : 'hover:text-neutral-900'
                    }`}
                  >
                    Emergency Care
                  </a>
                </li>
              </ul>
            </div>

            {/* Column: Location */}
            <div className="space-y-4">
              <h4
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Location
              </h4>
              <ul
                className={`space-y-2.5 text-sm transition-colors ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                <li>
                  <a
                    href="https://maps.google.com/?cid=10707454133710309999"
                    target="_blank"
                    rel="noreferrer"
                    className={`transition-colors flex items-center gap-1 ${
                      isDark ? 'hover:text-white' : 'hover:text-neutral-900'
                    }`}
                  >
                    <span>Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a
                    href="tel:3056469222"
                    className={`transition-colors ${
                      isDark ? 'hover:text-white' : 'hover:text-neutral-900'
                    }`}
                  >
                    (305) 646-9222
                  </a>
                </li>
                <li>
                  <span className="text-neutral-500 text-xs">
                    4150 NW 7th St Ste 103 (Flagami)
                  </span>
                </li>
                <li>
                  <span className="text-neutral-500 text-xs">
                    Free Dedicated Patient Parking
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div
          className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs transition-colors ${
            isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
          }`}
        >
          <p>
            © {new Date().getFullYear()} Miami Dental Clinic: Health & Cosmetic Dental Care – Dr. Gretell Rodriguez, DDS. All rights reserved. 4150 NW 7th St Ste 103, Miami, FL 33126.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="tel:3056469222"
              className={`font-medium transition-colors ${
                isDark ? 'hover:text-white text-neutral-300' : 'hover:text-neutral-950 text-neutral-800'
              }`}
            >
              (305) 646-9222
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
