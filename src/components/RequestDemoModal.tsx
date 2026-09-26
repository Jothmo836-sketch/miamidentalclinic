import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calendar, Phone, MapPin } from 'lucide-react';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Comprehensive Exam & Cleaning',
    preferredTime: 'Morning',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        treatment: 'Comprehensive Exam & Cleaning',
        preferredTime: 'Morning',
      });
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative z-10 w-full max-w-lg bg-[#141516] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-white"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors p-1"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-sm">
                  Thank you! Our front office coordinator will call you shortly to confirm your scheduled appointment time.
                </p>
                <div className="pt-2 text-xs font-mono text-neutral-400">
                  Office: 4150 NW 7th St Ste 103, Miami, FL • (305) 646-9222
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-lime-400 uppercase tracking-wider mb-1">
                    <Calendar size={14} /> Miami Dental Clinic
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Schedule Your Dental Visit
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Meet with Dr. Gretell Rodriguez, DDS for gentle, comprehensive care at Health & Cosmetic Dental Care.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(305) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Treatment Needed
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/40"
                      >
                        <option value="Comprehensive Exam & Cleaning">Routine Exam & Cleaning</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Crowns & Bridges">Porcelain Crowns & Bridges</option>
                        <option value="Teeth Whitening">Teeth Whitening & Veneers</option>
                        <option value="Emergency Toothache">Emergency Toothache Relief</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/40"
                      >
                        <option value="Morning">Morning (8:00 AM – 12:00 PM)</option>
                        <option value="Afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                        <option value="Anytime">Anytime during clinic hours</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-white hover:bg-neutral-200 text-black font-semibold py-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg cursor-pointer"
                  >
                    Confirm Appointment Request
                  </button>

                  <div className="text-center pt-2">
                    <a
                      href="tel:3056469222"
                      className="text-xs text-neutral-400 hover:text-white inline-flex items-center gap-1.5 font-mono"
                    >
                      <Phone size={11} className="text-lime-400" />
                      <span>Prefer to call directly? (305) 646-9222</span>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
