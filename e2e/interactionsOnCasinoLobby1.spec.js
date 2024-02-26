const { test } = require('@playwright/test');
const login = require('./login');

test.describe('Interactions on Casino Lobby', () => {
  test.beforeEach(async ({ page }) => {
    await login({ page }); // Execute login function before each test
  });

  test('Checking the Games and Bets Table tabs on Casino Lobby', async ({
    page,
  }) => {
    // Click on Casino button & wait to load Lobby page & inside lobby "My Bets" page
    await page.locator('.gap-4 > :nth-child(1)').click();

    // Most Popular
    await page
      .locator(
        'body > div.flex.w-full.h-full > div.\\@container\\/main.relative.z-\\[100\\].w-full.transition-all.duration-400 > div.w-full.min-h-screen.\\@3xl\\/main\\:min-h-fit > main > div > div.pt-12.\\@3xl\\/main\\:pt-4 > div.space-y-10.\\@3xl\\/main\\:space-y-12 > div.bg-catogories.p-3.\\@3xl\\/main\\:p-5.border.border-white.border-opacity-10.backdrop-blur-\\[21px\\].rounded.backdrop-filter.relative.\\@3xl\\/main\\:min-h-\\[281px\\].\\@\\[90rem\\]\\/main\\:min-h-\\[344px\\] > div.hidden.\\@3xl\\/main\\:block.relative.pb-4.\\@5xl\\/main\\:pb-3\\.5.border-b.border-\\[\\#3F3F46\\] > div > div:nth-child(1) > div',
      )
      .isVisible();
    // Favorites click
    await page
      .locator(
        'body > div.flex.w-full.h-full > div.\\@container\\/main.relative.z-\\[100\\].w-full.transition-all.duration-400 > div.w-full.min-h-screen.\\@3xl\\/main\\:min-h-fit > main > div > div.pt-12.\\@3xl\\/main\\:pt-4 > div.space-y-10.\\@3xl\\/main\\:space-y-12 > div.bg-catogories.p-3.\\@3xl\\/main\\:p-5.border.border-white.border-opacity-10.backdrop-blur-\\[21px\\].rounded.backdrop-filter.relative.\\@3xl\\/main\\:min-h-\\[281px\\].\\@\\[90rem\\]\\/main\\:min-h-\\[344px\\] > div.hidden.\\@3xl\\/main\\:block.relative.pb-4.\\@5xl\\/main\\:pb-3\\.5.border-b.border-\\[\\#3F3F46\\] > div > div:nth-child(2) > div',
      )
      .click();
    // Recent click
    await page
      .locator(
        'body > div.flex.w-full.h-full > div.\\@container\\/main.relative.z-\\[100\\].w-full.transition-all.duration-400 > div.w-full.min-h-screen.\\@3xl\\/main\\:min-h-fit > main > div > div.pt-12.\\@3xl\\/main\\:pt-4 > div.space-y-10.\\@3xl\\/main\\:space-y-12 > div.bg-catogories.p-3.\\@3xl\\/main\\:p-5.border.border-white.border-opacity-10.backdrop-blur-\\[21px\\].rounded.backdrop-filter.relative.\\@3xl\\/main\\:min-h-\\[281px\\].\\@\\[90rem\\]\\/main\\:min-h-\\[344px\\] > div.hidden.\\@3xl\\/main\\:block.relative.pb-4.\\@5xl\\/main\\:pb-3\\.5.border-b.border-\\[\\#3F3F46\\] > div > div:nth-child(3) > div',
      )
      .click();
    // Lucky Games click
    await page
      .locator(
        'body > div.flex.w-full.h-full > div.\\@container\\/main.relative.z-\\[100\\].w-full.transition-all.duration-400 > div.w-full.min-h-screen.\\@3xl\\/main\\:min-h-fit > main > div > div.pt-12.\\@3xl\\/main\\:pt-4 > div.space-y-10.\\@3xl\\/main\\:space-y-12 > div.bg-catogories.p-3.\\@3xl\\/main\\:p-5.border.border-white.border-opacity-10.backdrop-blur-\\[21px\\].rounded.backdrop-filter.relative.\\@3xl\\/main\\:min-h-\\[281px\\].\\@\\[90rem\\]\\/main\\:min-h-\\[344px\\] > div.hidden.\\@3xl\\/main\\:block.relative.pb-4.\\@5xl\\/main\\:pb-3\\.5.border-b.border-\\[\\#3F3F46\\] > div > div:nth-child(4) > div',
      )
      .click();

    // My Bets inside details
    await page
      .locator(
        'body > div.flex.w-full.h-full > div.\\@container\\/main.relative.z-\\[100\\].w-full.transition-all.duration-400 > div.w-full.min-h-screen.\\@3xl\\/main\\:min-h-fit > main > div > div.flex.flex-col.space-y-10.\\@3xl\\/main\\:space-y-12.pt-10.\\@3xl\\/main\\:pt-12 > div.mx-auto.w-full > div.flex.flex-col.gap-5 > div > div.w-full.border-b.hidden.\\@3xl\\/main\\:flex.gap-12.cursor-pointer.border-zinc-700 > button.\\@3xl\\/main\\:-tracking-\\[0\\.35px\\].\\@5xl\\/main\\:-tracking-\\[0\\.45px\\].pb-5.w-full.max-w-\\[180px\\].\\@\\[40rem\\]\\/main\\:max-w-\\[224px\\].\\@3xl\\/main\\:max-w-fit.text-white.font-semibold.break-words.font-Mulish.\\@\\[40rem\\]\\/main\\:w-full.\\@5xl\\/main\\:w-auto.text-sm.\\@5xl\\/main\\:text-lg',
      )
      .isVisible();
    await page
      .locator(
        'body > div.flex.w-full.h-full > div.\\@container\\/main.relative.z-\\[100\\].w-full.transition-all.duration-400 > div.w-full.min-h-screen.\\@3xl\\/main\\:min-h-fit > main > div > div.flex.flex-col.space-y-10.\\@3xl\\/main\\:space-y-12.pt-10.\\@3xl\\/main\\:pt-12 > div.mx-auto.w-full > div.flex.flex-col.gap-5 > div > div.w-full.border-b.hidden.\\@3xl\\/main\\:flex.gap-12.cursor-pointer.border-zinc-700 > button:nth-child(2)',
      )
      .click();
    await page
      .locator(
        'body > div.flex.w-full.h-full > div.\\@container\\/main.relative.z-\\[100\\].w-full.transition-all.duration-400 > div.w-full.min-h-screen.\\@3xl\\/main\\:min-h-fit > main > div > div.flex.flex-col.space-y-10.\\@3xl\\/main\\:space-y-12.pt-10.\\@3xl\\/main\\:pt-12 > div.mx-auto.w-full > div.flex.flex-col.gap-5 > div > div.w-full.border-b.hidden.\\@3xl\\/main\\:flex.gap-12.cursor-pointer.border-zinc-700 > button:nth-child(3)',
      )
      .click();
  });
});
