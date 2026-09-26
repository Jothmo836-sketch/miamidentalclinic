import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS_LEFT: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Miami Dental Clinic located and is parking available?',
    answer:
      'We are located at 4150 NW 7th St, Suite 103, Miami, FL 33126 (in Flagami, convenient to Blue Lagoon, MIA Airport, and Coral Gables). Free, dedicated parking is available on-site for all patients.',
  },
  {
    id: 'faq-2',
    question: 'What dental insurance and payment options are accepted?',
    answer:
      'We accept all major PPO insurance plans (Delta Dental, MetLife, Cigna, Aetna, Guardian, Humana) as well as Florida Medicaid. We also offer CareCredit and flexible payment plans with clear, itemized pricing.',
  },
  {
    id: 'faq-3',
    question: 'What are your clinic operating hours?',
    answer:
      'Our clinic is open Monday through Thursday from 9:00 AM to 5:00 PM, Friday from 9:00 AM to 4:00 PM, and Saturday from 8:00 AM to 2:00 PM. We are closed on Sundays.',
  },
];

const FAQS_RIGHT: FaqItem[] = [
  {
    id: 'faq-4',
    question: 'Do you speak Spanish (Se Habla Español)?',
    answer:
      '¡Sí! Dr. Gretell Rodriguez and our entire dental care team are fully bilingual in English and Spanish, ensuring clear communication, comfort, and personalized care for every patient.',
  },
  {
    id: 'faq-5',
    question: 'Why choose Dr. Gretell Rodriguez for implant dentistry Miami?',
    answer:
      'For patients seeking premier implant dentistry Miami, Dr. Gretell Rodriguez, DDS combines advanced 3D imaging with surgical precision. From single tooth implants to full arch restorations, we provide permanent, lifelike results that function like natural teeth.',
  },
  {
    id: 'faq-6',
    question: 'How quickly can I receive emergency dental care in North Miami or Miami-Dade?',
    answer:
      'We prioritize urgent emergency dental care for patients throughout North Miami, Miami, Flagami, and surrounding areas. Call our emergency direct line at (305) 646-9222 for same-day triage, toothache relief, broken tooth repair, or urgent extractions.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true });
  const { isDark } = useTheme();

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="faq"
      className={`min-h-screen w-full flex flex-col justify-center px-6 md:px-16 py-20 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0f1011] text-white' : 'bg-[#ebe7df] text-[#141516]'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          {/* FAQ Pill Badge */}
          <div className="inline-block">
            <span
              className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs transition-colors ${
                isDark
                  ? 'bg-white/10 text-lime-400 border border-white/15'
                  : 'bg-[#5a4638] text-white'
              }`}
            >
              FAQ
            </span>
          </div>

          {/* Unified Headline */}
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] max-w-2xl mx-auto transition-colors ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Everything you need to know.
          </h2>

          <p
            className={`text-sm md:text-base font-normal pt-2 transition-colors ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}
          >
            Answers to your most common questions about Miami Dental Clinic & Dr. Gretell Rodriguez, DDS.
          </p>
        </div>

        {/* 2-Column Accordions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {/* Left Column */}
          <div className={`divide-y transition-colors ${isDark ? 'divide-neutral-800' : 'divide-neutral-300/80'}`}>
            {FAQS_LEFT.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div key={faq.id} className="py-5">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold pr-4 leading-snug transition-colors ${
                        isDark
                          ? 'text-white group-hover:text-lime-300'
                          : 'text-neutral-900 group-hover:text-neutral-700'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 p-1 transition-colors ${
                        isDark ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-700'
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p
                          className={`text-xs sm:text-sm pt-3 leading-relaxed transition-colors ${
                            isDark ? 'text-neutral-300' : 'text-neutral-600'
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className={`divide-y transition-colors ${isDark ? 'divide-neutral-800' : 'divide-neutral-300/80'}`}>
            {FAQS_RIGHT.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div key={faq.id} className="py-5">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold pr-4 leading-snug transition-colors ${
                        isDark
                          ? 'text-white group-hover:text-lime-300'
                          : 'text-neutral-900 group-hover:text-neutral-700'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 p-1 transition-colors ${
                        isDark ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-700'
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p
                          className={`text-xs sm:text-sm pt-3 leading-relaxed transition-colors ${
                            isDark ? 'text-neutral-300' : 'text-neutral-600'
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
