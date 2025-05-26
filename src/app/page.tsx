'use client';

import HeroSection from '../components/sections/HeroSection';
import AboutCompanySection from '../components/sections/AboutCompanySection';
import AboutJohnSection from '../components/sections/AboutJohnSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import JohnGarfieldBioSection from '../components/sections/JohnGarfieldBioSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}