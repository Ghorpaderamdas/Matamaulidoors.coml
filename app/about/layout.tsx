import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "About Our Craftsmanship",
  "Learn how Mata Mauli Industries has handcrafted premium doors in Igatpuri, Nashik for more than 25 years.",
  "/about",
);

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      {children}
    </>
  );
}
