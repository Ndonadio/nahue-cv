"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, BarChart3 } from "lucide-react";
import { cv, type ExpertiseArea } from "@/lib/cv-data";
import { SectionHeading } from "@/components/section-heading";

// Map the icon key declared in cv-data to a Lucide component.
const ICON_MAP = {
  ai: Bot,
  shield: ShieldCheck,
  chart: BarChart3,
} as const satisfies Record<ExpertiseArea["icon"], unknown>;

/**
 * Areas of Expertise — three pillar cards.
 * Each pillar lists the concrete capabilities backing the title.
 */
export function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Areas of Expertise"
          title="Where I create the most value."
          description="Three intersecting pillars — AI is what's pulling the next wave of impact."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {cv.expertise.map((area, i) => {
            const Icon = ICON_MAP[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group relative rounded-lg border border-border bg-surface/40 p-6 md:p-7 transition-colors hover:border-accent/60"
              >
                {/* Top-right corner accent — barely visible, hints at the brand */}
                <span
                  aria-hidden
                  className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors"
                />

                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background/60">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {area.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent/70"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
