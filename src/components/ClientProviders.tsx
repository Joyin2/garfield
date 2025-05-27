'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './ScrollToTop';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <ScrollToTop />
      {children}
    </ParallaxProvider>
  );
}