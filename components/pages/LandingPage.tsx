"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/pages/sections/HeroSection';
import { AboutSection } from '@/components/pages/sections/AboutSection';
import { CollectionSection } from '@/components/pages/sections/CollectionSection';
import { WhySection } from '@/components/pages/sections/WhySection';
import { GallerySection } from '@/components/pages/sections/GallerySection';
import { ContactSection } from '@/components/pages/sections/ContactSection';
import { FloatingContactButtons } from '@/components/common/FloatingContactButtons';

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8F5] text-[#1B1B1B]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <WhySection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <FloatingContactButtons />
    </main>
  );
}
