import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.getByRole('code').filter({ hasText: 'npm init playwright@latest' }).click();
  await expect(page.getByLabel('Docs sidebar')).toContainText('Generating tests');
  await page.getByRole('link', { name: 'Generating tests' }).click();
 
});