// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight, Star } from "lucide-react";

// import { Container } from "@/components/common/Container";
// import { Button } from "@/components/common/Button";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// export function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#F9F7F3] py-28 lg:py-36"
//     >
//       <Container className="max-w-[1540px]">

//         <div className="grid items-center gap-20 xl:grid-cols-[760px_1fr]">

//           {/* ========================= */}
//           {/* LEFT IMAGE */}
//           {/* ========================= */}

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="relative mx-auto w-full max-w-[760px]"
//           >

//             <div className="relative h-[760px] overflow-visible rounded-[38px]">

//               <Image
//                 src="/images/about-door.jpg"
//                 alt="Luxury Wooden Door"
//                 fill
//                 priority
//                 className="rounded-[38px] object-cover shadow-[0_35px_90px_rgba(0,0,0,.14)]"
//               />

//               {/* ========================= */}
//               {/* TOP FLOATING CARD */}
//               {/* ========================= */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: -40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   delay: .3,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className="
//                 absolute
//                 -left-10
//                 top-8
//                 w-[230px]
//                 rounded-[26px]
//                 border
//                 border-[#E6DAC7]
//                 bg-[#FCFBF8]
//                 p-7
//                 shadow-[0_25px_60px_rgba(0,0,0,.12)]
//                 "
//               >

//                 <div className="flex items-center gap-1 text-[#C89B3C]">

//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       size={16}
//                       fill="currentColor"
//                     />
//                   ))}

//                 </div>

//                 <p
//                   className="
//                   mt-5
//                   text-[16px]
//                   leading-8
//                   text-[#6B6B6B]
//                   "
//                 >
//                   Trusted by
//                   <strong> 1000+</strong>
//                   luxury homes
//                   across India.
//                 </p>

//               </motion.div>

//               {/* ========================= */}
//               {/* BOTTOM FLOATING CARD */}
//               {/* ========================= */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: .5,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className="
//                 absolute
//                 -bottom-10
//                 right-3
//                 w-[245px]
//                 rounded-[30px]
//                 border
//                 border-[#E6DAC7]
//                 bg-[#FCFBF8]
//                 px-8
//                 py-10
//                 shadow-[0_25px_60px_rgba(0,0,0,.12)]
//                 "
//               >

//                 <h3
//                   className="
//                   font-serif
//                   text-[62px]
//                   font-light
//                   leading-none
//                   text-[#C89B3C]
//                   "
//                 >
//                   25+
//                 </h3>

//                 <p
//                   className="
//                   mt-4
//                   text-[12px]
//                   uppercase
//                   tracking-[0.32em]
//                   leading-7
//                   text-[#7A7A7A]
//                   "
//                 >
//                   Years of
//                   <br />
//                   Craftsmanship
//                 </p>

//               </motion.div>

//             </div>

//           </motion.div>

//           {/* ========================= */}
//           {/* RIGHT CONTENT */}
//           {/* ========================= */}

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="max-w-[690px]"
//           >

//             <p
//               className="
//               text-[11px]
//               uppercase
//               tracking-[0.48em]
//               text-[#C89B3C]
//               "
//             >
//               OUR LEGACY
//             </p>

//             <h2
//               className="
//               mt-7
//               font-serif
//               text-[72px]
//               font-normal
//               leading-[0.95]
//               tracking-[-0.03em]
//               text-[#1B1B1B]
//               xl:text-[78px]
//               "
//             >
//               Handcrafted in Nashik.

//               <span
//                 className="
//                 mt-2
//                 block
//                 italic
//                 font-normal
//                 text-[#C89B3C]
//                 "
//               >
//                 Loved across India.
//               </span>

//             </h2>

//             <div className="mt-10 h-px w-40 bg-[#D7BE8E]" />
//                       <p
//               className="
//               mt-12
//               text-[18px]
//               leading-[2.05]
//               text-[#5F5F5F]
//               "
//             >
//               Founded by{" "}
//               <strong className="font-semibold text-[#1B1B1B]">
//                 Shri Ramesh Dhadawad
//               </strong>
//               , Mata Mauli Industries is a family-run atelier of master
//               craftsmen based near Maruti Mandir, Taked BK, Igatpuri. For over
//               two decades we have quietly built a reputation for one thing —
//               <span className="italic">
//                 {" "}
//                 making the finest doors in Maharashtra.
//               </span>
//             </p>

//             <p
//               className="
//               mt-9
//               text-[18px]
//               leading-[2.05]
//               text-[#5F5F5F]
//               "
//             >
//               Every Mata Mauli door is a study in restraint. Seasoned timber.
//               Precision joinery. Hand-rubbed finishes. Hardware chosen like
//               jewelry. We build doors that welcome you home for generations —
//               never dating, never disappointing.
//             </p>

//             {/* ========================= */}
//             {/* STATS */}
//             {/* ========================= */}

//             <div className="mt-20 flex flex-wrap gap-x-24 gap-y-12">

//               <div>

//                 <h3
//                   className="
//                   font-serif
//                   text-[58px]
//                   font-light
//                   leading-none
//                   text-[#1B1B1B]
//                   "
//                 >
//                   1000+
//                 </h3>

//                 <p
//                   className="
//                   mt-3
//                   text-[12px]
//                   uppercase
//                   tracking-[0.34em]
//                   text-[#777]
//                   "
//                 >
//                   Doors Delivered
//                 </p>

//               </div>

//               <div>

//                 <h3
//                   className="
//                   font-serif
//                   text-[58px]
//                   font-light
//                   leading-none
//                   text-[#1B1B1B]
//                   "
//                 >
//                   100%
//                 </h3>

//                 <p
//                   className="
//                   mt-3
//                   text-[12px]
//                   uppercase
//                   tracking-[0.34em]
//                   text-[#777]
//                   "
//                 >
//                   Handcrafted
//                 </p>

//               </div>

//               <div>

//                 <h3
//                   className="
//                   font-serif
//                   text-[58px]
//                   font-light
//                   leading-none
//                   text-[#1B1B1B]
//                   "
//                 >
//                   8
//                 </h3>

//                 <p
//                   className="
//                   mt-3
//                   text-[12px]
//                   uppercase
//                   tracking-[0.34em]
//                   text-[#777]
//                   "
//                 >
//                   Door Categories
//                 </p>

//               </div>

//             </div>

//             {/* ========================= */}
//             {/* BUTTON */}
//             {/* ========================= */}

//             <div className="mt-20">

//               <Button
//                 href="/#collection"
//                 className="
//                 inline-flex
//                 h-[64px]
//                 items-center
//                 rounded-full
//                 bg-[#C89B3C]
//                 px-10
//                 text-[17px]
//                 font-semibold
//                 text-white
//                 shadow-[0_15px_40px_rgba(200,155,60,.25)]
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:bg-[#B8892D]
//                 "
//               >
//                 View Collection

//                 <ArrowRight
//                   size={18}
//                   className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Button>

//             </div>

//           </motion.div>

//         </div>

//       </Container>

//       {/* ========================= */}
//       {/* Background Decoration */}
//       {/* ========================= */}

//       <div
//         className="
//         pointer-events-none
//         absolute
//         -left-52
//         top-24
//         h-[420px]
//         w-[420px]
//         rounded-full
//         bg-[#C89B3C]/5
//         blur-3xl
//         "
//       />

//       <div
//         className="
//         pointer-events-none
//         absolute
//         -right-44
//         bottom-10
//         h-[500px]
//         w-[500px]
//         rounded-full
//         bg-[#C89B3C]/5
//         blur-3xl
//         "
//       />

//     </section>
//   );
// }  




"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

/* -------------------------------------------------------------------------- */
/*                                   Motion                                   */
/* -------------------------------------------------------------------------- */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const fadeBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */

const stats = [
  {
    value: "1000+",
    label: "Doors Delivered",
  },
  {
    value: "100%",
    label: "Handcrafted",
  },
  {
    value: "25+",
    label: "Years Experience",
  },
  {
    value: "8",
    label: "Door Categories",
  },
];

const stars = Array.from({ length: 5 });

/* -------------------------------------------------------------------------- */
/*                              About Component                               */
/* -------------------------------------------------------------------------- */

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F9F7F3] py-24 md:py-32 xl:py-40"
    >
      {/* Background Blur */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-3xl" />

      <Container className="relative z-10 max-w-[1540px]">

        <div className="grid items-center gap-20 xl:grid-cols-[720px_1fr]">

          {/* ---------------------------------------------------------------- */}
          {/* LEFT IMAGE */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-[720px]"
          >
            <div className="relative aspect-[0.88] overflow-visible rounded-[36px]">

              <Image
                src="/images/about-door.jpg"
                alt="Premium handcrafted wooden door by Mata Mauli Industries"
                fill
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 60vw, 720px"
                className="
                  rounded-[36px]
                  object-cover
                  shadow-[0_35px_90px_rgba(0,0,0,.15)]
                "
              />

              {/* ============================================================ */}
              {/* Floating Rating Card */}
              {/* ============================================================ */}

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="
                  absolute
                  -left-6
                  top- 8
                  w-[230px]
                  rounded-[24px]
                  border
                  border-[#E7DBC7]
                  bg-white/80
                  backdrop-blur-xl
                  p-6
                  shadow-[0_25px_70px_rgba(0,0,0,.12)]
                "
              >
                <div className="flex gap-1 text-[#C89B3C]">

                  {stars.map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <p className="mt-4 text-[13px] leading-6 text-[#666]">
                  Trusted by <strong className="text-[#222]">1000+</strong>
                  <br />
                  luxury homes across India.
                </p>
              </motion.div>
              {/* ============================================================ */}
              {/* Floating Experience Card */}
              {/* ============================================================ */}

              <motion.div
                variants={fadeBottom}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="
                  absolute
                  -bottom-8
                  right-4
                  w-[250px]
                  rounded-[30px]
                  border
                  border-[#E7DBC7]
                  bg-white/85
                  backdrop-blur-xl
                  px-8
                  py-9
                  shadow-[0_25px_70px_rgba(0,0,0,.14)]
                "
              >
                <h3
                  className="
                    font-serif
                    text-[52px]
                    font-light
                    leading-none
                    text-[#C89B3C]
                  "
                >
                  25+
                </h3>

                <p
                  className="
                    mt-4
                    text-[11px]
                    uppercase
                    tracking-[0.32em]
                    leading-6
                    text-[#777]
                  "
                >
                  Years of
                  <br />
                  Craftsmanship
                </p>
              </motion.div>

              {/* ============================================================ */}
              {/* Premium Gradient Overlay */}
              {/* ============================================================ */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[36px]
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                "
              />

            </div>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* RIGHT CONTENT */}
          {/* ---------------------------------------------------------------- */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-[690px]"
          >

            {/* Small Label */}

            <span
              className="
                inline-block
                text-[11px]
                font-medium
                uppercase
                tracking-[0.45em]
                text-[#C89B3C]
              "
            >
              OUR LEGACY
            </span>

            {/* Heading */}

            <h2
              className="
                mt-6
                font-serif
                text-[42px]
                leading-[1]
                tracking-[-0.03em]
                text-[#1B1B1B]
                md:text-[58px]
                xl:text-[76px]
              "
            >
              Handcrafted in Nashik.

              <span
                className="
                  mt-3
                  block
                  italic
                  text-[#C89B3C]
                "
              >
                Loved across India.
              </span>
            </h2>

            {/* Divider */}

            <div className="mt-10 h-px w-36 bg-[#D7BE8E]" />

            {/* Description */}

            <p
              className="
                mt-10
                text-[17px]
                leading-[2]
                text-[#5F5F5F]
                lg:text-[18px]
              "
            >
              Founded by{" "}
              <strong className="font-semibold text-[#1B1B1B]">
                Shri Ramesh Dhadawad
              </strong>
              , Mata Mauli Industries is a family-run atelier of master
              craftsmen based near Maruti Mandir, Taked BK, Igatpuri. For over
              two decades we have quietly built a reputation for one thing —
              <span className="italic">
                {" "}
                making the finest doors in Maharashtra.
              </span>
            </p>

            <p
              className="
                mt-8
                text-[17px]
                leading-[2]
                text-[#5F5F5F]
                lg:text-[18px]
              "
            >
              Every Mata Mauli door is a study in restraint. Seasoned timber.
              Precision joinery. Hand-rubbed finishes. Hardware chosen like
              jewelry. We build doors that welcome you home for generations —
              never dating, never disappointing.
            </p>
            {/* ============================================================ */}
            {/* Statistics */}
            {/* ============================================================ */}

            <div
              className="
                mt-16
                grid
                grid-cols-2
                gap-10
                md:grid-cols-4
                md:gap-8
              "
            >
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-[#E8DED0]
                    bg-white/70
                    p-6
                    backdrop-blur-sm
                    shadow-sm
                    transition-shadow
                    duration-300
                    hover:shadow-xl
                  "
                >
                  <h3
                    className="
                      font-serif
                      text-5xl
                      font-light
                      leading-none
                      text-[#1B1B1B]
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[11px]
                      uppercase
                      tracking-[0.30em]
                      text-[#777]
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ============================================================ */}
            {/* CTA */}
            {/* ============================================================ */}

            <div className="mt-16">

              <Button
                href="/#collection"
                className="
                  group
                  inline-flex
                  h-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C89B3C]
                  px-10
                  text-base
                  font-semibold
                  text-[#1B1B1B]
                  shadow-[0_18px_45px_rgba(200,155,60,.28)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#B8892D]
                  hover:text-white
                  hover:shadow-[0_24px_55px_rgba(200,155,60,.38)]
                "
              >
                View Collection

                <ArrowRight
                  size={18}
                  className="
                    ml-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </Button>

            </div>

          </motion.div>

        </div>

      </Container>

      {/* ============================================================ */}
      {/* Decorative Background Shapes */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-56
          top-24
          h-[430px]
          w-[430px]
          rounded-full
          bg-[#C89B3C]/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#C89B3C]/5
          blur-3xl
        "
      />

    </section>
  );
}
