"use client";

import { useEffect, useId, useState } from "react";
import { navLinks, site } from "@/lib/content";

/** Desktop horizontal nav from lg (1024px); phones + tablets use the drawer. */
const DESKTOP_MQ = "(min-width: 1024px)";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open
          ? "border-b border-border bg-canvas/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:py-4 md:px-10 lg:px-16"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="shrink-0 font-display text-base font-semibold tracking-wide sm:text-lg"
          onClick={() => setOpen(false)}
        >
          {site.shortName.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.18em] text-muted transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${site.email}`}
          className="hidden max-w-[14rem] truncate text-xs uppercase tracking-[0.14em] text-muted transition hover:text-text xl:block"
          title={site.email}
        >
          {site.email}
        </a>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 origin-center bg-text transition duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-text transition duration-200 ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 origin-center bg-text transition duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id={menuId}
        className={`border-t border-border bg-canvas lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex max-h-[min(70vh,28rem)] flex-col gap-1 overflow-y-auto px-5 py-4 sm:px-6 md:px-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-sm uppercase tracking-[0.18em] text-muted transition hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="border-t border-border px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 md:px-10">
          <a
            href={`mailto:${site.email}`}
            className="block break-all text-xs uppercase tracking-[0.14em] text-accent"
            onClick={() => setOpen(false)}
          >
            {site.email}
          </a>
        </div>
      </div>
    </header>
  );
}
