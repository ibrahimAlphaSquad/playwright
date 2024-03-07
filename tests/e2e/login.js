module.exports = async ({ page }) => {
  await page.goto('/');
  // Click on Login button from Landing Page
  page.locator('input').fill('xB5vXCFtlrdpVsk');
  page.locator('.submit').click();
  await page.click('[href="/login"]');
  // Click on Username and fill up the field
  await page.getByPlaceholder('Username').fill('sheharyar@alphasquad.tech');
  // Click on Password and fill up the field
  await page.locator('//input[@placeholder="Password"]').fill('test1234');
  // Click on Login button and wait to load Home page
  await page.getByRole('button', { name: 'LOGIN' }).click({setTimeout: 10000});
};