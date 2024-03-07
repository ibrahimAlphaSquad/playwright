import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Auth Pages', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });
  test('Logged-in landing page Load', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(
      'Monkey Tilt | Online Casino & Betting Site | VIP Casino',
    );
  });
  test('Casino Lobby page Load', async ({ page }) => {
    await page.goto('/casino');
    await expect(page).toHaveTitle(
      'Crypto Casino and VIP Gaming Site | Monkey Tilt | VIP Casino',
    );
  });
});
