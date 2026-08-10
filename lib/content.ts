export const site = {
  name: "Stosh Ochieng Odhiambo",
  shortName: "Stosh Ochieng",
  role: "Full-Stack Software & Systems Engineer",
  location: "Juja, Kenya",
  availability: "Open for Remote & On-Site Roles",
  email: "stoshwitkowski812@gmail.com",
  github: "https://github.com/Stosh09",
  resumePath: "/STOSH_OCHIENG_ODHIAMBO_CV.pdf",
  coverLetterPath: "/Stosh_Ochieng_Cover_Letter.pdf",
  headline:
    "Architecting high-performance web platforms & crafting immersive digital experiences",
  portrait: "/DSC_1311.JPG",
  aboutPortrait: "/101 jpg-1.jpg",
};

export const summary = `Full-Stack Software Engineer with end-to-end technical expertise across the entire software application lifecycle. Proficient in engineering resilient server architectures, relational database modeling, real-time WebSockets synchronization, and high-concurrency API services, seamlessly paired with performant client interfaces built in React, React Native, Vite, and Tailwind CSS. Demonstrated capability in architecting complex digital products from scratch—from database schema design and Row-Level Security (RLS) policies to responsive frontend UI systems and media asset processing pipelines.`;

export const skillTiers = [
  {
    title: "Backend & Infrastructure",
    skills: [
      "Node.js",
      "Express",
      "Supabase (Edge Functions, RLS, Auth)",
      "RESTful APIs",
      "WebSockets",
    ],
  },
  {
    title: "Database Engineering",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Relational Schema Design",
      "Data Modeling",
      "Realtime Sync",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "JavaScript (ES6+)",
      "React",
      "React Native",
      "Vite",
      "HTML5 / CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "DevOps & Media",
    skills: [
      "Asset Transcoding Pipelines",
      "Git / GitHub",
      "Vercel / Netlify Deployment",
    ],
  },
  {
    title: "UI/UX & Systems Design",
    skills: [
      "Figma (High-Fidelity Wireframing)",
      "Component Systems",
      "Layout Architecture",
    ],
  },
] as const;

/** Icon keys map to brand logos in components/SkillIcon.tsx */
export const techSkills = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "React Native", icon: "reactnative" },
  { name: "Vite", icon: "vite" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "Supabase", icon: "supabase" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Figma", icon: "figma" },
  { name: "Vercel", icon: "vercel" },
  { name: "Netlify", icon: "netlify" },
  { name: "WebSockets", icon: "websocket" },
] as const;

export type TechSkillIcon = (typeof techSkills)[number]["icon"];

export const services = [
  {
    title: "Full-Stack Web Platforms",
    description:
      "End-to-end product builds—schema, APIs, auth, and polished React interfaces.",
  },
  {
    title: "Realtime Systems",
    description:
      "WebSockets, Supabase realtime, and high-concurrency API services without polling.",
  },
  {
    title: "UI Systems & Delivery",
    description:
      "Figma-to-production UI, Tailwind design systems, and Vercel/Netlify deploys.",
  },
] as const;

export const experience = [
  {
    title: "ALX Africa — Software Engineering Program",
    meta: "Intensive Full-Stack & Systems Engineering Curriculum",
    bullets: [
      "Hands-on training in full-stack architecture, backend algorithms, relational databases, network protocols, and collaborative CI/CD workflows.",
      "Engineered and deployed production-grade applications adhering to modular design patterns and defensive programming standards.",
    ],
  },
  {
    title: "Full-Stack & UI/UX Engineer",
    meta: "Freelance / Personal Engineering Projects — Juja, Kenya",
    bullets: [
      "Developed web and mobile prototypes from raw Figma design tokens to database migrations and live server deployments.",
      "Formulated custom widget layout systems and UI components with high spatial accuracy and design discipline.",
    ],
  },
] as const;

export type Project = {
  id: string;
  title: string;
  overview: string;
  stack: string[];
  contributions: { label: string; detail: string }[];
  image?: string;
  gallery?: string[];
  /** phone = all phone screenshots in a 2x2 grid; mixed = landscape hero + phone thumbs */
  galleryLayout?: "phone" | "mixed";
  liveUrl?: string;
  apkUrl?: string;
  disclaimer?: string;
  sourceUrl?: string;
  docsUrl?: string;
  /** When true, show "Request access" → contact instead of public repo links */
  privateSource?: boolean;
  deepDive: {
    erd: { name: string; fields: string[] }[];
    relations: string[];
    apiRoutes: { method: string; path: string; description: string }[];
    snippet: { title: string; language: string; code: string };
  };
};

export const projects: Project[] = [
  {
    id: "radio",
    title: "JOWI 98.2 FM — Live Web Radio & Audio Streaming Platform",
    overview:
      "A high-performance web radio application for JOWI FM providing seamless audio streaming, dynamic schedule management, and interactive listener updates across desktop and mobile.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "WebSockets",
    ],
    contributions: [
      {
        label: "Backend Architecture",
        detail:
          "Designed a relational PostgreSQL schema on Supabase with granular RLS policies for broadcast schedules, stream metadata, and listener activity logs.",
      },
      {
        label: "Real-Time Data Layer",
        detail:
          "Implemented WebSocket subscriptions for instant sync of live listener counts, current track displays, and schedule transitions—without client polling.",
      },
      {
        label: "Frontend Execution",
        detail:
          "Engineered a low-latency UI with React and Vite, styled in Tailwind CSS for desktop and mobile listening experiences.",
      },
    ],
    image: "/projects/radio/desktop.png",
    gallery: [
      "/projects/radio/desktop.png",
      "/projects/radio/mobile-1.png",
      "/projects/radio/mobile-2.png",
    ],
    galleryLayout: "mixed",
    liveUrl: "https://jowi-radio-nu.vercel.app",
    privateSource: true,
    deepDive: {
      erd: [
        {
          name: "broadcasts",
          fields: ["id", "title", "starts_at", "ends_at", "status"],
        },
        {
          name: "stream_metadata",
          fields: ["id", "broadcast_id", "track_title", "artist", "updated_at"],
        },
        {
          name: "listener_logs",
          fields: ["id", "broadcast_id", "session_id", "joined_at", "left_at"],
        },
        {
          name: "schedules",
          fields: ["id", "slot_label", "host", "day_of_week", "time_range"],
        },
      ],
      relations: [
        "stream_metadata.broadcast_id → broadcasts.id",
        "listener_logs.broadcast_id → broadcasts.id",
        "schedules drive upcoming broadcasts",
      ],
      apiRoutes: [
        {
          method: "GET",
          path: "/api/broadcasts/live",
          description: "Current live broadcast + metadata",
        },
        {
          method: "GET",
          path: "/api/schedules",
          description: "Weekly schedule slots",
        },
        {
          method: "POST",
          path: "/api/listeners/heartbeat",
          description: "Session presence for listener counts",
        },
        {
          method: "WS",
          path: "realtime:broadcasts",
          description: "Track, schedule, and listener count events",
        },
      ],
      snippet: {
        title: "Realtime listener channel",
        language: "ts",
        code: `const channel = supabase
  .channel("broadcasts")
  .on("postgres_changes", {
    event: "*",
    schema: "public",
    table: "stream_metadata",
  }, (payload) => {
    setNowPlaying(payload.new);
  })
  .subscribe();`,
      },
    },
  },
  {
    id: "rafiki",
    title: "Rafiki Yangu (AI Companion Platform)",
    overview:
      "An adaptive digital companion platform designed to deliver multi-faceted, personalized support akin to a close friend.",
    stack: [
      "Full-Stack JavaScript",
      "Node.js",
      "REST APIs",
      "UI/UX Systems",
      "Data Modeling",
    ],
    contributions: [
      {
        label: "Architectural Blueprint",
        detail:
          "Engineered a multi-domain digital companion platform that aggregates contextual services and user assistance.",
      },
      {
        label: "API & System Layer",
        detail:
          "Formulated dynamic API endpoints to process multi-domain interaction queries, maintain state persistence, and orchestrate client–server data loops.",
      },
      {
        label: "UX System",
        detail:
          "Structured scalable UI component architecture focused on low-latency interactions and mobile accessibility.",
      },
    ],
    image: "/projects/rafiki/chat.png",
    gallery: [
      "/projects/rafiki/chat.png",
      "/projects/rafiki/wellness.png",
      "/projects/rafiki/family-contacts.png",
      "/projects/rafiki/boma.png",
    ],
    galleryLayout: "phone",
    apkUrl:
      "https://github.com/Stosh09/portfolio/releases/download/rafiki-yangu-dev/rafiki-yangu-dev.apk",
    disclaimer:
      "Development Android build for preview only. Rafiki Yangu is not available on the Google Play Store yet.",
    privateSource: true,
    deepDive: {
      erd: [
        {
          name: "users",
          fields: ["id", "display_name", "preferences", "created_at"],
        },
        {
          name: "sessions",
          fields: ["id", "user_id", "context_domain", "state", "updated_at"],
        },
        {
          name: "messages",
          fields: ["id", "session_id", "role", "content", "created_at"],
        },
        {
          name: "domains",
          fields: ["id", "slug", "capabilities", "config"],
        },
      ],
      relations: [
        "sessions.user_id → users.id",
        "messages.session_id → sessions.id",
        "sessions.context_domain → domains.slug",
      ],
      apiRoutes: [
        {
          method: "POST",
          path: "/api/sessions",
          description: "Create companion session with domain context",
        },
        {
          method: "POST",
          path: "/api/interact",
          description: "Multi-domain query + response orchestration",
        },
        {
          method: "GET",
          path: "/api/sessions/:id/state",
          description: "Persisted conversation state",
        },
        {
          method: "PATCH",
          path: "/api/users/:id/preferences",
          description: "Update companion personalization",
        },
      ],
      snippet: {
        title: "Domain interaction loop",
        language: "ts",
        code: `async function interact(req: InteractRequest) {
  const session = await loadSession(req.sessionId);
  const domain = resolveDomain(session.context);
  const result = await domain.handle(req.query, session.state);
  await persistState(session.id, result.nextState);
  return result.reply;
}`,
      },
    },
  },
];

export const architectureNodes = [
  {
    id: "client",
    title: "Frontend",
    detail: "React · Vite · Tailwind",
  },
  {
    id: "transport",
    title: "Transport",
    detail: "REST · WebSockets",
  },
  {
    id: "backend",
    title: "Backend & Infra",
    detail: "Node.js · Express · Supabase",
  },
  {
    id: "data",
    title: "Data",
    detail: "PostgreSQL · RLS · Realtime",
  },
] as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
] as const;
