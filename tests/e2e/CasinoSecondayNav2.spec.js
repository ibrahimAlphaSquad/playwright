const { test } = require('@playwright/test');
const login = require('./login');

test.describe('Casino Secondary Nav 2', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Navigating to Casino Secondary Nav 2 and checking for titles', async ({
    page,
  }) => {
    // Click on Casino button & wait to load Lobby page
    await page.locator('#primary-nav-casino-0').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-casino-0').click({delay: 1000});

    //Click on Slots button & wait to load page
    await page.click('#secondary-nav-Slots');
    await page.getByTestId('heading-video-slots-page').waitFor({state: 'visible'});
    //Click on Mini Games button & wait to load page
    await page.click('#secondary-nav-Mini-Games');
    await page.getByTestId('heading-mini-games-page').waitFor({state: 'visible'});

    //Click on Favorites button & wait to load page
    await page.click('#secondary-nav-Favorites');
    await page.getByTestId('heading-favorites-page').waitFor({state: 'visible'});

    //Click on Recommended button & wait to load page
    await page.click('#secondary-nav-Recommended');
    await page.getByTestId('heading-recommended-games-page').waitFor({state: 'visible'});

    //Click on Challenges button & wait to load page
    await page.click('#secondary-nav-Challenges');
    await page.getByTestId('heading-challenges-page').waitFor({state: 'visible'});

    //Click on Providers button & wait to load page
    await page.click('#secondary-nav-Providers');
    await page.getByTestId('heading-providers-page').waitFor({state: 'visible'});

  });
});
