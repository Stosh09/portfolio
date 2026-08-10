"use client";

import { motion } from "framer-motion";
import { experience, services, skillTiers } from "@/lib/content";

export function Resume() {
  return (
    <section id="resume" className="section-pad border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="eyebrow">Resume</p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text">
              Core Stack
            </h3>
            <div className="space-y-6">
              {skillTiers.slice(0, 3).map((tier) => (
                <div key={tier.title}>
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-accent">{tier.title}</p>
                  <ul className="space-y-1.5">
                    {tier.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-sm text-muted">
                        <span className="h-px w-4 bg-border" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text">
              Path
            </h3>
            <ol className="relative space-y-10 border-l border-border pl-8">
              {experience.map((item, i) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-canvas" />
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">0{i + 1}</p>
                  <h4 className="mt-2 font-display text-lg font-semibold text-text">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted">{item.meta}</p>
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-relaxed text-muted">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text">
              What I Can Do
            </h3>
            <ul className="space-y-6">
              {services.map((service) => (
                <li key={service.title}>
                  <h4 className="text-sm font-medium text-text">{service.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
