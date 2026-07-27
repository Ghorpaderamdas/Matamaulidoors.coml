"use client";

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  doorType: string;
  message: string;
};

const initialForm: ContactForm = {
  name: '',
  phone: '',
  email: '',
  doorType: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    'h-14 w-full rounded-2xl border border-[#E2D6BF] bg-[#FBF7F1] px-4 text-base text-[#1B1B1B] outline-none transition focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15';
  const labelClass = 'space-y-2 text-sm text-[#55555a]';
  const labelTextClass = 'block text-xs font-semibold uppercase tracking-[0.22em] text-[#8e8e8e]';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4EBDC] text-[#1B1B1B]">
      <Navbar />
      <section className="pb-16 pt-32 md:pb-24 md:pt-40 xl:pb-32">
        <Container>
          <div className="mb-12 text-center md:mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C89B3C]">
              Visit / Call / Write
            </p>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Let&apos;s craft your door.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#1B1B1B]/70 md:text-lg">
              Speak directly with our founder. Every enquiry receives a personal response within 24 hours.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[24px] border border-[#E2D6BF] bg-white p-6 shadow-lg md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#C89B3C]">
                  Founder
                </p>
                <h2 className="mt-4 font-serif text-3xl font-semibold text-[#1B1B1B] md:text-4xl">
                  Shri Ramesh Dhadawad
                </h2>
                <div className="mt-8 space-y-5 text-[#1B1B1B]/90">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
                    <Phone size={18} className="text-[#C89B3C]" aria-hidden="true" />
                    <span className="text-base normal-case tracking-normal text-[#1B1B1B] md:text-lg">+91 72185 54183</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
                    <Mail size={18} className="text-[#C89B3C]" aria-hidden="true" />
                    <a href="mailto:info@matamaulidoors.com" className="break-all text-base normal-case tracking-normal text-[#1B1B1B] transition hover:text-[#C89B3C] md:text-lg">
                      info@matamaulidoors.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
                    <MapPin size={18} className="mt-1 text-[#C89B3C]" aria-hidden="true" />
                    <address className="not-italic text-base normal-case leading-8 tracking-normal text-[#1B1B1B] md:text-lg">
                      Near Maruti Mandir,
                      <br /> Taked BK, Igatpuri,
                      <br /> Nashik, Maharashtra,
                      <br /> India - 422403
                    </address>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-[#E2D6BF] bg-white shadow-lg">
                <iframe
                  title="Mata Mauli Location"
                  src="https://www.google.com/maps?q=Taked+BK+Igatpuri+Nashik+Maharashtra&output=embed"
                  className="h-80 w-full border-0 md:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden rounded-[24px] border border-[#E2D6BF] bg-white p-6 shadow-lg md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#C89B3C]">
                Get Free Quote
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#1B1B1B] md:text-4xl">
                Tell us about your project
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <label htmlFor="contact-name" className={labelClass}>
                  <span className={labelTextClass}>Your Name *</span>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={inputClass}
                    placeholder="Ramesh Dhadawad"
                    value={form.name}
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label htmlFor="contact-phone" className={labelClass}>
                  <span className={labelTextClass}>Phone *</span>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className={inputClass}
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    required
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label htmlFor="contact-email" className={labelClass}>
                  <span className={labelTextClass}>Email</span>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={inputClass}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
                <label htmlFor="contact-door-type" className={labelClass}>
                  <span className={labelTextClass}>Door Type</span>
                  <select
                    id="contact-door-type"
                    name="doorType"
                    className={inputClass}
                    value={form.doorType}
                    onChange={(e) => setForm({ ...form, doorType: e.target.value })}
                  >
                    <option value="">Select category</option>
                    <option value="Designer Doors">Designer Doors</option>
                    <option value="Wooden Doors">Wooden Doors</option>
                    <option value="PVC Doors">PVC Doors</option>
                    <option value="Laminate Doors">Laminate Doors</option>
                    <option value="Flush Doors">Flush Doors</option>
                    <option value="Interior Doors">Interior Doors</option>
                    <option value="Main Entrance Doors">Main Entrance Doors</option>
                    <option value="Custom Doors">Custom Doors</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>
              </div>

              <label htmlFor="contact-message" className={labelClass}>
                <span className={labelTextClass}>Your Requirement</span>
                <textarea
                  id="contact-message"
                  name="message"
                  className="min-h-[160px] w-full rounded-[20px] border border-[#E2D6BF] bg-[#FBF7F1] px-4 py-4 text-base text-[#1B1B1B] outline-none transition focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
                  placeholder="Sizes, preferred wood, quantity, timeline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>

              <button
                type="submit"
                className="min-h-14 w-full rounded-full bg-[#C89B3C] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#a77d1d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Request Quote'}
              </button>
              <p className="text-center text-sm leading-6 text-[#7a7a7a]">
                By submitting, you agree to be contacted by our team regarding your enquiry.
              </p>
              {submitted ? (
                <p className="rounded-2xl bg-[#F4EBDC] px-4 py-3 text-center text-sm leading-6 text-[#1B1B1B]/70">
                  Thank you - our team will contact you shortly.
                </p>
              ) : null}
            </form>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
