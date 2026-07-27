"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { CollectionSection } from '@/components/home/CollectionSection';
import { WhySection } from '@/components/home/WhySection';
import { GallerySection } from '@/components/home/GallerySection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { ContactSection } from '@/components/home/ContactSection';
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
