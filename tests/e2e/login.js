module.exports = async ({ page }) => {
  await page.goto('/');
  // Click on Login button and fill the form
  await page.click('a[href="/login"]');
  // Click on Username and fill up the field
  await page.getByPlaceholder('Username').fill(process.env.USERNAME);
  // Click on Password and fill up the field
  await page
    .locator('//input[@placeholder="Password"]')
    .fill(process.env.PASSWORD);
  // Click on Login button and wait to load Home page
  await page.getByRole('button', { name: 'LOGIN' }).click();
};
