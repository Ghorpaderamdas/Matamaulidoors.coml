import Image from 'next/image';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Container } from '@/components/common/Container';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090909] pt-20 pb-10 text-white/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,165,116,0.12),transparent_40%)]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14">
                <Image src="/images/logo.png" alt="Mata Mauli" fill className="object-contain" />
              </div>
              <div>
                <div className="font-serif text-xl text-white">MATA MAULI</div>
                <div className="site-header__brand-tagline">Premium Doors . Timeless Quality</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-white/65">
              Premium doors. Timeless quality. Handcrafted in Igatpuri, Nashik by master artisans since generations. Every door — a piece of art built to last.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: Instagram, href: '#instagram' },
                { icon: Facebook, href: '#facebook' },
                { icon: Youtube, href: '#youtube' },
                { icon: Linkedin, href: '#linkedin' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d4a574]/30 bg-white/5 text-[#d4a574] transition hover:border-[#d4a574] hover:bg-[#d4a574]/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4a574]">Products</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {['Designer Doors', 'Wooden Doors', 'PVC Doors', 'Laminate Doors', 'Flush Doors', 'Interior Doors'].map((item) => (
                <li key={item}>
                  <a href="#products" className="transition-colors hover:text-[#d4a574]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4a574]">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                { label: 'About', href: '#about' },
                { label: 'Why Choose Us', href: '#why' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
                { label: 'Get Free Quote', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-[#d4a574]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#d4a574]/20 pt-6 text-sm text-[#c5c5c5]/90 md:flex md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Mata Mauli Industries. All rights reserved.</div>
          <div className="mt-4 flex flex-col gap-2 text-right text-white/60 md:mt-0 md:flex-row md:items-center md:gap-8">
            <span>matamaulidoors.com</span>
            <span>+91 72185 54183</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
