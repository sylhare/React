import React from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
      />
      <Meta />
      <Links />
    </head>
    <body>
      <Theme>
        {children}
      </Theme>
      <ScrollRestoration />
      <Scripts />
    </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
