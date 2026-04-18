import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const projects = [
  { title: "UNFOLD Agency", category: "Full-Stack Development", year: "2025", img: work1 },
  { title: "Cinder & Bean", category: "Boutique E-commerce", year: "2025", img: work2 },
  { title: "Élodie Laurent", category: "Editorial Design", year: "2024", img: work3 },
  { title: "Atrium Workspace", category: "Architecture", year: "2024", img: work4 },
];

export function Works() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Selected Work · 2023—2026
            </p>
            <h2 className="font-display text-5xl lg:text-6xl tracking-tight max-w-2xl text-balance">
              A small gallery of <span className="italic font-light text-muted-foreground">recent</span> projects.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            View archive <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group relative block rounded-3xl bg-surface border border-soft-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-deep">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-center justify-center">
                <span className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 py-3 text-sm font-medium shadow-card-hover">
                  View Project <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="flex items-center justify-between p-6 lg:p-7">
                <div>
                  <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
                </div>
                <span className="text-xs text-muted-foreground tabular-nums">{p.year}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
