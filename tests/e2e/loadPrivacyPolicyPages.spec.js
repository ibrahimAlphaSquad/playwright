import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Privacy Policy Pages', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Privacy-policy policy page Load', async ({ page }) => {
    await page.goto('/privacy-policy?tab=policy');
    await expect(page).toHaveTitle('Privacy Policy | Monkey Tilt | VIP Casino');
  });
  test('Privacy-policy contact-details page Load', async ({ page }) => {
    await page.goto('/privacy-policy?tab=contact-details');
    await expect(page).toHaveTitle('Privacy Policy | Monkey Tilt | VIP Casino');
  });
});
