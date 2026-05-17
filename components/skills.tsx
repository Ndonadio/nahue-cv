"use client";

import { motion } from "framer-motion";
import { cv } from "@/lib/cv-data";
import { SectionHeading } from "@/components/section-heading";

/**
 * Skills — grouped chips by area.
 * Each group is a card with a heading + chip list. Two columns on md+.
 */
export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technical and leadership toolbox."
          description="Grouped by area — the skills I use day-to-day, ordered roughly by depth."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cv.skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="rounded-lg border border-border bg-surface/40 p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-border/60 bg-background/40 px-2.5 py-1 text-xs md:text-sm text-foreground/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
