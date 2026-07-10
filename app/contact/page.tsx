"use client";

import { useState } from 'react';
import { Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/common/Container';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', doorType: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F4EBDC] text-[#1B1B1B]">
      <Navbar />
      <section className="section-pad">
        <Container>
          <div className="mb-14 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#C89B3C]">Visit / Call / Write</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Let&apos;s craft your door.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#1B1B1B]/70">
              Speak directly with our founder. Every enquiry receives a personal response within 24 hours.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[2rem] border border-[#E2D6BF] bg-white p-8 shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#C89B3C]">Founder</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#1B1B1B]">Shri Ramesh Dhadawad</h2>
                <div className="mt-8 space-y-5 text-[#1B1B1B]/90">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
                    <Phone size={18} className="text-[#C89B3C]" />
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

              <div className="overflow-hidden rounded-[2rem] border border-[#E2D6BF] bg-white shadow-lg">
                <iframe
                  title="Mata Mauli Location"
                  src="https://www.google.com/maps?q=Taked+BK+Igatpuri+Nashik+Maharashtra&output=embed"
                  className="h-96 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden rounded-[2rem] border border-[#E2D6BF] bg-white p-8 shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C89B3C]">Get Free Quote</p>
              <h2 className="text-4xl font-semibold text-[#1B1B1B]">Tell us about your project</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-[#55555a]">
                  <span className="font-semibold uppercase tracking-[0.18em] text-[#8e8e8e]">Your Name *</span>
                  <input
                    className="h-14 w-full rounded-[1rem] border border-[#E2D6BF] bg-[#FBF7F1] px-4 text-sm text-[#1B1B1B] outline-none transition focus:border-[#C89B3C]"
                    placeholder="Ramesh Dhadawad"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label className="space-y-2 text-sm text-[#55555a]">
                  <span className="font-semibold uppercase tracking-[0.18em] text-[#8e8e8e]">Phone *</span>
                  <input
                    className="h-14 w-full rounded-[1rem] border border-[#E2D6BF] bg-[#FBF7F1] px-4 text-sm text-[#1B1B1B] outline-none transition focus:border-[#C89B3C]"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-[#55555a]">
                  <span className="font-semibold uppercase tracking-[0.18em] text-[#8e8e8e]">Email</span>
                  <input
                    className="h-14 w-full rounded-[1rem] border border-[#E2D6BF] bg-[#FBF7F1] px-4 text-sm text-[#1B1B1B] outline-none transition focus:border-[#C89B3C]"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
                <label className="space-y-2 text-sm text-[#55555a]">
                  <span className="font-semibold uppercase tracking-[0.18em] text-[#8e8e8e]">Door Type</span>
                  <select
                    className="h-14 w-full rounded-[1rem] border border-[#E2D6BF] bg-[#FBF7F1] px-4 text-sm text-[#1B1B1B] outline-none transition focus:border-[#C89B3C]"
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

              <label className="space-y-2 text-sm text-[#55555a]">
                <span className="font-semibold uppercase tracking-[0.18em] text-[#8e8e8e]">Your Requirement</span>
                <textarea
                  className="min-h-[160px] w-full rounded-[1.25rem] border border-[#E2D6BF] bg-[#FBF7F1] px-4 py-4 text-sm text-[#1B1B1B] outline-none transition focus:border-[#C89B3C]"
                  placeholder="Sizes, preferred wood, quantity, timeline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-[#C89B3C] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#a77d1d]"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Request Quote'}
              </button>
              <p className="text-center text-xs text-[#7a7a7a]">
                By submitting, you agree to be contacted by our team regarding your enquiry.
              </p>
              {submitted ? <p className="text-sm text-[#1B1B1B]/70">Thank you — our team will contact you shortly.</p> : null}
            </form>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
