"use client";

import { ArrowRight, Mail, MapPin, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ContactSection() {
  const inputClass =
    "h-14 w-full rounded-xl border border-[#E5D8C4] bg-white px-5 text-base text-[#1B1B1B] outline-none transition-all placeholder:text-[#999] focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15";
  const labelClass =
    "mb-2 block text-xs font-medium uppercase tracking-[0.22em] text-[#8F8167]";

  return (
    <section
      id="contact"
      className="section-pad bg-gradient-to-b from-[#FBF8F3] via-[#F7F1E8] to-[#F4EBDC]"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C89B3C]">
            Visit / Call / Write
          </p>

          <h2 className="mt-5 font-serif text-3xl text-[#1A1A1A] md:text-4xl lg:text-5xl">
            Let&apos;s craft your door.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#555] md:mt-6 md:text-lg">
            Speak directly with our founder. Every enquiry receives a personal
            response within 24 hours.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#D9C29A]" />
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[410px_1fr]">
          <div className="space-y-6">
            <div className="rounded-[24px] border border-[#E5D8C4] bg-[#FDFBF8] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:p-8 lg:rounded-[30px]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#C89B3C]">
                Founder
              </p>

              <h3 className="mt-2 font-serif text-3xl text-[#1B1B1B] md:text-4xl">
                Shri Ramesh Dhadawad
              </h3>

              <div className="mt-6 h-px w-16 bg-[#D7C39C]" />

              <div className="mt-8 space-y-7">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF6E7]">
                    <PhoneCall className="h-5 w-5 text-[#C89B3C]" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#988A72]">
                      Phone
                    </p>

                    <a
                      href="tel:+917218554183"
                      className="mt-1 block text-base text-[#1B1B1B] transition hover:text-[#C89B3C] md:text-lg"
                    >
                      +91 72185 54183
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF6E7]">
                    <Mail className="h-5 w-5 text-[#C89B3C]" aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#988A72]">
                      Email
                    </p>

                    <a
                      href="mailto:info@matamaulidoors.com"
                      className="mt-1 block break-words text-base text-[#1B1B1B] transition hover:text-[#C89B3C] md:text-lg"
                    >
                      info@matamaulidoors.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF6E7]">
                    <MapPin className="h-5 w-5 text-[#C89B3C]" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#988A72]">
                      Address
                    </p>

                    <address className="mt-1 not-italic text-base leading-8 text-[#1B1B1B] md:text-lg">
                      Near Maruti Mandir
                      <br />
                      Taked BK, Igatpuri
                      <br />
                      Nashik, Maharashtra
                      <br />
                      India - 422403
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-[#E5D8C4] shadow-[0_10px_35px_rgba(0,0,0,0.05)] lg:rounded-[30px]">
              <iframe
                title="Mata Mauli Doors location map"
                src="https://maps.google.com/maps?q=Taked%20BK%20Igatpuri&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[250px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-[24px] border border-[#E5D8C4] bg-[#FDFBF8] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:p-8 lg:rounded-[30px] lg:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C89B3C]">
              Get Free Quote
            </p>

            <h3 className="mt-2 font-serif text-3xl text-[#1B1B1B] md:text-4xl lg:text-5xl">
              Tell us about your project
            </h3>

            <div className="mt-6 h-px w-20 bg-[#D7C39C]" />

            <form action="/contact" className="mt-8 space-y-6 md:mt-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="home-name" className={labelClass}>
                    Your Name *
                  </label>

                  <input
                    id="home-name"
                    name="name"
                    type="text"
                    placeholder="Ramesh Dhadawad"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="home-phone" className={labelClass}>
                    Phone *
                  </label>

                  <input
                    id="home-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="home-email" className={labelClass}>
                    Email
                  </label>

                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="home-door-type" className={labelClass}>
                    Door Type
                  </label>

                  <select id="home-door-type" name="doorType" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select category
                    </option>
                    <option>Main Entrance Door</option>
                    <option>Premium Teak Door</option>
                    <option>Bedroom Door</option>
                    <option>Pooja Room Door</option>
                    <option>Bathroom Door</option>
                    <option>Designer Door</option>
                    <option>Custom Door</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="home-message" className={labelClass}>
                  Your Requirement
                </label>

                <textarea
                  id="home-message"
                  name="message"
                  rows={5}
                  placeholder="Sizes, preferred wood, quantity, timeline..."
                  className="w-full rounded-xl border border-[#E5D8C4] bg-white px-5 py-4 text-base text-[#1B1B1B] outline-none transition-all placeholder:text-[#999] focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#C89B3C] text-base font-semibold text-black shadow-lg shadow-[#C89B3C]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8892B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30"
              >
                Request Quote
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </button>

              <p className="text-center text-sm leading-6 text-[#888]">
                By submitting, you agree to be contacted regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
