import { test, expect } from '@playwright/test';

test('Navigating to Login from Landing Page', async ({ page }) => {
  // Navigate to the root page
  await page.goto('/');

  // Expect the page title to contain "Online Casino"
  await expect(page).toHaveTitle(/Online Casino/);

  // Click on the login button
  // Make sure 'Login' matches the exact text on the button
  await page.click('a[href="/login"]');

  // Expect a login form to be visible
  await expect(page).toHaveTitle('Login | MonkeyTilt');
});
