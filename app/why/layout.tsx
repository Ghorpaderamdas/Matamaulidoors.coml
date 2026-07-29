import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Why Choose Mata Mauli Doors",
  "Discover the materials, precision, durability, modern design, and bespoke sizing behind Mata Mauli premium doors.",
  "/why",
);

export default function WhyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
