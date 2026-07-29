import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Door Collection in Nashik",
  "Explore Mata Mauli's designer, wooden, PVC, laminate, flush, interior, main entrance, and custom door collections handcrafted in Igatpuri, Nashik.",
  "/collection",
);

export default function CollectionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Collection", path: "/collection" }]} />
      {children}
    </>
  );
}