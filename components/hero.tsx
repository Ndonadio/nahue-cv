"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import { cv } from "@/lib/cv-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Hero — first viewport: name, title, tagline and primary CTAs.
 * Animations stagger in on mount; layout is mobile-first.
 *
 * NOTE: We render <a> tags styled with `buttonVariants()` instead of
 * <Button asChild> — that pattern requires @radix-ui/react-slot which we
 * skipped to keep the dependency tree minimal.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-24"
    >
      {/* Subtle grid backdrop — adds the "industrial" feel without being noisy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="section-eyebrow">{cv.hero.location}</span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            {cv.hero.name}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-accent font-mono">
            {cv.hero.title}
          </p>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            {cv.hero.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${cv.hero.email}`}
              className={cn(buttonVariants({ variant: "primary" }))}
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={cv.hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator — small visual hint, hidden on small screens */}
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground md:flex"
        >
          Scroll <ArrowDown className="h-3 w-3 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
