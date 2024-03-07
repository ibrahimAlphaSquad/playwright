import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Public Pages', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });
  test('Responsible-gambling overview page Load', async ({ page }) => {
    await page.goto('/responsible-gambling?tab=gamble-safe');
    await expect(page).toHaveTitle(
      'Responsible Gambling | Monkey Tilt | VIP Casino',
    );
  });
  test('Self-exclusion page Load', async ({ page }) => {
    await page.goto('/responsible-gambling?tab=self-exlusion');
    await expect(page).toHaveTitle('Self Exclusion | Monkey Tilt | VIP Casino');
  });
  test('Responsible-gambling gambling-links page Load', async ({ page }) => {
    await page.goto('/responsible-gambling?tab=gambling-links');
    await expect(page).toHaveTitle(
      'Responsible Links | Monkey Tilt | VIP Casino',
    );
  });
});
