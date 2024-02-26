import { test, expect } from '@playwright/test';

test('Landing page basic load', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(
    'Monkey Tilt | Online Casino & Betting Site | VIP Casino',
  );
});

test('Login page basic load', async ({ page }) => {
  await page.goto('/login');
  await expect(page).toHaveTitle('Login | MonkeyTilt');
});

test('Forgot password page basic load', async ({ page }) => {
  await page.goto('/forgot-password');
  await expect(page).toHaveTitle('Forgot password | MonkeyTilt');
});