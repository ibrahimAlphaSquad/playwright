import { test } from '@playwright/test';

test.describe('Interactions on Casino Lobby 2', () => {
  test('Checking the Games and Bets Table tabs on Casino Lobby', async ({
    page,
  }) => {
    await page.goto('/');
    // Click on Casnio Button
    await page.click('#primary-nav-casino-0');

    // Click on All Wins button
    await page.click('#All-Wins');

    // // Click on My Bets button
    // await page.click('#My-Bets');

    // Click on High Rollers button
    await page.click('#High-Rollers');
  });
});
