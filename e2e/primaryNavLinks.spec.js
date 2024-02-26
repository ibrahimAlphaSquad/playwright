const { test, expect } = require('@playwright/test');
const login = require('./login'); // Assuming both files are in the same directory

test.describe('Primary Nav Links', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Clicking on all the Primary Nav buttons', async ({ page }) => {
    // Click on Casino button & wait to load page
    await page.locator('.gap-4 > :nth-child(1)').click();
    // Click on Sports button & wait to load the page
    await page.locator('//li[normalize-space()="Sports"]').click();
    // Click on Poker
    await page.locator('.gap-4 > :nth-child(3)').isVisible();
    // Click on Crypto
    await page.locator('.gap-4 > :nth-child(4)').isVisible();
    await page.locator('.gap-4 > :nth-child(5)').isVisible();
    await page.locator('.gap-4 > :nth-child(6)').isVisible();
    // Click on VIP button to see the VIPs
    await page.locator('.border-t > div.py-1').click();
    // Click on Wallet button to see the wallet
    await page.locator('.border-t > .relative > #user_status').click();
    // Click on search icon
    await page
      .locator(
        "//button[@class='text-white p-1 border rounded border-transparent hover:bg-zinc-800 bg-zinc-900']",
      )
      .nth(0)
      .click();
    await page
      .locator(
        'body > div.md\\:block.hidden > div.w-full.xl\\:max-w-\\[960px\\].z-\\[102\\].\\31 xl\\:max-w-\\[1140px\\].max-h-\\[602px\\].xl\\:max-h-\\[628px\\].max-w-\\[700px\\].pb-6.\\31 xl\\:max-h-\\[707px\\].overflow-hidden.searchbackground.fixed.inset-0.border.rounded-xl.backdrop-blur-\\[22px\\].border-zinc-800.m-auto > div.pt-6.px-6 > div > div.flex.items-center.gap-5.w-full > span',
      )
      .click();
    // Click on Profile icon
    await page.locator('.border-t > :nth-child(4)').click();
    // Click on Menu icon
    await page.locator('.border-t > :nth-child(5)').click();
    // Click on Menu icon again to hide menu
    await page.locator('.border-t > :nth-child(5)').click();
    // Click on Chatbot icon
    await page.locator('.gap-2 > :nth-child(2) > .text-white').click();
    await page
      .locator(
        'body > aside > div.w-full.py-5.sm\\:py-\\[26px\\].px-5.flex.justify-between.items-center.primaryNavigationGradient.customborder.font-secondary.font-medium.text-white > button > svg',
      )
      .click();
  });
});
