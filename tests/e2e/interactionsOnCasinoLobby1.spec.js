const { test } = require('@playwright/test');
const login = require('./login');

test.describe('Interactions on Casino Lobby 1', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Checking the Games and Bets Table tabs on Casino Lobby', async ({
    page,
  }) => {
    // Click on Casino button & wait to load Lobby page & inside lobby "My Bets" page
    await page.locator('#primary-nav-casino-0').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-casino-0').click({delay: 1000});
    // Most Popular
    await page.click('#Most-Popular');

    // Favorites click
    await page.click('#Favorites > p');
    
    // Recent click
    await page.click('#Recents');
    
    // Lucky Games click
    await page.click('#Lucky-Games');
  });
});
