"use client";

import Link from "next/link";
import { MessageSquare, Phone } from "lucide-react";

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
        <MessageSquare size={28} fill="white" stroke="white" strokeWidth={2} />
      </Link>

      {/* Phone Button */}
      <Link
        href="tel:+919999999999"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#C9B08A] text-[#3B3B3B] shadow-[0_10px_30px_rgba(201,176,138,.35)] hover:shadow-[0_15px_40px_rgba(201,176,138,.45)] transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone size={28} strokeWidth={2.5} />
      </Link>
    </div>
  );
}
