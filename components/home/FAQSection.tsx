"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/data/faqs";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F9F7F3] py-16 md:py-24 xl:py-32"
    >
      <Container className="relative z-10 max-w-[1540px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.28em] text-[#C89B3C]">
            FREQUENTLY ASKED
          </span>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1B1B1B] md:mt-6 md:text-4xl lg:text-5xl">
            Everything, answered.
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-[#D7BE8E] md:mt-10" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4"
        >
          {faqs.map((faq, index) => {
            const isExpanded = expandedId === faq.id;
            const answerId = `faq-answer-${faq.id}`;

            return (
              <motion.div
                key={faq.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-[#E8DED0] transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  className="group flex min-h-[72px] w-full items-center justify-between px-5 py-5 text-left transition-colors duration-300 hover:bg-[#F3EEE5] sm:px-8 sm:py-6"
                  aria-expanded={isExpanded}
                  aria-controls={answerId}
                >
                  <span className="font-serif text-xl font-light leading-tight text-[#1B1B1B] transition-colors duration-300 group-hover:text-[#C89B3C] md:text-2xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`ml-4 flex-shrink-0 text-[#C89B3C] transition-transform duration-300 sm:ml-6 ${isExpanded ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded ? (
                  <motion.div
                    id={answerId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#FCFBF8]"
                  >
                    <p className="px-5 py-5 text-base leading-8 text-[#5F5F5F] sm:px-8 sm:py-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-6 text-base text-[#5F5F5F] md:text-lg">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <Link
            href="/#contact"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#C89B3C] px-10 text-base font-semibold text-black shadow-[0_18px_45px_rgba(200,155,60,.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B8892D] hover:shadow-[0_24px_55px_rgba(200,155,60,.38)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30 sm:w-auto md:min-h-16"
          >
            Contact Us
          </Link>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
    </section>
  );
}
