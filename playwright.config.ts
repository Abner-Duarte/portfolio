import { defineConfig, devices } from '@playwright/test';

const external = process.env.BASE_URL;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: external ?? 'http://localhost:4321' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { ...devices['Desktop Chrome'], viewport: { width: 375, height: 812 }, isMobile: false } },
  ],
  webServer: external
    ? undefined
    : { command: 'npm run build && npm run preview', url: 'http://localhost:4321', reuseExistingServer: false, timeout: 180_000 },
});
