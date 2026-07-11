// "use client";

// import { Mail, MapPin, PhoneCall } from 'lucide-react';
// import { Button } from '@/components/common/Button';
// import { Container } from '@/components/common/Container';

// export function ContactSection() {
//   return (
//     <section id="contact" className="section-pad bg-[#F4EBDC]">
//       <Container>
//         <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
//           <div className="space-y-8">
//             <div className="rounded-[2rem] border border-[#E2D6BF] bg-white p-8 shadow-lg">
//               <p className="text-[10px] uppercase tracking-[0.35em] text-[#C89B3C]">Visit / Call / Write</p>
//               <h2 className="mt-4 text-4xl font-semibold text-[#1B1B1B]">Let&apos;s craft your door.</h2>
//               <p className="mt-5 text-base leading-relaxed text-[#1B1B1B]/70">
//                 Speak directly with our founder. Every enquiry receives a personal response within 24 hours.
//               </p>
//               <div className="mt-8 space-y-5 text-[#1B1B1B]/90">
//                 <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
//                   <PhoneCall size={18} className="text-[#C89B3C]" />
//                   <span className="text-base text-[#1B1B1B]">+91 72185 54183</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
//                   <Mail size={18} className="text-[#C89B3C]" />
//                   <a href="mailto:info@matamaulidoors.com" className="text-base text-[#1B1B1B] transition hover:text-[#C89B3C]">info@matamaulidoors.com</a>
//                 </div>
//                 <div className="flex items-start gap-3 text-sm uppercase tracking-[0.18em] text-[#8e8e8e]">
//                   <MapPin size={18} className="text-[#C89B3C] mt-1" />
//                   <address className="not-italic text-base text-[#1B1B1B] leading-relaxed">
//                     Near Maruti Mandir,
//                     <br /> Taked BK, Igatpuri,
//                     <br /> Nashik, Maharashtra,
//                     <br /> India — 422403
//                   </address>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center">
//               <Button href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#C89B3C] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#C89B3C]/20 hover:bg-[#9d772d]">
//                 Send a Message
//               </Button>
//             </div>
//           </div>
//           <div className="rounded-[2rem] border border-[#E2D6BF] bg-white p-8 shadow-lg">
//             <h3 className="text-2xl font-semibold text-[#1B1B1B]">Book a consultation</h3>
//             <p className="mt-4 text-base leading-relaxed text-[#1B1B1B]/75">
//               Share your project details and we will reach out with a tailored recommendation for your door design and delivery.
//             </p>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import { Mail, MapPin, PhoneCall, ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-pad bg-gradient-to-b from-[#FBF8F3] via-[#F7F1E8] to-[#F4EBDC]"
    >
      <Container>
        {/* ================= Header ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#C89B3C]">
            Visit / Call / Write
          </p>

          <h2 className="mt-5 text-5xl font-serif text-[#1A1A1A] md:text-6xl">
            Let&apos;s craft your door.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#555]">
            Speak directly with our founder. Every enquiry receives a personal
            response within 24 hours.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[#D9C29A]" />
        </div>

        {/* ================= Main Grid ================= */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[410px_1fr]">

          {/* ================================================= */}
          {/* LEFT SIDE                                        */}
          {/* ================================================= */}

          <div className="space-y-6">

            {/* Founder Card */}

            <div className="rounded-[30px] border border-[#E5D8C4] bg-[#FDFBF8] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#C89B3C]">
                Founder
              </p>

              <h3 className="mt-2 text-4xl font-serif text-[#1B1B1B]">
                Shri Ramesh Dhadawad
              </h3>

              <div className="mt-6 h-px w-16 bg-[#D7C39C]" />

              <div className="mt-8 space-y-7">

                {/* Phone */}

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF6E7]">
                    <PhoneCall className="h-5 w-5 text-[#C89B3C]" />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#988A72]">
                      Phone
                    </p>

                    <a
                      href="tel:+917218554183"
                      className="mt-1 block text-lg text-[#1B1B1B] transition hover:text-[#C89B3C]"
                    >
                      +91 72185 54183
                    </a>
                  </div>

                </div>

                {/* Email */}

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF6E7]">
                    <Mail className="h-5 w-5 text-[#C89B3C]" />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#988A72]">
                      Email
                    </p>

                    <a
                      href="mailto:info@matamaulidoors.com"
                      className="mt-1 block text-lg text-[#1B1B1B] transition hover:text-[#C89B3C]"
                    >
                      info@matamaulidoors.com
                    </a>
                  </div>

                </div>

                {/* Address */}

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF6E7]">
                    <MapPin className="h-5 w-5 text-[#C89B3C]" />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#988A72]">
                      Address
                    </p>

                    <address className="mt-1 not-italic text-lg leading-8 text-[#1B1B1B]">
                      Near Maruti Mandir
                      <br />
                      Taked BK, Igatpuri
                      <br />
                      Nashik, Maharashtra
                      <br />
                      India — 422403
                    </address>
                  </div>

                </div>

              </div>

            </div>

            {/* Google Map */}

            <div className="overflow-hidden rounded-[30px] border border-[#E5D8C4] shadow-[0_10px_35px_rgba(0,0,0,0.05)]">

              <iframe
                title="Mata Mauli Doors"
                src="https://maps.google.com/maps?q=Taked%20BK%20Igatpuri&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[250px] w-full"
                loading="lazy"
              />

            </div>

          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE                                        */}
          {/* ================================================= */}

          <div className="rounded-[30px] border border-[#E5D8C4] bg-[#FDFBF8] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:p-10">

            <p className="text-[11px] uppercase tracking-[0.35em] text-[#C89B3C]">
              Get Free Quote
            </p>

            <h3 className="mt-2 text-4xl font-serif text-[#1B1B1B] md:text-5xl">
              Tell us about your project
            </h3>

            <div className="mt-6 h-px w-20 bg-[#D7C39C]" />

            {/* FORM STARTS HERE */}

            <form className="mt-10 space-y-6"></form>

            {/* ================= Row 1 ================= */}

<div className="grid gap-5 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#8F8167]">
      Your Name *
    </label>

    <input
      type="text"
      placeholder="Ramesh Dhadawad"
      className="h-14 w-full rounded-xl border border-[#E5D8C4] bg-white px-5 text-[#1B1B1B] placeholder:text-[#999] outline-none transition-all focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
    />
  </div>

  <div>
    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#8F8167]">
      Phone *
    </label>

    <input
      type="tel"
      placeholder="+91 98765 43210"
      className="h-14 w-full rounded-xl border border-[#E5D8C4] bg-white px-5 text-[#1B1B1B] placeholder:text-[#999] outline-none transition-all focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
    />
  </div>

</div>

{/* ================= Row 2 ================= */}

<div className="grid gap-5 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#8F8167]">
      Email
    </label>

    <input
      type="email"
      placeholder="you@example.com"
      className="h-14 w-full rounded-xl border border-[#E5D8C4] bg-white px-5 text-[#1B1B1B] placeholder:text-[#999] outline-none transition-all focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
    />
  </div>

  <div>
    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#8F8167]">
      Door Type
    </label>

    <select
      className="h-14 w-full rounded-xl border border-[#E5D8C4] bg-white px-5 text-[#1B1B1B] outline-none transition-all focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
    >
      <option>Select category</option>
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

{/* ================= Requirement ================= */}

<div>

  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#8F8167]">
    Your Requirement
  </label>

  <textarea
    rows={5}
    placeholder="Sizes, preferred wood, quantity, timeline..."
    className="w-full rounded-xl border border-[#E5D8C4] bg-white px-5 py-4 text-[#1B1B1B] placeholder:text-[#999] outline-none transition-all focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
  />

</div>

{/* ================= Button ================= */}

<Button
  href="/contact"
  className="flex h-14 w-full items-center justify-center rounded-full bg-[#C89B3C] text-base font-semibold text-white shadow-lg shadow-[#C89B3C]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8892B]"
>

  Request Quote

  <ArrowRight
    size={18}
    className="ml-2"
  />

</Button>

<p className="text-center text-xs text-[#888]">
  By submitting, you agree to be contacted regarding your enquiry.
  
</p>


          </div>

        </div>

      </Container>

    </section>
  );
}