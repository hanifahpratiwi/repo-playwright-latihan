import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toContainText('1');
  await expect(page.locator('[data-test="cart-quantity-label"]')).toContainText('QTY');
  await expect(page.locator('[data-test="cart-desc-label"]')).toContainText('Description');

  await expect(page.locator('[data-test="item-quantity"]')).toContainText('1');
  await page.locator('[data-test="item-4-title-link"]').click();
});