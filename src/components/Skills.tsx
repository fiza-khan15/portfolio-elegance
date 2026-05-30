import { SKILLS } from "@/data/site";

const groups = [
  { title: "Design", items: SKILLS.design },
  { title: "Tools", items: SKILLS.tools },
  { title: "Development", items: SKILLS.development },
] as const;

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 lg:py-32 border-t border-soft-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Skills</p>
          <h2 id="skills-heading" className="font-display text-5xl lg:text-6xl tracking-tight text-balance">
            What I bring to <span className="italic font-light text-muted-foreground">product teams.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-soft-border rounded-3xl overflow-hidden border border-soft-border">
          {groups.map((group) => (
            <div key={group.title} className="bg-background p-8 lg:p-10">
              <h3 className="font-display text-2xl tracking-tight mb-6">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
