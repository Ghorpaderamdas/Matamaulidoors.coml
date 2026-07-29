import { createBreadcrumbJsonLd, serializeJsonLd } from "@/lib/metadata";

type BreadcrumbJsonLdProps = {
  items: Array<{ name: string; path: string }>;
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(createBreadcrumbJsonLd(items)),
      }}
    />
  );
}
