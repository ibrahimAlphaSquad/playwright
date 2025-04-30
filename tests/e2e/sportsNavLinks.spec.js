import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Sports Page Test', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Navigate to all Sports Nav Links', async ({ page }) => {
    await expect(page.getByTestId('video-landing-page-heading')).toBeVisible();

    //Click on Sports button & wait to load the SportsBook page
    await page.locator('#primary-nav-sports-1').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-sports-1').click();

    //Click on Live button & wait to load the page
    await page.click('#sports-secondary-nav-live-sports');

    // Click on Betting history
    await page.click('#sports-secondary-nav-betting-history');

    // Click on Sports Settings
    await page.click('#sports-secondary-nav-sports-settings');
  });
});
