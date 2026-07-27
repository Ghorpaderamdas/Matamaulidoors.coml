import { motion } from 'framer-motion';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionTitle({ eyebrow, title, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C89B3C]">
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-[#1B1B1B]'}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${light ? 'text-white/70' : 'text-[#1B1B1B]/70'}`}>
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
