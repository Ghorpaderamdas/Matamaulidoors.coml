import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Contact Mata Mauli Doors",
  "Request a free quote for handcrafted premium doors from Mata Mauli Industries in Igatpuri, Nashik.",
  "/contact",
);

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      {children}
    </>
  );
}
