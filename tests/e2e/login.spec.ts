import { test } from "@playwright/test";

test("should navigate to home page", async ({ page }) => {
    console.log("Running test");
    console.log("Username: ", process.env.USERNAME);
    console.log("Password: ", process.env.PASSWORD);
    
    await page.goto('/');

    // Click on Username and fill up the field
    await page.getByPlaceholder('email').fill(process.env.USERNAME);
    // Click on Password and fill up the field
    await page.getByPlaceholder('password').fill(process.env.PASSWORD);
    // Click on Login button and wait to load Home page
    await page.getByRole('button', { name: 'Login' }).click();
});