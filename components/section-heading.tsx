"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

/**
 * Shared header used by every content section.
 * Keeps spacing and typography consistent across the site.
 */
export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12 max-w-2xl"
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
