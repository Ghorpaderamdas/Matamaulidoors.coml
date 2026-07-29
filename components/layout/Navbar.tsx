"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Collection", href: "/#collection", sectionId: "collection" },
  { label: "Why Us", href: "/#why", sectionId: "why" },
  { label: "Gallery", href: "/#gallery", sectionId: "gallery" },
  { label: "Reviews", href: "/#reviews", sectionId: "reviews" },
  { label: "FAQ", href: "/#faq", sectionId: "faq" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
] as const;

type NavSectionId = (typeof navItems)[number]["sectionId"];

type NavbarScrollState = {
  isScrolled: boolean;
  isHidden: boolean;
};

function getRouteSection(pathname: string): NavSectionId {
  const routeName = pathname.replace(/^\//, "").split("/")[0];
  const matchingItem = navItems.find((item) => item.sectionId === routeName);

  return matchingItem?.sectionId ?? "home";
}

function useNavbarVisibility(isMenuOpen: boolean): NavbarScrollState {
  const [scrollState, setScrollState] = useState<NavbarScrollState>({
    isScrolled: false,
    isHidden: false,
  });
  const stateRef = useRef(scrollState);

  useEffect(() => {
    stateRef.current = scrollState;
  }, [scrollState]);

  useEffect(() => {
    const lastScrollY = { current: window.scrollY };
    const ticking = { current: false };

    const updateNavbar = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;
      const nextScrolled = currentScrollY >= 20;
      const nextHidden = !isMenuOpen && currentScrollY > 140 && delta > 8;
      const shouldReveal = currentScrollY < 20 || delta < -6 || isMenuOpen;
      const resolvedHidden = shouldReveal ? false : nextHidden || stateRef.current.isHidden;

      if (
        stateRef.current.isScrolled !== nextScrolled ||
        stateRef.current.isHidden !== resolvedHidden
      ) {
        const nextState = {
          isScrolled: nextScrolled,
          isHidden: resolvedHidden,
        };

        stateRef.current = nextState;
        setScrollState(nextState);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(updateNavbar);
      }
    };

    updateNavbar();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return scrollState;
}

function useActiveSection(pathname: string): NavSectionId {
  const [activeSection, setActiveSection] = useState<NavSectionId>(() =>
    getRouteSection(pathname),
  );
  const sectionIds = useMemo(() => navItems.map((item) => item.sectionId), []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setActiveSection(getRouteSection(pathname));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as NavSectionId);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.12, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

export function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled, isHidden } = useNavbarVisibility(mobileMenuOpen);
  const activeSection = useActiveSection(pathname);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const navClassName = [
    "luxury-nav",
    isScrolled ? "luxury-nav--scrolled" : "",
    isHidden ? "luxury-nav--hidden" : "",
    mobileMenuOpen ? "luxury-nav--open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.nav
      ref={navRef}
      className={navClassName}
      aria-label="Primary navigation"
      initial={false}
    >
      <div className="luxury-nav__inner">
        <Link href="/#home" className="luxury-nav__brand" onClick={closeMobileMenu}>
          <span className="luxury-nav__logo">
            <Image
              src="/logo.png"
              alt="Mata Mauli Industries"
              fill
              priority
              sizes="(max-width: 767px) 64px, 82px"
              className="object-contain"
            />
          </span>
          <span className="luxury-nav__brand-copy">
            <span className="luxury-nav__brand-name">MATA MAULI</span>
            <span className="luxury-nav__brand-subtitle">Premium Doors . Timeless Quality</span>
          </span>
        </Link>

        <div className="luxury-nav__links" role="list">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`luxury-nav__link ${isActive ? "luxury-nav__link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/#contact" className="luxury-nav__cta" aria-current={activeSection === "contact" ? "page" : undefined}>
          Get Free Quote
        </Link>

        <button
          type="button"
          className="luxury-nav__menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="luxury-nav__mobile-panel"
            role="menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="luxury-nav__mobile-grid">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`luxury-nav__mobile-link ${isActive ? "luxury-nav__mobile-link--active" : ""}`}
                    onClick={closeMobileMenu}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/#contact"
              className="luxury-nav__mobile-cta"
              onClick={closeMobileMenu}
              role="menuitem"
              aria-current={activeSection === "contact" ? "page" : undefined}
            >
              Get Free Quote
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}

