"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  { value: "1000+", label: "Doors Delivered" },
  { value: "100%", label: "Handcrafted" },
  { value: "8", label: "Door Categories" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8F5] text-[#1B1B1B]">
      <Navbar />

      <section className="overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40 xl:pb-32">
        <Container className="max-w-[1500px]">
          <div className="grid items-center gap-12 xl:grid-cols-[1.05fr_.95fr] xl:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative mx-auto h-[520px] w-full max-w-[700px] sm:h-[600px] lg:h-[680px]"
            >
              <div className="absolute -z-10 left-12 top-16 h-[520px] w-[520px] rounded-full bg-[#D8B36A]/15 blur-[120px]" />
              <div className="relative h-full overflow-hidden rounded-[28px] sm:overflow-visible sm:rounded-[34px]">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.8 }} className="h-full w-full">
                  <Image
                    src="https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550574/about-profile_iiiclx.jpg"
                    alt="Luxury handcrafted wooden door"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="rounded-[28px] object-cover shadow-[0_60px_100px_rgba(0,0,0,.08),0_30px_50px_rgba(0,0,0,.05),0_10px_20px_rgba(0,0,0,.03)] sm:rounded-[34px]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                  viewport={{ once: true }}
                  className="glass luxury-shadow absolute left-4 top-4 w-[min(220px,calc(100%-2rem))] rounded-[24px] border border-[#E7DCC7] bg-white/90 p-5 backdrop-blur-xl sm:-left-6 sm:top-6 sm:p-6"
                >
                  <div className="flex gap-1 text-[#C89B3C]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#5F5F5F] md:text-base">
                    Trusted by <strong>1000+</strong> luxury homes across India.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                  viewport={{ once: true }}
                  className="glass luxury-shadow absolute bottom-4 right-4 w-[min(235px,calc(100%-2rem))] rounded-[24px] border border-[#E7DCC7] bg-white/90 p-6 backdrop-blur-xl sm:-bottom-8 sm:right-2 sm:rounded-[28px] sm:p-8"
                >
                  <p className="font-serif text-5xl font-light text-[#C89B3C]">
                    25+
                  </p>

                  <p className="mt-2 text-xs uppercase leading-6 tracking-[0.24em] text-[#707070]">
                    Years of
                    <br />
                    Craftsmanship
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto max-w-[680px]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#C89B3C]">
                OUR LEGACY
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-5 font-serif text-4xl leading-tight text-[#1B1B1B] md:mt-6 md:text-5xl lg:text-6xl"
              >
                Handcrafted in Nashik.
                <span className="mt-1 block italic font-normal text-[#C89B3C]">
                  Loved across India.
                </span>
              </motion.h1>

              <div className="mt-8 flex items-center">
                <div className="h-px w-24 bg-[#D7C090] sm:w-32" />
                <div className="mx-3 h-3 w-3 rounded-full bg-[#C89B3C]" />
                <div className="h-px w-12 bg-[#D7C090]" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
                className="mt-8 max-w-[650px] text-base leading-8 text-[#5A5A5A] md:mt-10 md:text-lg"
              >
                Founded by <strong className="text-[#1B1B1B]">Shri Ramesh Dhadawad</strong>, Mata Mauli Industries is a family-run atelier of
                master craftsmen based near Maruti Mandir, Taked BK, Igatpuri.
                For over two decades we have quietly built a reputation for one
                thing - <span className="italic">making the finest doors in Maharashtra.</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
                className="mt-6 max-w-[650px] text-base leading-8 text-[#5A5A5A] md:mt-8 md:text-lg"
              >
                Every Mata Mauli door is a study in restraint. Seasoned timber.
                Precision joinery. Hand-rubbed finishes. Hardware chosen like
                jewelry. We build doors that welcome you home for generations -
                never dating, never disappointing.
              </motion.p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:mt-16"
              >
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={item} whileHover={{ y: -6 }} className="group">
                    <p className="font-serif text-4xl text-[#1B1B1B] transition-all group-hover:text-[#C89B3C] md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-xs uppercase leading-5 tracking-[0.24em] text-[#777]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 block md:mt-16 md:inline-block"
              >
                <Button
                  href="/collection"
                  className="group relative h-14 w-full overflow-hidden rounded-full bg-[#B98B31] px-8 text-white hover:bg-[#9E7728] sm:w-auto md:h-16 md:px-10"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Collection
                    <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
