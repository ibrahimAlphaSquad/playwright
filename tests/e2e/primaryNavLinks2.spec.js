const { test, expect } = require('@playwright/test');
const login = require('./login'); // Assuming both files are in the same directory

test.describe('Primary Nav Links', () => {
    test.beforeEach(async ({ page }) => {
        await login({ page }); // Execute login function before each test
    });

    test('Clicking on all the Primary Nav buttons', async ({ page }) => {
        // await page.waitForURL('https://staging.monkeytilt.com/en-CA');
        //Click on Casino button & wait to load Lobby page
        //  Search
        await page.locator('#primary-nav-search-desktop').waitFor({ state: 'visible' });
        await page.locator('#primary-nav-search-desktop').click();
        // Search Close
        await page.locator('#search-modal-crossIcon').waitFor({ state: 'visible' });
        await page.locator('#search-modal-crossIcon').click();
        //  User Profile
        await page.locator('#primary-nav-user-desktop').waitFor({ state: 'visible' });
        await page.locator('#primary-nav-user-desktop').click();
        //  Primary Nav Chat
        await page.locator('#primary-nav-chat').waitFor({ state: 'visible' });
        await page.locator('#primary-nav-chat').click();
        // Close Chat
        await page.locator('#close-chat').waitFor({ state: 'visible' });
        await page.locator('#close-chat').click();
    });
});