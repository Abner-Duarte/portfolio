import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const SITE = 'https://abner-duarte.vercel.app';

test.describe('correções da revisão final', () => {
  test.beforeEach(({}, info) => test.skip(info.project.name !== 'desktop', 'não depende da largura'));

  test('a canonical de cada página é exatamente uma <loc> do sitemap', async ({ page }) => {
    const locs = [...readFileSync('dist/sitemap-0.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    for (const path of ['/', '/en/', '/projetos/zapsync/', '/en/projects/data-pilot/']) {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(locs, path).toContain(canonical);
    }
  });

  test('as páginas em inglês usam a imagem de compartilhamento em inglês', async ({ page, request }) => {
    await page.goto('/en/');
    const og = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(og).toBe(`${SITE}/og-en.png`);
    expect((await request.get('/og-en.png')).status()).toBe(200);
    await page.goto('/');
    expect(await page.locator('meta[property="og:image"]').getAttribute('content')).toBe(`${SITE}/og.png`);
  });

  test('a trajetória cita os jogos em Python com link', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#trajetoria a[href="https://github.com/Abner-Duarte/portfolio-python"]')).toHaveCount(1);
  });

  test('o fim dos serviços chama no WhatsApp', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#servicos a[href="https://wa.me/5517991816083"]')).toHaveCount(1);
  });

  test('URL inexistente responde 404 com página própria e link para a home', async ({ page }) => {
    const res = await page.goto('/pagina-que-nao-existe');
    expect(res?.status()).toBe(404);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main a[href="/"]')).toHaveCount(1);
  });

  test('o texto do pôster dos cards sem print tem opacidade cheia', async ({ page }) => {
    await page.goto('/');
    const op = await page.locator('#projeto-quest-contratado .kicker').evaluate((el) => getComputedStyle(el).opacity);
    expect(op).toBe('1');
  });
});

test.describe('texto longo no celular', () => {
  test.use({ viewport: { width: 375, height: 812 } });
  test.beforeEach(({}, info) => test.skip(info.project.name !== 'mobile', 'só no celular'));

  for (const path of ['/', '/projetos/zapsync/']) {
    test(`${path} não estoura a largura com um token longo em qualquer texto`, async ({ page }) => {
      await page.goto(path);
      await page.evaluate(() => {
        const token = ' github.com/Abner-Duarte/zapsync-showcase/blob/main/snippets/hybrid-search.js';
        document.querySelectorAll('main p, main li, main h1, main h2, main h3, main figcaption').forEach((el) => {
          el.append(token);
        });
      });
      const width = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(width).toBeLessThanOrEqual(375);
    });
  }
});
