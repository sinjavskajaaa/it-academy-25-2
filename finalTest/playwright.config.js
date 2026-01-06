// @ts-check
import { defineConfig, devices } from '@playwright/test';

export const baseURL = 'https://www.21vek.by/';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: 'html' ,

  use: {
    baseURL: baseURL,
    trace: 'retain-on-failure',
      video: 'retain-on-failure',
      headless: false,
      storageState: undefined,
      contextOptions: {
        storageState: undefined
      },
  },

  projects: [
      {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
          args: ['--start-maximized'],
      },
  ],
});

