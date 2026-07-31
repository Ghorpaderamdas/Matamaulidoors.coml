"use client";

import { motion } from 'framer-motion';
import { DoorOpen, Hammer, Shield, Truck, Wallet } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

const features = [
  { icon: Hammer, title: 'Premium Quality Materials', desc: 'Only the finest hardwoods, cores and finishes - hand-selected for every door.' },
  { icon: Shield, title: 'Precision Manufacturing', desc: 'Millimetre-accurate CNC and hand-finishing for flawless doors.' },
  { icon: Truck, title: 'Elegant Modern Designs', desc: 'Timeless silhouettes with modern sensibilities crafted in Nashik.' },
  { icon: DoorOpen, title: 'Durable & Long Lasting', desc: 'Sealed, seasoned and tested - built to endure decades of daily use.' },
  { icon: Wallet, title: 'Custom Sizes Available', desc: 'Every threshold is unique. Every door is built to fit yours.' },
];

export default function WhyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen overflow-x-hidden bg-[#FAF8F5] text-[#1B1B1B]">
      <section className="pb-16 pt-32 md:pb-24 md:pt-40 xl:pb-32">
        <Container>
          <SectionTitle
            eyebrow="Why Us"
            title="What makes Mata Mauli the trusted choice."
            subtitle="Every detail of our process is built around quality and longevity."
            headingLevel="h1"
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                  className="rounded-[24px] border border-[#E2D6BF] bg-white p-6 shadow-sm md:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3EEE5] text-[#B58C33]">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 font-serif text-xl font-semibold text-[#1B1B1B] md:text-2xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#1B1B1B]/70 md:text-lg md:leading-8">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
      </main>
      <Footer />
    </>
  );
}


