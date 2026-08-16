// Shape of the portfolio content. Editing content? See src/data.ts.

export interface Socials {
  github: string;
  linkedin: string;
  discord: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  desc: string;
  tags: string[];
  image?: string;
}

export interface Project {
  name: string;
  /** URL-friendly slug for /projects/:slug routing. */
  slug: string;
  /** Optional logo image URL. Shows first-letter fallback if empty. */
  logo?: string;
  desc: string;
  tech: string[];
  /** Live URL. Empty string = no live demo. */
  live: string;
  /** Repo URL. Empty string = no repo link. */
  github: string;
  /** Show a live iframe preview on hover. Only works if `live` allows embedding. */
  preview: boolean;
  /** Static preview thumbnail (e.g. '/projects/foo.webp'). Shown instead of a live iframe when set. */
  image?: string;
}

export interface ListItem {
  title: string;
  meta: string;
  link: string;
  cta: string;
  /** Optional preview image. Used by certificate cards. */
  image?: string;
}

export interface PortfolioData {
  name: string;
  lastName: string;
  role: string;
  tagline: string;
  email: string;
  website: string;
  socials: Socials;
  stats: Stat[];
  about: string[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  publications: ListItem[];
  certifications: ListItem[];
  blogs: ListItem[];
}
