import { test, expect } from '@playwright/test';

test.describe('Transifex _key attribute tests', () => {
  test('should display translation using key-only approach', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await expect(page.locator('h1')).toContainText('Translation Key Attribute Behavior');

    const test1Output = page.getByTestId('test-1-output');
    await expect(test1Output).toContainText('Test translation for key: test.key');
  });

  test('should show that _key works with T component', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test2Output = page.getByTestId('test-2-output');
    await expect(test2Output).toContainText('Test translation for key: test.key');
  });

  test('should show that _key works with useT hook', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test3Output = page.getByTestId('test-3-output');
    await expect(test3Output).toContainText('Test translation for key: test.key');
  });

  test('should show fallback text when translation is missing', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test4Output = page.getByTestId('test-4-output');
    await expect(test4Output).toContainText('This is the fallback text');
    await expect(test4Output).not.toContainText('missing.translation.key');
  });

  test('should show that _context is informational metadata', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    const test5Output = page.getByTestId('test-5-output');
    await expect(test5Output).toContainText('Post translation');

    const test6Output = page.getByTestId('test-6-output');
    await expect(test6Output).toContainText('Post translation');
  });

  test('should switch to Spanish translations', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await page.getByTestId('lang-btn-es').click();
    await page.waitForTimeout(100);

    const test1Output = page.getByTestId('test-1-output');
    await expect(test1Output).toContainText('Traducción de prueba para clave: test.key');

    const test2Output = page.getByTestId('test-2-output');
    await expect(test2Output).toContainText('Traducción de prueba para clave: test.key');

    const test3Output = page.getByTestId('test-3-output');
    await expect(test3Output).toContainText('Traducción de prueba para clave: test.key');

    const test4Output = page.getByTestId('test-4-output');
    await expect(test4Output).toContainText('This is the fallback text');

    const test5Output = page.getByTestId('test-5-output');
    await expect(test5Output).toContainText('Traducción de publicación');

    const test6Output = page.getByTestId('test-6-output');
    await expect(test6Output).toContainText('Traducción de publicación');
  });

  test('should switch to French translations', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await page.getByTestId('lang-btn-fr').click();
    await page.waitForTimeout(100);

    const test1Output = page.getByTestId('test-1-output');
    await expect(test1Output).toContainText('Traduction de test pour clé: test.key');

    const test2Output = page.getByTestId('test-2-output');
    await expect(test2Output).toContainText('Traduction de test pour clé: test.key');

    const test3Output = page.getByTestId('test-3-output');
    await expect(test3Output).toContainText('Traduction de test pour clé: test.key');

    const test5Output = page.getByTestId('test-5-output');
    await expect(test5Output).toContainText('Traduction de publication');

    const test6Output = page.getByTestId('test-6-output');
    await expect(test6Output).toContainText('Traduction de publication');
  });

  test('should switch back to English translations', async ({ page }) => {
    await page.goto('/transifex/test-key-attribute');

    await page.getByTestId('lang-btn-es').click();
    await page.waitForTimeout(100);

    await page.getByTestId('lang-btn-en').click();
    await page.waitForTimeout(100);

    const test1Output = page.getByTestId('test-1-output');
    await expect(test1Output).toContainText('Test translation for key: test.key');
  });
});
