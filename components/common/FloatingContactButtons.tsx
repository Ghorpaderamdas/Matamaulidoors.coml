"use client";

import Link from "next/link";

export function FloatingContactButtons() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-5 z-40">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,.35)] hover:shadow-[0_15px_40px_rgba(37,211,102,.45)] transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </Link>

      {/* Phone Button */}
      <Link
        href="tel:+919999999999"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A574] text-[#2B2B2B] shadow-[0_10px_30px_rgba(212,165,116,.35)] hover:shadow-[0_15px_40px_rgba(212,165,116,.45)] transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </Link>
    </div>
  );
}
