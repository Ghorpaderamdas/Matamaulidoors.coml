import type { MetadataRoute } from "next";
import { doorCategories, doorProducts } from "@/data/catalogue";
import { siteUrl } from "@/lib/metadata";

const lastModified = new Date();
const staticRoutes = [
  { route: "/", priority: 1 },
  { route: "/collection", priority: 0.9 },
  { route: "/contact", priority: 0.85 },
  { route: "/about", priority: 0.75 },
  { route: "/why", priority: 0.75 },
  { route: "/gallery", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ route, priority }) => ({
      url: new URL(route, siteUrl).toString(),
      lastModified,
      changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
      priority,
    })),
    ...doorCategories.map((category) => ({
      url: new URL(`/doors/${category.slug}`, siteUrl).toString(),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...doorProducts.map((product) => ({
      url: new URL(`/doors/${product.category}/${product.slug}`, siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: product.popular ? 0.8 : 0.72,
    })),
  ];
}