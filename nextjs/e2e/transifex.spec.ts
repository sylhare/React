import { test, expect } from '@playwright/test';

test.describe('Transifex Examples', () => {
  test.describe('Basic Example', () => {
    test('should display basic translations', async ({ page }) => {
      await page.goto('/transifex/basic-example');
      await expect(page.getByTestId('hello-world')).toContainText('Hello, World!');
      await expect(page.getByTestId('welcome-transifex')).toContainText('Welcome to Transifex');
      await expect(page.getByTestId('simple-example')).toContainText(
        'This is a simple translation example.'
      );
    });

    test('should switch languages', async ({ page }) => {
      await page.goto('/transifex/basic-example');

      await page.getByTestId('lang-btn-es').click();
      await expect(page.getByTestId('current-locale')).toHaveText('es');
      await expect(page.getByTestId('hello-world')).toContainText('Hola, Mundo!');
      await expect(page.getByTestId('welcome-transifex')).toContainText('Bienvenido a Transifex');

      await page.getByTestId('lang-btn-fr').click();
      await expect(page.getByTestId('current-locale')).toHaveText('fr');
      await expect(page.getByTestId('hello-world')).toContainText('Bonjour le monde!');
      await expect(page.getByTestId('welcome-transifex')).toContainText('Bienvenue sur Transifex');

      await page.getByTestId('lang-btn-en').click();
      await expect(page.getByTestId('current-locale')).toHaveText('en');
      await expect(page.getByTestId('hello-world')).toContainText('Hello, World!');
    });

    test('should handle plurals correctly', async ({ page }) => {
      await page.goto('/transifex/basic-example');

      await expect(page.getByTestId('count-display')).toContainText('Count: 1');
      await expect(page.getByTestId('count-items')).toContainText('1 item');

      await page.getByTestId('count-increment').click();
      await expect(page.getByTestId('count-display')).toContainText('Count: 2');
      await expect(page.getByTestId('count-items')).toContainText('2 items');

      await page.getByTestId('count-increment').click();
      await expect(page.getByTestId('count-display')).toContainText('Count: 3');
      await expect(page.getByTestId('count-items')).toContainText('3 items');

      await page.getByTestId('count-decrement').click();
      await expect(page.getByTestId('count-display')).toContainText('Count: 2');

      await page.getByTestId('count-decrement').click();
      await expect(page.getByTestId('count-display')).toContainText('Count: 1');
      await expect(page.getByTestId('count-items')).toContainText('1 item');

      // Cannot go below 0
      await page.getByTestId('count-decrement').click();
      await expect(page.getByTestId('count-display')).toContainText('Count: 0');
      await page.getByTestId('count-decrement').click();
      await expect(page.getByTestId('count-display')).toContainText('Count: 0');
    });

    test('should test plurals in Spanish', async ({ page }) => {
      await page.goto('/transifex/basic-example');

      await page.getByTestId('lang-btn-es').click();

      await page.getByTestId('count-decrement').click(); // Go to 0
      await page.getByTestId('count-increment').click(); // Go to 1
      await expect(page.getByTestId('count-items')).toContainText('1 artículo');

      await page.getByTestId('count-increment').click();
      await expect(page.getByTestId('count-items')).toContainText('2 artículos');
    });
  });

  test.describe('Reusable Components', () => {
    test('should translate components to Spanish', async ({ page }) => {
      await page.goto('/transifex/components-example');

      await page.getByTestId('lang-btn-es').click();

      await expect(page.getByText('¡Hola, Maria!')).toBeVisible();
      await expect(page.getByText(/El laptop cuesta \$999.99/)).toBeVisible();
      await expect(page.getByText('En Stock')).toBeVisible();
      await expect(page.getByText('Agotado')).toBeVisible();

      await expect(page.getByRole('button', { name: 'Leer' }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Cerrar' }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Regalo' }).first()).toBeVisible();
    });
  });

  test.describe('Context & Comments', () => {
    test('should toggle like button', async ({ page }) => {
      await page.goto('/transifex/context-example');

      const likeBtn = page.getByTestId('like-btn');
      await expect(likeBtn).toContainText('42');

      await likeBtn.click();
      await expect(likeBtn).toContainText('43');

      await likeBtn.click();
      await expect(likeBtn).toContainText('42');
    });

    test('should show delete confirmation', async ({ page }) => {
      await page.goto('/transifex/context-example');

      await page.getByTestId('delete-btn').click();

      await expect(page.getByText('Are you sure you want to delete this?')).toBeVisible();
      await expect(page.getByTestId('delete-confirm-btn')).toBeVisible();
      await expect(page.getByTestId('cancel-btn')).toBeVisible();
    });

    test('should cancel delete action', async ({ page }) => {
      await page.goto('/transifex/context-example');

      await page.getByTestId('delete-btn').click();
      await page.getByTestId('cancel-btn').click();

      await expect(page.getByText('Are you sure you want to delete this?')).not.toBeVisible();
    });

    test('should show loading when deleting', async ({ page }) => {
      await page.goto('/transifex/context-example');

      await page.getByTestId('delete-btn').click();
      await page.getByTestId('delete-confirm-btn').click();

      await expect(page.getByTestId('loading')).toBeVisible();

      await page.waitForTimeout(2000);
      await expect(page.getByTestId('loading')).not.toBeVisible();
    });

    test('should translate context-specific strings to Spanish', async ({ page }) => {
      await page.goto('/transifex/context-example');

      await page.getByTestId('lang-btn-es').click();

      await expect(page.getByText(/Publicación • 2h ago/)).toBeVisible();
      await expect(page.getByTestId('like-btn')).toContainText('Me gusta');
      await expect(page.getByRole('button', { name: 'Publicar' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Guardar' }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Mejorar a Pro' })).toBeVisible();
    });

    test('should translate context-specific strings to French', async ({ page }) => {
      await page.goto('/transifex/context-example');

      await page.getByTestId('lang-btn-fr').click();

      await expect(page.getByText(/Publication • 2h ago/)).toBeVisible();
      await expect(page.getByTestId('like-btn')).toContainText("J'aime");
      await expect(page.getByRole('button', { name: 'Publier' })).toBeVisible();

      await page.getByTestId('delete-btn').click();
      await expect(page.getByText('Êtes-vous sûr de vouloir supprimer ceci?')).toBeVisible();
    });
  });

  test.describe('String Props', () => {
    test('should translate string props to Spanish', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await page.getByTestId('lang-btn-es').click();

      const searchInput = page.locator('input[placeholder="Buscar..."]');
      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute('aria-label', 'Buscar');

      const saveButton = page.locator('button[title="Haz clic para guardar"]');
      await expect(saveButton).toBeVisible();
      await expect(saveButton).toContainText('Guardar');

      await expect(page.getByText('Nombre')).toBeVisible();
      await expect(page.getByText('Correo electrónico')).toBeVisible();

      const nameInput = page.locator('input[placeholder="Ingresa tu nombre"]');
      await expect(nameInput).toBeVisible();
      const emailInput = page.locator('input[placeholder="tu@correo.com"]');
      await expect(emailInput).toBeVisible();

      await expect(page.getByRole('button', { name: 'Enviar' })).toBeVisible();

      await expect(page.getByText('¡Operación completada con éxito!')).toBeVisible();
      await expect(
        page.getByText('Ocurrió un error. Por favor, inténtalo de nuevo.')
      ).toBeVisible();
    });

    test('should translate string props to French', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await page.getByTestId('lang-btn-fr').click();

      const searchInput = page.locator('input[placeholder="Rechercher..."]');
      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute('aria-label', 'Rechercher');

      const saveButton = page.locator('button[title="Cliquez pour enregistrer"]');
      await expect(saveButton).toBeVisible();
      await expect(saveButton).toContainText('Enregistrer');

      await expect(page.getByText('Nom', { exact: true })).toBeVisible();
      await expect(page.getByText('Email')).toBeVisible();

      const nameInput = page.locator('input[placeholder="Entrez votre nom"]');
      await expect(nameInput).toBeVisible();
      const emailInput = page.locator('input[placeholder="votre@email.com"]');
      await expect(emailInput).toBeVisible();

      await expect(page.getByRole('button', { name: 'Soumettre' })).toBeVisible();

      await expect(page.getByText('Opération terminée avec succès!')).toBeVisible();
      await expect(
        page.getByText("Une erreur s'est produite. Veuillez réessayer.")
      ).toBeVisible();
    });

    test('should translate select options to Spanish', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await page.getByTestId('lang-btn-es').click();

      const select = page.locator('select#lang');
      const options = select.locator('option');
      await expect(options.nth(0)).toHaveText('Inglés');
      await expect(options.nth(1)).toHaveText('Español');
      await expect(options.nth(2)).toHaveText('Francés');
    });

    test('should translate select options to French', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await page.getByTestId('lang-btn-fr').click();

      const select = page.locator('select#lang');
      const options = select.locator('option');
      await expect(options.nth(0)).toHaveText('Anglais');
      await expect(options.nth(1)).toHaveText('Espagnol');
      await expect(options.nth(2)).toHaveText('Français');
    });
  });
});
