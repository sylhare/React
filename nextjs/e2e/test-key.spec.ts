import { test, expect } from '@playwright/test';

test.describe('Transifex _key attribute tests', () => {
  test('should display translation using _str with key only', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await expect(page.locator('h1')).toContainText('Translation Key Attribute Behavior');

    const test1 = page.locator('div:has(h2:text("Test 1:"))').locator('p').first();
    await expect(test1).toContainText('Translation from cache using key');
  });

  test('should show that _key DOES work with T component', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test2 = page.locator('div:has(h2:text("Test 2:"))').locator('p').first();
    await expect(test2).toContainText('Translation from cache using key');
    await expect(test2).not.toContainText('This is fallback text');
  });

  test('should show that _key DOES work with useT hook', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test3 = page.locator('div:has(h2:text("Test 3:"))').locator('p').first();
    await expect(test3).toContainText('Translation from cache using key');
    await expect(test3).not.toContainText('This is the proper fallback');
  });

  test('should switch to Spanish translations', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await page.getByRole('button', { name: 'Switch to Spanish' }).click();
    await page.waitForTimeout(100);

    const test1 = page.locator('div:has(h2:text("Test 1:"))').locator('p').first();
    await expect(test1).toContainText('Traducción desde caché usando clave');

    const test2 = page.locator('div:has(h2:text("Test 2:"))').locator('p').first();
    await expect(test2).toContainText('Traducción desde caché usando clave');

    const test3 = page.locator('div:has(h2:text("Test 3:"))').locator('p').first();
    await expect(test3).toContainText('Traducción desde caché usando clave');
  });

  test('should switch back to English translations', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await page.getByRole('button', { name: 'Switch to Spanish' }).click();
    await page.waitForTimeout(100);

    await page.getByRole('button', { name: 'Switch to English' }).click();
    await page.waitForTimeout(100);

    const test1 = page.locator('div:has(h2:text("Test 1:"))').locator('p').first();
    await expect(test1).toContainText('Translation from cache using key');
  });
});
