import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Casino Nav 1', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Navigating to group 1 Casino Nav Links and checking for titles', async ({
    page,
  }) => {
    // await page.locator('#primary-nav-sports-1').click();

    // await expect(page.setTestIdAttribute('video-landing-page-heading')).toBeVisible();

    // await page.getByRole('button', { name: 'Play now' }).click();

    await page.locator('#landing-page-casino').waitFor({ state: 'visible' });
    await page.locator('#landing-page-casino').click();

    await page.locator('#primary-nav-casino-0').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-casino-0').click();
    
    // Click on Live Dealer
    await page.waitForSelector('#secondary-nav-Live-Dealer', { state: 'visible' });
    await page.locator('#secondary-nav-Live-Dealer').click();
    await expect(page.getByTestId('heading-live-games-page')).toBeVisible();

    // Click on Table Games
    await page.waitForSelector('#secondary-nav-Table-Games', { state: 'visible' });
    await page.locator('#secondary-nav-Table-Games').click();
    await expect(page.getByTestId('heading-table-games-page')).toBeVisible();

    // Click on Game Shows
    // await page.locator('#primary-nav-casino-0').waitFor({ state: 'visible' });
    // await page.locator('#primary-nav-casino-0').click();
    await page.waitForSelector('#secondary-nav-Game-Shows', { state: 'visible' });
    await page.locator('#secondary-nav-Game-Shows').click();
    await expect(page.getByTestId('heading-game-shows-page')).toBeVisible();

    // Click on Originals
    await page.waitForSelector('#secondary-nav-Originals', { state: 'visible' });
    await page.locator('#secondary-nav-Originals').click();
    await expect(page.getByTestId('heading-originals-page')).toBeVisible();
  });
});
