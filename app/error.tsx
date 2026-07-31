'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" tabIndex={-1} className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#F9F7F3] px-4 text-center text-[#1B1B1B]">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#C89B3C]">Something went wrong</p>
      <h1 className="font-serif text-4xl leading-tight md:text-5xl">We couldn&apos;t load this page.</h1>
      <button
        type="button"
        onClick={() => reset()}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#C89B3C] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#B8892D] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30"
      >
        Try again
      </button>
    </main>
  );
}

