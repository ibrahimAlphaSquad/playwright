const { test } = require('@playwright/test');
const login = require('./login');

test.describe('Casino Secondary Nav 1', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Navigating to Casino Secondary Nav 1 and checking for titles', async ({
    page,
  }) => {
    // Click on Casino button & wait to load Lobby page
    await page.locator('#primary-nav-casino-0').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-casino-0').click({delay: 1000});

    //Click on Live Dealer button & wait to load page
    await page.click('#secondary-nav-Live-Dealer');
    await page.getByTestId('heading-live-games-page').waitFor({state: 'visible'});
    //Click on Table Games button & wait to load page
    await page.click('#secondary-nav-Table-Games');
    await page.getByTestId('heading-table-games-page').waitFor({state: 'visible'});
    //Click on Game Shows button & wait to load page
    await page.click('#secondary-nav-Game-Shows');
    await page.getByTestId('heading-game-shows-page').waitFor({state: 'visible'});
    //Click on Originals button & wait to load page
    await page.click('#secondary-nav-Originals');
    await page.getByTestId('heading-originals-page').waitFor({state: 'visible'});
  });
});
