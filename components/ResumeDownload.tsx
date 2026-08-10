"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/lib/content";

type Props = {
  label?: string;
  className?: string;
};

export function ResumeDownload({
  label = "Download Resume",
  className = "ghost-btn",
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        type="button"
        className={className}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 top-[calc(100%+0.5rem)] z-40 min-w-[14rem] border border-border bg-surface p-1 shadow-xl"
        >
          <a
            role="menuitem"
            href={site.resumePath}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-xs uppercase tracking-[0.14em] text-muted transition hover:bg-accent/10 hover:text-accent"
            onClick={() => setOpen(false)}
          >
            Download CV
          </a>
          <a
            role="menuitem"
            href={site.coverLetterPath}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-xs uppercase tracking-[0.14em] text-muted transition hover:bg-accent/10 hover:text-accent"
            onClick={() => setOpen(false)}
          >
            Download Cover Letter
          </a>
        </div>
      )}
    </div>
  );
}
