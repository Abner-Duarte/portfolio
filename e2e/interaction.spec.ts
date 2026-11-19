import { test, expect } from '@playwright/test';

const CASES = ['zapsync', 'data-pilot', 'deteccao-fraude', 'behappier', 'qa-verzel'];

test.describe('tema', () => {
  test('o botão alterna o tema e a escolha persiste ao recarregar', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    const html = page.locator('html');
    await page.getByRole('button', { name: /tema|theme/i }).click();
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await page.reload();
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await page.getByRole('button', { name: /tema|theme/i }).click();
    await expect(html).toHaveAttribute('data-theme', 'light');
  });

  test('com localStorage bloqueado a página carrega e o tema ainda alterna', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.addInitScript(() => {
      Storage.prototype.getItem = () => {
        throw new Error('blocked');
      };
      Storage.prototype.setItem = () => {
        throw new Error('blocked');
      };
    });
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    await page.getByRole('button', { name: /tema|theme/i }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    expect(errors).toEqual([]);
  });
});

test.describe('sem JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  test('a home mostra o nome e os 18 projetos', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Abner Evandro Duarte');
    await expect(page.locator('#projetos article')).toHaveCount(18);
  });
});

test.describe('troca de idioma', () => {
  test('na página de projeto leva para a mesma página no outro idioma', async ({ page }) => {
    await page.goto('/projetos/data-pilot');
    await page.locator('a[hreflang="en"]').first().click();
    await expect(page).toHaveURL(/\/en\/projects\/data-pilot\/?$/);
    await page.locator('a[hreflang="pt-BR"]').first().click();
    await expect(page).toHaveURL(/\/projetos\/data-pilot\/?$/);
  });

  test('na home leva para a home do outro idioma', async ({ page }) => {
    await page.goto('/');
    await page.locator('a[hreflang="en"]').first().click();
    await expect(page).toHaveURL(/\/en\/?$/);
  });
});

test.describe('celular', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  const pages = ['/', '/en/', ...CASES.map((s) => `/projetos/${s}`), ...CASES.map((s) => `/en/projects/${s}`)];
  for (const path of pages) {
    test(`${path} não tem rolagem horizontal em 375 px`, async ({ page }) => {
      await page.goto(path);
      const width = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(width).toBeLessThanOrEqual(375);
    });
  }

  test('o menu abre, mostra as seções e fecha ao clicar num link', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: /menu/i });
    const nav = page.locator('#menu-principal');
    await expect(nav).toBeHidden();
    await toggle.click();
    await expect(nav).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await nav.locator('a[href$="#contato"]').click();
    await expect(nav).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});

test.describe('desktop', () => {
  test.use({ viewport: { width: 1440, height: 900 } });
  test('a navegação aparece sem precisar do menu', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#menu-principal')).toBeVisible();
    await expect(page.getByRole('button', { name: /menu/i })).toBeHidden();
  });
});
