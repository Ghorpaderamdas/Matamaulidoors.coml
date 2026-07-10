"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Star, MessageSquare, Play } from "lucide-react";
import { Container } from "@/components/common/Container";

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
    text: "The entrance door Mata Mauli crafted for our villas is nothing short of art. The finish, the weight, the sound when it closes — pure luxury.",
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
    text: "True craftsmanship. Beautiful designer door with brass inlay — better than anything I saw in showrooms vs the price.",
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
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/images/door-01.svg",
  },
  {
    id: 2,
    title: "Designer Door Craftsmanship",
    author: "Vikram Reddy",
    location: "HYDERABAD",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/images/door-02.svg",
  },
  {
    id: 3,
    title: "Interior Doors Transformation",
    author: "Anjali Verma",
    location: "DELHI",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/images/door-03.svg",
  },
  {
    id: 4,
    title: "Custom Door Design Showcase",
    author: "Rajesh Kumar",
    location: "KOLKATA",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/images/gallery-01.svg",
  },
];

export function ReviewsSection() {
  const [activeTab, setActiveTab] = useState<"text" | "video">("text");

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#F9F7F3] py-24 md:py-32 xl:py-40"
    >
      <Container className="relative z-10 max-w-[1540px]">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.45em] text-[#C89B3C]">
            CLIENT VOICES
          </span>

          <h2 className="mt-6 font-serif text-[42px] leading-[1.1] tracking-[-0.03em] text-[#1B1B1B] md:text-[58px] xl:text-[72px]">
            Loved by discerning homes.
          </h2>

          <div className="mt-10 h-px w-24 mx-auto bg-[#D7BE8E]" />
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          <button
            onClick={() => setActiveTab("text")}
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "text"
                ? "bg-[#C89B3C] text-white shadow-[0_10px_30px_rgba(200,155,60,.3)]"
                : "border border-[#D7BE8E] text-[#1B1B1B] hover:border-[#C89B3C]"
            }`}
          >
            <MessageSquare size={18} />
            Text Testimonial
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "video"
                ? "bg-[#C89B3C] text-white shadow-[0_10px_30px_rgba(200,155,60,.3)]"
                : "border border-[#D7BE8E] text-[#1B1B1B] hover:border-[#C89B3C]"
            }`}
          >
            <Play size={18} />
            Watch Video
          </button>
        </motion.div>

        {/* Text Reviews */}
        {activeTab === "text" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 mb-20"
          >
            {textReviews.map((review, index) => (
              <motion.div
                key={review.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-[#E8DED0] bg-white/70 backdrop-blur-sm p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote Mark */}
                <div className="text-5xl text-[#C89B3C] font-light leading-none mb-4">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#C89B3C"
                      className="text-[#C89B3C]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[15px] leading-[1.8] text-[#5F5F5F] mb-8">
                  {review.text}
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-semibold text-[#1B1B1B]">
                    {review.author}
                  </h4>
                  <p className="text-[12px] uppercase tracking-[0.32em] text-[#999] mt-1">
                    {review.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Video Reviews */}
        {activeTab === "video" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20"
          >
            {videoReviews.map((video, index) => (
              <motion.div
                key={video.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-[9/12] rounded-2xl overflow-hidden bg-black">
                  {/* Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#C89B3C] group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h4 className="font-serif text-[18px] font-light leading-tight mb-2">
                      {video.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-gray-300 mb-3">
                      {video.author}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-[#C89B3C]">
                      {video.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Google Review Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-[#E8DED0] bg-white/70 backdrop-blur-sm p-12 md:p-16 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="font-serif text-[42px] leading-[1.1] text-[#1B1B1B]">
                Share Your Experience
              </h3>

              <p className="mt-6 text-[16px] leading-[1.8] text-[#5F5F5F]">
                Your feedback helps us continue crafting doors that define luxury. Scan the QR code or visit our Google Business page to leave a review.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C89B3C]/10 flex-shrink-0 mt-0.5">
                    <Star size={18} className="text-[#C89B3C]" fill="#C89B3C" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B1B1B]">
                      Rate Your Door
                    </h4>
                    <p className="text-[14px] text-[#5F5F5F] mt-1">
                      Share how satisfied you are with your Mata Mauli door
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C89B3C]/10 flex-shrink-0 mt-0.5">
                    <MessageSquare size={18} className="text-[#C89B3C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B1B1B]">
                      Write a Review
                    </h4>
                    <p className="text-[14px] text-[#5F5F5F] mt-1">
                      Tell others about your experience with our craftsmanship
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - QR Code */}
            <div className="flex justify-center">
              <div className="rounded-2xl border-2 border-[#E8DED0] p-8 bg-white">
                {/* Placeholder QR Code - Replace with actual QR */}
                <div className="w-64 h-64 bg-gradient-to-br from-[#F9F7F3] to-[#E8DED0] rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 mx-auto mb-3 text-[#C89B3C]/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 11h8V3H3v8zm10 0h8V3h-8v8zM3 21h8v-8H3v8zm10 0h8v-8h-8v8z" />
                    </svg>
                    <p className="text-[12px] text-[#999] font-semibold">
                      Google Reviews QR
                    </p>
                  </div>
                </div>
                <p className="text-center text-[12px] text-[#999] mt-4">
                  Scan to leave a review on Google
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-3xl" />
    </section>
  );
}
