export default function Loading() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-busy="true"
      aria-label="Loading page"
      className="flex min-h-screen items-center justify-center bg-[#F9F7F3] text-[#C89B3C]"
    >
      <span className="sr-only">Loading</span>
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-2 border-[#E8DCC8] border-t-[#C89B3C]"
      />
    </main>
  );
}


