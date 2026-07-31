"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

const gallery = [
  'https://res.cloudinary.com/pnvdzj9w/image/upload/f_auto,q_auto/v1784550600/gallery-01_rniufd.jpg',
  'https://res.cloudinary.com/pnvdzj9w/image/upload/f_auto,q_auto/v1784550610/gallery-02_zwbsx8.jpg',
  'https://res.cloudinary.com/pnvdzj9w/image/upload/f_auto,q_auto/v1784550651/gallery-03_miifm0.jpg',
  'https://res.cloudinary.com/pnvdzj9w/image/upload/f_auto,q_auto/v1784550647/gallery-04_hjpd1v.jpg',
  'https://res.cloudinary.com/pnvdzj9w/image/upload/f_auto,q_auto/v1784550651/gallery-05_oadd5o.jpg',
  'https://res.cloudinary.com/pnvdzj9w/image/upload/f_auto,q_auto/v1784550651/gallery-06_ggnmmr.jpg',
  'https://res.cloudinary.com/pnvdzj9w/image/upload/f_auto,q_auto/v1784550655/gallery-07_b8kqq9.jpg',
  'https://res.cloudinary.com/pnvdzj9w/image/upload/f_auto,q_auto/v1784550665/gallery-08_wooicv.png',
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
