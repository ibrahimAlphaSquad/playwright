import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Casino Pages group 2', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
    test('Casino mini-games page Load', async ({ page }) => {
      await page.goto('/casino/groups/mini-games');
      await expect(page).toHaveTitle(
        'Play Mini Games | Monkey Tilt | VIP Casino',
      );
    });
    console.log("---------------------------------------------");
    console.log(${{secrets.USERNAME}});
    console.log("---------------------------------------------");
    test('Casino Favorites page Load', async ({ page }) => {
      await page.goto('/casino/favorites');
      await expect(page).toHaveTitle('My Favorites | Monkey Tilt | VIP Casino');
    });
    test('Casino Providers page Load', async ({ page }) => {
      await page.goto('/casino/providers');
      await expect(page).toHaveTitle(
        'Casino Game Providers | Monkey Tilt | VIP Casino',
      );
    });
    test('Casino Provider NetEnt', async ({ page }) => {
      await page.goto('/casino/providers/Net-Ent?subVendorId=7');
      await expect(page).toHaveTitle(
        'Net Ent Gaming Live Casino | Monkey Tilt | VIP Casino',
      );
    });
  });
});
