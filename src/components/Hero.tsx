import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-surface px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to design roles &amp; collaborations
        </div>

        <p className="text-sm text-muted-foreground mb-6">{SITE.name}</p>

        <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl mx-auto">
          Designing digital products that are simple, intuitive, and built for real users.
        </h1>

        <p className="mt-10 max-w-xl mx-auto text-base lg:text-lg text-muted-foreground text-balance">
          UI/UX Designer with a background in development, creating user-centered experiences from concept to implementation.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-card-hover"
          >
            View Work
            <span aria-hidden>→</span>
          </a>
          <a
            href={SITE.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-background text-foreground px-7 py-4 text-sm font-medium hover:bg-surface transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
