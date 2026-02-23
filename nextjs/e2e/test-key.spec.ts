import { test, expect } from '@playwright/test';

test.describe('Transifex _key attribute tests', () => {
  test('should display translation using key-only approach', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await expect(page.locator('h1')).toContainText('Translation Key Attribute Behavior');

    const test1Output = page.getByTestId('test-1-output');
    await expect(test1Output).toContainText('test.key');
  });

  test('should show _str fallback when key has no cache entry', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test2Output = page.getByTestId('test-2-output');
    await expect(test2Output).toContainText('Fallback text');
  });

  test('should show _str fallback with useT hook when key has no cache entry', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test3Output = page.getByTestId('test-3-output');
    await expect(test3Output).toContainText('Fallback text');
  });

  test('should show fallback text when translation is missing', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test4Output = page.getByTestId('test-4-output');
    await expect(test4Output).toContainText('This is the fallback text');
    await expect(test4Output).not.toContainText('missing.translation.key');
  });

  test('should show different translations for verb and noun forms of "Post"', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test5Output = page.getByTestId('test-5-output');
    await expect(test5Output).toContainText('Post');

    const test6Output = page.getByTestId('test-6-output');
    await expect(test6Output).toContainText('Post');
  });

  test('should switch to Spanish translations', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await page.getByTestId('lang-btn-es').click();
    await page.waitForTimeout(100);

    const test1Output = page.getByTestId('test-1-output');
    await expect(test1Output).toContainText('test.key');

    const test2Output = page.getByTestId('test-2-output');
    await expect(test2Output).toContainText('Fallback text');

    const test3Output = page.getByTestId('test-3-output');
    await expect(test3Output).toContainText('Fallback text');

    const test4Output = page.getByTestId('test-4-output');
    await expect(test4Output).toContainText('This is the fallback text');

    const test5Output = page.getByTestId('test-5-output');
    await expect(test5Output).toContainText('Publicar');

    const test6Output = page.getByTestId('test-6-output');
    await expect(test6Output).toContainText('Publicación');
  });

  test('should switch to French translations', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await page.getByTestId('lang-btn-fr').click();
    await page.waitForTimeout(100);

    const test1Output = page.getByTestId('test-1-output');
    await expect(test1Output).toContainText('test.key');

    const test2Output = page.getByTestId('test-2-output');
    await expect(test2Output).toContainText('Fallback text');

    const test3Output = page.getByTestId('test-3-output');
    await expect(test3Output).toContainText('Fallback text');

    const test5Output = page.getByTestId('test-5-output');
    await expect(test5Output).toContainText('Publier');

    const test6Output = page.getByTestId('test-6-output');
    await expect(test6Output).toContainText('Publication');
  });

  test('should switch back to English translations', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await page.getByTestId('lang-btn-es').click();
    await page.waitForTimeout(100);

    await page.getByTestId('lang-btn-en').click();
    await page.waitForTimeout(100);

    const test1Output = page.getByTestId('test-1-output');
    await expect(test1Output).toContainText('test.key');
  });
});
