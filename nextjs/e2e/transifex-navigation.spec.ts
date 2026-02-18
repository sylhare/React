import { test, expect } from '@playwright/test';

test.describe('Transifex Examples Navigation', () => {
  test('should load the transifex landing page', async ({ page }) => {
    await page.goto('/transifex');
    await expect(page.locator('h1')).toContainText('Transifex Native Examples');
  });

  test('should navigate to Basic Example', async ({ page }) => {
    await page.goto('/transifex');
    await page.getByRole('link', { name: 'Basic Example' }).click();
    await expect(page).toHaveURL('/transifex/basic-example');
    await expect(page.locator('h1')).toContainText('Transifex Example');
  });

  test('should navigate to Reusable Components', async ({ page }) => {
    await page.goto('/transifex');
    await page.getByRole('link', { name: 'Reusable Components' }).click();
    await expect(page).toHaveURL('/transifex/components-example');
    await expect(page.locator('h1')).toContainText('Reusable Components');
  });

  test('should navigate to Context & Comments', async ({ page }) => {
    await page.goto('/transifex');
    await page.getByRole('link', { name: 'Context & Comments' }).click();
    await expect(page).toHaveURL('/transifex/context-example');
    await expect(page.locator('h1')).toContainText('Context & Comments');
  });

  test('should navigate to String Props', async ({ page }) => {
    await page.goto('/transifex');
    await page.getByRole('link', { name: 'String Props' }).click();
    await expect(page).toHaveURL('/transifex/string-props-example');
    await expect(page.locator('h1')).toContainText('String Props Example');
  });

  test('should navigate to Test _key Attribute', async ({ page }) => {
    await page.goto('/transifex');
    await page.getByRole('link', { name: /Test _key Attribute/ }).click();
    await expect(page).toHaveURL('/transifex/test-key-attribute');
    await expect(page.locator('h1')).toContainText('Translation Key Attribute Behavior');
  });

  test('should navigate back to home from transifex page', async ({ page }) => {
    await page.goto('/transifex');
    await page.getByRole('link', { name: /Back to Home/ }).click();
    await expect(page).toHaveURL('/');
  });

  test('should have all 4 main example buttons', async ({ page }) => {
    await page.goto('/transifex');

    // Check all main buttons exist
    await expect(page.getByRole('link', { name: 'Basic Example' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Reusable Components' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Context & Comments' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'String Props' })).toBeVisible();
  });
});
