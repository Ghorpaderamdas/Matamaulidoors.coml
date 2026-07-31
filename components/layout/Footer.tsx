import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
  { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090909] py-10 pt-16 text-sm text-white/80 md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,165,116,0.12),transparent_40%)]" />
      <Container className="relative">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 flex-shrink-0">
                <Image src="/logo.png" alt="Mata Mauli Industries logo" fill sizes="56px" className="object-contain" />
              </div>
              <div>
                <div className="font-serif text-xl text-white md:text-2xl">MATA MAULI</div>
                <div className="mt-1 text-sm text-[#d4a574]">Premium Doors . Timeless Quality</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65 md:text-base">
              Premium doors. Timeless quality. Handcrafted in Igatpuri, Nashik by master artisans since generations. Every door is a piece of art built to last.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d4a574]/30 bg-white/5 text-[#d4a574] transition hover:border-[#d4a574] hover:bg-[#d4a574]/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4a574]/25"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d4a574]">Products</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                { label: 'Designer Doors', href: '/doors/designer' },
                { label: 'Wooden Doors', href: '/doors/wooden' },
                { label: 'PVC Doors', href: '/doors/pvc' },
                { label: 'Laminate Doors', href: '/doors/laminate' },
                { label: 'Flush Doors', href: '/doors/flush' },
                { label: 'Interior Doors', href: '/doors/interior' },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex min-h-8 items-center transition-colors hover:text-[#d4a574]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d4a574]">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                { label: 'About', href: '/about' },
                { label: 'Why Choose Us', href: '/why' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'FAQ', href: '/#faq' },
                { label: 'Contact', href: '/#contact' },
                { label: 'Get Free Quote', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex min-h-8 items-center transition-colors hover:text-[#d4a574]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#d4a574]/20 pt-6 text-sm text-[#c5c5c5]/90 md:flex md:items-center md:justify-between md:gap-8">
          <div>© {new Date().getFullYear()} Mata Mauli Industries. All rights reserved.</div>
          <div className="mt-4 flex flex-col gap-2 text-left text-white/60 sm:flex-row sm:items-center sm:gap-6 md:mt-0 md:text-right">
            <span>matamaulidoors.com</span>
            <span>+91 72185 54183</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

