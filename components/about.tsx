"use client";

import { motion } from "framer-motion";
import { cv } from "@/lib/cv-data";
import { SectionHeading } from "@/components/section-heading";

/**
 * About — professional profile in prose + 4 quick-glance metric cards.
 * The metrics give recruiters a fast read on seniority and scope.
 */
export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title={cv.about.headline} />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Prose — 3 paragraphs, max 65ch for readability */}
          <div className="lg:col-span-3 space-y-5 text-foreground/85 leading-relaxed max-w-2xl">
            {cv.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Metric cards — 2×2 grid on mobile, single column on lg */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {cv.about.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-lg border border-border bg-surface/50 p-5 backdrop-blur-sm hover:border-accent/40 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-semibold text-accent font-mono">
                  {m.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
