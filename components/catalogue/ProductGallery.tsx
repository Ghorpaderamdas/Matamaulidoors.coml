'use client';

import Image from 'next/image';
import { Expand, X, ZoomIn } from 'lucide-react';
import { useEffect, useState } from 'react';

type Props = { images: string[]; alt: string };

export function ProductGallery({ images, alt }: Props) {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const image = images[selected];

  useEffect(() => {
    if (!fullscreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen]);

  return (
    <>
      <div>
        <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[#E8DCC8] bg-[#F7F2EA] shadow-sm">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition duration-500 ${zoomed ? 'scale-150' : 'group-hover:scale-105'}`}
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              type="button"
              onClick={() => setZoomed((value) => !value)}
              aria-label={zoomed ? 'Reset image zoom' : 'Zoom image'}
              aria-pressed={zoomed}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/95 text-[#1B1B1B] shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30"
            >
              <ZoomIn size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setFullscreen(true)}
              aria-label="Open fullscreen image"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/95 text-[#1B1B1B] shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30"
            >
              <Expand size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {images.map((thumbnail, index) => (
            <button
              type="button"
              key={thumbnail}
              onClick={() => {
                setSelected(index);
                setZoomed(false);
              }}
              aria-label={`View image ${index + 1}`}
              aria-pressed={selected === index}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30 ${selected === index ? 'border-[#C89B3C]' : 'border-[#E8DCC8] bg-[#F7F2EA]'}`}
            >
              <Image src={thumbnail} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {fullscreen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen product image"
          className="fixed inset-0 z-[100] grid place-items-center bg-[#111111]/95 p-5"
        >
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[#1B1B1B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C89B3C]/30"
            aria-label="Close fullscreen image"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image src={image} alt={alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
