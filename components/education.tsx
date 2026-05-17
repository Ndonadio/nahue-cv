"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Languages } from "lucide-react";
import { cv } from "@/lib/cv-data";
import { SectionHeading } from "@/components/section-heading";

// Map credential type → icon. Order in cv-data matches degree / cert / language.
const ICONS = [GraduationCap, Award, Languages] as const;

/**
 * Education & Certifications — three compact cards in a row on desktop.
 */
export function Education() {
  return (
    <section id="education" className="section bg-surface/30">
      <div className="container">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Economics, agile, and English at advanced level."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {cv.education.map((item, i) => {
            const Icon = ICONS[i] ?? GraduationCap;
            return (
              <motion.div
                key={item.credential}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                className="rounded-lg border border-border bg-surface/40 p-6 hover:border-accent/40 transition-colors"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/60">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {item.credential}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.institution}
                </p>
                {item.detail && (
                  <p className="mt-3 text-xs font-mono text-accent/80">
                    {item.detail}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
