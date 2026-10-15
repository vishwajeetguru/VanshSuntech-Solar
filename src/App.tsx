/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { AboutSection } from './components/sections/AboutSection';
import { SolarCalculator } from './components/sections/SolarCalculator';
import { InstallationGallery } from './components/sections/InstallationGallery';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { AnimatedSection } from './components/ui/AnimatedSection';

export default function App() {
  const scrollToConsultation = () => {
    const consultationElem = document.getElementById('consultation');
    if (consultationElem) {
      consultationElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    scrollToConsultation();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172B45] selection:bg-[#EAF3FC] selection:text-[#1557A6]">
      {/* 1. Header with Top Bar Contract & Mobile Menu */}
      <Header onBookConsultation={scrollToConsultation} />

      <main className="flex-1">
        {/* 2. Hero Section with 2-Column Desktop Split & Consultation Form */}
        <HeroSection onExploreClick={() => {
          const solutionsElem = document.getElementById('solutions');
          if (solutionsElem) {
            solutionsElem.scrollIntoView({ behavior: 'smooth' });
          }
        }} />

        {/* 3. Solar Products and Services (Wrapped in AnimatedSection) */}
        <AnimatedSection>
          <ServicesSection onSelectService={handleSelectService} />
        </AnimatedSection>

        {/* 4. Interactive Solar Capacity Sizing Calculator */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SolarCalculator onApplyEstimate={(systemSize, billRange) => {
              // Pre-fill bill input if element exists
              const billSelect = document.getElementById('monthlyBill') as HTMLSelectElement | null;
              if (billSelect) {
                billSelect.value = billRange;
                billSelect.dispatchEvent(new Event('change', { bubbles: true }));
              }
            }} />
          </div>
        </section>

        {/* 5. How It Works (Wrapped in AnimatedSection) */}
        <AnimatedSection>
          <HowItWorksSection onStartJourney={scrollToConsultation} />
        </AnimatedSection>

        {/* 6. Why Choose VNSH SunTech (Wrapped in AnimatedSection) */}
        <AnimatedSection>
          <BenefitsSection />
        </AnimatedSection>

        {/* 7. Introducing VNSH SunTech (Wrapped in AnimatedSection) */}
        <AnimatedSection>
          <AboutSection onContactClick={() => {
            const contactElem = document.getElementById('contact');
            if (contactElem) {
              contactElem.scrollIntoView({ behavior: 'smooth' });
            }
          }} />
        </AnimatedSection>

        {/* 8. Customer Installation Gallery (Our Happy Customers with Lightbox) */}
        <InstallationGallery />

        {/* 9. Customer Testimonials (Happy Customers) */}
        <TestimonialsSection />

        {/* 10. Frequently Asked Questions (8 Q&As with Accordion) */}
        <FAQSection />

        {/* 11. Contact Section (Meet Us, Call Us, Email Us & Google Map) */}
        <ContactSection />
      </main>

      {/* 12. Footer with Dynamic Year & Links */}
      <Footer />

      {/* 13. Back to Top Floating Action Button */}
      <BackToTop />
    </div>
  );
}
