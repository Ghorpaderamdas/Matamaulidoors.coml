import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#F9F7F3] px-6 text-center text-[#1B1B1B]">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C89B3C]">404</p>
      <h1 className="font-serif text-5xl">Page not found</h1>
      <p className="max-w-md text-[#5F5F5F]">
        The page you&apos;re looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#C89B3C] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#B8892D]"
      >
        Return home
      </Link>
    </main>
  );
}
