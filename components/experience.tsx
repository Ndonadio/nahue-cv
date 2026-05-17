"use client";

import { motion } from "framer-motion";
import { cv } from "@/lib/cv-data";
import { SectionHeading } from "@/components/section-heading";

/**
 * Experience — vertical timeline.
 * Mobile-first: the rail sits on the left at all sizes; cards take the rest.
 * The rail is a 1px line with a small node per item, anchored to the heading.
 */
export function Experience() {
  return (
    <section id="experience" className="section bg-surface/30">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="A focused track through Risk and AI at PwC."
          description="Eight years compounding in one place — from financial-services audit into data analytics and now leading GenAI for the practice."
        />

        <ol className="relative ml-2 border-l border-border pl-8 md:pl-10 space-y-12">
          {cv.experience.map((item, i) => (
            <motion.li
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline node — absolute-positioned over the rail */}
              <span
                aria-hidden
                className="absolute -left-[42px] md:-left-[50px] top-1.5 flex h-4 w-4 items-center justify-center"
              >
                <span className="absolute inset-0 rounded-full bg-accent/20" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {item.role}
                </h3>
                <span className="text-xs md:text-sm font-mono text-muted-foreground">
                  {item.period}
                </span>
              </div>

              <p className="mt-1 text-sm text-accent">
                {item.company}
                {item.location ? (
                  <span className="text-muted-foreground"> · {item.location}</span>
                ) : null}
              </p>

              <ul className="mt-4 space-y-2 text-foreground/80 leading-relaxed">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-3 shrink-0 bg-muted-foreground/50"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        <p className="mt-12 text-sm text-muted-foreground ml-2 pl-8 md:pl-10">
          Earlier experience available on{" "}
          <a
            href={cv.hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
}
