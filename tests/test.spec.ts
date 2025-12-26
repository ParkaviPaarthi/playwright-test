import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
   await page.getByRole('link', { name: 'Gmail' }).click();
  await page.getByRole('button', { name: 'Agree' }).click();
  await page.getByRole('link', { name: 'Open the Sign into Gmail page' }).click();
 await page.getByRole('textbox', { name: 'Email or phone' }).click();

});