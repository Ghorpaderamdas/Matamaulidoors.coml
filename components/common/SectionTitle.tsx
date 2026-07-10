import { motion } from 'framer-motion';

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className={`text-[10px] font-semibold uppercase tracking-[0.35em] ${light ? 'text-[#C89B3C]' : 'text-[#C89B3C]'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-semibold md:text-4xl ${light ? 'text-white' : 'text-[#1B1B1B]'}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-[#1B1B1B]/70'}`}>
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
