export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 lg:py-32 border-t border-soft-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">About</p>
            <h2 id="about-heading" className="font-display text-5xl lg:text-6xl tracking-tight text-balance">
              From building
              <br />
              <span className="italic font-light text-muted-foreground">to designing.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base lg:text-lg text-foreground/90 leading-relaxed">
            <p>
              I started in development — writing code, shipping features, fixing what broke. Over time, I kept
              getting pulled toward the questions before the code: Who is this for? What problem does it solve?
              Why does this flow feel confusing?
            </p>
            <p>
              That shift led me into UI/UX and product design. I still write HTML, CSS, and JavaScript, which
              means I design with implementation in mind. I know when a layout is feasible, when a handoff needs
              more detail, and when a simpler pattern is the better call.
            </p>
            <p>
              What I care about most is usability — interfaces that are accessible, clear, and visually considered
              without getting in the way. I like working on products where design decisions connect to real user
              problems, not just aesthetics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
