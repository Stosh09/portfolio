"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { ResumeDownload } from "@/components/ResumeDownload";

export function Hero() {
  return (
    <section
      id="home"
      className="grain relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:pt-32 md:items-center md:pb-0 md:pt-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.72) 45%, rgba(10,10,11,0.55) 100%), url('/DSC_1313.JPG')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/40" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow">{site.role}</p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-[0.04em] text-text min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {site.shortName}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.headline}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
            <ResumeDownload label="Resume" className="ghost-btn w-full min-[400px]:w-auto" />
            <a href="#portfolio" className="ghost-btn w-full text-center min-[400px]:w-auto">
              Portfolio
            </a>
            <a href="#contact" className="solid-btn w-full text-center min-[400px]:w-auto">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-14 flex items-center gap-5"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.18em] text-muted transition hover:text-accent"
          >
            GitHub
          </a>
          <span className="h-px w-8 bg-border" />
          <span className="text-xs uppercase tracking-[0.14em] text-muted">
            {site.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
