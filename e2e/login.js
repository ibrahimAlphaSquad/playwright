const { test, expect } = require('@playwright/test');

module.exports = async ({ page }) => {
  console.log("---------------------------------------------");
  console.log(${{secrets.USERNAME}});
  console.log("---------------------------------------------");
  
  await page.goto('https://www.monkeytilt.com/en-CA');
  // Click on Login button from Landing Page
  await page.getByRole('link', { name: 'Login' }).click();
  // Click on Username and fill up the field
  await page.getByPlaceholder('Username').fill(process.env.USERNAME);
  // Click on Password and fill up the field
  await page.locator('//input[@placeholder="Password"]').fill(process.env.PASSWORD);
  // Click on Login button and wait to load Home page
  await page.getByRole('button', { name: 'LOGIN' }).click();
};