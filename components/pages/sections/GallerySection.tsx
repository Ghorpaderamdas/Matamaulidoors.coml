"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Container } from '@/components/common/Container';

const gallery = ['/images/gallery-01.svg', '/images/gallery-02.svg', '/images/gallery-03.svg', '/images/gallery-04.svg'];

export function GallerySection() {
  return (
    <section id="gallery" className="section-pad bg-[#F3EEE5]">
      <Container>
        <SectionTitle eyebrow="Gallery" title="Craftsmanship in focus." subtitle="A glimpse into the doors we have quietly delivered across India." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((src, index) => (
            <motion.div key={src} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: index * 0.06 }} className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-lg">
              <Image src={src} alt={`Gallery ${index + 1}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
