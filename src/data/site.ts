export const SITE = {
  name: "Fiza Khan",
  role: "UI/UX & Product Designer",
  email: "fiza.tech@outlook.com",
  resumeUrl: "/resume.pdf",
  siteUrl: "https://2b163f84-2c3d-48d8-897e-3ebbabfbcc2f.lovable.app",
  social: {
    linkedin: "https://www.linkedin.com/in/fiza-kh/",
    instagram: "https://www.instagram.com/fzk.dev/",
    github: "https://github.com/fiza-khan15",
  },
} as const;

export const SKILLS = {
  design: [
    "User Experience Design",
    "User Interface Design",
    "Wireframing",
    "Prototyping",
    "User Flows",
    "Design Systems",
    "Information Architecture",
  ],
  tools: ["Figma", "Framer", "Adobe Creative Suite"],
  development: ["HTML", "CSS", "JavaScript", "Responsive Design"],
} as const;

export const PROCESS = [
  {
    step: "Discover",
    desc: "Understanding users, goals, and context.",
  },
  {
    step: "Define",
    desc: "Identifying problems and opportunities.",
  },
  {
    step: "Design",
    desc: "Creating flows, wireframes, and interfaces.",
  },
  {
    step: "Refine",
    desc: "Testing, iterating, and improving usability.",
  },
  {
    step: "Deliver",
    desc: "Preparing designs for implementation.",
  },
] as const;
