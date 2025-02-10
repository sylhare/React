import React from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default function App() {
  return (
    <html lang="en" data-theme="light">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Meta/>
      <Links/>
      <style>{`body { margin: 0; }`}</style>
    </head>
    <body>
      <Theme>
        <Outlet/>
      </Theme>
      <ScrollRestoration/>
      <Scripts/>
    </body>
    </html>
  );
}
