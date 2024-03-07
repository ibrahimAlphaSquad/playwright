import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Support Pages', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });
  test('Licenses page Load', async ({ page }) => {
    await page.goto('/licenses');
    await expect(page).toHaveTitle('Licenses | Monkey Tilt | VIP Casino');
  });
  test('Aml-policy page Load', async ({ page }) => {
    await page.goto('/aml-policy?tab=policy');
    await expect(page).toHaveTitle(
      'Anti Money Laundering Policy | Monkey Tilt | VIP Casino',
    );
  });
  test('Terms-of-service page Load', async ({ page }) => {
    await page.goto('/terms-of-service?tab=terms-of-service');
    await expect(page).toHaveTitle(
      'Terms and Conditions | Monkey Tilt | VIP Casino',
    );
  });
});
