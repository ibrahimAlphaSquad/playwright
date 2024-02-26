const { test, expect } = require('@playwright/test');
const login = require('./login');

test.describe('Casino Nav 2', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Navigating to group 2 Casino Nav Links and checking for titles', async ({
    page,
  }) => {
    // Click on Casino button & wait to load Lobby page
    await expect(
      page.getByRole("heading", { name: "MonkeyTilt" })
    ).toBeVisible();

    await page.getByRole("listitem").getByText("Casino").click();

    //Click on Slots button & wait to load page
    await page.getByRole("listitem").getByText("SLOTS").click();
    await expect(page.locator('//h4[contains(., "video slots")]')).toHaveText(/video slots/);

    //Click on Mini Games button & wait to load page
    await page.getByRole("listitem").getByText("MINI GAMES").click();
    await expect(page.locator('//h4[contains(., "mini games")]')).toHaveText(/mini games/);

    //Click on Favorites button & wait to load page
    await page.getByRole("listitem").getByText("FAVORITES").click();
    await expect(page.locator('//h4[contains(., "favorites")]')).toHaveText(/favorites/);

    //Click on Recommended button & wait to load page
    await page.getByRole("listitem").getByText("RECOMMENDED").click();
    await expect(page.locator('//h4[contains(., "recommended games")]')).toHaveText(/recommended games/);

    //Click on Challenges button & wait to load page
    await page.getByRole("listitem").getByText("CHALLENGES").click();
    await expect(page.locator('//h4[contains(., "challenges")]')).toHaveText(/challenges/);

    //Click on Providers button & wait to load page
    await page.getByRole("listitem").getByText("PROVIDERS").click();
    await expect(page.locator('//h3[contains(., "Providers")]')).toHaveText(/Providers/);
  });
});
