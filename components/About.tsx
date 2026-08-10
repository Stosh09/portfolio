"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site, summary } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title">About</h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm text-accent transition hover:underline"
          >
            {site.email}
          </a>
          <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">{summary}</p>
          <p className="mt-6 text-sm uppercase tracking-[0.16em] text-text/80">
            {site.location} · {site.availability}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] w-full overflow-hidden bg-elevated"
        >
          <Image
            src={site.portrait}
            alt={`${site.name} portrait`}
            fill
            className="object-cover object-top grayscale contrast-110"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-canvas/50 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
