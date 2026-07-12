import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 overflow-x-hidden bg-[#F9F7F3] px-4 text-center text-[#1B1B1B] sm:px-6 lg:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#C89B3C]">404</p>
      <h1 className="font-serif text-4xl leading-tight md:text-5xl">Page not found</h1>
      <p className="max-w-md text-base leading-7 text-[#5F5F5F] md:text-lg md:leading-8">
        The page you&apos;re looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#C89B3C] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#B8892D] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30"
      >
        Return home
      </Link>
    </main>
  );
}
