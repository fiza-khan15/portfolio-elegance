import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { SITE } from "@/data/site";
import ogImage from "@/assets/work-1.jpg";

const TITLE = `${SITE.name} — UI/UX & Product Designer`;
const DESCRIPTION =
  "UI/UX Designer with a development background. I design simple, intuitive digital products — from research and wireframes to polished interfaces.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.siteUrl,
  jobTitle: SITE.role,
  description: DESCRIPTION,
  email: `mailto:${SITE.email}`,
  image: `${SITE.siteUrl}${ogImage}`,
  sameAs: [SITE.social.linkedin, SITE.social.instagram, SITE.social.github],
  knowsAbout: [
    "User Experience Design",
    "User Interface Design",
    "Product Design",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Figma",
  ],
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
          "Fiza Khan, UI designer, UX designer, product designer, Figma, design systems, portfolio, user experience",
      },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.siteUrl },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `${SITE.siteUrl}${ogImage}` },
      { property: "og:image:alt", content: `Selected product design work by ${SITE.name}` },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE.siteUrl}${ogImage}` },
      { name: "twitter:image:alt", content: `Selected product design work by ${SITE.name}` },
    ],
    links: [{ rel: "canonical", href: SITE.siteUrl }],
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
        <About />
        <Skills />
        <Works />
        <Process />
      </main>
      <Contact />
    </div>
  );
}
