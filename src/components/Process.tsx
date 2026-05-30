import { PROCESS } from "@/data/site";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="py-24 lg:py-32 border-t border-soft-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Process</p>
          <h2 id="process-heading" className="font-display text-5xl lg:text-6xl tracking-tight text-balance">
            How I <span className="italic font-light text-muted-foreground">work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-soft-border rounded-3xl overflow-hidden border border-soft-border">
          {PROCESS.map((step, i) => (
            <div key={step.step} className="bg-background p-8 lg:p-10">
              <span className="font-display text-sm text-muted-foreground tabular-nums">0{i + 1}</span>
              <h3 className="font-display text-xl tracking-tight mt-4 mb-3">{step.step}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
