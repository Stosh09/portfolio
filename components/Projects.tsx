"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/content";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-pad border-t border-border">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow">Selected Work</p>
          <h2 className="section-title">Portfolio</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onDeepDive={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onDeepDive,
}: {
  project: Project;
  index: number;
  onDeepDive: () => void;
}) {
  const thumbs = project.gallery?.slice(1) ?? [];
  const isMobileGallery = project.galleryLayout === "phone";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="grid gap-8 border-t border-border pt-10 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-5">
        {isMobileGallery ? (
          <div className="grid grid-cols-2 gap-3">
            {project.gallery!.map((src) => (
              <div
                key={src}
                className="relative aspect-[9/16] overflow-hidden bg-elevated"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 45vw, 20vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-muted">
                  Preview
                </div>
              )}
            </div>
            {thumbs.length > 0 && (
              <div className="mt-3 grid grid-cols-2 gap-3">
                {thumbs.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[9/16] max-h-56 overflow-hidden bg-elevated sm:max-h-64"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} mobile screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 45vw, 18vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <div className="lg:col-span-7">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">0{index + 1}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-text md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted">{project.overview}</p>

        {project.disclaimer && (
          <p className="mt-4 border border-border bg-elevated/40 px-4 py-3 text-sm leading-relaxed text-muted">
            <span className="font-medium text-text">Note: </span>
            {project.disclaimer}
          </p>
        )}

        <ul className="mt-6 space-y-4">
          {project.contributions.map((item) => (
            <li key={item.label}>
              <p className="text-sm font-medium text-text">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-border px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" className="solid-btn" onClick={onDeepDive}>
            Technical Deep Dive
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
            >
              Live
            </a>
          )}
          {project.apkUrl && (
            <a href={project.apkUrl} download className="ghost-btn">
              Download APK (dev)
            </a>
          )}
          {project.privateSource ? (
            <a href="#contact" className="ghost-btn">
              Request access
            </a>
          ) : (
            <>
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-btn"
                >
                  Source
                </a>
              )}
              {project.docsUrl && (
                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-btn"
                >
                  Docs / Deploy
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}
