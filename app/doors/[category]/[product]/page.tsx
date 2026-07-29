import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/catalogue/ProductGallery";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { doorProducts, getCategory, getCategoryProducts, getProduct } from "@/data/catalogue";
import { createPageMetadata, createProductJsonLd } from "@/lib/metadata";

type Props = { params: Promise<{ category: string; product: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return doorProducts.map((product) => ({
    category: product.category,
    product: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, product } = await params;
  const item = getProduct(category, product);

  if (!item) return {};

  return createPageMetadata(
    `Premium ${item.title} ${item.modelNumber}`,
    item.description,
    `/doors/${category}/${product}`,
    {
      url: item.thumbnail,
      width: 1200,
      height: 1600,
      alt: `${item.title}, model ${item.modelNumber}`,
    },
  );
}

export default async function ProductPage({ params }: Props) {
  const { category: categorySlug, product: productSlug } = await params;
  const product = getProduct(categorySlug, productSlug);
  const category = getCategory(categorySlug);

  if (!product || !category) notFound();

  const related = getCategoryProducts(categorySlug)
    .filter((item) => item.id !== product.id)
    .slice(0, 4);
  const inquiry = encodeURIComponent(
    `Hello Mata Mauli Doors, I would like to inquire about ${product.modelNumber} - ${product.title}.`,
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: category.name, path: `/doors/${category.slug}` },
          { name: product.modelNumber, path: `/doors/${category.slug}/${product.slug}` },
        ]}
      />
      <JsonLd data={createProductJsonLd(product, category)} />
      <Navbar />
      <main className="min-h-screen bg-[linear-gradient(#050505_0_8rem,#ffffff_8rem)] pt-28 text-[#1B1B1B] md:bg-[linear-gradient(#050505_0_9rem,#ffffff_9rem)] md:pt-36">
        <div className="mx-auto max-w-[1500px] px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 py-7 font-sans text-xs text-[#6B7280]">
            <Link href="/" className="hover:text-[#C89B3C]">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href={`/doors/${category.slug}`} className="hover:text-[#C89B3C]">{category.name}</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-[#111827]">{product.modelNumber}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)] lg:gap-16">
            <ProductGallery images={product.gallery} alt={`${product.title}, model ${product.modelNumber}`} />
            <div className="pt-2">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-[#C89B3C]">{category.name}</p>
              <h1 className="mt-4 font-serif text-5xl leading-[.9] text-[#111827] sm:text-6xl">{product.title}</h1>
              <p className="mt-5 font-sans text-sm font-semibold tracking-[0.18em] text-[#6B7280]">MODEL {product.modelNumber}</p>
              <p className="mt-7 font-sans text-base leading-8 text-[#4B5563]">
                {product.description} Made with meticulous attention to grain, edge detailing and a finish designed to look exceptional for years.
              </p>
              <dl className="mt-9 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
                <Spec label="Material" value={product.material} />
                <Spec label="Finish" value={product.finish} />
                <Spec label="Available sizes" value={product.sizes.join(" - ")} />
                <Spec label="Thickness" value={product.thickness} />
              </dl>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href={`/#contact?product=${encodeURIComponent(product.modelNumber)}`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1B1B1B] px-5 font-sans text-sm font-semibold text-white transition hover:bg-[#C89B3C]">
                  Request Quote
                </a>
                <a href={`https://wa.me/917218554183?text=${inquiry}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C89B3C] px-5 font-sans text-sm font-semibold text-[#1B1B1B] transition hover:bg-[#C89B3C] hover:text-white">
                  <MessageCircle size={17} aria-hidden="true" />
                  WhatsApp Inquiry
                </a>
                <a href="tel:+917218554183" className="inline-flex min-h-11 items-center justify-center gap-2 font-sans text-sm font-semibold text-[#786F64] transition hover:text-[#C89B3C]">
                  <Phone size={16} aria-hidden="true" />
                  Call Now
                </a>
                <div className="inline-flex min-h-11 items-center justify-center gap-2 font-sans text-sm text-[#786F64]">
                  <ShieldCheck size={17} className="text-[#C89B3C]" aria-hidden="true" />
                  Crafted to order
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="border-t border-[#E8DCC8] bg-[#F5F1EA] py-16 md:py-24">
          <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#C89B3C]">Continue exploring</p>
                <h2 className="mt-3 font-serif text-4xl text-[#1B1B1B]">Related designs</h2>
              </div>
              <Link href={`/doors/${category.slug}`} className="hidden font-sans text-sm font-semibold text-[#1B1B1B] hover:text-[#C89B3C] sm:block">
                View collection
              </Link>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link key={item.id} href={`/doors/${item.category}/${item.slug}`} className="group overflow-hidden rounded-[20px] bg-white shadow-sm">
                  <div className="relative aspect-[4/4.5] bg-[#EDE7DE]">
                    <Image src={item.thumbnail} alt={`${item.title}, model ${item.modelNumber}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <p className="font-sans text-[10px] font-semibold tracking-[.16em] text-[#C89B3C]">{item.modelNumber}</p>
                    <h3 className="mt-1 font-serif text-xl">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 py-4 font-sans text-sm">
      <dt className="text-[#6B7280]">{label}</dt>
      <dd className="font-medium leading-6 text-[#111827]">{value}</dd>
    </div>
  );
}
