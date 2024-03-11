const { test, expect } = require('@playwright/test');

module.exports = async ({ page }) => {
  await page.goto('/');
  await page.click('[href="/login"]');
  // Click on Username and fill up the field
  await page.getByPlaceholder('Username').fill('abdullah01.alphasquad@gmail.com');
  // Click on Password and fill up the field
  await page.locator('//input[@placeholder="Password"]').fill('test@1234');
  // Click on Login button and wait to load Home page
  await page.getByRole('button', { name: 'LOGIN' }).click();
};