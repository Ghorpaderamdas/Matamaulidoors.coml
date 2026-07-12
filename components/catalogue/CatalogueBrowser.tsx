'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Grid2X2, List, Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { DoorProduct } from '@/lib/catalogue';

type Props = { products: DoorProduct[]; categoryName: string };
type SortMode = 'newest' | 'popular' | 'az';

export function CatalogueBrowser({ products, categoryName }: Props) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortMode>('newest');
  const [listView, setListView] = useState(false);
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matched = products.filter((product) =>
      [product.modelNumber, product.title, product.material, product.description, categoryName]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    );
    if (sort === 'popular') return [...matched].sort((a, b) => Number(b.popular) - Number(a.popular));
    if (sort === 'az') return [...matched].sort((a, b) => a.title.localeCompare(b.title));
    return matched;
  }, [categoryName, products, query, sort]);

  return (
    <section className="pb-20 pt-8 md:pb-28">
      <div className="sticky top-3 z-30 mx-auto mb-8 max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 rounded-2xl border border-[#E8DCC8] bg-[#FAF8F5]/95 p-3 shadow-[0_12px_35px_rgba(27,27,27,0.08)] backdrop-blur md:flex-row md:items-center md:p-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]" size={18} aria-hidden="true" />
            <label className="sr-only" htmlFor="catalogue-search">Search by model number, material, or design</label>
            <input id="catalogue-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search model number, material or design" className="h-12 w-full rounded-xl border border-[#E8DCC8] bg-white pl-11 pr-4 font-sans text-sm text-[#1B1B1B] placeholder:text-[#8A8175] focus:border-[#C89B3C] focus:outline-none" />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="ml-1 text-[#C89B3C]" size={17} aria-hidden="true" />
            <label className="sr-only" htmlFor="catalogue-sort">Sort products</label>
            <select id="catalogue-sort" value={sort} onChange={(event) => setSort(event.target.value as SortMode)} className="h-12 min-w-0 flex-1 rounded-xl border border-[#E8DCC8] bg-white px-3 font-sans text-sm text-[#1B1B1B] focus:border-[#C89B3C] focus:outline-none md:w-36 md:flex-none">
              <option value="newest">Newest</option><option value="popular">Popular</option><option value="az">A–Z</option>
            </select>
            <div className="flex h-12 rounded-xl border border-[#E8DCC8] bg-white p-1">
              <button type="button" onClick={() => setListView(false)} aria-label="Grid view" aria-pressed={!listView} className={`grid h-full w-10 place-items-center rounded-lg ${!listView ? 'bg-[#1B1B1B] text-white' : 'text-[#786F64]'}`}><Grid2X2 size={17} /></button>
              <button type="button" onClick={() => setListView(true)} aria-label="List view" aria-pressed={listView} className={`grid h-full w-10 place-items-center rounded-lg ${listView ? 'bg-[#1B1B1B] text-white' : 'text-[#786F64]'}`}><List size={18} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between"><p className="font-sans text-sm text-[#786F64]"><span className="font-semibold text-[#1B1B1B]">{visibleProducts.length}</span> designs available</p></div>
        {visibleProducts.length ? <div className={listView ? 'space-y-5' : 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'}>{visibleProducts.map((product) => <ProductCard key={product.id} product={product} listView={listView} />)}</div> : <div className="rounded-3xl border border-dashed border-[#D7BE8E] px-6 py-20 text-center"><p className="font-serif text-2xl">No designs found</p><p className="mt-2 font-sans text-sm text-[#786F64]">Try a model number, material, or another search term.</p></div>}
      </div>
    </section>
  );
}

function ProductCard({ product, listView }: { product: DoorProduct; listView: boolean }) {
  return <article className={`group overflow-hidden rounded-[22px] border border-[#E8DCC8] bg-white shadow-[0_10px_25px_rgba(27,27,27,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(27,27,27,0.12)] ${listView ? 'sm:flex' : ''}`}>
    <Link href={`/doors/${product.category}/${product.slug}`} className={`relative block overflow-hidden bg-[#F3EFE8] ${listView ? 'h-64 sm:w-[34%] sm:shrink-0' : 'aspect-[4/4.5]'}`}>
      <Image src={product.thumbnail} alt={`${product.title}, model ${product.modelNumber}`} fill sizes={listView ? '(max-width: 640px) 100vw, 34vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw'} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute left-4 top-4 rounded-full bg-[#111111]/90 px-3 py-1.5 font-sans text-[10px] font-semibold tracking-[0.16em] text-[#E5C57D]">{product.modelNumber}</span>
    </Link>
    <div className="flex flex-1 flex-col p-5"><p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">{product.material}</p><h2 className="mt-2 font-serif text-2xl leading-none text-[#1B1B1B]">{product.title}</h2><p className="mt-3 line-clamp-2 font-sans text-sm leading-6 text-[#68615A]">{product.description}</p><div className="mt-5 flex gap-3"><Link href={`/doors/${product.category}/${product.slug}`} className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-[#C89B3C] px-4 font-sans text-xs font-semibold text-[#1B1B1B] transition hover:bg-[#C89B3C] hover:text-white">Quick View</Link><Link href={`/doors/${product.category}/${product.slug}`} className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full bg-[#1B1B1B] px-4 font-sans text-xs font-semibold text-white transition hover:bg-[#C89B3C]">View Details</Link></div></div>
  </article>;
}
