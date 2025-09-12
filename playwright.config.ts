import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config();

const testDir = defineBddConfig({
  features: 'features',
  steps: 'steps',
});

export default defineConfig({
  testDir,
  use: {
    headless: process.env.CI ? true : false,
    baseURL: process.env.BASE_URL,
    //video: 'on',
    launchOptions: {
      slowMo: 500, // slows down actions by 500ms
    },
  },
  reporter: 'html',
  retries: process.env.CI ? 2 : 0, // retry only on CI
  workers: process.env.CI ? 2 : undefined, // fewer workers on CI
  projects: [
    {
      name: 'smoke',
      testMatch: /.*\.feature\.spec\.js/,
      grep: /@smoke/,
    },
    {
      name: 'regression',
      testMatch: /.*\.feature\.spec\.js/,
      grep: /@regression/,
    },
  ],
});
