"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { ResumeDownload } from "@/components/ResumeDownload";

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <section id="contact" className="section-pad border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s Build</h2>
          <p className="mt-4 max-w-md text-muted">
            Hiring, freelance, or a systems conversation—reach out. Based in {site.location},
            open for remote and on-site roles.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a href={`mailto:${site.email}`} className="block text-accent hover:underline">
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted transition hover:text-accent"
            >
              GitHub
            </a>
            <div className="pt-1">
              <ResumeDownload label="Download Resume" />
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          onSubmit={onSubmit}
          className="space-y-4 border border-border bg-elevated/30 p-6 md:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full border border-border bg-canvas px-4 py-3 text-sm text-text outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-border bg-canvas px-4 py-3 text-sm text-text outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-y border border-border bg-canvas px-4 py-3 text-sm text-text outline-none focus:border-accent"
            />
          </div>
          <button type="submit" className="solid-btn w-full sm:w-auto">
            Send Message
          </button>
          {status && <p className="text-xs text-muted">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
