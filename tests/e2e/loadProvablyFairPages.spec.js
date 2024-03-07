import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Provably Fair Pages', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Provably-fair overview page Load', async ({ page }) => {
    await page.goto('/provably-fair?tab=overview');
    await expect(page).toHaveTitle('Provably Fair | Monkey Tilt | VIP Casino');
  });
  test('Provably-fair implementation page Load', async ({ page }) => {
    await page.goto('/provably-fair?tab=implementation');
    await expect(page).toHaveTitle('Provably Fair | Monkey Tilt | VIP Casino');
  });
});
