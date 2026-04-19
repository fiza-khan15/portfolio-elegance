import { Layout, Code2, Sparkles, Gauge } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Design",
    desc: "Editorial, conversion-focused interfaces tailored to your brand.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Pixel-precise React & Next.js builds that scale cleanly.",
  },
  {
    icon: Sparkles,
    title: "Performance",
    desc: "SEO-driven optimization and sub-second load times by default.",
  },
  {
    icon: Gauge,
    title: "Brand Systems",
    desc: "Visual identity, typography pairings, and component libraries.",
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 lg:py-32 border-t border-soft-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Services
          </p>
          <h2 id="services-heading" className="font-display text-5xl lg:text-6xl tracking-tight text-balance">
            What I do <span className="italic font-light text-muted-foreground">best.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-soft-border rounded-3xl overflow-hidden border border-soft-border">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-background p-8 lg:p-10 group hover:bg-surface transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-2xl bg-surface border border-soft-border flex items-center justify-center mb-8 group-hover:bg-charcoal group-hover:border-charcoal transition-colors duration-300">
                  <Icon className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-2xl tracking-tight mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
