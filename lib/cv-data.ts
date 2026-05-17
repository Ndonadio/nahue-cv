/**
 * Single source of truth for all CV content.
 * Components read from this object — never hardcode copy in the JSX.
 * Edit here to update the live site.
 */

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExpertiseArea = {
  icon: "ai" | "shield" | "chart";
  title: string;
  description: string;
  bullets: string[];
};

export type EducationItem = {
  credential: string;
  institution: string;
  detail?: string;
};

export const cv = {
  // ---------------------------------------------------------------------------
  // HERO
  // ---------------------------------------------------------------------------
  hero: {
    name: "Nahuel Donadio",
    title: "Manager — Risk & Data Analytics",
    tagline:
      "8+ years building AI-driven audit and analytics solutions for global tech and financial clients.",
    location: "Buenos Aires, Argentina",
    email: "nahueldonadio97@gmail.com",
    linkedin: "https://www.linkedin.com/in/nahuel-donadio",
  },

  // ---------------------------------------------------------------------------
  // ABOUT
  // ---------------------------------------------------------------------------
  about: {
    headline: "GenAI-first risk leader bridging audit, analytics and economics.",
    paragraphs: [
      "Manager in Risk & Data Analytics at PwC Argentina with 8+ years across financial audit, SOX compliance and applied AI in global corporate environments.",
      "Internal reference for Generative AI: I build production AI Agents (ChatGPT, Claude) that automate SOX audit cycles and present them to executive stakeholders. I lead multidisciplinary teams across Argentina, the United States and India for Tech and Financial Services clients.",
      "Currently finishing my Economics degree at UADE, which I apply to interest-rate risk modeling, NII, stress testing and macro driver analysis under Basel / IRRBB.",
    ],
    metrics: [
      { value: "8+", label: "Years of experience" },
      { value: "3", label: "Countries in teams" },
      { value: "GenAI", label: "AI Agents lead" },
      { value: "SOX", label: "Compliance expert" },
    ],
  },

  // ---------------------------------------------------------------------------
  // EXPERIENCE
  // ---------------------------------------------------------------------------
  experience: [
    {
      role: "Manager — Risk & Data Analytics",
      company: "PwC Argentina",
      period: "Jul 2024 — Present",
      location: "Buenos Aires · Hybrid",
      bullets: [
        "Lead the GenAI team building AI Agents (ChatGPT, Claude) that automate SOX audit cycles end-to-end.",
        "Present AI-driven audit solutions to executive stakeholders: risk assessment, control testing and automated reporting.",
        "Supervise IT automated controls (ITGC / ITAC) in tech-sector clients with teams in Argentina, the US and India.",
        "Analyze Interest Rate Risk models: NII, rate stress testing and identification of macroeconomic drivers under Basel / IRRBB.",
        "Drive internal AI adoption programs and deliver firm-wide talks on AI tooling.",
      ],
    },
    {
      role: "Senior — Data Analytics",
      company: "PwC Argentina",
      period: "May 2022 — Jun 2024",
      bullets: [
        "Built centralized data models and ETL pipelines in SQL for SOX and internal audit projects.",
        "Delivered Power BI dashboards with Row Level Security and strategic KPI / KRI views for senior stakeholders.",
        "Integrated multi-environment data and optimized models for compliance workstreams.",
      ],
    },
    {
      role: "Senior — Financial Services",
      company: "PwC Argentina",
      period: "Jul 2020 — Apr 2022",
      bullets: [
        "Led SOX testing for financial-sector clients: ITGC / ITAC evaluation and manual control assessment.",
        "Coordinated local and remote teams under tight reporting cycles, managing budget and delivery.",
      ],
    },
  ] as ExperienceItem[],

  // ---------------------------------------------------------------------------
  // SKILLS
  // ---------------------------------------------------------------------------
  skills: [
    {
      title: "AI & GenAI",
      items: ["AI Agents", "ChatGPT", "Claude", "LLM Orchestration", "Prompt Engineering"],
    },
    {
      title: "Data & Analytics",
      items: ["SQL", "Python", "R", "Power BI / DAX", "Alteryx", "Celonis", "Azure Data Lakes"],
    },
    {
      title: "Risk & Compliance",
      items: ["SOX 404", "ITGC", "ITAC", "Risk Assessment", "Control Testing", "Remediation"],
    },
    {
      title: "Financial Risk",
      items: ["NII", "Interest Rate Risk", "Stress Testing", "Basel / IRRBB", "Macro Drivers"],
    },
    {
      title: "Leadership",
      items: [
        "Global team management",
        "Executive communication",
        "Strategic thinking",
        "Agile delivery",
        "Stakeholder management",
      ],
    },
  ] as SkillGroup[],

  // ---------------------------------------------------------------------------
  // EDUCATION & CERTS
  // ---------------------------------------------------------------------------
  education: [
    {
      credential: "B.A. in Economics",
      institution: "Universidad Argentina de la Empresa (UADE)",
      detail: "In progress — expected 2026",
    },
    {
      credential: "Certified ScrumMaster",
      institution: "Scrum Alliance",
    },
    {
      credential: "Advanced English",
      institution: "Education First (EF)",
      detail: "Certified 2021",
    },
  ] as EducationItem[],

  // ---------------------------------------------------------------------------
  // AREAS OF EXPERTISE
  // ---------------------------------------------------------------------------
  expertise: [
    {
      icon: "ai",
      title: "Generative AI & Agents",
      description:
        "Designing and shipping AI Agents that take real work off audit teams.",
      bullets: [
        "AI Agents built on ChatGPT and Claude",
        "SOX audit cycle automation with LLMs",
        "Executive presentations on GenAI solutions",
        "Leading a multidisciplinary GenAI team",
        "Firm-wide AI adoption programs and training",
      ],
    },
    {
      icon: "shield",
      title: "Risk & SOX Compliance",
      description:
        "End-to-end SOX 404 ownership for tech and financial services clients.",
      bullets: [
        "SOX risk assessment and control testing",
        "ITGC / ITAC evaluation in tech companies",
        "IT controls and cybersecurity supervision",
        "Global team coordination (AR / US / India)",
        "Remediation and corrective-action planning",
      ],
    },
    {
      icon: "chart",
      title: "Data Analytics & BI",
      description:
        "Production-grade data models and dashboards behind executive decisions.",
      bullets: [
        "Centralized data models and ETL in SQL",
        "Power BI dashboards with RLS and KPI / KRI",
        "Python and R for advanced analysis",
        "Alteryx, Celonis, Azure Data Lakes",
        "Interest Rate Risk modeling (NII, IRRBB)",
      ],
    },
  ] as ExpertiseArea[],

  // ---------------------------------------------------------------------------
  // CONTACT
  // ---------------------------------------------------------------------------
  contact: {
    headline: "Let's talk.",
    subline:
      "Open to international roles, AI / risk consulting and speaking opportunities.",
    email: "nahueldonadio97@gmail.com",
    linkedin: "https://www.linkedin.com/in/nahuel-donadio",
  },
} as const;
