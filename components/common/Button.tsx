import { ReactNode } from 'react';

export function Button({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const base = 'inline-flex items-center justify-center rounded-full border border-[#C89B3C] px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C89B3C] hover:text-white';
  const content = (
    <span className={`${base} ${className}`.trim()}>{children}</span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
