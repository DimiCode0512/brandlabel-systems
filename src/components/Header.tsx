"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

const MotionLink = motion.create(Link);

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-study", label: "Case Study" },
  { href: "/contact", label: "Contact" },
];

function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { language, languages, setLanguage, translate } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-sm border border-[#0B1F3A]/10 bg-white/75 p-1 shadow-sm ${
        compact ? "justify-center" : ""
      }`}
      aria-label={translate("Language")}
    >
      {languages.map((item) => {
        const active = item.code === language;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            aria-pressed={active}
            className={`min-h-8 min-w-9 rounded-sm px-2 text-xs font-semibold transition ${
              active
                ? "bg-[#0B1F3A] text-[#C8A96A]"
                : "text-[#0B1F3A]/65 hover:bg-[#0B1F3A]/5 hover:text-[#0B1F3A]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close on Escape. (No body scroll lock — on Mobile Safari that combo
  // with a sticky header causes a reflow that drops the next tap.)
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[80] border-b border-[#0B1F3A]/10 bg-[#fffdf8] md:bg-[#fffdf8]/95 md:backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="BrandLabel Systems home"
        >
          <span className="grid size-11 place-items-center rounded-sm bg-[#0B1F3A] text-sm font-semibold text-[#C8A96A] shadow-[0_14px_32px_rgba(11,31,58,0.22)]">
            BL
          </span>
          <span className="hidden text-sm font-semibold text-[#0B1F3A] sm:block">
            BrandLabel Systems
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-[#0B1F3A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="pointer-events-auto relative z-[9999] grid size-11 touch-manipulation place-items-center rounded-sm border border-[#0B1F3A]/15 bg-white text-[#0B1F3A] shadow-[0_8px_22px_rgba(11,31,58,0.08)] active:scale-95 active:opacity-80 md:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 18 18" width="16" height="16" aria-hidden>
                <path
                  d="M3 3l12 12M15 3L3 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 18 14" width="18" height="14" aria-hidden>
                <path
                  d="M1 1h16M1 7h16M1 13h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          <ButtonLink
            href="/contact"
            variant="gold"
            className="hidden md:inline-flex"
          >
            Request a Free Audit
          </ButtonLink>
        </div>
      </Container>

      {/*
        Mobile menu — plain block child INSIDE the <header>.
        No fixed positioning, no portal, no z-index gymnastics.
        The sticky header simply grows when the menu opens, so the menu
        is always visible directly below the top bar.
      */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
          // min-h-screen is a fallback for browsers without svh support (older Samsung Internet)
          className="pointer-events-auto min-h-screen min-h-[calc(100svh-5rem)] border-t border-[#0B1F3A]/10 bg-[#fffdf8] md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col py-2"
          >
            {navItems.map((item) => (
              <MotionLink
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                whileTap={{ opacity: 0.6, backgroundColor: "#f5f1e6" }}
                transition={{ duration: 0.1 }}
                className="pointer-events-auto flex min-h-[3.25rem] touch-manipulation items-center border-b border-[#0B1F3A]/[0.08] px-6 text-base font-medium text-[#0B1F3A] last:border-b-0"
              >
                {item.label}
              </MotionLink>
            ))}
          </nav>
          <div className="px-6 pb-8 pt-4">
            <LanguageSelector compact />
            <ButtonLink
              href="/contact"
              variant="gold"
              className="mt-5 w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Request a Free Audit
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
