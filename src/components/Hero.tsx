import { SiReact, SiNextdotjs, SiSupabase, SiVercel, SiPython, SiTailwindcss } from "react-icons/si";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-surface px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Available for new projects · Q3 2026
        </div>

        <h1 id="hero-heading" className="font-display text-[14vw] sm:text-7xl lg:text-[8.5rem] leading-[0.95] tracking-tight text-balance">
          Fiza Khan
        </h1>

        <p className="mt-10 max-w-xl mx-auto text-base lg:text-lg text-muted-foreground text-balance">
          Independent web developer building high-performance digital products and experiences for brands that value precision.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-card-hover"
          >
            See Recent Work
            <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-background text-foreground px-7 py-4 text-sm font-medium hover:bg-surface transition-colors"
          >
            Start a project
          </a>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          <span>Core stack</span>
          <SiReact className="h-6 w-6 text-foreground/60 hover:text-foreground transition-colors" title="React" />
          <SiNextdotjs className="h-6 w-6 text-foreground/60 hover:text-foreground transition-colors" title="Next.js" />
          <SiSupabase className="h-6 w-6 text-foreground/60 hover:text-foreground transition-colors" title="Supabase" />
          <SiVercel className="h-6 w-6 text-foreground/60 hover:text-foreground transition-colors" title="Vercel" />
          <SiPython className="h-6 w-6 text-foreground/60 hover:text-foreground transition-colors" title="Python" />
          <SiTailwindcss className="h-6 w-6 text-foreground/60 hover:text-foreground transition-colors" title="Tailwind CSS" />
        </div>
      </div>
    </section>
  );
}
