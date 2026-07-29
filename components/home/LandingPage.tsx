import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ContactSection } from '@/components/home/ContactSection';
import { FloatingContactButtons } from '@/components/ui/FloatingContactButtons';

const AboutSection = dynamic(() =>
  import('@/components/home/AboutSection').then((module) => module.AboutSection),
);
const CollectionSection = dynamic(() =>
  import('@/components/home/CollectionSection').then((module) => module.CollectionSection),
);
const WhySection = dynamic(() =>
  import('@/components/home/WhySection').then((module) => module.WhySection),
);
const GallerySection = dynamic(() =>
  import('@/components/home/GallerySection').then((module) => module.GallerySection),
);
const ReviewsSection = dynamic(() =>
  import('@/components/home/ReviewsSection').then((module) => module.ReviewsSection),
);
const FAQSection = dynamic(() =>
  import('@/components/home/FAQSection').then((module) => module.FAQSection),
);

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