import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import type { CaseStudy } from "@/data/projects";
import { SITE } from "@/data/site";

type CaseStudyPageProps = {
  project: CaseStudy;
};

const sections = [
  { id: "overview", title: "Overview", content: (p: CaseStudy) => p.overview },
  { id: "problem", title: "Problem Statement", content: (p: CaseStudy) => p.problem },
  { id: "research", title: "Research & Insights", content: (p: CaseStudy) => p.research },
  { id: "user-flow", title: "User Flow", content: (p: CaseStudy) => p.userFlow },
  { id: "wireframes", title: "Wireframes", content: (p: CaseStudy) => p.wireframes },
  { id: "final-ui", title: "Final UI", content: (p: CaseStudy) => p.finalUi },
  {
    id: "decisions",
    title: "Design Decisions",
    content: (p: CaseStudy) => p.designDecisions,
    isList: true,
  },
  { id: "outcome", title: "Outcome", content: (p: CaseStudy) => p.outcome },
  { id: "reflection", title: "Reflection", content: (p: CaseStudy) => p.reflection },
] as const;

export function CaseStudyPage({ project }: CaseStudyPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-soft-border/60">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
          <a
            href={SITE.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-background text-foreground px-4 py-2 text-sm hover:bg-surface transition-colors"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="pt-28 pb-24">
        <article className="mx-auto max-w-4xl px-6 lg:px-10">
          <header className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              {project.category} · {project.year}
            </p>
            <h1 className="font-display text-5xl lg:text-6xl tracking-tight text-balance">{project.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{project.overview}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                View live project <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </header>

          <div className="rounded-3xl overflow-hidden border border-soft-border shadow-card mb-20">
            <img
              src={project.img}
              alt={`${project.title} — final interface`}
              width={1200}
              height={900}
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-16">
            {sections.map((section) => {
              const content = section.content(project);
              return (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                  <h2 id={`${section.id}-heading`} className="font-display text-2xl lg:text-3xl tracking-tight mb-4">
                    {section.title}
                  </h2>
                  {"isList" in section && section.isList && Array.isArray(content) ? (
                    <ul className="space-y-3">
                      {content.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start text-muted-foreground leading-relaxed">
                          <span className="font-display text-sm text-muted-foreground/60 tabular-nums mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">{content as string}</p>
                  )}
                </section>
              );
            })}
          </div>

          <div className="mt-24 pt-10 border-t border-soft-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Discuss this project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
