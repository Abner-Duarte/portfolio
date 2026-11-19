import { test, expect } from '@playwright/test';

const SLUGS = ['zapsync', 'data-pilot', 'deteccao-fraude', 'behappier', 'qa-verzel'];
const HEADINGS = {
  pt: ['Problema', 'O que fiz', 'Decisões', 'Resultados'],
  en: ['Problem', 'What I built', 'Decisions', 'Results'],
};

for (const lang of ['pt', 'en'] as const) {
  for (const slug of SLUGS) {
    const path = lang === 'pt' ? `/projetos/${slug}` : `/en/projects/${slug}`;

    test(`${path} tem título e as quatro seções`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('h1')).not.toBeEmpty();
      const h2 = (await page.locator('main h2').allTextContents()).map((t) => t.trim());
      for (const h of HEADINGS[lang]) expect(h2).toContain(h);
    });
  }

  test(`todo link de estudo de caso da home (${lang}) abre sem 404`, async ({ page, request }) => {
    await page.goto(lang === 'pt' ? '/' : '/en/');
    const prefix = lang === 'pt' ? '/projetos/' : '/en/projects/';
    const hrefs = await page.locator(`a[href^="${prefix}"]`).evaluateAll((as) => [...new Set(as.map((a) => a.getAttribute('href')!))]);
    expect(hrefs.length).toBe(5);
    for (const h of hrefs) expect((await request.get(h)).status(), h).toBe(200);
  });
}

test('a página do ZapSync traz os números do benchmark', async ({ page }) => {
  await page.goto('/projetos/zapsync');
  const text = await page.locator('main').innerText();
  expect(text).toContain('97%');
  expect(text).toContain('89%');
  expect(text).toContain('100%');
});
