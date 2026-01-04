'use client';

import { useState } from 'react';
import IntroScreen from '@/components/HeroIntro';
import HeroSection from '@/components/HeroSection'; // Your existing hero section

export default function HomePage() {
  return (
    <IntroScreen>
      {/* Everything inside here will show AFTER the intro completes */}
      <HeroSection />
      {/* Your other sections */}
    </IntroScreen>
  );
}