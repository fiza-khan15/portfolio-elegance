import { SITE } from "@/data/site";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-soft-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" aria-label={`${SITE.name} — Home`} className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-charcoal flex items-center justify-center text-primary-foreground font-display text-sm" aria-hidden="true">
            F
          </div>
          <span className="hidden sm:inline text-sm text-muted-foreground group-hover:text-foreground transition-colors">{SITE.name}</span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={SITE.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-soft-border bg-background text-foreground px-4 py-2 text-sm hover:bg-surface transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition-opacity"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
