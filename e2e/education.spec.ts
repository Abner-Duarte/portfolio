import { test, expect } from '@playwright/test';

test('a home em português mostra a formação na Fatec', async ({ page }) => {
  await page.goto('/');
  const s = page.locator('#certificacoes');
  await expect(s.locator('h2')).toHaveText('Formação e certificações');
  await expect(s).toContainText('Tecnólogo em Informática para Negócios');
  await expect(s).toContainText('FATEC');
  await expect(s).toContainText('2026');
});

test('a home em inglês mostra a formação na Fatec', async ({ page }) => {
  await page.goto('/en/');
  const s = page.locator('#certificacoes');
  await expect(s.locator('h2')).toHaveText('Education and certifications');
  await expect(s).toContainText('Information Technology for Business');
  await expect(s).toContainText('FATEC');
});
