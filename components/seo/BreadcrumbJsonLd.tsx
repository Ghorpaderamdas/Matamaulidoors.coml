import { createBreadcrumbJsonLd } from "@/lib/metadata";

type BreadcrumbJsonLdProps = {
  items: Array<{ name: string; path: string }>;
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(createBreadcrumbJsonLd(items)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
