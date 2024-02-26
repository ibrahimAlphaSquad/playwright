import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Sports Pages', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
    test('Sports page Load', async ({ page }) => {
      await page.goto('/sports');
      await expect(page).toHaveTitle('Sportsbook Games | MonkeyTilt');
    });
    test('Live Sports page Load', async ({ page }) => {
      await page.goto('/sports/live-sports/all-sports/0/all/0');
      await expect(page).toHaveTitle('Sportsbook Games | MonkeyTilt');
    });
    test('Sports betting-history page Load', async ({ page }) => {
      await page.goto('/sports/betting-history');
      await expect(page).toHaveTitle('Sportsbook Games | MonkeyTilt');
    });
  });
});
