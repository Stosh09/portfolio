"use client";

import { motion } from "framer-motion";
import { architectureNodes } from "@/lib/content";

export function ArchitectureDiagram() {
  return (
    <section id="architecture" className="section-pad border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow">Systems</p>
          <h2 className="section-title">Architecture</h2>
          <p className="mt-4 max-w-2xl text-muted">
            How the client talks to infrastructure—REST and WebSockets into Node/Supabase,
            with PostgreSQL, RLS, and realtime at the data layer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto sm:overflow-visible"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-0">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {architectureNodes.map((node, i) => (
                <div key={node.id} className="relative flex flex-col items-center">
                  <div className="group w-full border border-border bg-elevated p-3 text-center transition hover:border-accent/60 hover:bg-accent/5 sm:p-4">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-text">
                      {node.title}
                    </p>
                    <p className="mt-2 text-[11px] leading-snug text-muted md:text-xs">
                      {node.detail}
                    </p>
                  </div>
                  {i < architectureNodes.length - 1 && (
                    <div
                      className="pointer-events-none absolute top-1/2 -right-2 z-10 hidden h-px w-4 bg-accent/70 sm:block sm:-right-3 sm:w-6"
                      aria-hidden
                    />
                  )}
                </div>
              ))}
            </div>

            <svg
              className="mt-10 h-28 w-full text-accent/70"
              viewBox="0 0 800 100"
              fill="none"
              aria-hidden
            >
              <path
                d="M80 20 H720 M80 20 L95 12 M80 20 L95 28 M720 20 L705 12 M720 20 L705 28"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M80 80 H720 M80 80 L95 72 M80 80 L95 88 M720 80 L705 72 M720 80 L705 88"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.7"
              />
              <text x="400" y="14" textAnchor="middle" fill="currentColor" fontSize="11">
                request / response (REST)
              </text>
              <text x="400" y="74" textAnchor="middle" fill="currentColor" fontSize="11">
                push sync (WebSockets)
              </text>
            </svg>

            <p className="text-center text-xs uppercase tracking-[0.16em] text-muted">
              React / Tailwind ↔ REST / Sockets ↔ Supabase / Node ↔ PostgreSQL
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
