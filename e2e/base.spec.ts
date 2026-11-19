import { test, expect } from '@playwright/test';

test('a home em português responde com lang pt-BR', async ({ page }) => {
  const res = await page.goto('/');
  expect(res?.status()).toBe(200);
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
});

test('a home em inglês responde com lang en', async ({ page }) => {
  const res = await page.goto('/en/');
  expect(res?.status()).toBe(200);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('o body tem cor de fundo explícita', async ({ page }) => {
  await page.goto('/');
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(bg).not.toBe('rgba(0, 0, 0, 0)');
});
