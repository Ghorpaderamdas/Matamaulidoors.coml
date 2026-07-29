import { LandingPage } from "@/components/home/LandingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { faqs } from "@/data/faqs";
import { createFaqJsonLd, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Premium Wooden, PVC & Designer Doors in Nashik",
  "Shop handcrafted wooden, PVC, designer, laminate, flush, interior, entrance, and custom doors from Mata Mauli Industries in Igatpuri, Nashik.",
  "/",
);

const faqJsonLd = createFaqJsonLd(faqs);

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <JsonLd data={faqJsonLd} />
      <LandingPage />
    </>
  );
}