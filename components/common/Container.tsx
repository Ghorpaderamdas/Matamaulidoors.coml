import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: Props) {
  return (
    <div className={`mx-auto max-w-[1500px] px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
