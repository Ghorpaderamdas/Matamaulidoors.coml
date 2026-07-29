import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Why Choose Mata Mauli Doors",
  "Discover why homeowners choose Mata Mauli for premium materials, precision manufacturing, durable finishes, custom sizes, and handcrafted doors in Nashik.",
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