import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Door Project Gallery",
  "View completed Mata Mauli door projects, showcasing premium craftsmanship, finishes, and designs for homes across India.",
  "/gallery",
);

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
