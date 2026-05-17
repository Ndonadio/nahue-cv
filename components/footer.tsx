import { Mail, Linkedin } from "lucide-react";
import { cv } from "@/lib/cv-data";

/**
 * Footer — slim, no nav duplication. Year is computed at build time.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-xs text-muted-foreground font-mono">
          © {year} Nahuel Donadio · Built with Next.js & Tailwind
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href={`mailto:${cv.hero.email}`}
            aria-label="Email"
            className="hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={cv.hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
