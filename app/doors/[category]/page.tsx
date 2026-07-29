import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { CatalogueBrowser } from "@/components/catalogue/CatalogueBrowser";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { doorCategories, getCategory, getCategoryProducts } from "@/data/catalogue";
import { createCategoryItemListJsonLd, createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return doorCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) return {};

  const products = getCategoryProducts(category.slug);

  return createPageMetadata(
    `${category.name} in Nashik`,
    `${category.description} Browse ${products.length} handcrafted ${category.name.toLowerCase()} from Mata Mauli Doors in Igatpuri, Nashik.`,
    `/doors/${category.slug}`,
    {
      url: category.image,
      width: 1200,
      height: 1600,
      alt: `${category.name} by Mata Mauli Doors`,
    },
  );
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const products = getCategoryProducts(category.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Collection", path: "/collection" },
          { name: category.name, path: `/doors/${category.slug}` },
        ]}
      />
      <JsonLd data={createCategoryItemListJsonLd(category, products)} />
      <Navbar />
      <main className="min-h-screen bg-[#FAF8F5] pt-0">
        <section className="relative overflow-hidden bg-[#111111] pb-14 pt-36 text-white md:pb-20 md:pt-48">
          <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#C89B3C]/15 blur-3xl" />
          <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 font-sans text-xs text-white/55">
              <Link href="/" className="hover:text-[#C89B3C]">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span>Doors</span>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-[#E5C57D]">{category.name}</span>
            </nav>
            <div className="mt-12 max-w-3xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#C89B3C]">{category.label}</p>
              <h1 className="mt-5 font-serif text-5xl leading-[0.9] sm:text-6xl md:text-7xl">{category.name}</h1>
              <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-white/70 md:text-lg">{category.description}</p>
              <div className="mt-8 inline-flex items-center rounded-full border border-[#C89B3C]/40 px-4 py-2 font-sans text-xs text-[#E5C57D]">
                <strong className="mr-1 font-semibold text-white">{products.length}</strong> curated designs
              </div>
            </div>
          </div>
        </section>
        <CatalogueBrowser products={products} categoryName={category.name} />
      </main>
      <Footer />
    </>
  );
}
