import { test, expect } from '@playwright/test';

test('Navigating and Registering a user', async ({ page }) => {
  await page.goto('/');

  //Click on Signup button from landing page
  await page.getByRole('link', { name: 'Register' }).click();
  //Write First Name here
  await page.getByPlaceholder('First Name').fill('Test');
  // //Write Last Name here
  await page.getByPlaceholder('Last Name').fill('Test2');
  // //Write username here
  await page.getByPlaceholder('Username').fill('testing');
  // //Write email here
  await page.getByPlaceholder('Email').fill(process.env.EMAIL);
  //Write password here
  await page.locator('//input[@placeholder="Password"]').fill('Test@1234546');
  //Click to confirm password
  await page.getByPlaceholder('Confirm your Password').fill('Test@1234546');
  //Remember invite code
  await page.getByPlaceholder('Invite code').fill('123');

  // Email marketing
  // await page.locator(':nth-child(1) > div > label.flex > .w-8').click();
  // // Sms marketing
  // await page.locator('.mt-3 > div > label.flex > .w-8').click();

  //Click on checkbox my Account button
  await page.locator('.checkmark').click();
  //click on create account
  await page.getByRole('button', { name: 'CREATE MY ACCOUNT' }).click();
});
