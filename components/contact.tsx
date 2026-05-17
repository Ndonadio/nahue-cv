"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { cv } from "@/lib/cv-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Contact — closing CTA section.
 * No form (matches minimalist requirement) — direct mailto + LinkedIn.
 */
export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-lg border border-border bg-surface/50 p-8 md:p-12 text-center"
        >
          <span className="section-eyebrow justify-center">Contact</span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            {cv.contact.headline}
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground leading-relaxed">
            {cv.contact.subline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${cv.contact.email}`}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              <Mail className="h-4 w-4" />
              {cv.contact.email}
            </a>
            <a
              href={cv.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
