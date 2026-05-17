"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import { cv } from "@/lib/cv-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Hero — first viewport: name, title, tagline and primary CTAs.
 * Layout: text left + circular profile photo right (desktop),
 *         photo top + text below (mobile).
 *
 * Photo lives at /public/profile.jpg — swap the file to update it.
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
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">

          {/* ── Left column: text content ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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

          {/* ── Right column: profile photo ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex-shrink-0"
          >
            {/*
             * Outer ring: electric-blue glow via box-shadow on a wrapper div.
             * The ring pulses subtly via the CSS animation defined in globals.css.
             */}
            <div
              className="profile-ring"
              style={{
                padding: "3px",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, hsl(var(--accent)), hsl(217 100% 40%))",
                boxShadow: "0 0 32px hsl(217 100% 60% / 0.35), 0 0 64px hsl(217 100% 60% / 0.15)",
              }}
            >
              <div
                className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden bg-[#111]"
              >
                <Image
                  src="/profile.jpg"
                  alt="Nahuel Donadio"
                  width={260}
                  height={260}
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>

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
