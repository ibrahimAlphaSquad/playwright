const { test } = require('@playwright/test');
const login = require('./login');

test.describe('Sports Page Test', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Navigate to all Sports Nav Links', async ({ page }) => {
    //Home page is loaded
    //Click on Sports button & wait to load the SportsBook page
    await page.locator('#primary-nav-sports-1').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-sports-1').dblclick({delay:1000});
    // Click on Sportsbook    
    await page.click('#sports-secondary-nav-sportsbook', {delay:1000});
    //Click on Live button & wait to load the page
    await page.click('#sports-secondary-nav-live-sports', {delay:1000});
    // Click on Betting history
    await page.click('#sports-secondary-nav-betting-history', {delay:1000});
    // Click on Sports Settings
    await page.click('#sports-secondary-nav-sports-settings', {delay:1000});
  });
});