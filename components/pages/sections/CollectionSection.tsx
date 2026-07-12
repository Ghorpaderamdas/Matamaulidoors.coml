"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const collections = [
  {
    name: 'Designer Doors',
    label: 'SIGNATURE CRAFT',
    desc: 'Sculptured statements - carved, beveled and finished by master craftsmen.',
    img: '/images/door-01.svg',
    slug: 'designer',
  },
  {
    name: 'Wooden Doors',
    label: 'NATURAL ELEGANCE',
    desc: 'Solid oak, teak and sheesham engineered to last generations.',
    img: '/images/gallery-01.svg',
    slug: 'wooden',
  },
  {
    name: 'PVC Doors',
    label: 'MODERN & DURABLE',
    desc: 'Contemporary design with weather-resistant, low-maintenance finish.',
    img: '/images/gallery-02.svg',
    slug: 'pvc',
  },
  {
    name: 'Laminate Doors',
    label: 'REFINED FINISH',
    desc: 'High-pressure laminates with luxury textures and finishes.',
    img: '/images/gallery-03.svg',
    slug: 'laminate',
  },
  {
    name: 'Flush Doors',
    label: 'CLEAN MINIMALISM',
    desc: 'Sleek, frameless design for contemporary and minimalist interiors.',
    img: '/images/gallery-04.svg',
    slug: 'flush',
  },
  {
    name: 'Interior Doors',
    label: 'EVERYDAY LUXURY',
    desc: 'Room dividers designed for grace, privacy and acoustic control.',
    img: '/images/door-02.svg',
    slug: 'interior',
  },
  {
    name: 'Main Entrance Doors',
    label: 'GRAND STATEMENT',
    desc: 'Statement entries with bold detailing and premium hardware.',
    img: '/images/door-03.svg',
    slug: 'main-entrance',
  },
  {
    name: 'Custom Doors',
    label: 'MADE TO ORDER',
    desc: 'Bespoke dimensions, motifs, and finishes tailored to your design.',
    img: '/images/gallery-01.svg',
    slug: 'custom',
  },
];

export function CollectionSection() {
  return (
    <section id="collection" className="relative overflow-hidden bg-[#F9F7F3] py-16 md:py-24 xl:py-32">
      <Container className="relative z-10 max-w-[1540px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.28em] text-[#C89B3C]">
            THE COLLECTION
          </span>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1B1B1B] md:mt-6 md:text-4xl lg:text-5xl">
            Doors, Reimagined.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F5F5F] md:mt-6 md:text-lg">
            Eight signature categories - each a masterclass in material, silhouette and finish.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-[#D7BE8E] md:mt-10" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative h-[360px] cursor-pointer overflow-hidden rounded-[24px] sm:h-[400px] lg:h-[420px]"
            >
              <Image
                src={collection.img}
                alt={`${collection.name} by Mata Mauli Industries`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-6">
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#C89B3C]/80">
                  {collection.label}
                </span>

                <h3 className="mt-3 font-serif text-xl font-light leading-tight text-white md:text-2xl">
                  {collection.name}
                </h3>

                <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-300">
                  {collection.desc}
                </p>

                <Link
                  href={`/doors/${collection.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-[#C89B3C] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30 group/link"
                >
                  View Details
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
    </section>
  );
}
