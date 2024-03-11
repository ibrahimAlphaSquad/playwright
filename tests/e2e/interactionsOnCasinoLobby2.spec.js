const { test } = require('@playwright/test');
const login = require('./login');

test.describe('Interactions on Casino Lobby 2', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Checking the Games and Bets Table tabs on Casino Lobby', async ({
    page,
  }) => {
    //Click on Casnio Button
    await page.click('#primary-nav-casino-0', {delay:1000});

    // Click on All Wins button
    await page.click('#All-Wins');

    // Click on My Bets button
    await page.click('#My-Bets');

    // Click on High Rollers buttons
    await page.click('#High-Rollers');
  });
});
