"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

const products = [
  { name: 'Designer Doors', desc: 'Statement entryways with bespoke detailing and premium finishes.', img: '/images/doors/doorHomeImg/photo-1.avif' },
  { name: 'Wooden Doors', desc: 'Solid wood craftsmanship with heirloom-grade durability.', img: '/images/doors/doorHomeImg/photo-2.avif' },
  { name: 'PVC Doors', desc: 'Low-maintenance, elegant, and ideal for modern interiors.', img: '/images/doors/doorHomeImg/photo-3.jpg' },
  { name: 'Custom Doors', desc: 'Tailor-made dimensions, motifs, and hardware finishes.', img: '/images/doors/doorHomeImg/photo-8.avif' },
];

export default function CollectionPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F3EEE5] text-[#1B1B1B]">
      <Navbar />
      <section className="pb-16 pt-32 md:pb-24 md:pt-40 xl:pb-32">
        <Container>
          <SectionTitle
            eyebrow="Collection"
            title="Doors made for every entrance and interior."
            subtitle="Explore our current product range, from designer panels to custom commissions."
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="overflow-hidden rounded-[24px] border border-[#1B1B1B]/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                  <Image
                    src={product.img}
                    alt={`${product.name} by Mata Mauli Industries`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-xl font-semibold text-[#1B1B1B] md:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#1B1B1B]/70 md:text-lg md:leading-8">
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
