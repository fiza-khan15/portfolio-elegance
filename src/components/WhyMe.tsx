const stats = [
  { num: "01", label: "Technical Engineering" },
  { num: "02", label: "Data & SEO Analytics" },
  { num: "03", label: "Direct Partnership" },
  { num: "04", label: "Business-Driven Systems" },
];

const points = [
  "You work directly with the engineer — no account managers, no handoffs.",
  "Fixed scope and fixed timelines — no surprise invoices at the end.",
  "Every site ships with data-driven optimization and a performance audit.",
  "Modern, vendor-free tech stacks that you actually own.",
];

export function WhyMe() {
  return (
    <section id="why" className="py-24 lg:py-32 border-t border-soft-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Why work with me
            </p>
            <h2 className="font-display text-5xl lg:text-6xl tracking-tight text-balance">
              Independent.
              <br />
              <span className="italic font-light text-muted-foreground">Obsessive.</span>
              <br />
              On time.
            </h2>
            <p className="mt-8 text-base text-muted-foreground max-w-md leading-relaxed">
              I keep my client list small on purpose. That means deeper focus,
              tighter feedback loops, and work I'm genuinely proud to put my name on.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-2 gap-px bg-soft-border rounded-3xl overflow-hidden border border-soft-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-8 lg:p-10">
                  <div className="font-display text-5xl lg:text-6xl tracking-tight tabular-nums">
                    {s.num}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-5">
              {points.map((p, i) => (
                <li key={i} className="flex gap-5 items-start">
                  <span className="font-display text-sm text-muted-foreground mt-1 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="text-base lg:text-lg text-foreground/90 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
