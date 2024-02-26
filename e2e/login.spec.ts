import { test } from "@playwright/test";

test("should navigate to monkeytilt", async ({ page }) => {
    await page.goto('https://staging.monkeytilt.com/');

    await page.locator('input[name="_vercel_password"]').fill("xB5vXCFtlrdpVsk");

    await page.locator('button:has-text("Log in")').click();

    // Click on Login button and fill the form
    await page.click('a[href="/login"]');
    // Click on Username and fill up the field
    // USERNAME=arslankhan
    await page.getByPlaceholder('Username').fill(process.env.USERNAME);
    // Click on Password and fill up the field
    // PASSWORD=test1234
    await page.locator('//input[@placeholder="Password"]').fill(process.env.PASSWORD);
    // Click on Login button and wait to load Home page
    await page.getByRole('button', { name: 'LOGIN' }).click();
});