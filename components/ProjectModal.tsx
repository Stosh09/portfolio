"use client";

import { useEffect, useId, useRef } from "react";
import type { Project } from "@/lib/content";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-canvas/80 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-border bg-surface p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Deep Dive</p>
            <h3 id={titleId} className="font-display text-xl font-semibold uppercase tracking-wide text-text md:text-2xl">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="ghost-btn !px-3 !py-2 text-xs"
            aria-label="Close dialog"
          >
            Close
          </button>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-xs uppercase tracking-[0.16em] text-accent">Database ERD</h4>
            <div className="space-y-3">
              {project.deepDive.erd.map((table) => (
                <div key={table.name} className="border border-border bg-elevated/50 p-3">
                  <p className="font-mono text-sm text-text">{table.name}</p>
                  <p className="mt-1 font-mono text-[11px] leading-relaxed text-muted">
                    {table.fields.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
            <ul className="mt-3 space-y-1">
              {project.deepDive.relations.map((rel) => (
                <li key={rel} className="font-mono text-[11px] text-muted">
                  {rel}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs uppercase tracking-[0.16em] text-accent">API Routes</h4>
            <ul className="space-y-3">
              {project.deepDive.apiRoutes.map((route) => (
                <li key={`${route.method}-${route.path}`} className="border border-border p-3">
                  <p className="font-mono text-sm text-text">
                    <span className="text-accent">{route.method}</span> {route.path}
                  </p>
                  <p className="mt-1 text-xs text-muted">{route.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="mb-3 text-xs uppercase tracking-[0.16em] text-accent">
            {project.deepDive.snippet.title}
          </h4>
          <pre className="overflow-x-auto border border-border bg-canvas p-4 font-mono text-xs leading-relaxed text-muted">
            <code>{project.deepDive.snippet.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
