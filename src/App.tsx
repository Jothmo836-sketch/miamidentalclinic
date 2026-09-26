/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { LightHeadlineSection } from './components/LightHeadlineSection';
import { SplitShowcaseSection } from './components/SplitShowcaseSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FaqSection } from './components/FaqSection';
import { SmileJourneySection } from './components/SmileJourneySection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { useTheme } from './context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  const scrollToBooking = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 overflow-x-hidden ${
        isDark
          ? 'bg-[#0b0c0c] text-white selection:bg-neutral-800 selection:text-white'
          : 'bg-[#fafafa] text-neutral-900 selection:bg-lime-200 selection:text-neutral-900'
      }`}
    >
      {/* Top Fixed Navigation */}
      <Navbar onRequestDemo={scrollToBooking} />

      {/* Main Content Sections - Each styled to 100vh according to requirements */}
      <main className="w-full">
        {/* Section 1: Hero (100vh) */}
        <HeroSection />

        {/* Section 2: 4 Pillars & Panoramic Road Horizon (100vh) */}
        <PillarsSection />

        {/* Section 3: Big Dreams / Smart Strategies (100vh, Light Theme) */}
        <LightHeadlineSection />

        {/* Section 4: Alternating Split Stages (3 x 100vh, Light Theme) */}
        <SplitShowcaseSection />

        {/* Section 5: Leadership Grid (100vh, Dark Theme) */}
        <LeadershipSection />

        {/* Section 6: Resources & Information (Screenshot 1) */}
        <ResourcesSection />

        {/* Section 7: Everything you need to know / FAQ (Screenshot 2) */}
        <FaqSection />

        {/* Section 8: Start your smile journey / Booking (Screenshot 3) */}
        <SmileJourneySection />
      </main>

      {/* Section 9: Footer */}
      <Footer />

      {/* Floating Elements (Bottom-right badge & side utility) */}
      <FloatingWidgets onBookClick={scrollToBooking} />
    </div>
  );
}
