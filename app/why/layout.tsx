import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Why Choose Mata Mauli Doors",
  "Discover the materials, precision, durability, modern design, and bespoke sizing behind Mata Mauli premium doors.",
  "/why",
);

export default function WhyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Why Choose Us", path: "/why" }]} />
      {children}
    </>
  );
}
