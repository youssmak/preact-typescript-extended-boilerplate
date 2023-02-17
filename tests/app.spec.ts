import { test, expect } from '@playwright/test';

test.describe('App tests', () => {
  test('Has title', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    // index.html document title
    await expect(page).toHaveTitle(/preact-typescript-extended-boilerplate/);
  });

  test('Should show ready ', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.locator('#root')).toHaveText('ready!');
  });
});
