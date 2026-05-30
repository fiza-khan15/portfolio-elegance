import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/sitemap.xml")({
  component: SitemapXml,
});

function SitemapXml() {
  const baseUrl = SITE.siteUrl;
  const today = new Date().toISOString().split("T")[0];

  const pages = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    ...projects.map((p) => ({
      path: `/work/${p.slug}`,
      priority: "0.8",
      changefreq: "monthly" as const,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return (
    <pre
      style={{
        margin: 0,
        padding: 20,
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
      }}
    >
      {sitemap}
    </pre>
  );
}
