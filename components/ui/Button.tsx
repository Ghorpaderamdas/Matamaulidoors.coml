import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  ariaLabel?: string;
};

export function Button({ children, href, className = '', ariaLabel }: ButtonProps) {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-full border border-[#C89B3C] px-6 py-3 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C89B3C] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5]';

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={`${base} ${className}`.trim()}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} className={`${base} ${className}`.trim()}>
      {children}
    </button>
  );
}
