import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Services } from "@/components/Services";
import { WhyMe } from "@/components/WhyMe";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mason Reed — Independent Web Developer & Designer" },
      {
        name: "description",
        content:
          "Independent web developer crafting modern, high-performance websites and digital products for ambitious founders and studios.",
      },
      { property: "og:title", content: "Mason Reed — Independent Web Developer" },
      {
        property: "og:description",
        content: "Modern, minimal websites built for conversion and longevity.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Works />
      <Services />
      <WhyMe />
      <Contact />
    </main>
  );
}
