export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-soft-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-charcoal flex items-center justify-center text-primary-foreground font-display text-sm">
            F
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#why" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition-opacity"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
