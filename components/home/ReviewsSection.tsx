"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MessageSquare, Play, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textReviews = [
  {
    id: 1,
    text: "The entrance door Mata Mauli crafted for our villas is nothing short of art. The finish, the weight, the sound when it closes - pure luxury.",
    author: "Aditya Kulkarni",
    location: "PUNE",
    rating: 5,
  },
  {
    id: 2,
    text: "From consultation to installation, an incredibly refined experience. Ramesh ji personally supervised our custom order.",
    author: "Sneha Deshmukh",
    location: "NASHIK",
    rating: 5,
  },
  {
    id: 3,
    text: "We fitted our entire farmhouse with Mata Mauli interior doors. Three years on, they still look and feel brand new.",
    author: "Rohit Patil",
    location: "MUMBAI",
    rating: 5,
  },
  {
    id: 4,
    text: "True craftsmanship. Beautiful designer door with brass inlay - better than anything I saw in showrooms vs the price.",
    author: "Kavita Joshi",
    location: "AHMEDABAD",
    rating: 5,
  },
];

const videoReviews = [
  {
    id: 1,
    title: "Premium Wooden Door Installation",
    author: "Priya Sharma",
    location: "BANGALORE",
    thumbnail: "https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550272/CD-387_ltc1ng.png",
  },
  {
    id: 2,
    title: "Designer Door Craftsmanship",
    author: "Vikram Reddy",
    location: "HYDERABAD",
    thumbnail: "https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550373/AD-4090_uhfu0p.png",
  },
  {
    id: 3,
    title: "Interior Doors Transformation",
    author: "Anjali Verma",
    location: "DELHI",
    thumbnail: "https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550442/AD-4935_gwgm8r.png",
  },
  {
    id: 4,
    title: "Custom Door Design Showcase",
    author: "Rajesh Kumar",
    location: "KOLKATA",
    thumbnail: "https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550153/AD-6180_lutkkw.png",
  },
];

export function ReviewsSection() {
  const [activeTab, setActiveTab] = useState<"text" | "video">("text");

  return (
    <section
      id="reviews"
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
            CLIENT VOICES
          </span>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1B1B1B] md:mt-6 md:text-4xl lg:text-5xl">
            Loved by discerning homes.
          </h2>

          <div className="mx-auto mt-8 h-px w-24 bg-[#D7BE8E] md:mt-10" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 grid gap-3 sm:flex sm:items-center sm:justify-center sm:gap-4 md:mb-16"
          role="tablist"
          aria-label="Review type"
        >
          <button
            type="button"
            onClick={() => setActiveTab("text")}
            className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-all duration-300 sm:px-8 ${
              activeTab === "text"
                ? "bg-[#C89B3C] text-white shadow-[0_10px_30px_rgba(200,155,60,.3)]"
                : "border border-[#D7BE8E] text-[#1B1B1B] hover:border-[#C89B3C]"
            }`}
            role="tab"
            aria-selected={activeTab === "text"}
          >
            <MessageSquare size={18} aria-hidden="true" />
            Text Testimonial
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("video")}
            className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-all duration-300 sm:px-8 ${
              activeTab === "video"
                ? "bg-[#C89B3C] text-white shadow-[0_10px_30px_rgba(200,155,60,.3)]"
                : "border border-[#D7BE8E] text-[#1B1B1B] hover:border-[#C89B3C]"
            }`}
            role="tab"
            aria-selected={activeTab === "video"}
          >
            <Play size={18} aria-hidden="true" />
            Watch Video
          </button>
        </motion.div>

        {activeTab === "text" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 grid gap-6 md:grid-cols-2 md:gap-8"
          >
            {textReviews.map((review, index) => (
              <motion.div
                key={review.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-[#E8DED0] bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl md:p-8"
              >
                <div className="mb-4 text-5xl font-light leading-none text-[#C89B3C]" aria-hidden="true">
                  &quot;
                </div>

                <div className="mb-4 flex gap-1" aria-label={`${review.rating} star review`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#C89B3C" className="text-[#C89B3C]" aria-hidden="true" />
                  ))}
                </div>

                <p className="mb-8 text-base leading-8 text-[#5F5F5F]">
                  {review.text}
                </p>

                <div>
                  <h4 className="text-base font-semibold text-[#1B1B1B] md:text-lg">
                    {review.author}
                  </h4>
                  <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[#999]">
                    {review.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8"
          >
            {videoReviews.map((video, index) => (
              <motion.div
                key={video.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[9/12] overflow-hidden rounded-2xl bg-black">
                  <Image
                    src={video.thumbnail}
                    alt={`${video.title} testimonial thumbnail`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C89B3C] transition-transform duration-300 group-hover:scale-110">
                      <Play size={24} className="ml-1 fill-white text-white" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h4 className="mb-2 font-serif text-xl font-light leading-tight md:text-2xl">
                      {video.title}
                    </h4>
                    <p className="mb-3 text-sm leading-relaxed text-gray-300">
                      {video.author}
                    </p>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#C89B3C]">
                      {video.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 rounded-[24px] border border-[#E8DED0] bg-white/70 p-6 shadow-sm backdrop-blur-sm md:mt-20 md:p-10 lg:p-12"
        >
          <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="font-serif text-3xl leading-tight text-[#1B1B1B] md:text-4xl lg:text-5xl">
                Share Your Experience
              </h3>

              <p className="mt-5 text-base leading-8 text-[#5F5F5F] md:mt-6 md:text-lg">
                Your feedback helps us continue crafting doors that define luxury. Scan the QR code or visit our Google Business page to leave a review.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/10">
                    <Star size={18} className="text-[#C89B3C]" fill="#C89B3C" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#1B1B1B] md:text-lg">
                      Rate Your Door
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-[#5F5F5F] md:text-base">
                      Share how satisfied you are with your Mata Mauli door
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/10">
                    <MessageSquare size={18} className="text-[#C89B3C]" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#1B1B1B] md:text-lg">
                      Write a Review
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-[#5F5F5F] md:text-base">
                      Tell others about your experience with our craftsmanship
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[320px] rounded-2xl border-2 border-[#E8DED0] bg-white p-6 md:p-8">
                <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-[#F9F7F3] to-[#E8DED0] flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-3 h-24 w-24 text-[#C89B3C]/30 md:h-32 md:w-32"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M3 11h8V3H3v8zm10 0h8V3h-8v8zM3 21h8v-8H3v8zm10 0h8v-8h-8v8z" />
                    </svg>
                    <p className="text-xs font-semibold text-[#999]">
                      Google Reviews QR
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-[#999]">
                  Scan to leave a review on Google
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
    </section>
  );
}
