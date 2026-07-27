"use client";

import Link from "next/link";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6 sm:gap-4">
      <Link
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 focus-visible:ring-offset-2 sm:h-16 sm:w-16"
      >
        <svg
          className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12 sm:h-[34px] sm:w-[34px]"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 3a12.8 12.8 0 0 0-11 19.37L3.5 28.5l6.3-1.5A12.8 12.8 0 1 0 16 3Zm0 23.4a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-3.74.89.9-3.64-.26-.42A10.61 10.61 0 1 1 16 26.4Zm5.82-7.94c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.71.16-.21.32-.81 1.05-1 1.26-.18.21-.37.24-.69.08-1.87-.93-3.1-1.66-4.34-3.77-.33-.57.33-.53.95-1.76.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.69s1.15 3.12 1.31 3.34c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.67.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </Link>

      <Link
        href="tel:+919999999999"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A574] text-[#2B2B2B] shadow-[0_10px_30px_rgba(212,165,116,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,165,116,.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4A574]/35 focus-visible:ring-offset-2 sm:h-16 sm:w-16"
        aria-label="Call us"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </Link>
    </div>
  );
}
