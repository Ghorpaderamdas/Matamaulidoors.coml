"use client";

import { Mail, MapPin, PhoneCall } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';

export function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-[#F4EBDC]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-[#E2D6BF] bg-white p-8 shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C89B3C]">Visit / Call / Write</p>
              <h2 className="mt-4 text-4xl font-semibold text-[#1B1B1B]">Let&apos;s craft your door.</h2>
              <p className="mt-5 text-base leading-relaxed text-[#1B1B1B]/70">
                Speak directly with our founder. Every enquiry receives a personal response within 24 hours.
              </p>
              <div className="mt-8 space-y-5 text-[#1B1B1B]/90">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
                  <PhoneCall size={18} className="text-[#C89B3C]" />
                  <span className="text-base text-[#1B1B1B]">+91 72185 54183</span>
                </div>
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
                  <Mail size={18} className="text-[#C89B3C]" />
                  <a href="mailto:info@matamaulidoors.com" className="text-base text-[#1B1B1B] transition hover:text-[#C89B3C]">info@matamaulidoors.com</a>
                </div>
                <div className="flex items-start gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
                  <MapPin size={18} className="text-[#C89B3C] mt-1" />
                  <address className="not-italic text-base text-[#1B1B1B] leading-relaxed">
                    Near Maruti Mandir,
                    <br /> Taked BK, Igatpuri,
                    <br /> Nashik, Maharashtra,
                    <br /> India — 422403
                  </address>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#C89B3C] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#C89B3C]/20 hover:bg-[#9d772d]">
                Send a Message
              </Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#E2D6BF] bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1B1B1B]">Book a consultation</h3>
            <p className="mt-4 text-base leading-relaxed text-[#1B1B1B]/75">
              Share your project details and we will reach out with a tailored recommendation for your door design and delivery.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
