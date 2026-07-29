"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const fadeUp: Variants = {
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
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
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
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#F8F3EA] to-[#EFE3CF] py-16 md:py-24 xl:py-32"
    >
      {/* Decorative Blur */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/10 blur-3xl" />

      <Container className="relative z-10 max-w-[1540px]">
        <div className="grid items-center gap-14 xl:grid-cols-[minmax(0,680px)_1fr]">

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-[680px]"
          >
            <div className="relative rounded-[36px] bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,.12)]">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#FAF7F2] via-[#F3ECE0] to-[#E9DAC1]">

                <Image
                  src="https://res.cloudinary.com/pnvdzj9w/image/upload/v1785164298/ProfileBU0_jr73l6.png"
                  alt="Premium handcrafted wooden door by Mata Mauli Industries"
                  fill
                  priority
                  sizes="(max-width:768px)100vw,(max-width:1200px)60vw,680px"
                  className="object-contain p-4"
                />
              </div>

              {/* Rating Card */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute left-4 top-4 rounded-2xl border border-[#E7DBC7] bg-white/90 p-5 shadow-xl backdrop-blur-lg md:left-0 md:top-8 md:-translate-x-8"
              >
                <div className="flex gap-1 text-[#C89B3C]">
                  {stars.map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Trusted by <strong>1000+</strong>
                  <br />
                  luxury homes across India.
                </p>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                variants={fadeBottom}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute bottom-4 right-4 rounded-[28px] border border-[#E7DBC7] bg-white/90 px-8 py-8 shadow-xl backdrop-blur-lg md:right-0 md:translate-x-8 md:translate-y-8"
              >
                <h3 className="font-serif text-6xl font-light text-[#C89B3C]">
                  25+
                </h3>

                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Years of
                  <br />
                  Craftsmanship
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-[700px]"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
              OUR LEGACY
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1B1B1B] md:text-5xl lg:text-6xl">
              Handcrafted in Nashik.
              <span className="mt-3 block italic text-[#C89B3C]">
                Loved across India.
              </span>
            </h2>

            <div className="mt-10 h-px w-36 bg-[#D7BE8E]" />

            <p className="mt-10 text-lg leading-9 text-[#5F5F5F]">
              Founded by{" "}
              <strong className="text-[#1B1B1B]">
                Shri Ramesh Dhadawad
              </strong>
              , Mata Mauli Industries is a family-run atelier of master
              craftsmen based near Maruti Mandir, Taked BK, Igatpuri.
              For over two decades we have built a reputation for creating
              premium handcrafted wooden doors that combine timeless design,
              durability, and unmatched craftsmanship.
            </p>

            <p className="mt-8 text-lg leading-9 text-[#5F5F5F]">
              Every Mata Mauli door is crafted from carefully selected timber,
              precision joinery, and premium hardware. Our doors are designed
              not just for today - but for generations to come.
            </p>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">

              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: .25,
                  }}
                  className="rounded-2xl border border-[#E8DED0] bg-white p-6 shadow-sm hover:shadow-xl"
                >
                  <h3 className="font-serif text-4xl text-[#1B1B1B]">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-gray-500">
                    {item.label}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* Button */}
            <div className="mt-16">

              <Button
                href="/#collection"
                className="group h-16 bg-[#C89B3C] px-10 text-[#1B1B1B] shadow-lg hover:bg-[#B8892D] hover:text-white"
              >
                View Collection

                <ArrowRight
                  size={18}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-2"
                />

              </Button>

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}





