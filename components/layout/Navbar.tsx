"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Collection", href: "/#collection" },
  { label: "Why Us", href: "/#why" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`luxury-nav ${isScrolled ? "luxury-nav--scrolled" : ""}`}>
      <div className="luxury-nav__inner">
        <Link href="/#home" className="luxury-nav__brand">
          <span className="luxury-nav__logo">
            <Image
              src="/images/logo.png"
              alt="Mata Mauli Industries"
              fill
              priority
              sizes="82px"
              className="object-contain"
            />
          </span>
          <span className="luxury-nav__brand-copy">
            <span className="luxury-nav__brand-name">MATA MAULI</span>
            <span className="luxury-nav__brand-subtitle">Industries</span>
          </span>
        </Link>

        <div className="luxury-nav__links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="luxury-nav__link">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="luxury-nav__cta">
          Get Free Quote
        </Link>

        <button
          type="button"
          className="luxury-nav__menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="luxury-nav__mobile-panel">
          <div className="luxury-nav__mobile-grid">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="luxury-nav__mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#contact"
            className="luxury-nav__mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Free Quote
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
