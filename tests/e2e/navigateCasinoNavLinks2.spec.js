import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Casino Nav 2', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Navigating to group 2 Casino Nav Links and checking for titles', async ({
    page,
  }) => {
    // await page.locator('#primary-nav-sports-1').click();

    // // await expect(page.setTestIdAttribute('video-landing-page-heading')).toBeVisible();

    // await page.locator('#primary-nav-casino-0').waitFor({ state: 'visible' });
    // await page.locator('#primary-nav-casino-0').click();


    await page.getByRole('button', { name: 'Play now' }).click();
    // Click on Slots
    await page.waitForSelector('#secondary-nav-Slots', { state: 'visible' });
    await page.locator('#secondary-nav-Slots').click();
    await expect(page.getByTestId('heading-video-slots-page')).toBeVisible();

    // Click on Mini Games
    await page.waitForSelector('#secondary-nav-Mini-Games', { state: 'visible' });
    await page.locator('#secondary-nav-Mini-Games').click();
    await expect(page.getByTestId('heading-mini-games-page')).toBeVisible();

    // Click on Favorites
    await page.waitForSelector('#secondary-nav-Favorites', { state: 'visible' });
    await page.locator('#secondary-nav-Favorites').click();
    await expect(page.getByTestId('heading-favorites-page')).toBeVisible();

    // Click on Recommended
    await page.waitForSelector('#secondary-nav-Recommended', { state: 'visible' });
    await page.locator('#secondary-nav-Recommended').click();
    await expect(page.getByTestId('heading-recommended-games-page')).toBeVisible();

    // Click on Challenges
    await page.waitForSelector('#secondary-nav-Challenges', { state: 'visible' });
    await page.locator('#secondary-nav-Challenges').click();
    await expect(page.getByTestId('heading-challenges-page')).toBeVisible();

    // Click on Providers
    await page.waitForSelector('#secondary-nav-Providers', { state: 'visible' });
    await page.locator('#secondary-nav-Providers').click();
    await expect(page.getByTestId('heading-providers-page')).toBeVisible();
  });
});
