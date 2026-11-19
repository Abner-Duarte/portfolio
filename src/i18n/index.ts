import { pt, type Dict } from './pt';
import { en } from './en';

export type Lang = 'pt' | 'en';
export type { Dict };

const dicts: Record<Lang, Dict> = { pt, en };

export function t(lang: Lang): Dict {
  return dicts[lang];
}

/** Prefixo de rota de cada idioma: '' para português, '/en' para inglês. */
export function base(lang: Lang): string {
  return lang === 'pt' ? '' : '/en';
}
