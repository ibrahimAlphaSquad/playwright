import { test } from '@playwright/test';

test.describe('Interactions on Casino Lobby 1', () => {
  test('Checking the Games and Bets Table tabs on Casino Lobby', async ({
    page,
  }) => {
    await page.goto('/');
    // Click on Casino button & wait to load Lobby page & inside lobby "My Bets" page
    await page.click('#primary-nav-casino-0');

    // Most Popular
    await page.click('#Most-Popular');

    // // Favorites click
    // await page.click('#Favorites > p');

    // // Recent click
    // await page.click('#Recents');

    // Lucky Games click
    await page.click('#Lucky-Games');
  });
});
