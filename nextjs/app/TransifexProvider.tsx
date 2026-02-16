'use client';

import { tx } from '@transifex/native';
import { TXProvider } from '@transifex/react';
import { ReactNode } from 'react';

tx.init({
  token: process.env.NEXT_PUBLIC_TRANSIFEX_TOKEN || '',
  cache: () => ({
    es: {
      'Hello, World!': 'Hola, Mundo!',
      'Welcome to Transifex': 'Bienvenido a Transifex',
      'This is a simple translation example.': 'Este es un ejemplo simple de traducción.',
      'Hello, {username}!': '¡Hola, {username}!',
      'Welcome back, {username}! How are you today?': '¡Bienvenido de vuelta, {username}! ¿Cómo estás hoy?',
      'The {item} costs ${price}': 'El {item} cuesta ${price}',
      '{count} item': '{count} artículo | {count} artículos',
      '{count} message': '{count} mensaje | {count} mensajes',
      'You have {count} notification': 'Tienes {count} notificación | Tienes {count} notificaciones',
      'Read': 'Leer',
      'Close': 'Cerrar',
      'Present': 'Regalo',
      'Sample Content': 'Contenido de Ejemplo',
      'Hello, welcome to our application!': '¡Hola, bienvenido a nuestra aplicación!',
      'This text will change based on the selected language.': 'Este texto cambiará según el idioma seleccionado.',
      'You have {count} new message': 'Tienes {count} mensaje nuevo | Tienes {count} mensajes nuevos',
      'In Stock': 'En Stock',
      'Out of Stock': 'Agotado',
    },
    fr: {
      'Hello, World!': 'Bonjour le monde!',
      'Welcome to Transifex': 'Bienvenue sur Transifex',
      'This is a simple translation example.': 'Ceci est un exemple de traduction simple.',
      'Hello, {username}!': 'Bonjour, {username}!',
      'Welcome back, {username}! How are you today?': 'Bon retour, {username}! Comment allez-vous aujourd\'hui?',
      'The {item} costs ${price}': 'Le {item} coûte ${price}',
      '{count} item': '{count} article | {count} articles',
      '{count} message': '{count} message | {count} messages',
      'You have {count} notification': 'Vous avez {count} notification | Vous avez {count} notifications',
      'Read': 'Lire',
      'Close': 'Fermer',
      'Present': 'Cadeau',
      'Sample Content': 'Contenu d\'exemple',
      'Hello, welcome to our application!': 'Bonjour, bienvenue dans notre application!',
      'This text will change based on the selected language.': 'Ce texte changera en fonction de la langue sélectionnée.',
      'You have {count} new message': 'Vous avez {count} nouveau message | Vous avez {count} nouveaux messages',
    },
  }),
});

export function TransifexProvider({ children }: { children: ReactNode }) {
  return <TXProvider tx={tx}>{children}</TXProvider>;
}
