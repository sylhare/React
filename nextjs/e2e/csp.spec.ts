import { test, expect } from '@playwright/test';

test.describe('Content Security Policy', () => {
  test('should set CSP header on page responses', async ({ page }) => {
    const response = await page.goto('/transifex');
    const csp = response!.headers()['content-security-policy'];

    expect(csp).toBeTruthy();
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("script-src");
    expect(csp).toContain("'strict-dynamic'");
    expect(csp).toContain("img-src 'self' blob: data:");
    expect(csp).toContain("font-src 'self'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).toContain("form-action 'self'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("upgrade-insecure-requests");
  });

  test('should include a nonce in the CSP header', async ({ page }) => {
    const response = await page.goto('/');
    const csp = response!.headers()['content-security-policy'];

    expect(csp).toMatch(/'nonce-[A-Za-z0-9+/]+=*'/);
  });

  test('should generate a unique nonce per request', async ({ request }) => {
    const [r1, r2] = await Promise.all([
      request.get('/'),
      request.get('/transifex'),
    ]);

    const nonce1 = r1.headers()['content-security-policy']?.match(/'nonce-([^']+)'/)?.[1];
    const nonce2 = r2.headers()['content-security-policy']?.match(/'nonce-([^']+)'/)?.[1];

    expect(nonce1).toBeTruthy();
    expect(nonce2).toBeTruthy();
    expect(nonce1).not.toBe(nonce2);
  });

  test('should not set CSP header on static assets', async ({ request }) => {
    const response = await request.get('/_next/static/chunks/main-app.js', {
      failOnStatusCode: false,
    });
    const csp = response.headers()['content-security-policy'];

    expect(csp).toBeFalsy();
  });

  test('should not set CSP header on prefetch requests', async ({ request }) => {
    const response = await request.get('/transifex', {
      headers: { 'next-router-prefetch': '1' },
    });
    const csp = response.headers()['content-security-policy'];

    expect(csp).toBeFalsy();
  });
});
