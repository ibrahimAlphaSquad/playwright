import { test } from '@playwright/test';

test('Navigating to Forgot Password and entering an email', async ({
  page,
}) => {
  await page.goto('/');
  // Click on Login button
  await page.click('a[href="/login"]');
  // Click on Forgot Password button
  await page.getByRole('button', { name: 'Forgot password?' }).click();
  // Click on Enter Email field and enter the email
  await page.getByPlaceholder('Email').fill(process.env.EMAIL);
  // Click on Back button
  await page.getByRole('button', { name: 'Back' }).click();
});
