"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

const gallery = ['/images/doors/wooden/gallery-01.svg', '/images/doors/pvc/gallery-02.svg', '/images/doors/laminate/gallery-03.svg', '/images/doors/flush/gallery-04.svg'];

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
