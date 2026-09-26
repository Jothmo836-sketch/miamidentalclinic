import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Leader {
  name: string;
  role: string;
  image: string;
  specialty: string;
}

const LEADERS: Leader[] = [
  {
    name: 'Dr. Gretell Rodriguez, DDS',
    role: 'Lead Dentist & Dental Surgeon',
    specialty: 'Implants, Cosmetic & Comprehensive Dentistry',
    image: 'https://images.unsplash.com/photo-1594824813579-253c5e886d52?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Dr. Carlos Hernandez, DDS',
    role: 'Associate Dentist',
    specialty: 'Endodontics & Restorative Crown & Bridge',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Maria Elena Gonzalez, RDH',
    role: 'Lead Dental Hygienist',
    specialty: 'Periodontal Deep Cleanings & Preventive Care',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Lisandra Diaz, CDA',
    role: 'Clinical Dental Assistant',
    specialty: 'Implant Chairside & Low-Radiation Digital Imaging',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Yanet Alvarez',
    role: 'Bilingual Patient Concierge',
    specialty: 'Scheduling & New Patient Care Coordination',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Dayami Perez',
    role: 'Insurance & Financing Coordinator',
    specialty: 'All PPO Plans, Medicaid & Transparent Financing',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=85',
  },
];

export const LeadershipSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="team"
      className={`relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 py-20 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0b0c0c] text-white' : 'bg-[#f8f9fa] text-neutral-900'
      }`}
    >
      {/* Neon lime aura glow seam at top */}
      <div className="absolute top-0 left-0 right-0 h-32 lime-seam-glow-top pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Left Tag Column */}
        <div className="lg:w-64 shrink-0 pt-2 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div
              className={`w-2 h-2 rounded-full animate-pulse ${
                isDark ? 'bg-lime-400' : 'bg-emerald-600'
              }`}
            />
            <span
              className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              CLINICAL TEAM
            </span>
          </motion.div>

          <h3
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight transition-colors ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            5-Star Dental Care in Miami
          </h3>

          <p
            className={`text-xs sm:text-sm leading-relaxed font-normal transition-colors ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Led by Dr. Gretell Rodriguez, DDS, our experienced bilingual team at 4150 NW 7th St provides comprehensive dental care with modern technology, gentle touch, and over 500+ five-star reviews.
          </p>

          <div className="pt-2">
            <a
              href="tel:3056469222"
              className={`inline-flex items-center gap-2 text-xs font-mono transition-colors ${
                isDark
                  ? 'text-lime-400 hover:text-lime-300'
                  : 'text-emerald-700 hover:text-emerald-800'
              }`}
            >
              <Phone size={13} />
              <span>(305) 646-9222</span>
            </a>
          </div>
        </div>

        {/* Right Leadership Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {LEADERS.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="group flex flex-col"
              >
                {/* Photo container */}
                <div
                  className={`relative aspect-[4/5] w-full rounded-lg overflow-hidden mb-3 shadow-lg transition-colors ${
                    isDark
                      ? 'bg-neutral-900 border border-white/10'
                      : 'bg-white border border-neutral-200/90 shadow-sm'
                  }`}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Specialty tag overlay on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-black/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-white/10">
                    <p className="text-[10px] text-lime-300 font-mono tracking-wide">
                      {leader.specialty}
                    </p>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-0.5">
                  <h4
                    className={`text-sm font-semibold tracking-tight transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-lime-400'
                        : 'text-neutral-900 group-hover:text-emerald-700'
                    }`}
                  >
                    {leader.name}
                  </h4>
                  <p
                    className={`text-xs font-normal transition-colors ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {leader.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
