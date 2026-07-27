"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/sections/HeroSection';
import { AboutSection } from '@/components/home/sections/AboutSection';
import { CollectionSection } from '@/components/home/sections/CollectionSection';
import { WhySection } from '@/components/home/sections/WhySection';
import { GallerySection } from '@/components/home/sections/GallerySection';
import { ReviewsSection } from '@/components/home/sections/ReviewsSection';
import { FAQSection } from '@/components/home/sections/FAQSection';
import { ContactSection } from '@/components/home/sections/ContactSection';
import { FloatingContactButtons } from '@/components/ui/FloatingContactButtons';

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8F5] text-[#1B1B1B]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <WhySection />
      <GallerySection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingContactButtons />
    </main>
  );
}
