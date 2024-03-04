import { test } from "@playwright/test";

test("should navigate to monkeytilt", async ({ page }) => {
    console.log("Running test");
    console.log("Username: ", process.env.USERNAME);
    console.log(" Password: ", process.env.PASSWORD);
    
    // Navigate to the monkeytilt website
    await page.goto('https://staging.monkeytilt.com/');

    // xB5vXCFtlrdpVsk
    await page.locator('input[name="_vercel_password"]').fill("fail test");

    await page.locator('button:has-text("Log in")').click();

    // Click on Login button and fill the form
    await page.click('a[href="/login"]');
    // Click on Username and fill up the field
    await page.getByPlaceholder('Username').fill(process.env.USERNAME);
    // Click on Password and fill up the field
    await page.locator('//input[@placeholder="Password"]').fill(process.env.PASSWORD);
    // Click on Login button and wait to load Home page
    await page.getByRole('button', { name: 'LOGIN' }).click();
});