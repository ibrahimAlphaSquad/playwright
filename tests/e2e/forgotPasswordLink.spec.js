import { test, expect } from '@playwright/test';

test('navigating to Forgot Password and entering an email', async ({ page }) => {
  //Go to Monkeytilt
  await page.goto('https://monkeytilt.com/');
  // Click on Login button
  await page.click('[href="/login"]');
  // Click on Forgot Password button
  await page.getByRole('button', { name: 'Forgot password?' }).click();
  // Click on Enter Email field and enter the email
  await page.getByPlaceholder('Email').fill('test@gmail.com');
  // Click on Back button
  await page.getByRole('button', { name: 'Back' }).click();
});
