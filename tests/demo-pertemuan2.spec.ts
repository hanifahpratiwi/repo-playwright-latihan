import { test, expect } from '@playwright/test';

test('test gagal login', async ({ page }) => {

  // navigate to the login page
  await page.goto('https://www.saucedemo.com/');

  // fill in the username and password fields with invalid credentials
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user11');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('sauce_password');
  await page.locator('[data-test="password"]').press('Tab');
  await page.locator('[data-test="login-button"]').click();

  // assert that the error message is displayed
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});


test('test berhasil login', async ({ page }) => {

  // navigate to the login page 
  await page.goto('https://www.saucedemo.com/');

  // fill in the username and password fields with valid credentials
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Tab');
  await page.locator('[data-test="login-button"]').click();

  // assert that the user is redirected to the products page
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('az');

  // add an item to the cart and assert that the cart badge is updated
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  
});


test('test logout', async ({ page }) => {
  
  // navigate to the login page
  await page.goto('https://www.saucedemo.com/inventory.html');

  // click the menu button and assert that the sidebar links are visible
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await expect(page.locator('[data-test="inventory-sidebar-link"]')).toBeVisible();
  await expect(page.locator('[data-test="about-sidebar-link"]')).toBeVisible();
  await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
  await expect(page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();

  // click the logout link and assert that the user is redirected to the login page 
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
