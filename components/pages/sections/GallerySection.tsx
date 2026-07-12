"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

const gallery = ['/images/gallery-01.svg', '/images/gallery-02.svg', '/images/gallery-03.svg', '/images/gallery-04.svg'];

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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
