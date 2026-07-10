"use client";

import { motion } from 'framer-motion';
import { Hammer, Shield, Truck, Wallet, DoorOpen } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';

const features = [
  { icon: Hammer, title: 'Premium Quality Materials', desc: 'Only the finest hardwoods, cores and finishes — hand-selected for every door.' },
  { icon: Shield, title: 'Precision Manufacturing', desc: 'Millimetre-accurate CNC and hand-finishing for flawless doors.' },
  { icon: Truck, title: 'Elegant Modern Designs', desc: 'Timeless silhouettes with modern sensibilities crafted in Nashik.' },
  { icon: DoorOpen, title: 'Durable & Long Lasting', desc: 'Sealed, seasoned and tested — built to endure decades of daily use.' },
  { icon: Wallet, title: 'Custom Sizes Available', desc: 'Every threshold is unique. Every door is built to fit yours.' },
];

export default function WhyPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1B1B1B]">
      <Navbar />
      <section className="section-pad">
        <Container>
          <SectionTitle eyebrow="Why Us" title="What makes Mata Mauli the trusted choice." subtitle="Every detail of our process is built around quality and longevity." />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: index * 0.05 }} className="rounded-[2rem] border border-[#E2D6BF] bg-white p-8 shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F3EEE5] text-[#B58C33]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-[#1B1B1B]">{feature.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#1B1B1B]/70">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
