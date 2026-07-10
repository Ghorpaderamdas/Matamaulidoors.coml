"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

const products = [
  { name: 'Designer Doors', desc: 'Statement entryways with bespoke detailing and premium finishes.', img: '/images/door-01.svg' },
  { name: 'Wooden Doors', desc: 'Solid wood craftsmanship with heirloom-grade durability.', img: '/images/wood-door-01.svg' },
  { name: 'PVC Doors', desc: 'Low-maintenance, elegant, and ideal for modern interiors.', img: '/images/door-02.svg' },
  { name: 'Custom Doors', desc: 'Tailor-made dimensions, motifs, and hardware finishes.', img: '/images/door-03.svg' },
];

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-[#F3EEE5] text-[#1B1B1B]">
      <Navbar />
      <section className="section-pad">
        <Container>
          <SectionTitle eyebrow="Collection" title="Doors made for every entrance and interior." subtitle="Explore our current product range, from designer panels to custom commissions." />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <motion.div key={product.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: index * 0.08 }} className="overflow-hidden rounded-[2rem] border border-[#1B1B1B]/10 bg-white shadow-sm">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={product.img} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#1B1B1B]">{product.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#1B1B1B]/70">{product.desc}</p>
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
