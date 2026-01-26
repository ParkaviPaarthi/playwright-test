import { test, expect } from '@playwright/test';
import { beforeEach, describe } from 'node:test';


test.describe('Playwright homepage', () => {

  test.beforeEach('Login url',async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

test('has title', async ({ page }) => {

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Istallation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
})