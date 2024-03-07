import { defineConfig } from '@playwright/test';

const baseURL = "https://staging.monkeytilt.com/en-CA";

export default defineConfig({
  testDir: 'tests/e2e',

  // Run all tests in parallel.
  fullyParallel: false,

  // Retry on CI only.
  retries: 2,

  // Opt out of parallel tests on CI.
  workers: 1,
  
  // Set a timeout for individual tests
  timeout: 600000,

  // Set a global timeout for the entire test suite
  globalTimeout: 600000,

  // Choose a reporter for test results
  reporter: 'list',

  // Customize test execution behavior
  use: {
    trace : "on",
    screenshot: "only-on-failure",
    baseURL,
    headless: true, // Show browser windows during execution
    video: 'on-first-retry', // Record video when a test fails
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 },
      },
    }
  ],
});