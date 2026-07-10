"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1B1B1B]">
      <Navbar />

      <section className="overflow-hidden py-24 lg:py-32">
        <Container className="max-w-[1500px]">

          <div className="grid items-center gap-20 xl:grid-cols-[1.05fr_.95fr] lg:grid-cols-1">

            {/* LEFT IMAGE */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-[700px] h-[760px] md:h-[620px] sm:h-[500px]"
            >
              <div className="absolute -z-10 left-12 top-16 h-[650px] w-[650px] rounded-full bg-[#D8B36A]/15 blur-[120px]" />
              <div className="relative h-full overflow-visible rounded-[34px]">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8 }}
                  className="h-full w-full"
                >
                  <Image
                    src="/images/about-door.jpg"
                    alt="Luxury handcrafted wooden door"
                    fill
                    priority
                    className="object-cover rounded-[34px] shadow-[0_60px_100px_rgba(0,0,0,.08),0_30px_50px_rgba(0,0,0,.05),0_10px_20px_rgba(0,0,0,.03)]"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply bg-[url('/images/noise.png')]" />


                {/* TOP CARD */}

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                  className="
                  absolute
                  -left-10
                  top-6
                  w-[220px]
                  rounded-[28px]
                  glass
                  luxury-shadow
                  border
                  border-[#E7DCC7]
                  bg-white/90
                  backdrop-blur-xl
                  p-6
                  "
                >

                  <div className="flex gap-1 text-[#C89B3C]">

                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                      />
                    ))}

                  </div>

                  <p className="mt-4 text-[15px] leading-6 text-[#5F5F5F]">
                    Trusted by <strong>1000+</strong> luxury homes across India.
                  </p>

                </motion.div>

                {/* BOTTOM CARD */}

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                  className="
                  absolute
                  -bottom-8
                  right-2
                  w-[235px]
                  rounded-[28px]
                  glass
                  luxury-shadow
                  border
                  border-[#E7DCC7]
                  bg-white/90
                  backdrop-blur-xl
                  p-8
                  "
                >

                  <h3 className="font-serif text-5xl font-light text-[#C89B3C]">
                    25+
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#707070] leading-6">
                    Years of
                    <br />
                    Craftsmanship
                  </p>

                </motion.div>

              </div>
            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.45em] text-[11px] text-[#C89B3C]">
                OUR LEGACY
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="mt-6 max-w-[620px] editorial-title tracking-[-0.04em] text-[#1B1B1B]"
              >
                Handcrafted in Nashik.
                <span className="mt-1 block italic font-normal text-[#C89B3C]">
                  Loved across India.
                </span>
              </motion.h1>

              <div className="flex items-center mt-8">
                <div className="w-32 h-px bg-[#D7C090]" />
                <div className="w-3 h-3 rounded-full bg-[#C89B3C] mx-3" />
                <div className="w-12 h-px bg-[#D7C090]" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
                className="mt-10 max-w-[650px] body-copy text-[#5A5A5A]"
              >
                Founded by <strong className="text-[#1B1B1B]">
                  Shri Ramesh Dhadawad
                </strong>, Mata Mauli Industries is a family-run atelier of
                master craftsmen based near Maruti Mandir, Taked BK,
                Igatpuri.
                For over two decades we have quietly built a reputation for one
                thing —
                <span className="italic"> making the finest doors in Maharashtra.</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
                className="mt-8 max-w-[650px] body-copy text-[#5A5A5A]"
              >
                Every Mata Mauli door is a study in restraint. Seasoned timber.
                Precision joinery. Hand-rubbed finishes. Hardware chosen like
                jewelry.
                We build doors that welcome you home for generations —
                never dating, never disappointing.
              </motion.p>

              {/* STATS */}

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-16 flex flex-wrap gap-x-20 gap-y-10"
              >

                <motion.div
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <h3 className="font-serif text-5xl transition-all group-hover:text-[#C89B3C] text-[#1B1B1B]">
                    1000+
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[#777]">
                    Doors Delivered
                  </p>
                </motion.div>

                <motion.div
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <h3 className="font-serif text-5xl transition-all group-hover:text-[#C89B3C] text-[#1B1B1B]">
                    100%
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[#777]">
                    Handcrafted
                  </p>
                </motion.div>

                <motion.div
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <h3 className="font-serif text-5xl transition-all group-hover:text-[#C89B3C] text-[#1B1B1B]">
                    8
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[#777]">
                    Door Categories
                  </p>
                </motion.div>

              </motion.div>

              {/* BUTTON */}

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-16 inline-block"
              >
                <Button
                  href="/collection"
                  className="group relative overflow-hidden rounded-full bg-[#B98B31] px-10 h-16 text-white"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Collection
                    <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#9E7728] transition-all duration-500 group-hover:w-full" />
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