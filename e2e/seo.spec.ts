import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { existsSync, readFileSync } from 'node:fs';

const PAGES: [string, string][] = [
  ['/', '/en/'],
  ['/projetos/zapsync/', '/en/projects/zapsync/'],
  ['/projetos/data-pilot/', '/en/projects/data-pilot/'],
];
const SITE = 'https://abner-duarte.vercel.app';

test.describe('metadados', () => {
  test.beforeEach(({}, info) => test.skip(info.project.name !== 'desktop', 'metadados não dependem da largura'));

  for (const [pt, en] of PAGES) {
    for (const [path, other, lang] of [
      [pt, en, 'pt-BR'],
      [en, pt, 'en'],
    ] as const) {
      test(`${path} tem título, descrição, canonical, hreflang, Open Graph e JSON-LD`, async ({ page, request }) => {
        await page.goto(path);
        const title = await page.title();
        expect(title.length).toBeGreaterThan(10);
        const desc = await page.locator('meta[name="description"]').getAttribute('content');
        expect(desc && desc.length).toBeGreaterThan(40);

        const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
        expect(canonical).toBe(new URL(path, SITE).href);

        const alt = (h: string) => page.locator(`link[rel="alternate"][hreflang="${h}"]`).getAttribute('href');
        const otherLang = lang === 'pt-BR' ? 'en' : 'pt-BR';
        expect(await alt(lang)).toBe(new URL(path, SITE).href);
        expect(await alt(otherLang)).toBe(new URL(other, SITE).href);
        expect(await alt('x-default')).toBe(new URL(lang === 'pt-BR' ? path : other, SITE).href);

        const og = (p: string) => page.locator(`meta[property="og:${p}"]`).getAttribute('content');
        expect(await og('title')).toBeTruthy();
        expect(await og('description')).toBeTruthy();
        expect(await og('locale')).toBe(lang === 'pt-BR' ? 'pt_BR' : 'en_US');
        const image = await og('image');
        expect(image).toMatch(/^https:\/\//);
        const local = new URL(image!).pathname;
        expect((await request.get(local)).status()).toBe(200);

        const ld = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent())!);
        expect(ld['@type']).toBe('Person');
        expect(ld.name).toBe('Abner Evandro Duarte');
        expect(ld.sameAs).toContain('https://github.com/Abner-Duarte');
      });
    }
  }

  test('os títulos são diferentes entre páginas e idiomas', async ({ page }) => {
    const titles = new Set<string>();
    for (const path of PAGES.flat()) {
      await page.goto(path);
      titles.add(await page.title());
    }
    expect(titles.size).toBe(PAGES.flat().length);
  });

  test('o build gera o sitemap', () => {
    expect(existsSync('dist/sitemap-index.xml')).toBe(true);
    const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
    expect(sitemap).toContain(`${SITE}/en/projects/zapsync/`);
  });
});

test.describe('acessibilidade', () => {
  for (const scheme of ['light', 'dark'] as const) {
    for (const path of ['/', '/en/', '/projetos/zapsync']) {
      test(`${path} sem violações graves no tema ${scheme}`, async ({ page }) => {
        await page.emulateMedia({ colorScheme: scheme });
        await page.goto(path);
        const results = await new AxeBuilder({ page }).analyze();
        const serious = results.violations
          .filter((v) => v.impact === 'serious' || v.impact === 'critical')
          .map((v) => `${v.id}: ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(' | ')}`);
        expect(serious).toEqual([]);
      });
    }
  }
});
