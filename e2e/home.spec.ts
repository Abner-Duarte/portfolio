import { test, expect } from '@playwright/test';

// Os dados importam imagens, que o Playwright não carrega; a ordem é a mesma de tests/data.test.ts.
const ORDER = ['data-pilot', 'deteccao-fraude', 'behappier', 'qa-verzel', 'prospeccao-zapsync', 'quest-contratado', 'reinos-eternos', 'tt2-otimizadores', 'd3code', 'userscript-chatwoot', 'simuladores-qa', 'jogos-python', 'desafio-python', 'arduino-portao', 'bot-whatsapp-gpt', 'barbearia', 'fatec-fighters', 'sysos'];

const SECTIONS = ['inicio', 'provas', 'zapsync', 'projetos', 'servicos', 'trajetoria', 'experiencia', 'stack', 'certificacoes', 'contato'];

for (const lang of ['pt', 'en'] as const) {
  const path = lang === 'pt' ? '/' : '/en/';

  test.describe(`home ${lang}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path);
    });

    test('as seções aparecem na ordem da spec', async ({ page }) => {
      const ids = await page.locator('main > section[id]').evaluateAll((els) => els.map((e) => e.id));
      expect(ids).toEqual(SECTIONS);
    });

    test('o topo tem nome, foto e os dois botões', async ({ page }) => {
      await expect(page.locator('h1')).toContainText('Abner Evandro Duarte');
      const photo = page.locator('#inicio img');
      await expect(photo).toHaveAttribute('alt', /.+/);
      await expect(page.locator('#inicio a[href="#projetos"]')).toBeVisible();
      await expect(page.locator('#inicio a[href="#contato"]')).toBeVisible();
    });

    test('a grade tem os 18 projetos na ordem dos dados', async ({ page }) => {
      const slugs = await page.locator('#projetos article').evaluateAll((els) => els.map((e) => e.getAttribute('data-slug')));
      expect(slugs).toEqual(ORDER);
      const titles = await page.locator('#projetos article h3').allTextContents();
      expect(titles.every((t) => t.trim().length > 0)).toBe(true);
    });

    test('projeto sem imagem mostra o bloco tipográfico', async ({ page }) => {
      const card = page.locator('#projetos article[data-slug="quest-contratado"]');
      await expect(card.locator('img')).toHaveCount(0);
      await expect(card.locator('[data-fallback]')).toBeVisible();
    });

    test('o destaque do ZapSync liga para a demo e para a vitrine', async ({ page }) => {
      await expect(page.locator('#zapsync a[href="https://www.zapsync-ia.com.br/demo"]')).toHaveCount(1);
      await expect(page.locator('#zapsync a[href="https://github.com/Abner-Duarte/zapsync-showcase"]')).toHaveCount(1);
    });

    test('o contato tem WhatsApp, e-mail, LinkedIn, GitHub e os currículos em PDF', async ({ page, request }) => {
      const c = page.locator('#contato');
      await expect(c.locator('a[href="https://wa.me/5517991816083"]')).toHaveCount(1);
      await expect(c.locator('a[href="mailto:abnerduartw@gmail.com"]')).toHaveCount(1);
      await expect(c.locator('a[href="https://www.linkedin.com/in/abner-evandro-duarte-79352523a/"]')).toHaveCount(1);
      await expect(c.locator('a[href="https://github.com/Abner-Duarte"]')).toHaveCount(1);
      for (const href of ['/cv/Abner_Evandro_Duarte_Curriculo_PT.pdf', '/cv/Abner_Evandro_Duarte_Resume_EN.pdf']) {
        await expect(c.locator(`a[href="${href}"]`)).toHaveCount(1);
        const res = await request.get(href);
        expect(res.status()).toBe(200);
        expect(res.headers()['content-type']).toContain('pdf');
      }
    });

    test('os links de prova dos serviços apontam para elementos que existem', async ({ page }) => {
      const missing = await page.locator('#servicos a[href^="#"]').evaluateAll((as) =>
        as.map((a) => a.getAttribute('href')!).filter((h) => !document.getElementById(h.slice(1))),
      );
      expect(missing).toEqual([]);
    });

    test('nenhuma imagem está quebrada', async ({ page }) => {
      await page.evaluate(async () => {
        const imgs = Array.from(document.images);
        imgs.forEach((i) => (i.loading = 'eager'));
        await Promise.all(imgs.map((i) => (i.complete ? null : new Promise((r) => i.addEventListener('load', r, { once: true }) || i.addEventListener('error', r, { once: true })))));
      });
      const broken = await page.locator('img').evaluateAll((imgs) =>
        (imgs as HTMLImageElement[]).filter((i) => i.naturalWidth === 0).map((i) => i.src),
      );
      expect(broken).toEqual([]);
    });
  });
}
