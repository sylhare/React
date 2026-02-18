import { test, expect } from '@playwright/test';

test.describe('Transifex Examples', () => {
  test.describe('Main Page', () => {
    test('should load the main transifex page', async ({ page }) => {
      await page.goto('/transifex/basic-example');
      await expect(page.locator('h1')).toContainText('Transifex Example');
    });

    test('should show current language', async ({ page }) => {
      await page.goto('/transifex/basic-example');
      await expect(page.getByText(/Current Language:/)).toBeVisible();
    });

    test('should switch languages', async ({ page }) => {
      await page.goto('/transifex/basic-example');

      // Click Spanish button
      await page.getByRole('button', { name: 'Español' }).click();
      await expect(page.getByText(/Current Language:.*es/)).toBeVisible();

      // Check if translations changed to Spanish
      await expect(page.getByText('Hola, Mundo!')).toBeVisible();
      await expect(page.getByText('Bienvenido a Transifex')).toBeVisible();

      // Click French button
      await page.getByRole('button', { name: 'Français' }).click();
      await expect(page.getByText(/Current Language:.*fr/)).toBeVisible();

      // Check if translations changed to French
      await expect(page.getByText('Bonjour le monde!')).toBeVisible();
      await expect(page.getByText('Bienvenue sur Transifex')).toBeVisible();

      // Switch back to English
      await page.getByRole('button', { name: 'English' }).click();
      await expect(page.getByText(/Current Language:.*en/)).toBeVisible();
      await expect(page.getByText('Hello, World!')).toBeVisible();
    });

    test('should display basic translations', async ({ page }) => {
      await page.goto('/transifex/basic-example');
      await expect(page.getByTestId('hello-world')).toContainText('Hello, World!');
      await expect(page.getByTestId('welcome-transifex')).toContainText('Welcome to Transifex');
      await expect(page.getByTestId('simple-example')).toContainText(
        'This is a simple translation example.'
      );
    });

    test('should display variable interpolations', async ({ page }) => {
      await page.goto('/transifex/basic-example');
      await expect(page.getByText('Hello, John!')).toBeVisible();
      await expect(page.getByText(/Welcome back, Sarah!/)).toBeVisible();
      await expect(page.getByText(/The book costs \$19.99/)).toBeVisible();
    });

    test('should handle plurals correctly', async ({ page }) => {
      await page.goto('/transifex/basic-example');

      // Check initial count
      await expect(page.getByText('Count: 1')).toBeVisible();
      await expect(page.getByText('1 item')).toBeVisible();

      // Increment count
      const incrementButton = page.getByRole('button', { name: '+' }).first();
      await incrementButton.click();
      await expect(page.getByText('Count: 2')).toBeVisible();
      await expect(page.getByText('2 items')).toBeVisible();

      // Increment again
      await incrementButton.click();
      await expect(page.getByText('Count: 3')).toBeVisible();
      await expect(page.getByText('3 items')).toBeVisible();

      // Decrement
      const decrementButton = page.getByRole('button', { name: '-' }).first();
      await decrementButton.click();
      await expect(page.getByText('Count: 2')).toBeVisible();

      // Decrement to 1
      await decrementButton.click();
      await expect(page.getByText('Count: 1')).toBeVisible();
      await expect(page.getByText('1 item')).toBeVisible();

      // Cannot go below 0
      await decrementButton.click();
      await expect(page.getByText('Count: 0')).toBeVisible();
      await decrementButton.click();
      await expect(page.getByText('Count: 0')).toBeVisible();
    });

    test('should test plurals in Spanish', async ({ page }) => {
      await page.goto('/transifex/basic-example');

      // Switch to Spanish
      await page.getByRole('button', { name: 'Español' }).click();

      // Check singular
      const decrementButton = page.getByRole('button', { name: '-' }).first();
      await decrementButton.click(); // Go to 0
      const incrementButton = page.getByRole('button', { name: '+' }).first();
      await incrementButton.click(); // Go to 1
      await expect(page.getByText('1 artículo')).toBeVisible();

      // Check plural
      await incrementButton.click();
      await expect(page.getByText('2 artículos')).toBeVisible();
    });

  });

  test.describe('Reusable Components Page', () => {
    test('should load the components example page', async ({ page }) => {
      await page.goto('/transifex/components-example');
      await expect(page.locator('h1')).toContainText('Reusable Components');
    });

    test('should display greeting card component', async ({ page }) => {
      await page.goto('/transifex/components-example');
      await expect(page.getByText('Hello, Maria!')).toBeVisible();
      await expect(
        page.getByText(/Welcome back, Maria! How are you today?/)
      ).toBeVisible();
    });

    test('should display notification badges', async ({ page }) => {
      await page.goto('/transifex/components-example');
      await expect(
        page.getByText('You have 1 notification').first()
      ).toBeVisible();
      await expect(
        page.getByText('You have 5 notifications').first()
      ).toBeVisible();
    });

    test('should display action buttons', async ({ page }) => {
      await page.goto('/transifex/components-example');
      await expect(
        page.getByRole('button', { name: 'Read' }).first()
      ).toBeVisible();
      await expect(
        page.getByRole('button', { name: 'Close' }).first()
      ).toBeVisible();
      await expect(
        page.getByRole('button', { name: 'Present' }).first()
      ).toBeVisible();
    });

    test('should display product cards', async ({ page }) => {
      await page.goto('/transifex/components-example');
      await expect(page.getByText(/The laptop costs \$999.99/)).toBeVisible();
      await expect(page.getByText(/The phone costs \$599.99/)).toBeVisible();
      await expect(page.getByText('In Stock')).toBeVisible();
      await expect(page.getByText('Out of Stock')).toBeVisible();
    });

    test('should translate components to Spanish', async ({ page }) => {
      await page.goto('/transifex/components-example');

      // Switch to Spanish
      await page.getByRole('button', { name: 'Español' }).click();

      // Check greeting card
      await expect(page.getByText('¡Hola, Maria!')).toBeVisible();

      // Check product card
      await expect(page.getByText(/El laptop cuesta \$999.99/)).toBeVisible();
      await expect(page.getByText('En Stock')).toBeVisible();
      await expect(page.getByText('Agotado')).toBeVisible();

      // Check action buttons
      await expect(
        page.getByRole('button', { name: 'Leer' }).first()
      ).toBeVisible();
      await expect(
        page.getByRole('button', { name: 'Cerrar' }).first()
      ).toBeVisible();
      await expect(
        page.getByRole('button', { name: 'Regalo' }).first()
      ).toBeVisible();
    });
  });

  test.describe('Context & Comments Page', () => {
    test('should load the context example page', async ({ page }) => {
      await page.goto('/transifex/context-example');
      await expect(page.locator('h1')).toContainText('Context & Comments');
    });

    test('should display social media card', async ({ page }) => {
      await page.goto('/transifex/context-example');
      await expect(page.getByText('Welcome back, Alex')).toBeVisible();
      await expect(
        page.getByText(
          /Just launched my new project! Really excited to share this/
        )
      ).toBeVisible();
    });

    test('should display post and like buttons with context', async ({
      page,
    }) => {
      await page.goto('/transifex/context-example');

      // Post as noun in the card header
      await expect(page.getByText(/Post • 2h ago/)).toBeVisible();

      // Like button
      await expect(page.getByText(/Like \(42\)/)).toBeVisible();

      // Post as verb in the actions
      await expect(page.getByRole('button', { name: 'Post' })).toBeVisible();
    });

    test('should toggle like button', async ({ page }) => {
      await page.goto('/transifex/context-example');

      const likeButton = page.getByText(/Like \(\d+\)/);
      await expect(likeButton).toBeVisible();

      // Click to like
      await likeButton.click();
      await expect(page.getByText(/Like \(43\)/)).toBeVisible();

      // Click to unlike
      await likeButton.click();
      await expect(page.getByText(/Like \(42\)/)).toBeVisible();
    });

    test('should toggle save button', async ({ page }) => {
      await page.goto('/transifex/context-example');

      const saveButton = page.getByText('Save').first();
      await expect(saveButton).toBeVisible();

      // Click to save - button should remain visible (just changes style)
      await saveButton.click();
      await expect(saveButton).toBeVisible();
    });

    test('should show delete confirmation', async ({ page }) => {
      await page.goto('/transifex/context-example');

      // Find and click delete button (trash icon)
      const deleteButton = page
        .locator('button')
        .filter({ has: page.locator('svg path[d*="M19 7"]') });
      await deleteButton.click();

      // Check confirmation message appears
      await expect(
        page.getByText('Are you sure you want to delete this?')
      ).toBeVisible();
      await expect(
        page.getByRole('button', { name: 'Delete' })
      ).toBeVisible();
      await expect(
        page.getByRole('button', { name: 'Cancel' })
      ).toBeVisible();
    });

    test('should cancel delete action', async ({ page }) => {
      await page.goto('/transifex/context-example');

      // Click delete icon
      const deleteButton = page
        .locator('button')
        .filter({ has: page.locator('svg path[d*="M19 7"]') });
      await deleteButton.click();

      // Click cancel
      await page.getByRole('button', { name: 'Cancel' }).click();

      // Confirmation should disappear
      await expect(
        page.getByText('Are you sure you want to delete this?')
      ).not.toBeVisible();
    });

    test('should show loading when deleting', async ({ page }) => {
      await page.goto('/transifex/context-example');

      // Click delete icon
      const deleteButton = page
        .locator('button')
        .filter({ has: page.locator('svg path[d*="M19 7"]') });
      await deleteButton.click();

      // Click delete
      await page.getByRole('button', { name: 'Delete' }).click();

      // Loading message should appear
      await expect(page.getByText('Loading...')).toBeVisible();

      // Wait for loading to complete
      await page.waitForTimeout(2000);
      await expect(page.getByText('Loading...')).not.toBeVisible();
    });

    test('should translate context-specific strings to Spanish', async ({
      page,
    }) => {
      await page.goto('/transifex/context-example');

      // Switch to Spanish
      await page.getByRole('button', { name: 'Español' }).click();

      // Post as noun
      await expect(page.getByText(/Publicación • 2h ago/)).toBeVisible();

      // Like as verb
      await expect(page.getByText(/Me gusta \(\d+\)/)).toBeVisible();

      // Post as verb (button)
      await expect(
        page.getByRole('button', { name: 'Publicar' })
      ).toBeVisible();

      // Save button
      await expect(
        page.getByRole('button', { name: 'Guardar' }).first()
      ).toBeVisible();

      // Upgrade CTA
      await expect(
        page.getByRole('button', { name: 'Mejorar a Pro' })
      ).toBeVisible();
    });

    test('should translate context-specific strings to French', async ({
      page,
    }) => {
      await page.goto('/transifex/context-example');

      // Switch to French
      await page.getByRole('button', { name: 'Français' }).click();

      // Post as noun
      await expect(page.getByText(/Publication • 2h ago/)).toBeVisible();

      // Like as verb
      await expect(page.getByText(/J'aime \(\d+\)/)).toBeVisible();

      // Post as verb (button)
      await expect(
        page.getByRole('button', { name: 'Publier' })
      ).toBeVisible();

      // Delete confirmation in French
      const deleteButton = page
        .locator('button')
        .filter({ has: page.locator('svg path[d*="M19 7"]') });
      await deleteButton.click();
      await expect(
        page.getByText('Êtes-vous sûr de vouloir supprimer ceci?')
      ).toBeVisible();
    });
  });

  test.describe('String Props Page', () => {
    test('should load the string props example page', async ({ page }) => {
      await page.goto('/transifex/string-props-example');
      await expect(page.locator('h1')).toContainText('String Props Example');
    });

    test('should display search input with translated placeholder', async ({
      page,
    }) => {
      await page.goto('/transifex/string-props-example');
      const searchInput = page.locator('input[placeholder="Search..."]');
      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
      await expect(searchInput).toHaveAttribute('aria-label', 'Search');
    });

    test('should display button with translated tooltip', async ({ page }) => {
      await page.goto('/transifex/string-props-example');
      const saveButton = page.locator('button[title="Click to save"]');
      await expect(saveButton).toBeVisible();
      await expect(saveButton).toHaveAttribute('title', 'Click to save');
      await expect(saveButton).toContainText('Save');
    });

    test('should display contact form with translated labels and placeholders', async ({
      page,
    }) => {
      await page.goto('/transifex/string-props-example');

      await expect(page.getByText('Name')).toBeVisible();
      const nameInput = page.locator('input[placeholder="Enter your name"]');
      await expect(nameInput).toBeVisible();

      await expect(page.getByText('Email')).toBeVisible();
      const emailInput = page.locator('input[placeholder="your@email.com"]');
      await expect(emailInput).toBeVisible();

      await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    });

    test('should display language select with translated options', async ({
      page,
    }) => {
      await page.goto('/transifex/string-props-example');

      await expect(page.getByText('Select Language')).toBeVisible();
      const select = page.locator('select#lang');
      await expect(select).toBeVisible();

      const options = select.locator('option');
      await expect(options.nth(0)).toHaveText('English');
      await expect(options.nth(1)).toHaveText('Spanish');
      await expect(options.nth(2)).toHaveText('French');
    });

    test('should display alert messages', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await expect(
        page.getByText('Operation completed successfully!')
      ).toBeVisible();
      await expect(
        page.getByText('An error occurred. Please try again.')
      ).toBeVisible();
      await expect(
        page.getByText('Please review your information before proceeding.')
      ).toBeVisible();
    });

    test('should translate string props to Spanish', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await page.getByRole('button', { name: 'Español' }).click();

      const searchInput = page.locator('input[placeholder="Buscar..."]');
      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute('aria-label', 'Buscar');

      const saveButton = page.locator(
        'button[title="Haz clic para guardar"]'
      );
      await expect(saveButton).toBeVisible();
      await expect(saveButton).toContainText('Guardar');

      await expect(page.getByText('Nombre')).toBeVisible();
      await expect(page.getByText('Correo electrónico')).toBeVisible();

      const nameInput = page.locator('input[placeholder="Ingresa tu nombre"]');
      await expect(nameInput).toBeVisible();
      const emailInput = page.locator('input[placeholder="tu@correo.com"]');
      await expect(emailInput).toBeVisible();

      await expect(
        page.getByRole('button', { name: 'Enviar' })
      ).toBeVisible();

      await expect(
        page.getByText('¡Operación completada con éxito!')
      ).toBeVisible();
      await expect(
        page.getByText('Ocurrió un error. Por favor, inténtalo de nuevo.')
      ).toBeVisible();
    });

    test('should translate string props to French', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await page.getByRole('button', { name: 'Français' }).click();

      const searchInput = page.locator('input[placeholder="Rechercher..."]');
      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute('aria-label', 'Rechercher');

      const saveButton = page.locator(
        'button[title="Cliquez pour enregistrer"]'
      );
      await expect(saveButton).toBeVisible();
      await expect(saveButton).toContainText('Enregistrer');

      await expect(page.getByText('Nom', { exact: true })).toBeVisible();
      await expect(page.getByText('Email')).toBeVisible();

      const nameInput = page.locator('input[placeholder="Entrez votre nom"]');
      await expect(nameInput).toBeVisible();
      const emailInput = page.locator('input[placeholder="votre@email.com"]');
      await expect(emailInput).toBeVisible();

      await expect(
        page.getByRole('button', { name: 'Soumettre' })
      ).toBeVisible();

      await expect(
        page.getByText('Opération terminée avec succès!')
      ).toBeVisible();
      await expect(
        page.getByText("Une erreur s'est produite. Veuillez réessayer.")
      ).toBeVisible();
    });

    test('should translate select options to Spanish', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await page.getByRole('button', { name: 'Español' }).click();

      const select = page.locator('select#lang');
      const options = select.locator('option');
      await expect(options.nth(0)).toHaveText('Inglés');
      await expect(options.nth(1)).toHaveText('Español');
      await expect(options.nth(2)).toHaveText('Francés');
    });

    test('should translate select options to French', async ({ page }) => {
      await page.goto('/transifex/string-props-example');

      await page.getByRole('button', { name: 'Français' }).click();

      const select = page.locator('select#lang');
      const options = select.locator('option');
      await expect(options.nth(0)).toHaveText('Anglais');
      await expect(options.nth(1)).toHaveText('Espagnol');
      await expect(options.nth(2)).toHaveText('Français');
    });
  });

  test.describe('Navigation', () => {
    test('should navigate from main to components example', async ({
      page,
    }) => {
      await page.goto('/transifex');
      await page.getByRole('link', { name: /Reusable Components/ }).click();
      await expect(page).toHaveURL('/transifex/components-example');
      await expect(page.locator('h1')).toContainText('Reusable Components');
    });

    test('should navigate from main to context example', async ({ page }) => {
      await page.goto('/transifex');
      await page.getByRole('link', { name: /Context & Comments/ }).click();
      await expect(page).toHaveURL('/transifex/context-example');
      await expect(page.locator('h1')).toContainText('Context & Comments');
    });

    test('should navigate back to main page', async ({ page }) => {
      await page.goto('/transifex/components-example');
      await page.getByRole('link', { name: /Back to Examples/ }).click();
      await expect(page).toHaveURL('/transifex');
      await expect(page.locator('h1')).toContainText('Transifex Native Examples');
    });

    test('should navigate back to examples', async ({ page }) => {
      await page.goto('/transifex/basic-example');
      await page.getByRole('link', { name: /Back to Examples/ }).click();
      await expect(page).toHaveURL('/transifex');
    });

    test('should navigate from main to string props example', async ({
      page,
    }) => {
      await page.goto('/transifex');
      await page.getByRole('link', { name: /String Props/ }).click();
      await expect(page).toHaveURL('/transifex/string-props-example');
      await expect(page.locator('h1')).toContainText('String Props Example');
    });
  });
});
