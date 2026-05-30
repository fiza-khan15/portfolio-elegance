import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

export function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="px-4 sm:px-6 lg:px-8 pb-8">
      <div className="relative mx-auto max-w-[1400px] rounded-[2.5rem] lg:rounded-[3rem] bg-charcoal text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" />
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative px-8 sm:px-12 lg:px-20 py-24 lg:py-32">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-8">Contact</p>

          <h2 id="contact-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl text-balance">
            Interested in working together or discussing opportunities? I'd love to hear from you.
          </h2>

          <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-5 text-base font-medium hover:bg-surface transition-colors"
            >
              Email Me
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={SITE.resumeUrl}
              download
              className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 text-primary-foreground px-8 py-5 text-base font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Download Resume
            </a>
          </div>

          <p className="mt-6 text-base text-primary-foreground/70">
            <a href={`mailto:${SITE.email}`} className="hover:text-primary-foreground transition-colors">
              {SITE.email}
            </a>
          </p>

          <div className="mt-24 lg:mt-32 pt-10 border-t border-primary-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary-foreground/10 flex items-center justify-center font-display">
                F
              </div>
              <span>{SITE.name} — {SITE.role}</span>
            </div>
            <nav aria-label="Social" className="flex items-center gap-6">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.name} on LinkedIn`}
                className="hover:text-primary-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.name} on Instagram`}
                className="hover:text-primary-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.name} on GitHub`}
                className="hover:text-primary-foreground transition-colors"
              >
                GitHub
              </a>
            </nav>
            <span className="tabular-nums">© 2026 — All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
