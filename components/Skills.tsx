"use client";

import { motion } from "framer-motion";
import { techSkills } from "@/lib/content";
import { SkillIcon } from "@/components/SkillIcon";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow">Technical Matrix</p>
          <h2 className="section-title">Skills</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Core tools across frontend, backend, data, and delivery—shown the way you work with them.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.35) }}
              className="group flex flex-col items-center justify-center gap-3 border border-border bg-elevated/40 px-4 py-6 transition hover:border-accent/50 hover:bg-accent/5"
            >
              <SkillIcon name={skill.icon} className="h-11 w-11 transition group-hover:scale-110" />
              <p className="text-center text-xs font-medium uppercase tracking-[0.12em] text-muted group-hover:text-text">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
