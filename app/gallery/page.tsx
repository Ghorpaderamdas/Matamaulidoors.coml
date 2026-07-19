"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

const gallery = [
  '/images/gallery/gallery-01.jpg',
  '/images/gallery/gallery-02.jpg',
  '/images/gallery/gallery-03.jpg',
  '/images/gallery/gallery-04.jpg',
  '/images/gallery/gallery-05.jpg',
  '/images/gallery/gallery-06.jpg',
  '/images/gallery/gallery-07.jpg',
  '/images/gallery/gallery-08.png',
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8F5] text-[#1B1B1B]">
      <Navbar />
      <section className="pb-16 pt-32 md:pb-24 md:pt-40 xl:pb-32">
        <Container>
          <SectionTitle
            eyebrow="Gallery"
            title="Our doors in real homes."
            subtitle="See the workmanship, finishes, and scale of our completed projects."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4">
            {gallery.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Mata Mauli completed door project ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
