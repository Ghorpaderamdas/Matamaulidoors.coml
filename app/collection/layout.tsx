import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Premium Door Collection",
  "Explore Mata Mauli's collection of designer, wooden, PVC, laminate, flush, interior, entrance, and custom doors.",
  "/collection",
);

export default function CollectionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
