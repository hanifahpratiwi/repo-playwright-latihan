import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page
});