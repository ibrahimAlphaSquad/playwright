import { test } from '@playwright/test';
const login = require('./login'); // Assuming both files are in the same directory

test.describe('Primary Nav Links', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Clicking on all the Primary Nav buttons', async ({ page }) => {
    // await page.waitForURL('https://716f-2407-d000-b-2f48-4666-ea1c-e4c1-8712.ngrok-free.app/en-CA/');
    // Menu Click
    await page.locator('#hamburger-menu-button').waitFor({ state: 'visible' });
    await page.locator('#hamburger-menu-button').click();
    // Casino Click
    await page.locator('#primary-nav-casino-0').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-casino-0').click();
    // Sports Click
    await page.locator('#primary-nav-sports-1').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-sports-1').click();
    // User status
    await page.locator('#user_status').waitFor({ state: 'visible' });
    await page.locator('#user_status').click();
    //  Cashier
    await page.locator('#primary-nav-deposit-desktop').waitFor({ state: 'visible' });
    await page.locator('#primary-nav-deposit-desktop').click();
    // Close Cashier
    await page.locator('#close-cashier-modal').waitFor({ state: 'visible' });
    await page.locator('#close-cashier-modal').click();
  });
});