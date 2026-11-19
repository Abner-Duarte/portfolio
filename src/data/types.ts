import type { ImageMetadata } from 'astro';

export type Localized = { pt: string; en: string };

export type Link = { label: Localized; href: string };

export type Project = {
  slug: string;
  title: Localized;
  summary: Localized;
  /** Número ou resultado principal, mostrado em destaque no card. */
  highlight?: Localized;
  stack: string[];
  links: Link[];
  image?: ImageMetadata;
  /** Tem página de estudo de caso própria. */
  caseStudy: boolean;
  year: number;
};

export type Service = {
  title: Localized;
  text: Localized;
  /** Slugs de projetos (ou 'zapsync' / 'consumer') que provam o serviço. */
  proofSlugs: string[];
};

export type Experience = {
  id: 'zapsync' | 'consumer' | 'mei';
  role: Localized;
  org: string;
  period: Localized;
  bullets: Localized[];
};

export type Certification = {
  name: Localized;
  issuer: string;
  detail?: Localized;
  featured: boolean;
};

export type SkillGroup = { group: Localized; items: { pt: string[]; en: string[] } };

export type TimelineItem = {
  year: number;
  title: string;
  href?: string;
  text: Localized;
};

export type Proof = { value: Localized; label: Localized; href?: string };
