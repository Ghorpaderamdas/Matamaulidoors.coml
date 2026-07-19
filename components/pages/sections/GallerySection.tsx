"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

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

export function GallerySection() {
  return (
    <section id="gallery" className="section-pad bg-[#F3EEE5]">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="Craftsmanship in focus."
          subtitle="A glimpse into the doors we have quietly delivered across India."
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
                alt={`Mata Mauli door gallery image ${index + 1}`}
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
  );
}
