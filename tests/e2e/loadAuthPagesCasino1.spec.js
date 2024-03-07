import { test, expect } from '@playwright/test';
import login from './login';

test.describe('Loading Casino Pages group 1', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
    test('Casino live-games page Load', async ({ page }) => {
      await page.goto('/casino/groups/live-games');
      await expect(page).toHaveTitle(
        'Play Live Casino Games | Monkey Tilt | VIP Casino',
      );
    });
    test('Casino game-shows page Load', async ({ page }) => {
      await page.goto('/casino/groups/game-shows');
      await expect(page).toHaveTitle(
        'Play Casino Game Shows | Monkey Tilt | VIP Casino',
      );
    });
    test('Casino originals page Load', async ({ page }) => {
      await page.goto('/casino/groups/originals');
      await expect(page).toHaveTitle(
        'Play Monkey Tilt Originals | Monkey Tilt | VIP Casino',
      );
    });
    test('Casino video-slots page Load', async ({ page }) => {
      await page.goto('/casino/groups/video-slots');
      await expect(page).toHaveTitle(
        'Play Online Slots & Crypto Casino | Monkey Tilt | VIP Casino',
      );
    });
  });
});
