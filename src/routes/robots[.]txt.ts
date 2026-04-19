import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const robotsTxt = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://mehmettahatmert.com/sitemap.xml`;

        return new Response(robotsTxt, {
          headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
