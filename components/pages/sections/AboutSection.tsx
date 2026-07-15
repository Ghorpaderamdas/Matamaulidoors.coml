"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const fadeBottom: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

const stats = [
  { value: "1000+", label: "Doors Delivered" },
  { value: "100%", label: "Handcrafted" },
  { value: "25+", label: "Years Experience" },
  { value: "8", label: "Door Categories" },
];

const stars = Array.from({ length: 5 });

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F9F7F3] py-16 md:py-24 xl:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-3xl" />

      <Container className="relative z-10 max-w-[1540px]">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,720px)_1fr] xl:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-[720px]"
          >
            <div className="relative aspect-[0.88] overflow-hidden rounded-[28px] sm:overflow-visible sm:rounded-[36px]">
              <Image
                src="/images/about-profile.jpg"
                alt="Premium handcrafted wooden door by Mata Mauli Industries"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
                className="rounded-[28px] object-cover shadow-[0_35px_90px_rgba(0,0,0,.15)] sm:rounded-[36px]"
              />

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute left-4 top-4 w-[min(220px,calc(100%-2rem))] rounded-2xl border border-[#E7DBC7] bg-white/85 p-5 shadow-[0_25px_70px_rgba(0,0,0,.12)] backdrop-blur-xl sm:-left-6 sm:top-8 sm:p-6"
              >
                <div className="flex gap-1 text-[#C89B3C]">
                  {stars.map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-6 text-[#666]">
                  Trusted by <strong className="text-[#222]">1000+</strong>
                  <br />
                  luxury homes across India.
                </p>
              </motion.div>

              <motion.div
                variants={fadeBottom}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute bottom-4 right-4 w-[min(230px,calc(100%-2rem))] rounded-[24px] border border-[#E7DBC7] bg-white/85 px-6 py-7 shadow-[0_25px_70px_rgba(0,0,0,.14)] backdrop-blur-xl sm:-bottom-8 sm:right-4 sm:rounded-[30px] sm:px-8 sm:py-9"
              >
                <h3 className="font-serif text-5xl font-light leading-none text-[#C89B3C] md:text-6xl">
                  25+
                </h3>

                <p className="mt-4 text-xs uppercase leading-6 tracking-[0.28em] text-[#777]">
                  Years of
                  <br />
                  Craftsmanship
                </p>
              </motion.div>

              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/20 via-transparent to-transparent sm:rounded-[36px]" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-[690px]"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.28em] text-[#C89B3C]">
              OUR LEGACY
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1B1B1B] md:mt-6 md:text-5xl lg:text-6xl">
              Handcrafted in Nashik.
              <span className="mt-2 block italic text-[#C89B3C] md:mt-3">
                Loved across India.
              </span>
            </h2>

            <div className="mt-8 h-px w-32 bg-[#D7BE8E] md:mt-10 md:w-36" />

            <p className="mt-8 text-base leading-8 text-[#5F5F5F] md:mt-10 md:text-lg">
              Founded by{" "}
              <strong className="font-semibold text-[#1B1B1B]">
                Shri Ramesh Dhadawad
              </strong>
              , Mata Mauli Industries is a family-run atelier of master
              craftsmen based near Maruti Mandir, Taked BK, Igatpuri. For over
              two decades we have quietly built a reputation for one thing -
              <span className="italic"> making the finest doors in Maharashtra.</span>
            </p>

            <p className="mt-6 text-base leading-8 text-[#5F5F5F] md:mt-8 md:text-lg">
              Every Mata Mauli door is a study in restraint. Seasoned timber.
              Precision joinery. Hand-rubbed finishes. Hardware chosen like
              jewelry. We build doors that welcome you home for generations -
              never dating, never disappointing.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:mt-16 md:grid-cols-4 md:gap-6">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-[#E8DED0] bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl md:p-6"
                >
                  <h3 className="font-serif text-4xl font-light leading-none text-[#1B1B1B] md:text-5xl">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-xs uppercase leading-5 tracking-[0.22em] text-[#777]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 md:mt-16">
              <Button
                href="/#collection"
                className="group h-14 w-full bg-[#C89B3C] px-8 text-[#1B1B1B] shadow-[0_18px_45px_rgba(200,155,60,.28)] hover:bg-[#B8892D] hover:text-white hover:shadow-[0_24px_55px_rgba(200,155,60,.38)] sm:w-auto md:h-16 md:px-10"
              >
                View Collection
                <ArrowRight
                  size={18}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
