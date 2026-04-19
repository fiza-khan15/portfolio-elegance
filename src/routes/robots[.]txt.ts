import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots[.]txt")({
  component: RobotsTxt,
});

function RobotsTxt() {
  const content = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://mehmettahatmert.com/sitemap.xml`;

  return (
    <pre
      style={{
        margin: 0,
        padding: 20,
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
      }}
    >
      {content}
    </pre>
  );
}
