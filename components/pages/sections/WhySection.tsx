"use client";

import { motion, Variants } from 'framer-motion';
import { Gem, Wrench, Sparkles, Shield, Lightbulb, Clock, Award, Lock } from 'lucide-react';
import { Container } from '@/components/common/Container';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const features = [
  {
    icon: Gem,
    title: 'Premium Quality Materials',
    desc: 'Only the finest hardwoods, cores and finishes — hand-selected for every door.'
  },
  {
    icon: Wrench,
    title: 'Precision Manufacturing',
    desc: 'Millimetre-accurate CNC and hand-finishing for flawless doors.'
  },
  {
    icon: Sparkles,
    title: 'Elegant Modern Designs',
    desc: 'Timeless silhouettes with modern sensibilities crafted in Nashik.'
  },
  {
    icon: Shield,
    title: 'Durable & Long Lasting',
    desc: 'Sealed, seasoned and tested — built to endure decades of daily use.'
  },
  {
    icon: Lightbulb,
    title: 'Custom Designs',
    desc: 'Bespoke solutions tailored to your vision and requirements.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Punctual execution and reliable completion of every project.'
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    desc: 'Skilled artisans with decades of combined experience.'
  },
  {
    icon: Lock,
    title: 'Quality Assurance',
    desc: 'Rigorous testing and inspection at every stage.'
  },
];

export function WhySection() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#1B1B1B] py-24 md:py-32 xl:py-40"
      style={{
        backgroundImage: 'url(/images/hero-door.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1B1B1B]/85 backdrop-blur-sm" />

      <Container className="relative z-10 max-w-[1540px]">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.45em] text-[#C89B3C]">
            WHY CHOOSE MATA MAULI
          </span>

          <h2 className="mt-6 font-serif text-[42px] leading-[1.1] tracking-[-0.03em] text-white md:text-[58px] xl:text-[72px]">
            Uncompromising in every detail.
          </h2>

          <p className="mt-8 text-[16px] leading-[1.8] text-gray-300 lg:text-[18px]">
            Eight commitments we make on every door — no exceptions, no shortcuts.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl border border-[#333] bg-[#2A2A2A]/50 p-8 backdrop-blur-sm hover:border-[#C89B3C]/50 transition-all duration-300"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C]/20 transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-serif text-[18px] font-light leading-tight text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.7] text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
    </section>
  );
}
