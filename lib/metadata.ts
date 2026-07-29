import type { Metadata } from "next";
import type { DoorCategory, DoorProduct } from "@/data/catalogue";

export const siteUrl = "https://matamaulidoors.com";
export const siteName = "Mata Mauli Doors";
export const siteDescription =
  "Premium wooden, PVC, and designer doors handcrafted in Igatpuri, Nashik by Mata Mauli Industries.";

const defaultImage = {
  url: "/logo.png",
  width: 640,
  height: 487,
  alt: "Mata Mauli Doors logo",
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  image = defaultImage,
): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    keywords: [
      "premium doors Nashik",
      "wooden doors Igatpuri",
      "designer doors Maharashtra",
      "PVC doors",
      "custom doors India",
      "Mata Mauli Doors",
    ],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_IN",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName: "Mata Mauli Industries",
    url: siteUrl,
    logo: new URL(defaultImage.url, siteUrl).toString(),
    email: "info@matamaulidoors.com",
    telephone: "+917218554183",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917218554183",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "mr", "hi"],
    },
  };
}

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    parentOrganization: { "@id": `${siteUrl}/#organization` },
    telephone: "+917218554183",
    email: "info@matamaulidoors.com",
    image: new URL(defaultImage.url, siteUrl).toString(),
    logo: new URL(defaultImage.url, siteUrl).toString(),
    priceRange: "$$",
    areaServed: ["Nashik", "Igatpuri", "Maharashtra", "India"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Maruti Mandir, Taked BK",
      addressLocality: "Igatpuri",
      addressRegion: "Maharashtra",
      postalCode: "422403",
      addressCountry: "IN",
    },
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function createCategoryItemListJsonLd(
  category: DoorCategory,
  products: DoorProduct[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} by ${siteName}`,
    description: category.description,
    url: new URL(`/doors/${category.slug}`, siteUrl).toString(),
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: new URL(`/doors/${product.category}/${product.slug}`, siteUrl).toString(),
      name: `${product.title} ${product.modelNumber}`,
    })),
  };
}

export function createProductJsonLd(product: DoorProduct, category: DoorCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.title} ${product.modelNumber}`,
    description: product.description,
    image: product.gallery,
    brand: {
      "@type": "Brand",
      name: siteName,
    },
    manufacturer: { "@id": `${siteUrl}/#organization` },
    category: category.name,
    material: product.material,
    model: product.modelNumber,
    url: new URL(`/doors/${product.category}/${product.slug}`, siteUrl).toString(),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Finish",
        value: product.finish,
      },
      {
        "@type": "PropertyValue",
        name: "Thickness",
        value: product.thickness,
      },
      {
        "@type": "PropertyValue",
        name: "Available sizes",
        value: product.sizes.join(", "),
      },
    ],
  };
}

export function createFaqJsonLd(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
