import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getProjectBySlug } from "@/data/projects";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  component: WorkDetail,
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) return {};
    const title = `${project.title} — Case Study · ${SITE.name}`;
    const description = project.overview;
    const url = `${SITE.siteUrl}/work/${project.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: `${SITE.siteUrl}${project.img}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
});

function WorkDetail() {
  const { project } = Route.useLoaderData();
  return <CaseStudyPage project={project} />;
}
