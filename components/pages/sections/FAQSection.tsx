"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/common/Container";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const faqs = [
  {
    id: 1,
    question: "Do you offer fully custom door designs?",
    answer:
      "Yes, absolutely. Every door at Mata Mauli is crafted to your specifications. From dimensions and materials to decorative elements and finishes, we work closely with you to create doors that perfectly match your vision and architectural requirements.",
  },
  {
    id: 2,
    question: "Which materials do you work with?",
    answer:
      "We specialize in premium hardwoods including teak, oak, and sheesham, as well as high-quality plywood cores. We also offer PVC doors for modern projects and laminate options for contemporary interiors. Each material is carefully selected for durability and aesthetic appeal.",
  },
  {
    id: 3,
    question: "What is your typical delivery timeline?",
    answer:
      "Standard door deliveries typically take 3-4 weeks from order confirmation. Custom designs may take 5-7 weeks depending on complexity. We provide regular updates throughout the production process and coordinate convenient delivery times.",
  },
  {
    id: 4,
    question: "Do you provide installation?",
    answer:
      "Yes, we offer professional installation services across Maharashtra and nearby regions. Our skilled craftsmen ensure proper fitting, alignment, and finishing. Installation costs vary based on location and door complexity.",
  },
  {
    id: 5,
    question: "What warranty do you offer?",
    answer:
      "All Mata Mauli doors come with a comprehensive 5-year structural warranty covering defects in materials and craftsmanship. We also offer extended warranty options for premium peace of mind. Hardware typically carries a 3-year warranty.",
  },
  {
    id: 6,
    question: "How do I price a custom door?",
    answer:
      "Pricing depends on materials, size, design complexity, finish type, and hardware selections. We provide detailed quotes after understanding your requirements. Contact us for a free consultation and personalized pricing.",
  },
  {
    id: 7,
    question: "How do I maintain a wooden door?",
    answer:
      "Wooden doors require minimal maintenance. Dust regularly with a soft cloth, avoid prolonged direct sunlight exposure, and apply wood polish every 6-12 months. Keep humidity levels between 40-60% to prevent warping. We provide detailed care instructions with every delivery.",
  },
  {
    id: 8,
    question: "Can you match existing doors in my home?",
    answer:
      "Absolutely. We can replicate existing door designs or create new doors that complement your current decor. Bring photos or measurements of your existing doors, and our design team will match the style, finish, and hardware.",
  },
];

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
