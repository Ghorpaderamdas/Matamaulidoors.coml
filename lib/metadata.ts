import type { Metadata } from "next";
import { doorCategories, type DoorCategory, type DoorProduct } from "@/data/catalogue";

export const siteUrl = "https://matamaulidoors.com";
export const siteName = "Mata Mauli Doors";
export const siteDescription =
  "Premium wooden, PVC, designer, laminate, flush, interior, entrance, and custom doors handcrafted in Igatpuri, Nashik by Mata Mauli Industries.";
export const businessPhone = "+917218554183";
export const businessEmail = "info@matamaulidoors.com";
export const businessAddress = {
  streetAddress: "Near Maruti Mandir, Taked BK",
  addressLocality: "Igatpuri",
  addressRegion: "Maharashtra",
  postalCode: "422403",
  addressCountry: "IN",
};

const defaultImage = {
  url: "/logo.png",
  width: 640,
  height: 487,
  alt: "Mata Mauli Doors logo",
};

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  image = defaultImage,
): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image.url);

  return {
    title,
    description,
    keywords: [
      "premium doors Nashik",
      "wooden doors Igatpuri",
      "designer doors Maharashtra",
      "PVC doors",
      "custom doors India",
      "door manufacturer Nashik",
      "Mata Mauli Doors",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_IN",
      images: [{ ...image, url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
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
      item: absoluteUrl(item.path),
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
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(defaultImage.url),
      width: defaultImage.width,
      height: defaultImage.height,
    },
    image: absoluteUrl(defaultImage.url),
    email: businessEmail,
    telephone: businessPhone,
    founder: {
      "@type": "Person",
      name: "Shri Ramesh Dhadawad",
    },
    address: {
      "@type": "PostalAddress",
      ...businessAddress,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessPhone,
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
    telephone: businessPhone,
    email: businessEmail,
    image: [
      absoluteUrl(defaultImage.url),
      ...doorCategories.slice(0, 4).map((category) => category.image),
    ],
    logo: absoluteUrl(defaultImage.url),
    priceRange: "$$",
    areaServed: ["Nashik", "Igatpuri", "Maharashtra", "India"],
    address: {
      "@type": "PostalAddress",
      ...businessAddress,
    },
    hasMap:
      "https://www.google.com/maps?q=Taked+BK+Igatpuri+Nashik+Maharashtra",
    knowsAbout: doorCategories.map((category) => category.name),
    makesOffer: doorCategories.map((category) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: category.name,
        category: category.material,
        image: category.image,
        url: absoluteUrl(`/doors/${category.slug}`),
      },
      areaServed: ["Nashik", "Igatpuri", "Maharashtra", "India"],
      availability: "https://schema.org/InStock",
    })),
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: "en-IN",
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
    "@id": `${siteUrl}/doors/${category.slug}#itemlist`,
    name: `${category.name} by ${siteName}`,
    description: category.description,
    url: absoluteUrl(`/doors/${category.slug}`),
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/doors/${product.category}/${product.slug}`),
      name: `${product.title} ${product.modelNumber}`,
    })),
  };
}

export function createProductJsonLd(product: DoorProduct, category: DoorCategory) {
  const productUrl = absoluteUrl(`/doors/${product.category}/${product.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: `${product.title} ${product.modelNumber}`,
    description: product.description,
    image: product.gallery,
    sku: product.modelNumber,
    mpn: product.modelNumber,
    brand: {
      "@type": "Brand",
      name: siteName,
    },
    manufacturer: { "@id": `${siteUrl}/#organization` },
    category: category.name,
    material: product.material,
    model: product.modelNumber,
    url: productUrl,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${siteUrl}/#localbusiness` },
      areaServed: ["Nashik", "Igatpuri", "Maharashtra", "India"],
    },
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
  items: ReadonlyArray<{ question: string; answer: string }>,
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