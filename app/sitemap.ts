import type { MetadataRoute } from "next";
import { doorCategories, doorProducts } from "@/data/catalogue";
import { siteUrl } from "@/lib/metadata";

const staticRoutes = ["/", "/about", "/collection", "/gallery", "/why", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...doorCategories.map((category) => `/doors/${category.slug}`),
    ...doorProducts.map((product) => `/doors/${product.category}/${product.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/doors/") ? 0.8 : 0.7,
  }));
}
