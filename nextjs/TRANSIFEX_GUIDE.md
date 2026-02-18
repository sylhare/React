# Transifex Native for React: A Practical Guide

Making your React application available in multiple languages doesn't have to be complicated. This comprehensive guide walks you through implementing internationalization (i18n) using Transifex Native, based on real-world experience building a multi-language application.

## What is Transifex?

[Transifex][1] is a cloud-based localization platform that helps developers manage translations for their applications. Think of it as a centralized hub where you can manage all your app's text strings, collaborate with translators, and sync translations back to your application.

### Key Features

- **Translation Management**: Organize all your translatable strings in one place
- **Collaboration**: Work with professional translators or your team
- **Context**: Provide translators with screenshots and context to ensure accurate translations
- **Over-the-Air (OTA)**: Update translations without redeploying your application
- **SDKs**: Native support for many platforms (React, React Native, iOS, Android, Python, etc.)

### Pricing: Free vs Paid

Transifex offers several tiers:

- **Free Tier**: Perfect for open-source projects and small applications
  - 1 project
  - Up to 1,000 source words
  - Unlimited languages
  - Community support

- **Paid Tiers**: For commercial projects with more features
  - More projects and source words
  - Advanced collaboration tools
  - Priority support
  - Translation memory and glossaries

**For learning and development**, the free tier is more than sufficient. You can also work entirely **offline** (as shown in this guide) by managing translations locally without connecting to Transifex servers.

**Official site**: [Transifex Pricing][2]

### Transifex Native vs Traditional i18n

Traditional i18n libraries (like react-i18next) require you to maintain translation files locally. **Transifex Native** offers a different approach:

1. **Traditional Approach**: You maintain JSON files locally → Manually sync with translators → Update files → Redeploy
2. **Transifex Native**: Strings are pushed to Transifex → Translators work online → App pulls translations automatically (no redeploy needed)

For this guide, we'll use Transifex Native in **local mode** (without the cloud service), which works perfectly for learning and development.

### About the API Token

You may notice Transifex Native requires a "token" for initialization. Here's what you need to know:

- **For Production**: A token connects your app to your Transifex project to fetch translations
- **For Local Development**: You can pass an empty string (`token: ''`) and manage translations locally in your code
- **Getting a Token**: Sign up at [Transifex][1], create a project, and generate an API token from your project settings

In this guide, we'll use the local approach with an empty token, making it perfect for learning without needing a Transifex account.

### Is Transifex Open Source?

Transifex itself is a **commercial SaaS platform** (not open source), but the **Transifex Native SDKs** (including the React SDK) are **open source** and available on GitHub:

- **Repository**: [transifex-javascript][3]
- **License**: Apache-2.0
- **React SDK**: [@transifex/react][4]

This means you can use the SDKs freely, inspect the code, contribute improvements, and even fork them if needed. The only thing that requires a Transifex account is using their cloud translation management platform.

## Setup

Let's start by installing the necessary packages. Transifex Native for React consists of two packages:

```bash
npm install @transifex/native @transifex/react
```

- **@transifex/native**: Core functionality for translation management
- **@transifex/react**: React-specific components and hooks

**Official Documentation**: [Transifex Native React][5]

With these installed, we're ready to start translating!


## Basic Translation with `<T>`

Now that we have Transifex installed, let's dive into actually translating text. The most fundamental building block is the `<T>` component, which stands for "Translation". Think of it as a wrapper that tells Transifex "this text needs to be translated."

### Your First Translation

Here's the simplest possible example:

```jsx
import { T } from '@transifex/react';

function Greeting() {
  return (
    <div>
      <T _str="Hello, World!" />
    </div>
  );
}
```

Notice the `_str` prop? This is where you provide the text to be translated. When your app loads, Transifex will look for a translation of "Hello, World!" in the current language. If it finds one, it displays the translation. If not, it shows the original English text as a fallback.

This approach uses the source string as both the identifier and the fallback. So if a translation is missing, users see "Hello, World!" instead of a translation key, which is more user-friendly.

Why the underscore? Props starting with `_` are Transifex-specific metadata and won't be passed down to the rendered element. This keeps your HTML clean.

### Using Translation Keys (Recommended Approach)

While using raw strings works, it becomes problematic as your app grows. What if you need to change "Hello, World!" to "Hi, World!" throughout your app? You'd have to update every instance and coordinate with translators.

The solution is **translation keys** - unique identifiers for each translatable string:

```jsx
// Create a constants file to centralize your keys
const KEYS = {
  HELLO_WORLD: 'greetings.hello_world',
  WELCOME: 'greetings.welcome',
  GOODBYE: 'greetings.goodbye',
};

function Greeting() {
  return (
    <div>
      {/* Option 1: Using translation key directly in _str */}
      <T _str={KEYS.HELLO_WORLD} />

      {/* Option 2: Using _key with _str as fallback (recommended) */}
      <T _str="Hello, World!" _key={KEYS.HELLO_WORLD} />
    </div>
  );
}
```

With this approach, translators work with stable keys that never change. If you want to update the English text, you only change it in your translation file while keeping the same key.

**Two Ways to Use Translation Keys:**

```jsx
// Approach 1: Key in _str
<T _str="greetings.hello" />
// If translation found: displays the translation
// If translation missing: displays "greetings.hello" (not user-friendly)

// Approach 2: Key in _key, source string in _str (RECOMMENDED)
<T _str="Hello, World!" _key="greetings.hello" />
// If translation found: displays the translation
// If translation missing: displays "Hello, World!" (user-friendly fallback)
```

The second approach is recommended because it provides a better user experience when translations are missing.

**Note:** You can also use `useT()` with `_key`, which works the same way:

```jsx
const t = useT();
t('Hello, World!', { _key: 'greetings.hello' })
// If translation missing: displays "Hello, World!"
// If translation found: displays the translation
```

### Understanding the Fallback Behavior

An important consideration when using translation keys: what happens if a translation is missing?

```jsx
// Using a source string as the key
<T _str="Hello, World!" />
// If translation missing: displays "Hello, World!" ✅

// Using a translation key only
<T _str="greetings.hello" />
// If translation missing: displays "greetings.hello" ❌

// Using _key with _str fallback (RECOMMENDED)
<T _str="Hello, World!" _key="greetings.hello" />
// If translation missing: displays "Hello, World!" ✅
// If translation found: displays the translation ✅
```

When you use a translation key like `"greetings.hello"` in `_str` without providing a fallback, that's what Transifex will display if it can't find the translation. Your users will see "greetings.hello" on the page, which isn't user-friendly.

**Best Practice:** Use both `_str` and `_key` together:
- `_key`: The stable translation key identifier
- `_str`: User-friendly fallback text if translation is missing

This approach works with both `<T>` components and `useT()`:

```jsx
// With <T> component
<T _str="Hello, World!" _key="greetings.hello" />

// With useT() hook
const t = useT();
t('Hello, World!', { _key: 'greetings.hello' })
```

Both provide stable translation keys while ensuring users see readable text if translations are missing.

### Why This Matters

Think of translation keys like CSS classes. Just as you wouldn't write inline styles everywhere, you don't want raw strings scattered throughout your codebase. Keys give you:

- **Maintainability**: Change text once, update everywhere
- **Consistency**: Same key = same translation across your app
- **Organization**: Group related translations (e.g., all greetings start with `greetings.`)
- **Translator Clarity**: Keys provide context about where/how text is used


## Variable Interpolation

Static translations are great, but most applications need to display dynamic data - usernames, prices, dates, counts. This is where **variable interpolation** comes in, allowing you to inject dynamic values into your translated strings.

### The Problem with Concatenation

You might be tempted to do this:

```jsx
// ❌ Don't do this - breaks translations
<T _str="Hello, " />{username}<T _str="!" />
```

This approach is problematic because:
1. Word order varies between languages (in Japanese, the name might come first)
2. You're splitting one translatable unit into multiple pieces
3. Translators can't see the full context

### The Solution: Placeholders

Instead, use placeholders within your string:

```jsx
import { T } from '@transifex/react';

function WelcomeMessage({ username }) {
  return (
    <div>
      <T _str="Hello, {username}!" username={username} />
    </div>
  );
}

// Usage
<WelcomeMessage username="Maria" />
// Output: "Hello, Maria!"
```

How the text replacement works:

When you write `<T _str="Hello, {username}!" username={username} />`, Transifex looks at the string "Hello, {username}!" and finds the placeholder wrapped in curly braces. It then looks for a prop with the same name - in this case `username="Maria"`. Transifex takes that value and replaces `{username}` with "Maria", so the final output rendered on the page is "Hello, Maria!".

If the language changes to Spanish, Transifex looks up the Spanish translation which might be "¡Hola, {username}!". It performs the same replacement - finds `{username}`, replaces it with "Maria", and renders "¡Hola, Maria!" on the page. The placeholder can be positioned anywhere in the translated string, which is why this works across different languages with different word orders.

### Working with Multiple Variables

Real-world applications often need multiple dynamic values in a single string:

```jsx
function ProductPrice({ item, price }) {
  return (
    <T _str="The {item} costs ${price}" item={item} price={price} />
  );
}

// Usage
<ProductPrice item="laptop" price="999.99" />
// Output: "The laptop costs $999.99"

// In French: "Le {item} coûte ${price}"
// Output: "Le laptop coûte $999.99"
```

How multiple replacements work:

When Transifex processes `<T _str="The {item} costs ${price}" item="laptop" price="999.99" />`, it scans the string and finds two placeholders: `{item}` and `{price}`. It looks for matching props - `item="laptop"` and `price="999.99"` - and performs the replacements. First it replaces `{item}` with "laptop", then it replaces `{price}` with "999.99". The final text that appears on the page is "The laptop costs $999.99".

In French, the translation string has a different structure: "Le {item} coûte ${price}". Notice the dollar sign is after the price placeholder in French instead of before. When rendering, Transifex does the same replacement process, and you get "Le laptop coûte $999.99" on the page.

Important: The prop name must exactly match the placeholder name. If your placeholder is `{username}`, your prop must be `username={...}`, not `userName` or `user_name`. The matching is case-sensitive.

### Why This Approach Works

Variable interpolation respects linguistic differences:

```jsx
// English: "Welcome back, {username}!"
// Japanese: "{username}さん、おかえりなさい！" (name comes first + honorific)
// Spanish: "¡Bienvenido de nuevo, {username}!" (different punctuation)
```

All three translations use the same placeholder `{username}`, but position it appropriately for their language structure. This is impossible with string concatenation.

### Real-World Example

Here's a practical example showing multiple variables in context:

```jsx
const KEYS = {
  ORDER_SUMMARY: 'checkout.order_summary',
};

function OrderSummary({ itemCount, total, deliveryDate }) {
  return (
    <p>
      <T
        _str={KEYS.ORDER_SUMMARY}
        count={itemCount}
        total={total}
        date={deliveryDate}
      />
    </p>
  );
}

// In your translation file:
// English: "Your order of {count} items totaling ${total} will arrive on {date}"
// Spanish: "Su pedido de {count} artículos por un total de ${total} llegará el {date}"
// French: "Votre commande de {count} articles pour un total de ${total} arrivera le {date}"
```

How this renders:

When someone views their checkout with 3 items, $45.99 total, and delivery on March 15th, they'll see the component render like this: `<OrderSummary itemCount={3} total="45.99" deliveryDate="March 15" />`.

Transifex looks up the translation for the current language. In English, it finds "Your order of {count} items totaling ${total} will arrive on {date}". It replaces `{count}` with 3, `{total}` with 45.99, and `{date}` with "March 15". The final text displayed on the page is "Your order of 3 items totaling $45.99 will arrive on March 15".

If the user switches to Spanish, Transifex uses the Spanish translation "Su pedido de {count} artículos por un total de ${total} llegará el {date}". It performs the same replacements and displays "Su pedido de 3 artículos por un total de $45.99 llegará el March 15" on the page. The translator gets to see the complete sentence with all the placeholders, so they can write natural-sounding translations that follow their language's grammar and word order.


## Language Switching

So far, we've learned how to mark text for translation and inject dynamic values. But how do users actually switch between languages? This section covers setting up language switching - one of the trickiest parts to get right.

### Understanding the Architecture

Before diving into code, let's understand how Transifex Native works:

1. **Initialization**: You initialize the Transifex SDK with configuration
2. **Translation Loading**: You load translations for each language into memory
3. **Provider**: You wrap your app in a provider that makes translations available
4. **Language Switching**: You call a function to change the current language

This might seem complex, but it ensures translations are always available and switching is instant (no network requests mid-session).

### Setting Up the Provider

First, create a provider component that initializes Transifex and loads translations. This component wraps your entire application:

```jsx
import { tx } from '@transifex/native';
import { TXProvider } from '@transifex/react';
import { useEffect, useState } from 'react';

const translations = {
  en: {
    'greetings.hello': 'Hello, World!',
    'greetings.welcome': 'Welcome to our app',
  },
  es: {
    'greetings.hello': 'Hola, Mundo!',
    'greetings.welcome': 'Bienvenido a nuestra aplicación',
  },
  fr: {
    'greetings.hello': 'Bonjour le monde!',
    'greetings.welcome': 'Bienvenue dans notre application',
  },
};

function TransifexProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize Transifex
    tx.init({
      token: '', // Empty for local development
      currentLocale: 'en',
    });

    // Load translations into cache
    Object.entries(translations).forEach(([locale, strings]) => {
      Object.entries(strings).forEach(([key, value]) => {
        tx.cache.update(locale, { [key]: value });
      });
    });

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <TXProvider tx={tx}>{children}</TXProvider>;
}
```

### Understanding What Just Happened

This provider code might seem straightforward, but there's a lot happening under the hood. Let's break down each piece:

#### 1. The Translation Cache

```jsx
// Load translations into cache
Object.entries(translations).forEach(([locale, strings]) => {
  Object.entries(strings).forEach(([key, value]) => {
    tx.cache.update(locale, { [key]: value });
  });
});
```

**What is `tx.cache.update()`?**

Transifex Native maintains an in-memory cache of translations. When you call `tx.cache.update(locale, translations)`, you're storing translations in memory for instant access. This cache is the secret to why language switching is so fast - no network requests, no file reads, just a simple lookup in memory.

**Why manual caching?**

In a production app connected to Transifex servers, translations would be fetched automatically. But in local development mode (with an empty token), we manually populate the cache. This gives us:

- **Instant access**: Translations are immediately available
- **Offline development**: No need for a Transifex account during development
- **No network delays**: Everything runs locally
- **Predictable behavior**: You control exactly what translations are available

#### 2. How Components Access Translations

Here's the magic: Components don't need to know about the provider at all!

Once you wrap your app with `<TransifexProvider>`, any component can use `<T>` or `useT()` without any special setup:

```jsx
// Somewhere deep in your component tree
import { T, useT } from '@transifex/react';

function UserProfile({ username }) {
  const t = useT();

  return (
    <div>
      <h2><T _str="profile.title" /></h2>
      <p>
        <T _str="profile.welcome_message" username={username} />
      </p>

      <input
        type="text"
        placeholder={t('Search your posts', { _key: 'profile.search_placeholder' })}
        aria-label={t('Search', { _key: 'profile.search_label' })}
      />

      <button title={t('Save changes', { _key: 'profile.save_tooltip' })}>
        <T _str="profile.save_button" />
      </button>
    </div>
  );
}
```

This component uses both `<T>` for visible text content and `useT()` for string attributes. Here's what happens when it renders:

1. The component imports `T` and `useT` from `@transifex/react`
2. For `<T _str="profile.title" />`:
   - `<T>` asks: "What's the current language?" (uses React Context under the hood)
   - Provider responds: "It's 'en'"
   - `<T>` looks up 'profile.title' in the cache for 'en'
   - Cache returns: "User Profile"
   - `<T>` renders: "User Profile" inside the h2
3. For `t('Search your posts', { _key: 'profile.search_placeholder' })`:
   - `useT()` asks the provider for the current language
   - It looks up 'profile.search_placeholder' in the 'en' cache
   - Returns the string "Search your posts"
   - The string is set as the input's placeholder attribute

No prop drilling, no passing down translation functions, no configuration in child components. The provider makes translations available through React Context, and every component in your app can just import `T` or `useT()` and start using them.

#### 3. The Mounted State Pattern

```jsx
const [mounted, setMounted] = useState(false);
// ...
if (!mounted) return null;
```

**Why is this necessary?**

This prevents a flash of untranslated content. Here's the problem without it:

1. App starts rendering
2. Components render with `<T>` components
3. Provider hasn't initialized yet - no translations in cache!
4. `<T>` shows translation keys or source strings (fallback)
5. Provider finishes initializing
6. Components re-render with translations
7. **User sees a flicker** 😞

With the mounted pattern:
1. Provider initializes (children not rendered yet)
2. Translations loaded into cache
3. `mounted` set to `true`
4. Children render
5. `<T>` components find translations immediately
6. **No flicker!** 😊

#### 4. Where Does This Provider Go?

Wrap your entire app at the root level:

```jsx
// In your main App.js or index.js
import { TransifexProvider } from './TransifexProvider';

function App() {
  return (
    <TransifexProvider>
      <YourApp />
    </TransifexProvider>
  );
}
```

**Important:** Every component that uses `<T>` or `useT()` must be inside this provider. If you try to use them outside, you'll get an error.

### Creating a Language Switcher

Now that translations are loaded, let's build a UI component that lets users switch languages. This is where many developers hit their first stumbling block, so pay close attention to the details:

```jsx
import { useLocale } from '@transifex/react';
import { tx } from '@transifex/native';

function LanguageSwitcher() {
  // Get the current locale
  const locale = useLocale();
  const currentLocale = String(locale);

  // Function to change the language
  const handleLanguageChange = (langCode) => {
    tx.setCurrentLocale(langCode);
  };

  return (
    <div>
      <p>Current Language: {currentLocale}</p>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('es')}>Español</button>
      <button onClick={() => handleLanguageChange('fr')}>Français</button>
    </div>
  );
}
```

Let's break down what's happening:

1. **`useLocale()` Hook**: Returns the current language code (e.g., "en", "es", "fr")
2. **`String(locale)`**: Converts the locale to a string (it's technically a special object, but treating it as a string works)
3. **`tx.setCurrentLocale(langCode)`**: Changes the current language - this triggers a re-render of all `<T>` components

When a user clicks "Español", `setCurrentLocale('es')` is called, and instantly all your `<T>` components throughout the app will update to show Spanish translations. No page reload, no flicker - just instant switching.

> **Note for Next.js Users**: If you're using Next.js 13+ with the App Router, you'll need to add `'use client'` at the top of components that use hooks or event handlers, as they're Server Components by default.

### ⚠️ Common Mistake: useLocale() Returns a String

This trips up many developers when they first implement language switching:

**DON'T** try to call methods on the `useLocale()` result:

```jsx
// ❌ WRONG - locale is a string, not an object
const locale = useLocale();
locale.setCurrentLocale('es'); // Error: locale.setCurrentLocale is not a function
```

**DO** use `tx.setCurrentLocale()` instead:

```jsx
// ✅ CORRECT
import { tx } from '@transifex/native';
tx.setCurrentLocale('es');
```

**Plain English Explanation:**

The naming can be confusing. You see "locale" returned from a hook and think "this must be the locale object with methods!" But actually:

- **`useLocale()`** returns a plain string: `"en"`, `"es"`, `"fr"`, etc.
- It's for *reading* the current language, not *changing* it
- Think of it like a read-only value

To *change* the language, you always use:
- **`tx.setCurrentLocale('es')`** - this is the actual method that switches languages

It's like the difference between checking your thermostat (reading) vs adjusting it (writing). `useLocale()` tells you what language you're on. `tx.setCurrentLocale()` changes it.

## String Props with `useT()`

Here's a problem you'll encounter quickly: What if you need translated text in a place where you can't use a React component?

Consider an input field:

```jsx
// ❌ This doesn't work - placeholder needs a string, not a component
<input placeholder={<T _str="Search..." />} />
```

The `<T>` component returns a `ReactNode` (a React element), but many HTML attributes like `placeholder`, `title`, and `aria-label` expect a plain string. This is where the `useT()` hook becomes essential.

### Understanding the Difference: `<T>` vs `useT()`

Think of them as two tools for different jobs:

- **`<T>` component**: Returns React elements (JSX) - use for content *inside* tags
- **`useT()` hook**: Returns plain strings - use for HTML *attributes* that need text

Here's a visual example:

```jsx
const t = useT();

// ✅ <T> for content
<button>{<T _str="Click me" />}</button>

// ✅ useT() for attributes
<button title={t('Click to save')}>Save</button>
```

### When to Use `useT()`

You'll need `useT()` for:

- **Input placeholders**: `<input placeholder={t('Enter your name')} />`
- **Button tooltips**: `<button title={t('Click to save')} />`
- **Accessibility labels**: `<div aria-label={t('Close menu')} />`
- **Select options**: `<option value="en">{t('English')}</option>`
- **Component props**: Any prop typed as `string` (not `ReactNode`)
- **Alert messages**: When passing strings to `alert()`, `confirm()`, etc.

### Practical Example: Form Elements

Let's build a realistic contact form with translated labels, placeholders, and buttons. This example shows how to translate multiple string attributes in a single form:

```jsx
import { useT } from '@transifex/react';

function ContactForm() {
  const t = useT();

  return (
    <form>
      <label>
        {t('Name', { _key: 'form.name_label' })}
      </label>
      <input
        type="text"
        placeholder={t('Enter your name', { _key: 'form.name_placeholder' })}
        aria-label={t('Name', { _key: 'form.name_label' })}
      />

      <label>
        {t('Email', { _key: 'form.email_label' })}
      </label>
      <input
        type="email"
        placeholder={t('your@email.com', { _key: 'form.email_placeholder' })}
        aria-label={t('Email', { _key: 'form.email_label' })}
      />

      <button type="submit">
        {t('Submit', { _key: 'form.submit' })}
      </button>
    </form>
  );
}
```

How this renders:

When the form appears on the page, the `useT()` hook looks up each translation and returns a plain string. For the name field, it looks up 'form.name_label' and gets back "Name" which displays as the label text. For the placeholder, it looks up 'form.name_placeholder' and gets "Enter your name", which shows as gray text inside the empty input box. The `aria-label` also gets "Name" for screen readers.

If the user switches to Spanish, `useT()` looks up the same keys but returns Spanish strings. The label becomes "Nombre", the placeholder becomes "Ingresa tu nombre", and these Spanish strings are what actually appear in the HTML attributes and render on the page. Since HTML attributes like `placeholder` and `aria-label` only accept strings (not React components), we use `useT()` instead of `<T>` to get the translated text.

### Example: Button Tooltip

This example shows how to add a translated tooltip to a button using the `title` attribute:

```jsx
function SaveButton() {
  const t = useT();

  return (
    <button
      title={t('Click to save', { _key: 'button.save_tooltip' })}
    >
      {t('Save', { _key: 'button.save' })}
    </button>
  );
}
```

How this renders:

When the button renders, `useT()` looks up 'button.save_tooltip' and gets the string "Click to save". This string is set as the `title` attribute on the button element. When a user hovers their mouse over the button, the browser shows this text as a tooltip. For the button's visible text, `useT()` looks up 'button.save' and returns "Save", which displays inside the button.

If the language changes to French, `useT()` retrieves the French translations. The title attribute becomes "Cliquez pour enregistrer" and the button text becomes "Enregistrer". Both are plain strings that get inserted into the actual HTML, so the tooltip and button text both appear in French when rendered on the page.

### Example: Alert Component

This example shows how to pass translated messages to a component that expects a string prop:

```jsx
function Alert({ message, type }) {
  return <div className={`alert-${type}`}>{message}</div>;
}

function AlertExample() {
  const t = useT();

  return (
    <div>
      <Alert
        type="success"
        message={t('Operation completed successfully!', { _key: 'alerts.success' })}
      />
      <Alert
        type="error"
        message={t('An error occurred', { _key: 'alerts.error' })}
      />
    </div>
  );
}
```

How this renders:

The Alert component expects a plain string for its message prop. When you render `<Alert type="success" message={t('Operation completed successfully!', { _key: 'alerts.success' })} />`, the `useT()` hook looks up 'alerts.success' in the current language and returns the translated string. In English, it returns "Operation completed successfully!" which gets passed to the Alert component and renders inside the div.

When the user switches to Spanish, `useT()` looks up the same key but returns "¡Operación completada con éxito!" instead. This Spanish string is what gets passed to the Alert component and displays on the page. Since Alert's message prop is typed as string (not ReactNode), we must use `useT()` to get a plain string rather than trying to pass `<T _str="..." />` which would cause a type error.

### Key Difference: `<T>` vs `useT()`

| Feature | `<T>` Component | `useT()` Hook |
|---------|----------------|---------------|
| **Returns** | `ReactNode` | `string` |
| **Use in JSX** | ✅ Yes | ❌ No (returns string) |
| **Use in props** | Only if prop accepts ReactNode | ✅ Yes |
| **Example** | `<T _str="Hello" />` | `t('Hello')` |


## Pluralization

Different languages have different plural rules. English has two forms (1 item vs 2 items), but other languages can have zero, one, few, many, and other forms. Transifex Native uses the industry-standard ICU MessageFormat to handle this complexity automatically.

### Basic Plural Example

Here's how to display "1 notification" vs "5 notifications" correctly:

```jsx
import { T } from '@transifex/react';

function NotificationCount({ count }) {
  return (
    <T
      _str="{count, plural, one {# notification} other {# notifications}}"
      count={count}
    />
  );
}

// Usage
<NotificationCount count={1} />  // Output: "1 notification"
<NotificationCount count={5} />  // Output: "5 notifications"
```

How plural replacement works:

When you render `<NotificationCount count={1} />`, Transifex looks at the string and sees the plural pattern `{count, plural, one {# notification} other {# notifications}}`. It checks the count value you passed - in this case 1. Since the count is 1, it selects the "one" pattern which is `# notification`. Then it replaces the `#` symbol with the actual count value, so what appears on the page is "1 notification".

When you render `<NotificationCount count={5} />`, Transifex follows the same process. It sees count is 5, which doesn't match "one", so it falls back to the "other" pattern: `# notifications`. It replaces `#` with 5, and the page displays "5 notifications".

The clever part is that Transifex knows the plural rules for each language. In English, "one" means exactly 1, and "other" means everything else. But in languages like Polish or Arabic that have more complex plural rules (zero, one, few, many, other), Transifex automatically picks the correct form based on the language's grammar rules. You just provide the count, and Transifex handles the rest.

### With Translation Keys

For better maintainability, use translation keys with plurals:

```jsx
const KEYS = {
  COUNT_NOTIFICATION: 'messages.notification_count',
};

// In your translations
const translations = {
  en: {
    [KEYS.COUNT_NOTIFICATION]: '{count, plural, one {# notification} other {# notifications}}',
  },
  es: {
    [KEYS.COUNT_NOTIFICATION]: '{count, plural, one {# notificación} other {# notificaciones}}',
  },
};

// Usage in your component
<T _str={KEYS.COUNT_NOTIFICATION} count={3} />
```

How this renders across languages:

When you render `<T _str={KEYS.COUNT_NOTIFICATION} count={3} />`, Transifex looks up the translation key in the current language. If the language is English, it finds the pattern `{count, plural, one {# notification} other {# notifications}}`. Since count is 3, it selects the "other" form, replaces `#` with 3, and displays "3 notifications" on the page.

If the user switches to Spanish, Transifex finds the Spanish pattern `{count, plural, one {# notificación} other {# notificaciones}}`. With count of 3, it again selects "other", replaces `#` with 3, and displays "3 notificaciones" on the page.

The beauty of this approach is that all the plural logic lives in the translation strings, not in your code. If you later add Polish, which has different plural rules (1, 2-4, 5+), you just add the Polish translation pattern with the appropriate forms. Your component code stays exactly the same - you still just pass `count={3}` and Transifex handles picking the right form.

Important note: Always use `#` as the placeholder in plural forms. This symbol automatically gets replaced with the actual count value when the text is rendered.


## Common Pitfalls

### 1. ❌ Context Attribute Doesn't Work with Translation Keys

**The Problem:**

English has many words that mean different things depending on context. For example, "post" can be:
- A noun: "I read your post" (social media post)
- A verb: "Click to post" (action to publish)

In other languages, these might be completely different words. You might try using `_context` to distinguish them:

```jsx
// ❌ This doesn't work as expected with translation keys
<T _str="common.post" _context="noun" />   // Social media post
<T _str="common.post" _context="verb" />   // Action to publish
```

**Why It Fails:**

Under the hood, Transifex Native uses MD5 hashing to look up translations in the cache. When you use `_context`, it creates a hash like: `md5('5:' + 'common.post' + ':' + 'noun')`. But when you populate the cache with translation keys, the hash doesn't match, and Transifex can't find the translation. The `_context` attribute was designed for when you use source strings as keys, not custom translation keys.

**The Solution:**

Instead of using one key with context, use separate keys for each meaning:

```jsx
// ✅ CORRECT - Use different keys
const KEYS = {
  POST_NOUN: 'common.post_noun',    // Social media post
  POST_VERB: 'common.post_verb',    // Action to publish
  LIKE_VERB: 'common.like_verb',    // Like button
  LIKE_PREP: 'common.like_prep',    // Comparison "like this"
};

<T _str={KEYS.POST_NOUN} />  // "Post" (noun)
<T _str={KEYS.POST_VERB} />  // "Post" (verb)
```

**What this means:** Each context variant gets its own key. In your translations, you provide different translations for each:

```javascript
// English
'common.post_noun': 'Post',
'common.post_verb': 'Post',

// Spanish
'common.post_noun': 'Publicación',
'common.post_verb': 'Publicar',
```

This approach is clearer for translators and actually works with translation keys!

**Reference:** [GitHub Discussion on Context Issues][6]

### 2. ❌ Forgetting the `_str` Prop

**The Problem:**

It's natural to think "I have a translation key, so I should use the `_key` prop only":

```jsx
// ❌ WRONG - Missing _str prop
<T _key="greetings.hello" />
// Nothing will render!
```

**Why It Fails:**

The `<T>` component requires the `_str` prop. The `_key` prop is optional and used to specify a separate translation key when you want a different fallback text.

**The Solution:**

Always provide `_str`, and optionally add `_key` for better fallbacks:

```jsx
// ✅ Option 1: _str only (key and fallback are the same)
<T _str="greetings.hello" />

// ✅ Option 2: Both _str and _key (RECOMMENDED)
<T _str="Hello, World!" _key="greetings.hello" />
```

**With `useT()` Hook:**

The same pattern applies:

```jsx
const t = useT();

// ✅ Simple approach
t('greetings.hello')

// ✅ Better approach with fallback
t('Enter your name', { _key: 'form.name_placeholder' })
```

**Plain English:**
- `_str` is required and provides the fallback text
- `_key` is optional and specifies a different translation key to look up
- If you provide both, Transifex uses `_key` for lookup and `_str` as fallback

### 3. ❌ Trying to Use `useT()` Result in JSX Directly

**The Problem:**

You discover `useT()` and think "This looks simpler!" so you use it everywhere:

```jsx
// ❌ Works but not the recommended pattern
const t = useT();
return <div>{t('Hello, World!')}</div>;
```

**Why This Matters:**

While this technically works, it's not the intended pattern and can cause issues:
1. **Type safety**: `<T>` returns the correct React types
2. **Feature parity**: Future Transifex features might only work with `<T>`
3. **Clarity**: Other developers expect to see `<T>` for JSX content

**The Solution:**

Use the right tool for the job:

```jsx
// ✅ CORRECT - Use <T> for JSX content
return <div><T _str="Hello, World!" /></div>;

// ✅ CORRECT - Use useT() for string props
const t = useT();
return <input placeholder={t('Search...')} />;
```

**Plain English:** Think of `<T>` as "translation in JSX" and `useT()` as "translation to string". If you're rendering text directly in your component tree, use `<T>`. If you need to pass a string to an HTML attribute or component prop, use `useT()`.

### 4. ❌ Not Handling Client-Side Initialization

**The Problem:**

You might try to initialize Transifex and immediately start using translations:

```jsx
// ❌ May not work - tx might not be ready
tx.init({ token: '', currentLocale: 'en' });
tx.setCurrentLocale('es');  // Might fail!

function App() {
  return <T _str="Hello" />;  // Might show key instead of translation!
}
```

**Why It Fails:**

Initialization takes time (even if just a few milliseconds). If components render before `tx.init()` completes, they won't find any translations in the cache. This causes:
1. Translation keys showing instead of text
2. Language switching not working
3. Flickering as translations load

**The Solution:**

Use a provider pattern that waits for initialization to complete:

```jsx
function TransifexProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize Transifex
    tx.init({ /* config */ });
    // Load translations into cache
    // ... (cache loading code)

    // Only now are we ready
    setMounted(true);
  }, []);

  // Don't render children until ready
  if (!mounted) return null;

  return <TXProvider tx={tx}>{children}</TXProvider>;
}
```

**What this does:**
1. App starts loading but children don't render yet (`mounted = false`)
2. `useEffect` runs and initializes Transifex
3. Translations are loaded into the cache
4. `mounted` is set to `true`
5. Now children render with translations ready
6. No flicker, everything just works!

**Plain English:** Think of it like waiting for a file to download before opening it. You don't want users seeing broken content while translations are loading, so you wait until everything is ready before rendering your app.


## Best Practices

1. **Use translation keys instead of source strings** for better maintainability
2. **Centralize translation keys** in a constants file
3. **Use `<T>` for JSX content**, `useT()` for string props
4. **Avoid `_context` with translation keys** - use separate keys instead
5. **Always initialize Transifex** before rendering components that need translations
6. **Use ICU MessageFormat** for plurals with the `#` placeholder
7. **Provide fallback content** for when translations are loading or missing


## Resources

- [Transifex Native Documentation][5]
- [Transifex React SDK on GitHub][4]
- [ICU MessageFormat Guide][7]
- [Transifex Pricing][2]


## Working Examples

This repository contains four complete examples demonstrating all the concepts above:

1. **Basic Example** - Simple translations with variables and plurals
2. **Reusable Components** - Building reusable translated components
3. **Context Example** - Handling context-specific translations
4. **String Props Example** - Using `useT()` for form elements and string props

Navigate to `/transifex` to explore all examples with live language switching!

[1]: https://www.transifex.com/
[2]: https://www.transifex.com/pricing/
[3]: https://github.com/transifex/transifex-javascript
[4]: https://github.com/transifex/transifex-javascript/tree/master/packages/react
[5]: https://developers.transifex.com/docs/native
[6]: https://github.com/transifex/transifex-javascript/issues/359
[7]: https://unicode-org.github.io/icu/userguide/format_parse/messages/
