import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Works() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Selected Work · 2024—2026</p>
            <h2 id="work-heading" className="font-display text-5xl lg:text-6xl tracking-tight max-w-2xl text-balance">
              Product work focused on <span className="italic font-light text-muted-foreground">real problems.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group relative block rounded-3xl bg-surface border border-soft-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
            >
              <article className="aspect-[4/3] overflow-hidden bg-surface-deep">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.category}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </article>

              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 py-3 text-sm font-medium shadow-card-hover">
                  Read Case Study <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="p-6 lg:p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums shrink-0">{p.year}</span>
                </div>

                <dl className="grid gap-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Overview</dt>
                    <dd className="text-foreground/90 leading-relaxed">{p.cardSummary.overview}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Problem</dt>
                    <dd className="text-muted-foreground leading-relaxed">{p.cardSummary.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground/70 text-xs uppercase tracking-wider mb-1">Outcome</dt>
                    <dd className="text-muted-foreground leading-relaxed">{p.cardSummary.outcome}</dd>
                  </div>
                </dl>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
