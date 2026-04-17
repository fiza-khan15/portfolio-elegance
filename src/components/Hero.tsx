export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-surface px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Available for new projects · Q3 2026
        </div>

        <h1 className="font-display text-[14vw] sm:text-7xl lg:text-[8.5rem] leading-[0.95] tracking-tight text-balance">
          Crafting digital
          <br />
          <span className="italic font-light text-muted-foreground">experiences</span> that
          <br />
          actually convert.
        </h1>

        <p className="mt-10 max-w-xl mx-auto text-base lg:text-lg text-muted-foreground text-balance">
          I'm Mason — an independent web developer building thoughtful,
          high-performance websites for ambitious founders and studios.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-card-hover"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-background text-foreground px-7 py-4 text-sm font-medium hover:bg-surface transition-colors"
          >
            See recent work
          </a>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          <span>Featured in</span>
          <span className="font-display text-base normal-case tracking-normal text-foreground/60">Awwwards</span>
          <span className="font-display text-base normal-case tracking-normal text-foreground/60">Sitestir</span>
          <span className="font-display text-base normal-case tracking-normal text-foreground/60">Godly</span>
          <span className="font-display text-base normal-case tracking-normal text-foreground/60">Typewolf</span>
        </div>
      </div>
    </section>
  );
}
