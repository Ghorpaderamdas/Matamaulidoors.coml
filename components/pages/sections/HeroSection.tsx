"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles, Shield, Clock, Award } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

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

const features = [
  {
    icon: Sparkles,
    label: "Premium Quality",
    description: "Finest materials & craftsmanship"
  },
  {
    icon: Shield,
    label: "Lifetime Warranty",
    description: "Guaranteed durability & performance"
  },
  {
    icon: Clock,
    label: "Timeless Design",
    description: "Classic elegance meets modern trends"
  },
  {
    icon: Award,
    label: "Award Winning",
    description: "Recognized excellence in design"
  }
];

// Background images for slideshow
const backgroundImages = [
  {
    id: 1,
    url: "https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550574/about-profile_iiiclx.jpg",
    alt: "Luxury wooden door with intricate carvings"
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550655/gallery-07_b8kqq9.jpg",
    alt: "Modern PVC door with glass panels"
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550651/gallery-05_oadd5o.jpg",
    alt: "Designer door with gold hardware"
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/pnvdzj9w/image/upload/v1784550651/gallery-05_oadd5o.jpg",
    alt: "Classic wooden door with vintage finish"
  }
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNextImage, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, goToNextImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNextImage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPreviousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextImage, goToPreviousImage]);

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen overflow-hidden bg-[#1a1a1a] text-[#FFFFFF]"
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
        @keyframes heroFadeDown {
          from {
            opacity: 0;
            transform: translate3d(0, -28px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes zoomIn {
          from { transform: scale(1.15); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes zoomOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(1.1); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(200, 155, 60, 0.3); }
          50% { border-color: rgba(200, 155, 60, 0.6); }
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #C89B3C 0%, #E7C77A 25%, #C89B3C 50%, #E7C77A 75%, #C89B3C 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .glass-effect {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .glass-effect-strong {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .indicator-active {
          background: #C89B3C;
          width: 36px;
          box-shadow: 0 0 20px rgba(200, 155, 60, 0.4);
        }
        .indicator-inactive {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
        }
        .indicator-active,
        .indicator-inactive {
          height: 3px;
          border-radius: 4px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .indicator-inactive:hover {
          background: rgba(255, 255, 255, 0.7);
          width: 18px;
        }
        .badge-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .text-shadow-custom {
          text-shadow: 0 2px 40px rgba(0, 0, 0, 0.2);
        }
        .gradient-border {
          border-image: linear-gradient(135deg, #C89B3C, #E7C77A, #C89B3C) 1;
          animation: borderPulse 2s ease-in-out infinite;
        }
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
        }
        .slide-control {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .group:hover .slide-control {
          opacity: 1;
        }
        .progress-bar {
          animation: progress 5s linear forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .text-gradient-gold {
          background: linear-gradient(135deg, #C89B3C, #E7C77A, #C89B3C);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Slideshow Images */}
      <div 
        className="absolute inset-0 -z-30 overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {backgroundImages.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{
                animation: index === currentImageIndex ? "zoomIn 10s ease-out" : "none",
                transform: index === currentImageIndex ? "scale(1)" : "scale(1.15)",
              }}
            />
          </div>
        ))}
        
        {/* Reduced opacity gradient overlays for less darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(200,155,60,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.02)_48%,rgba(0,0,0,0.10)_100%)]" />

        {/* Navigation Arrows */}
        <button
          onClick={goToPreviousImage}
          className="slide-control absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/40 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronDown className="rotate-90" size={24} />
        </button>
        <button
          onClick={goToNextImage}
          className="slide-control absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/40 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronDown className="-rotate-90" size={24} />
        </button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`${
              index === currentImageIndex ? "indicator-active" : "indicator-inactive"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 z-10 h-1 bg-gradient-to-r from-[#C89B3C] to-[#E7C77A] transition-all duration-1000" 
        style={{ width: `${((currentImageIndex + 1) / backgroundImages.length) * 100}%` }}
      />

      {/* Decorative Elements - Reduced opacity */}
      <div className="absolute top-20 right-20 -z-10 h-64 w-64 rounded-full bg-[#C89B3C] opacity-[0.04] blur-3xl" />
      <div className="absolute bottom-20 left-20 -z-10 h-96 w-96 rounded-full bg-[#C89B3C] opacity-[0.04] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C89B3C] opacity-[0.02] blur-3xl" />

      {/* Main Content */}
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
        {/* Badge - Adjusted for less darkness */}
        <div className="animate-[heroFadeUp_800ms_ease-out_both] rounded-full border border-[#C89B3C]/20 bg-[#1a120b]/30 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.28em] text-[#E7C77A] shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-md hover:border-[#C89B3C]/40 transition-all duration-300 sm:px-7 sm:text-xs">
          <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#C89B3C] align-middle shadow-[0_0_18px_rgba(200,155,60,0.3)] animate-pulse" />
          Since Generations . Handcrafted in Nashik
        </div>

        {/* Main Heading */}
        <h1 className="mt-8 animate-[heroFadeUp_900ms_ease-out_140ms_both] font-serif text-5xl font-medium leading-none text-white text-shadow-custom md:mt-10 md:text-7xl lg:text-8xl">
          <span className="block">Crafting Doors That</span>
          <span className="block pt-2 italic shimmer-text md:pt-3">
            Define Luxury.
          </span>
        </h1>

        {/* Description - Lighter text shadow */}
        <p className="mx-auto mt-6 max-w-[720px] animate-[heroFadeUp_900ms_ease-out_260ms_both] font-sans text-base leading-7 text-white/90 text-shadow-custom md:mt-8 md:text-xl md:leading-8">
          Premium Wooden, PVC &amp; Designer Doors built with precision and
          timeless craftsmanship for homes that deserve nothing less.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex w-full animate-[heroFadeUp_900ms_ease-out_380ms_both] flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5 md:mt-10">
          {heroActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={
                action.primary
                  ? "group hover-lift inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-10 font-sans text-base font-semibold text-[#111111] transition-all duration-300 hover:bg-[#B68A2D] hover:shadow-[0_22px_42px_rgba(200,155,60,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/40 sm:w-auto sm:min-w-[220px]"
                  : "group hover-lift inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-10 font-sans text-base font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:border-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 sm:w-auto sm:min-w-[220px]"
              }
            >
              {action.label}
              {action.primary ? (
                <ArrowRight 
                  size={20} 
                  strokeWidth={2} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                  aria-hidden="true" 
                />
              ) : null}
            </a>
          ))}
        </div>

        {/* Feature Highlights - Lighter glass effect */}
        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-3 animate-[heroFadeUp_900ms_ease-out_500ms_both] sm:grid-cols-4 md:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group hover-lift rounded-2xl glass-effect p-3.5 text-center transition-all duration-300 hover:border-[#C89B3C]/20 hover:shadow-[0_8px_32px_rgba(200,155,60,0.08)]"
              >
                <div className="mb-2 flex justify-center">
                  <div className="rounded-full bg-[#C89B3C]/10 p-2 transition-all duration-300 group-hover:bg-[#C89B3C]/20 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-[#C89B3C] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h4 className="text-xs font-semibold text-white/90 transition-colors duration-300 group-hover:text-white sm:text-sm">{feature.label}</h4>
                <p className="mt-0.5 text-[10px] text-white/60 transition-colors duration-300 group-hover:text-white/80 sm:text-xs">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="group mt-12 inline-flex min-h-11 animate-[heroFadeUp_900ms_ease-out_700ms_both] flex-col items-center gap-2 font-serif text-xs uppercase tracking-[0.28em] text-white/80 transition-all duration-300 hover:text-[#C89B3C] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
          aria-label="Scroll to about section"
        >
          <span className="relative">
            Scroll
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C89B3C] transition-all duration-300 group-hover:w-full" />
          </span>
          <ChevronDown
            className="animate-bounce text-white/80 transition-all duration-300 group-hover:text-[#C89B3C] group-hover:scale-110"
            size={24}
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}