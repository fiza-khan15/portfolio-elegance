import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 pb-8">
      <div className="relative mx-auto max-w-[1400px] rounded-[2.5rem] lg:rounded-[3rem] bg-charcoal text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" />
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative px-8 sm:px-12 lg:px-20 py-24 lg:py-32">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-8">
            Let's build something
          </p>

          <h2 className="font-display text-[12vw] sm:text-7xl lg:text-[10rem] leading-[0.9] tracking-tight max-w-5xl text-balance">
            Got an idea?
            <br />
            <span className="italic font-light text-primary-foreground/70">Let's make it real.</span>
          </h2>

          <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <a
              href="mailto:fizanazimkhan@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-5 text-base font-medium hover:bg-surface transition-colors"
            >
              Email Me
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:fizanazimkhan@gmail.com"
              className="text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              fizanazimkhan@gmail.com
            </a>
          </div>

          <div className="mt-24 lg:mt-32 pt-10 border-t border-primary-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary-foreground/10 flex items-center justify-center font-display">
                F
              </div>
              <span>Fiza Khan — Independent Developer</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/fiza-kh/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/fzk.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Instagram</a>
              <a href="https://github.com/fiza-khan15" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">GitHub</a>
            </div>
            <span className="tabular-nums">© 2026 — All rights reserved</span>
          </div>
        </div>
      </div>
    </section>
  );
}
