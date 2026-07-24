"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const heroActions = [
  {
    label: "Explore Collection",
    href: "#collection",
    primary: true,
  },
  {
    label: "Get Free Quote",
    href: "#contact",
    primary: false,
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen overflow-hidden bg-[#111111] text-[#FFFFFF]"
    >
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 28px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      <Image
        src="https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550574/about-profile_iiiclx.jpg"
        alt="Luxury handcrafted wooden door"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-black/[0.55]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_24%,rgba(200,155,60,0.22),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.28)_48%,rgba(17,17,17,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(17,17,17,0.30)_0%,rgba(17,17,17,0.08)_42%,rgba(17,17,17,0.78)_100%)]" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
        <div className="animate-[heroFadeUp_800ms_ease-out_both] rounded-full border border-[#C89B3C]/55 bg-[#2B2017]/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#E7C77A] shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:px-5 sm:text-xs">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#C89B3C] align-middle shadow-[0_0_18px_rgba(200,155,60,0.8)]" />
          Since Generations . Handcrafted in Nashik
        </div>

        <h1 className="mt-8 animate-[heroFadeUp_900ms_ease-out_140ms_both] font-serif text-5xl font-medium leading-none text-white md:mt-10 md:text-6xl lg:text-7xl">
          <span className="block">Crafting Doors That</span>
          <span className="block pt-2 italic text-[#C89B3C] md:pt-3">
            Define Luxury.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[720px] animate-[heroFadeUp_900ms_ease-out_260ms_both] font-sans text-base leading-7 text-white/80 md:mt-8 md:text-xl md:leading-8">
          Premium Wooden, PVC &amp; Designer Doors built with precision and
          timeless craftsmanship for homes that deserve nothing less.
        </p>

        <div className="mt-8 flex w-full animate-[heroFadeUp_900ms_ease-out_380ms_both] flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5 md:mt-10">
          {heroActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={
                action.primary
                  ? "inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-8 font-sans text-base font-semibold text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B68A2D] hover:shadow-[0_22px_42px_rgba(200,155,60,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30 sm:w-auto sm:min-w-[220px]"
                  : "inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-white/45 bg-transparent px-8 font-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111111] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto sm:min-w-[220px]"
              }
            >
              {action.label}
              {action.primary ? <ArrowRight size={20} strokeWidth={2} aria-hidden="true" /> : null}
            </a>
          ))}
        </div>

        <div
          className="mt-6 flex animate-[heroFadeUp_900ms_ease-out_500ms_both] items-center justify-center gap-3"
          aria-hidden="true"
        >
          <span className="h-1 w-14 rounded-full bg-[#C89B3C]" />
          <span className="h-1 w-6 rounded-full bg-white/38" />
          <span className="h-1 w-6 rounded-full bg-white/38" />
        </div>

        <a
          href="#about"
          className="mt-6 inline-flex min-h-11 animate-[heroFadeUp_900ms_ease-out_620ms_both] flex-col items-center gap-2 font-serif text-xs uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:text-[#C89B3C] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
          aria-label="Scroll to about section"
        >
          Scroll
          <ChevronDown
            className="animate-bounce text-white/75"
            size={24}
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
