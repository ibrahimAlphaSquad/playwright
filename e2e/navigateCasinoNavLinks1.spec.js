const { test, expect } = require('@playwright/test');
const login = require('./login');

test.describe('Casino Nav 1', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Navigating to group 1 Casino Nav Links and checking for titles', async ({
    page,
  }) => {
    //Click on Casino button & wait to load Lobby page
    await expect(
      page.getByRole('heading', { name: 'MonkeyTilt' }),
    ).toBeVisible();
    await page.getByRole('listitem').getByText('Casino').click();
    //Click on Live Dealer button & wait to load page
    await page.getByRole('listitem').getByText('LIVE DEALER').click();
    await expect(
      page.getByRole('heading', { name: 'LIVE GAMES' }),
    ).toBeVisible();
    //Click on Table Games button & wait to load page
    await page.getByRole('listitem').getByText('TABLE GAMES').click();
    await expect(
      page.getByRole('heading', { name: 'TABLE GAMES' }),
    ).toBeVisible();
    //Click on Game Shows button & wait to load page
    await page.getByRole('listitem').getByText('GAME  SHOWS').click();
    await expect(
      page.getByRole('heading', { name: 'GAME SHOWS' }),
    ).toBeVisible();
    //Click on Originals button & wait to load page
    await page.getByRole('listitem').getByText('ORIGINALS').click();
    await expect(
      page.getByRole('heading', { name: 'ORIGINALS' }),
    ).toBeVisible();
  });
});
