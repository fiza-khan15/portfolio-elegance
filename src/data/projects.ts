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
      "UNFOLD is a high-fashion agency site. The goal was to present complex service offerings without overwhelming visitors.",
    problem:
      "The agency needed a digital presence that felt editorial and premium, but most agency sites bury services in dense copy. Users couldn't quickly understand what UNFOLD does or who it's for.",
    goal:
      "Create a clear information hierarchy that guides visitors from first impression to inquiry — without feeling like a sales page.",
    research:
      "I reviewed how fashion and creative agencies structure their sites. Most split work and services across disconnected pages. Users often left before finding contact info. I mapped the questions a potential client asks: What do you do? Who have you worked with? How do I reach you?",
    userFlow:
      "The flow moves from a strong visual entry point, through curated work samples, into concise service descriptions, and ends with a single clear contact path. No dead ends.",
    wireframes:
      "Early wireframes focused on reducing sections and grouping related content. I tested a long-scroll layout against a tabbed approach — the scroll won because it matched how people browse portfolio sites on mobile.",
    finalUi:
      "The final interface uses generous whitespace, large typography, and restrained navigation. Work cards use consistent aspect ratios so the grid scans cleanly. CTAs appear only where a decision is needed.",
    designDecisions: [
      "Limited the primary nav to four items so users aren't choosing between similar destinations.",
      "Used a single-column mobile layout that mirrors desktop hierarchy instead of hiding content.",
      "Placed contact actions at natural pause points, not on every section.",
      "Kept motion subtle — hover states confirm interactivity without distracting from content.",
    ],
    outcome:
      "The site launched with a structure that stakeholders could update without breaking layout consistency. Page flow tested well in informal walkthroughs with non-designers.",
    reflection:
      "Restraint was the hardest part. Fashion brands often want more, more, more. Showing that fewer, clearer sections convert better was a useful conversation.",
    cardSummary: {
      overview: "A high-fashion agency site built around clarity over clutter.",
      problem: "Dense service pages made it hard to understand what the agency offers.",
      goal: "Guide visitors from first impression to inquiry in a few scrolls.",
      process: "Mapped client questions, wireframed a single-scroll flow, iterated on hierarchy.",
      outcome: "A scannable site structure stakeholders can maintain.",
      learnings: "Premium doesn't have to mean complicated. Fewer sections often work harder.",
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
      "Cinder & Bean is a boutique coffee e-commerce experience. The focus was making product discovery feel calm and intentional.",
    problem:
      "Small e-commerce shops often copy large retail patterns — filters, badges, urgency timers — that feel wrong for a boutique brand. Users felt rushed instead of invited to browse.",
    goal:
      "Design a shopping flow that matches the brand's slow, craft-focused identity while keeping checkout straightforward.",
    research:
      "I looked at how people shop boutique brands on mobile. Most sessions are short but not rushed — users want to see a few products clearly, read details, and decide. Speed matters, but so does mood.",
    userFlow:
      "Home → featured collection → product detail → cart → checkout. I removed unnecessary steps between browsing and buying. Account creation is optional until checkout.",
    wireframes:
      "Low-fidelity wireframes tested two product grid densities. A two-column mobile grid felt cramped; a single-column feed with larger images let products breathe and improved tap targets.",
    finalUi:
      "Warm neutrals, readable product copy, and sticky add-to-cart on mobile. The cart drawer keeps context so users don't lose their place when reviewing items.",
    designDecisions: [
      "Skipped aggressive promo banners — they conflicted with the brand tone.",
      "Sized touch targets for one-handed mobile use.",
      "Used consistent product card anatomy so every item scans the same way.",
      "Made shipping and return info visible on product pages, not buried in footer links.",
    ],
    outcome:
      "The checkout path shortened by two screens compared to the initial wireframes. Product pages load fast and read well on small viewports.",
    reflection:
      "E-commerce UX isn't always about conversion tricks. For a boutique brand, trust and calm browsing are part of the product.",
    cardSummary: {
      overview: "Boutique coffee e-commerce designed for calm, intentional browsing.",
      problem: "Generic retail patterns felt pushy for a craft-focused brand.",
      goal: "Match the brand's tone while keeping checkout simple.",
      process: "Studied mobile shopping habits, tested grid layouts, simplified checkout.",
      outcome: "A shorter checkout path and product pages that work on small screens.",
      learnings: "Brand feeling and usability aren't separate problems — they solve each other.",
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
      "Photography portfolios often use heavy galleries that load slowly or crop images unpredictably. Potential clients couldn't get a consistent sense of style before leaving.",
    goal:
      "Let the photography lead while making it easy to view work, understand services, and get in touch.",
    research:
      "I asked what questions couples ask when evaluating photographers: Is this our aesthetic? Can we afford this? How do we book? The site structure answers all three without a FAQ page.",
    userFlow:
      "Landing with a hero gallery → curated highlights → packages → contact form. Each step adds information without repeating it.",
    wireframes:
      "Wireframes explored full-bleed galleries vs. contained grids. Contained grids with consistent crops performed better — users could compare images side by side.",
    finalUi:
      "Minimal chrome, large imagery, and typography that frames rather than competes with photos. The contact section uses plain language — no 'Let's create magic together' copy.",
    designDecisions: [
      "Lazy-loaded images with fixed aspect ratios to prevent layout shift.",
      "Package comparison as a simple table, not accordion tabs.",
      "Contact form with only essential fields — name, email, date, message.",
      "No autoplay carousels; users control pacing through the work.",
    ],
    outcome:
      "The photographer can add new work without redesigning pages. Contact submissions include the fields needed to respond quickly.",
    reflection:
      "When the product is visual, the best interface decision is often what you remove. Every extra element competed with the photos.",
    cardSummary: {
      overview: "A photography portfolio where the interface stays out of the way.",
      problem: "Heavy galleries slowed the site and cropped work inconsistently.",
      goal: "Show style clearly and make booking feel straightforward.",
      process: "Mapped client questions, tested gallery layouts, stripped nonessential UI.",
      outcome: "Fast-loading galleries and a contact flow that captures what matters.",
      learnings: "For visual work, subtraction is a design skill.",
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
      "Fesign is a CAD analytics tool for industrial engineering teams. The challenge was making complex data readable for daily use.",
    problem:
      "Engineering dashboards often expose every metric at once. New users felt lost; experienced users couldn't find what they needed quickly.",
    goal:
      "Design a dashboard that surfaces the right data at the right time, with a path for users who need deeper detail.",
    research:
      "I spoke with two engineers about their daily workflow. They cared about status at a glance, alerts that mean something, and drill-down without losing context. Vanity charts were explicitly not wanted.",
    userFlow:
      "Login → project overview → detail view → export/share. Secondary flows for settings and team management stay accessible but out of the primary path.",
    wireframes:
      "Sketched dashboard layouts with a primary status panel and secondary detail panels. Tested a sidebar nav vs. top tabs — sidebar won for this many sections because labels stay visible.",
    finalUi:
      "Neutral UI chrome lets data colors carry meaning. Charts use consistent scales. Empty states explain what to do next instead of showing blank space.",
    designDecisions: [
      "Grouped metrics by decision, not by data source.",
      "Used progressive disclosure — summary first, detail on interaction.",
      "Standardized chart types so users learn the pattern once.",
      "Designed empty and error states, not just happy paths.",
    ],
    outcome:
      "The dashboard gives engineers a daily starting point without opening five tabs. Onboarding copy orients new users in under a minute.",
    reflection:
      "SaaS design is mostly about what not to show. The engineers helped me cut features from the default view that looked impressive but weren't used.",
    cardSummary: {
      overview: "A CAD analytics dashboard for engineering teams who need clarity, not clutter.",
      problem: "Too many metrics at once left users unsure where to start.",
      goal: "Surface what matters daily, with depth when needed.",
      process: "Interviewed users, mapped workflows, iterated on information hierarchy.",
      outcome: "A scannable dashboard with meaningful drill-down paths.",
      learnings: "Talking to two real users saved more time than guessing at personas.",
    },
  },
];

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
