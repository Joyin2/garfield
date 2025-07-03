'use client';

import HeroSection from '../components/sections/HeroSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ExpertiseShowcaseSection from '../components/sections/ExpertiseShowcaseSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ExpertiseShowcaseSection />
    </div>
  );
}