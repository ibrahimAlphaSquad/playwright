const { test, expect } = require('@playwright/test');
const login = require('./login');

test.describe('Sports Page Test', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });
  
  test('Clicking on all Sports Nav links', async ({ page }) => {
    //Home page is loaded
    //Click on Sports button & wait to load the SportsBook page
    await page.getByRole('listitem').getByText('Sports').click();
    //Click on Live button & wait to load the page
    await page.getByRole('button', { name: 'LIVE' }).click();
    // Click on BEtting history
    await page.getByRole('button', { name: 'BETTING HISTORY' }).click();
  });
});
