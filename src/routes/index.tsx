import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Services } from "@/components/Services";
import { WhyMe } from "@/components/WhyMe";
import { Contact } from "@/components/Contact";
import ogImage from "@/assets/work-1.jpg";

const SITE_URL = "https://2b163f84-2c3d-48d8-897e-3ebbabfbcc2f.lovable.app";
const TITLE = "Fiza Khan — Independent Web Developer & Designer";
const DESCRIPTION =
  "Fiza Khan is an independent web developer building high-performance React, Next.js, and Supabase products for founders, studios, and modern brands.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fiza Khan",
  url: SITE_URL,
  jobTitle: "Independent Web Developer & Designer",
  description: DESCRIPTION,
  email: "mailto:fiza.tech@outlook.com",
  image: `${SITE_URL}${ogImage}`,
  sameAs: [
    "https://www.linkedin.com/in/fiza-kh/",
    "https://www.instagram.com/fzk.dev/",
    "https://github.com/fiza-khan15",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Web Performance", "SEO"],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Fiza Khan, web developer, freelance developer, React developer, Next.js, Supabase, web design, portfolio",
      },
      { name: "author", content: "Fiza Khan" },
      { name: "robots", content: "index, follow" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}${ogImage}` },
      { property: "og:image:alt", content: "Selected work by Fiza Khan — independent web developer" },
      { property: "og:site_name", content: "Fiza Khan" },
      { property: "og:locale", content: "en_US" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}${ogImage}` },
      { name: "twitter:image:alt", content: "Selected work by Fiza Khan" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main id="main">
        <Hero />
        <Works />
        <Services />
        <WhyMe />
      </main>
      <Contact />
    </div>
  );
}
