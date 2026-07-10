"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
      </Link>

      {/* Phone Button */}
      <Link
        href="tel:+919999999999"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A574] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Call us"
      >
        <Phone size={28} />
      </Link>
    </div>
  );
}
