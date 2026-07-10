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
    desc: 'Sculptured statements — carved, beveled and finished by master craftsmen.',
    img: '/images/door-01.svg'
  },
  {
    name: 'Wooden Doors',
    label: 'NATURAL ELEGANCE',
    desc: 'Solid oak, teak and sheesham engineered to last generations.',
    img: '/images/gallery-01.svg'
  },
  {
    name: 'PVC Doors',
    label: 'MODERN & DURABLE',
    desc: 'Contemporary design with weather-resistant, low-maintenance finish.',
    img: '/images/gallery-02.svg'
  },
  {
    name: 'Laminate Doors',
    label: 'REFINED FINISH',
    desc: 'High-pressure laminates with luxury textures and finishes.',
    img: '/images/gallery-03.svg'
  },
  {
    name: 'Flush Doors',
    label: 'CLEAN MINIMALISM',
    desc: 'Sleek, frameless design for contemporary and minimalist interiors.',
    img: '/images/gallery-04.svg'
  },
  {
    name: 'Interior Doors',
    label: 'EVERYDAY LUXURY',
    desc: 'Room dividers designed for grace, privacy and acoustic control.',
    img: '/images/door-02.svg'
  },
  {
    name: 'Main Entrance Doors',
    label: 'GRAND STATEMENT',
    desc: 'Statement entries with bold detailing and premium hardware.',
    img: '/images/door-03.svg'
  },
  {
    name: 'Custom Doors',
    label: 'MADE TO ORDER',
    desc: 'Bespoke dimensions, motifs, and finishes tailored to your design.',
    img: '/images/gallery-01.svg'
  },
];

export function CollectionSection() {
  return (
    <section id="collection" className="relative overflow-hidden bg-[#F9F7F3] py-24 md:py-32 xl:py-40">
      <Container className="relative z-10 max-w-[1540px]">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.45em] text-[#C89B3C]">
            THE COLLECTION
          </span>

          <h2 className="mt-6 font-serif text-[42px] leading-[1.1] tracking-[-0.03em] text-[#1B1B1B] md:text-[58px] xl:text-[72px]">
            Doors, Reimagined.
          </h2>

          <p className="mt-8 text-[16px] leading-[1.8] text-[#5F5F5F] lg:text-[18px]">
            Eight signature categories — each a masterclass in material, silhouette and finish.
          </p>

          <div className="mt-10 h-px w-24 mx-auto bg-[#D7BE8E]" />
        </motion.div>

        {/* Collections Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[24px] h-[420px] cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={collection.img}
                alt={collection.name}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, (max-width:1280px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#C89B3C]/80">
                  {collection.label}
                </span>

                <h3 className="mt-3 font-serif text-[22px] font-light leading-tight text-white">
                  {collection.name}
                </h3>

                <p className="mt-4 text-[13px] leading-[1.6] text-gray-300 line-clamp-2">
                  {collection.desc}
                </p>

                <Link
                  href={`/#collection`}
                  className="mt-6 inline-flex items-center text-[13px] font-medium text-[#C89B3C] hover:text-white transition-colors duration-300 group/link"
                >
                  View Details
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
    </section>
  );
}
