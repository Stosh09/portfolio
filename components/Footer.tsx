import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.14em]">
          {site.shortName}
        </p>
        <ul className="flex flex-wrap gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] text-muted transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
