import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  year: string;
  img: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  goal: string;
  research: string;
  userFlow: string;
  wireframes: string;
  finalUi: string;
  designDecisions: string[];
  outcome: string;
  reflection: string;
  cardSummary: {
    overview: string;
    problem: string;
    goal: string;
    process: string;
    outcome: string;
    learnings: string;
  };
};

export const projects: CaseStudy[] = [
  {
    slug: "unfold-agency",
    title: "UNFOLD Agency",
    category: "Brand & Product Design",
    year: "2025",
    img: work1,
    liveUrl: "https://unfold-high-fashion-agency.vercel.app/",
    overview:
      "UNFOLD is a high-fashion agency site designed to present complex service offerings clearly without overwhelming visitors.",
    problem:
      "The agency needed a digital presence that felt editorial and premium. Competitive analysis showed many agency websites required multiple navigational steps before visitors could access services or contact information — making it harder to convert interest into inquiries.",
    goal:
      "Create a clear information hierarchy that guides visitors from first impression to inquiry, without feeling like a sales page.",
    research:
      "I reviewed how fashion and creative agencies structure their sites, focusing on navigation patterns, content grouping, and where contact paths were placed. Most split work and services across disconnected pages, which added friction. I mapped the core questions a potential client would arrive with: What do you do? Who have you worked with? How do I reach you? — and used those to define the page structure.",
    userFlow:
      "The flow moves from a strong visual entry point, through curated work samples, into concise service descriptions, and ends with a single clear contact path. No dead ends.",
    wireframes:
      "Early wireframes focused on reducing sections and grouping related content. I explored a long-scroll layout against a tabbed approach. The scroll layout better matched how people browse portfolio and agency sites, particularly on mobile.",
    finalUi:
      "The final interface uses generous whitespace, large typography, and restrained navigation. Work cards use consistent aspect ratios so the grid scans cleanly. CTAs appear only where a decision is needed.",
    designDecisions: [
      "Limited the primary nav to four items to reduce decision load for first-time visitors.",
      "Used a single-column mobile layout that mirrors desktop hierarchy instead of hiding content behind toggles.",
      "Placed contact actions at natural pause points rather than repeating them across every section.",
      "Kept motion subtle — hover states confirm interactivity without distracting from content.",
    ],
    outcome:
      "The site launched with a structure that stakeholders could update without breaking layout consistency. Page flow tested well in informal walkthroughs with non-designers.",
    reflection:
      "Restraint was the hardest part of this project. Fashion brands often lean toward visual density. Showing that fewer, clearer sections can serve the brand better was a useful conversation to have early.",
    cardSummary: {
      overview: "A high-fashion agency site built around clarity over clutter.",
      problem: "Multi-step navigation made it hard for visitors to understand the agency's offer.",
      goal: "Guide visitors from first impression to inquiry in a few scrolls.",
      process: "Analysed agency site patterns, mapped client questions, wireframed a single-scroll flow.",
      outcome: "A scannable site structure stakeholders can maintain.",
      learnings: "Premium doesn't have to mean complicated. Fewer sections often do more work.",
    },
  },
  {
    slug: "cinder-bean",
    title: "Cinder & Bean",
    category: "E-commerce UX",
    year: "2025",
    img: work2,
    liveUrl: "https://cinderbean.vercel.app/",
    overview:
      "Cinder & Bean is a boutique coffee e-commerce experience focused on making product discovery feel calm and intentional.",
    problem:
      "Many e-commerce experiences rely on urgency-driven patterns — countdown timers, badge stacking, aggressive promotions — that can feel at odds with boutique brand positioning. The challenge was designing a shopping flow that matched the brand's identity without sacrificing usability.",
    goal:
      "Design a shopping experience that reflects the brand's craft-focused tone while keeping the path from browsing to checkout straightforward.",
    research:
      "I reviewed boutique coffee and premium lifestyle brands to understand how they handle product presentation and purchase flows on mobile. The pattern that stood out was prioritising product clarity — larger imagery, readable descriptions, and reduced visual noise — over conversion pressure tactics.",
    userFlow:
      "Home → featured collection → product detail → cart → checkout. I reduced steps between browsing and buying. Account creation is optional and deferred until checkout.",
    wireframes:
      "Low-fidelity wireframes tested two product grid densities. A two-column mobile grid felt cramped and made tap targets small. A single-column feed with larger images gave products more space and improved usability on small screens.",
    finalUi:
      "Warm neutrals, readable product copy, and a sticky add-to-cart button on mobile. The cart drawer keeps context so users don't lose their place when reviewing items.",
    designDecisions: [
      "Removed aggressive promotional banners — they conflicted with the brand tone.",
      "Sized touch targets for comfortable one-handed mobile use.",
      "Used consistent product card anatomy so every item scans the same way.",
      "Made shipping and return information visible on product pages rather than buried in footer links.",
    ],
    outcome:
      "The checkout path was reduced by two screens compared to the initial wireframes. Product pages load efficiently and remain readable on small viewports.",
    reflection:
      "This project reinforced that e-commerce UX isn't always about optimising for conversion volume. For a boutique brand, trust and a calm browsing experience are part of what the customer is buying.",
    cardSummary: {
      overview: "Boutique coffee e-commerce designed for calm, intentional browsing.",
      problem: "Urgency-driven retail patterns felt misaligned with the brand's positioning.",
      goal: "Match the brand's tone while keeping checkout simple.",
      process: "Reviewed boutique brand patterns, tested grid layouts, simplified checkout flow.",
      outcome: "A shorter checkout path and product pages that work well on small screens.",
      learnings: "Brand tone and usability aren't separate problems — solving one often improves the other.",
    },
  },
  {
    slug: "elodie-laurent",
    title: "Élodie Laurent",
    category: "Editorial & Portfolio",
    year: "2024",
    img: work3,
    liveUrl: "https://weddingphotographer-zeta.vercel.app/",
    overview:
      "A portfolio site for a wedding photographer. The work is visual — the interface needed to stay out of the way.",
    problem:
      "Photography portfolios often rely on heavy galleries that load slowly or crop images inconsistently. This makes it difficult for potential clients to get a clear sense of a photographer's style before deciding to reach out.",
    goal:
      "Let the photography lead, while making it easy to view work, understand services, and get in touch.",
    research:
      "I mapped the questions a prospective client would bring to a photographer's site: Does this match our aesthetic? What are the packages? How do we book? The site structure answers all three without requiring a FAQ page or additional navigation.",
    userFlow:
      "Landing with a hero gallery → curated highlights → packages → contact form. Each step adds information without repeating it.",
    wireframes:
      "Wireframes explored full-bleed galleries versus contained grids. Contained grids with consistent crop ratios worked better — images could be compared at a glance without layout inconsistency.",
    finalUi:
      "Minimal chrome, large imagery, and typography that frames rather than competes with photos. The contact section uses plain language and a short form — no filler copy.",
    designDecisions: [
      "Lazy-loaded images with fixed aspect ratios to prevent layout shift during page load.",
      "Package comparison presented as a simple table, not accordion tabs.",
      "Contact form limited to essential fields — name, email, date, and message.",
      "No autoplay carousels; visitors control their own pace through the work.",
    ],
    outcome:
      "The photographer can add new work without restructuring pages. The inquiry experience was simplified by reducing the contact form to only essential information, making first contact easier for both clients and the photographer.",
    reflection:
      "When the product is visual, the most useful interface decisions are often about what to remove. Every extra element competed with the photographs.",
    cardSummary: {
      overview: "A photography portfolio where the interface stays out of the way.",
      problem: "Heavy galleries slowed the site and presented work inconsistently.",
      goal: "Show style clearly and make booking feel straightforward.",
      process: "Mapped client questions, tested gallery layouts, removed nonessential UI.",
      outcome: "Fast-loading galleries and a simplified contact flow.",
      learnings: "For visual work, restraint is a design decision.",
    },
  },
  {
    slug: "fesign-cad",
    title: "Fesign CAD Analytics",
    category: "SaaS Product Design",
    year: "2024",
    img: work4,
    liveUrl: "https://fesgin-app.onrender.com/",
    overview:
      "Fesign is a CAD analytics dashboard for engineering teams. The challenge was making complex project data readable and actionable for daily use.",
    problem:
      "Engineering dashboards often surface every available metric at once. This creates a dense interface that slows down experienced users and overwhelms new ones — making it harder to find what's relevant without training.",
    goal:
      "Design a dashboard that surfaces the right data at the right time, with a clear path to deeper detail when needed.",
    research:
      "I reviewed common engineering dashboard workflows and analysed how industrial software typically presents project status, alerts, and reporting information. The consistent pattern in well-regarded tools was a clear hierarchy: status at a glance, then drill-down on demand — rather than exposing all data on a single view.",
    userFlow:
      "Login → project overview → detail view → export or share. Secondary flows for settings and team management remain accessible but stay out of the primary daily path.",
    wireframes:
      "Dashboard layouts were sketched with a primary status panel and secondary detail panels. A sidebar nav was tested against top tabs — sidebar performed better for this many sections because labels stay visible as users move between views.",
    finalUi:
      "Neutral UI chrome lets data colours carry meaning. Charts use consistent scales across views. Empty states explain what to do next rather than displaying blank space.",
    designDecisions: [
      "Grouped metrics by the decision they support, not by data source.",
      "Used progressive disclosure — summary first, detail on interaction.",
      "Standardised chart types so users learn the visual pattern once and apply it across the dashboard.",
      "Designed empty and error states alongside the main flows, not as an afterthought.",
    ],
    outcome:
      "The dashboard gives engineering teams a daily starting point without requiring multiple tools or tabs. Designed onboarding guidance to help new users understand the dashboard structure quickly.",
    reflection:
      "SaaS dashboard design is largely about what not to show by default. The research phase made clear that a smaller default view — with depth available on demand — reduces the learning curve without hiding functionality.",
    cardSummary: {
      overview: "A CAD analytics dashboard for engineering teams who need clarity, not clutter.",
      problem: "Displaying too many metrics at once made the interface hard to navigate.",
      goal: "Surface what matters daily, with depth available when needed.",
      process: "Reviewed engineering dashboard patterns, mapped workflows, iterated on information hierarchy.",
      outcome: "A scannable dashboard with meaningful drill-down paths.",
      learnings: "Default views should reflect what users need most often, not everything the system can show.",
    },
  },
];

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
