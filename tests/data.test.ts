import { describe, expect, it } from 'vitest';
import { projects } from '../src/data/projects';
import { services } from '../src/data/services';
import { experience } from '../src/data/experience';
import { certifications } from '../src/data/certifications';
import { skills } from '../src/data/skills';
import { timeline } from '../src/data/timeline';
import { profile } from '../src/data/profile';

const ORDER = [
  'data-pilot',
  'deteccao-fraude',
  'behappier',
  'qa-verzel',
  'prospeccao-zapsync',
  'quest-contratado',
  'reinos-eternos',
  'tt2-otimizadores',
  'd3code',
  'userscript-chatwoot',
  'simuladores-qa',
  'jogos-python',
  'desafio-python',
  'arduino-portao',
  'bot-whatsapp-gpt',
  'barbearia',
  'fatec-fighters',
  'sysos',
];

/** Junta todas as strings de um valor qualquer, para varreduras de texto. */
function allStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(allStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(allStrings);
  return [];
}

function expectLocalized(value: { pt: string; en: string }, where: string) {
  expect(value.pt.trim(), `${where} (pt)`).not.toBe('');
  expect(value.en.trim(), `${where} (en)`).not.toBe('');
}

describe('projetos', () => {
  it('estão na ordem do currículo', () => {
    expect(projects.map((p) => p.slug)).toEqual(ORDER);
  });

  it('têm título, resumo e rótulos de link nos dois idiomas', () => {
    for (const p of projects) {
      expectLocalized(p.title, `${p.slug}.title`);
      expectLocalized(p.summary, `${p.slug}.summary`);
      for (const l of p.links) expectLocalized(l.label, `${p.slug}.link`);
      expect(p.stack.length, `${p.slug}.stack`).toBeGreaterThan(0);
    }
  });

  it('só os quatro projetos principais têm estudo de caso', () => {
    expect(projects.filter((p) => p.caseStudy).map((p) => p.slug)).toEqual([
      'data-pilot',
      'deteccao-fraude',
      'behappier',
      'qa-verzel',
    ]);
  });

  it('links externos usam https', () => {
    for (const p of projects) for (const l of p.links) expect(l.href).toMatch(/^https:\/\//);
  });
});

describe('perfil', () => {
  it('traz as provas com os números do currículo', () => {
    const pt = profile.proofs.map((p) => p.value.pt).join(' ');
    const en = profile.proofs.map((p) => p.value.en).join(' ');
    expect(pt).toContain('97%');
    expect(pt).toContain('194');
    expect(pt).toContain('US$ 5,45');
    expect(en).toContain('US$ 5.45');
  });

  it('tem os contatos exatos', () => {
    expect(profile.contact.whatsapp).toBe('https://wa.me/5517991816083');
    expect(profile.contact.phone).toBe('(17) 99181-6083');
    expect(profile.contact.email).toBe('abnerduartw@gmail.com');
    expect(profile.contact.linkedin).toBe('https://www.linkedin.com/in/abner-evandro-duarte-79352523a/');
    expect(profile.contact.github).toBe('https://github.com/Abner-Duarte');
  });

  it('descreve o ZapSync só com OpenAI e Groq, hospedado em Railway e Vercel', () => {
    const text = allStrings(profile.featured).join(' ');
    expect(text).toMatch(/OpenAI/);
    expect(text).toMatch(/Groq/);
    expect(text).toMatch(/Railway/);
    expect(text).not.toMatch(/Claude/);
    expect(text).not.toMatch(/Cloudflare/);
  });
});

describe('serviços', () => {
  it('são os seis da spec, cada um com projeto de prova existente', () => {
    expect(services).toHaveLength(6);
    const slugs = new Set([...projects.map((p) => p.slug), 'zapsync', 'consumer']);
    for (const s of services) {
      expectLocalized(s.title, 'service.title');
      expectLocalized(s.text, 'service.text');
      expect(s.proofSlugs.length).toBeGreaterThan(0);
      for (const slug of s.proofSlugs) expect(slugs.has(slug), slug).toBe(true);
    }
  });
});

describe('conteúdo geral', () => {
  const everything = allStrings({ projects, services, experience, certifications, skills, timeline, profile });

  it('não traz quantidade de clientes', () => {
    for (const s of everything) {
      expect(s).not.toMatch(/\b\d+\s*(empresas|clientes|companies|clients)\b/i);
    }
  });

  it('experiência, certificações, competências e trajetória estão preenchidas nos dois idiomas', () => {
    expect(experience.map((e) => e.id)).toEqual(['zapsync', 'consumer', 'mei']);
    expect(certifications.length).toBe(9);
    expect(skills.length).toBe(8);
    expect(timeline.map((i) => i.year)).toEqual([2023, 2024, 2025, 2026]);
    for (const e of experience) {
      expectLocalized(e.role, e.id);
      for (const b of e.bullets) expectLocalized(b, `${e.id}.bullet`);
    }
    for (const g of skills) expectLocalized(g.group, 'skills.group');
    for (const c of certifications) expectLocalized(c.name, 'cert');
  });
});

describe('imagens e arquivos', () => {
  it('a foto do perfil é quadrada', () => {
    expect(profile.photo.width).toBe(profile.photo.height);
  });

  it('os projetos com print disponível têm imagem', () => {
    const withImage = ['data-pilot', 'deteccao-fraude', 'qa-verzel', 'barbearia', 'fatec-fighters', 'jogos-python'];
    for (const slug of withImage) {
      expect(projects.find((p) => p.slug === slug)?.image, slug).toBeDefined();
    }
  });

  it('os dois currículos existem em public/cv', async () => {
    const { existsSync } = await import('node:fs');
    expect(existsSync('public' + profile.cv.pt)).toBe(true);
    expect(existsSync('public' + profile.cv.en)).toBe(true);
  });
});

describe('estudos de caso', () => {
  it('o ZapSync descreve o tempo de resposta do mesmo jeito nos dois idiomas', async () => {
    const { caseStudies } = await import('../src/data/caseStudies');
    const zap = caseStudies.find((c) => c.slug === 'zapsync')!;
    const pt = zap.results.map((r) => r.pt).join(' ');
    const en = zap.results.map((r) => r.en).join(' ');
    expect(pt).toContain('2,5 s no pior caso (p95)');
    expect(en).toContain('2.5 s worst case (p95)');
  });
});
