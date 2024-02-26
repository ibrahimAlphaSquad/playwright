import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Public Pages', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Home page Load', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(
      'Monkey Tilt | Online Casino & Betting Site | VIP Casino',
    );
  });
  test('Register page Load', async ({ page }) => {
    await page.goto('/register');
    await expect(page).toHaveTitle('Register | MonkeyTilt');
  });
  test('Forgot-password page Load', async ({ page }) => {
    await page.goto('/forgot-password');
    await expect(page).toHaveTitle('Forgot password | MonkeyTilt');
  });
});
