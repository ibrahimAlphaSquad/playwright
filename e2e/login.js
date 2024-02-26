const { test, expect } = require('@playwright/test');

module.exports = async ({ page }) => {
  await page.goto('https://www.monkeytilt.com/en-CA');
  // Click on Login button from Landing Page
  await page.getByRole('link', { name: 'Login' }).click();
  // Click on Username and fill up the field
  await page.getByPlaceholder('Username').fill('testingdevicevivo8488@gmail.com');
  // Click on Password and fill up the field
  await page.locator('//input[@placeholder="Password"]').fill('test1234');
  // Click on Login button and wait to load Home page
  await page.getByRole('button', { name: 'LOGIN' }).click();
};