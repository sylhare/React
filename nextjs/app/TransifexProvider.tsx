'use client';

import { tx } from '@transifex/native';
import { TXProvider } from '@transifex/react';
import { ReactNode, useEffect, useState } from 'react';
import { KEYS } from './transifex/translationKeys';

const translations = {
  en: {
    [KEYS.HELLO_WORLD]: 'Hello, World!',
    [KEYS.WELCOME_TRANSIFEX]: 'Welcome to Transifex',
    [KEYS.SIMPLE_EXAMPLE]: 'This is a simple translation example.',
    [KEYS.HELLO_USERNAME]: 'Hello, {username}!',
    [KEYS.WELCOME_BACK_USERNAME]: 'Welcome back, {username}! How are you today?',
    [KEYS.ITEM_COST]: 'The {item} costs ${price}',
    [KEYS.COUNT_ITEM]: '{count, plural, one {# item} other {# items}}',
    [KEYS.COUNT_MESSAGE]: '{count, plural, one {# message} other {# messages}}',
    [KEYS.COUNT_NOTIFICATION]: '{count, plural, one {You have # notification} other {You have # notifications}}',
    [KEYS.COUNT_NEW_MESSAGE]: '{count, plural, one {You have # new message} other {You have # new messages}}',
    [KEYS.READ]: 'Read',
    [KEYS.CLOSE]: 'Close',
    [KEYS.PRESENT]: 'Present',
    [KEYS.DELETE]: 'Delete',
    [KEYS.CANCEL]: 'Cancel',
    [KEYS.SAMPLE_CONTENT]: 'Sample Content',
    [KEYS.HELLO_WELCOME]: 'Hello, welcome to our application!',
    [KEYS.TEXT_CHANGES]: 'This text will change based on the selected language.',
    [KEYS.IN_STOCK]: 'In Stock',
    [KEYS.OUT_OF_STOCK]: 'Out of Stock',
    [KEYS.POST_NOUN]: 'Post',
    [KEYS.POST_VERB]: 'Post',
    [KEYS.LIKE_VERB]: 'Like',
    [KEYS.LIKE_PREPOSITION]: 'Like',
    [KEYS.SAVE_FILE]: 'Save',
    [KEYS.SAVE_BOOKMARK]: 'Save',
    [KEYS.DELETE_CONFIRM]: 'Are you sure you want to delete this?',
    [KEYS.LOADING]: 'Loading...',
    [KEYS.WELCOME_USER]: 'Welcome back, {username}',
    [KEYS.UPGRADE_PRO]: 'Upgrade to Pro',
  },
  es: {
    [KEYS.HELLO_WORLD]: 'Hola, Mundo!',
    [KEYS.WELCOME_TRANSIFEX]: 'Bienvenido a Transifex',
    [KEYS.SIMPLE_EXAMPLE]: 'Este es un ejemplo simple de traducción.',
    [KEYS.HELLO_USERNAME]: '¡Hola, {username}!',
    [KEYS.WELCOME_BACK_USERNAME]: '¡Bienvenido de vuelta, {username}! ¿Cómo estás hoy?',
    [KEYS.ITEM_COST]: 'El {item} cuesta ${price}',
    [KEYS.COUNT_ITEM]: '{count, plural, one {# artículo} other {# artículos}}',
    [KEYS.COUNT_MESSAGE]: '{count, plural, one {# mensaje} other {# mensajes}}',
    [KEYS.COUNT_NOTIFICATION]: '{count, plural, one {Tienes # notificación} other {Tienes # notificaciones}}',
    [KEYS.COUNT_NEW_MESSAGE]: '{count, plural, one {Tienes # mensaje nuevo} other {Tienes # mensajes nuevos}}',
    [KEYS.READ]: 'Leer',
    [KEYS.CLOSE]: 'Cerrar',
    [KEYS.PRESENT]: 'Regalo',
    [KEYS.DELETE]: 'Eliminar',
    [KEYS.CANCEL]: 'Cancelar',
    [KEYS.SAMPLE_CONTENT]: 'Contenido de Ejemplo',
    [KEYS.HELLO_WELCOME]: '¡Hola, bienvenido a nuestra aplicación!',
    [KEYS.TEXT_CHANGES]: 'Este texto cambiará según el idioma seleccionado.',
    [KEYS.IN_STOCK]: 'En Stock',
    [KEYS.OUT_OF_STOCK]: 'Agotado',
    [KEYS.POST_NOUN]: 'Publicación',
    [KEYS.POST_VERB]: 'Publicar',
    [KEYS.LIKE_VERB]: 'Me gusta',
    [KEYS.LIKE_PREPOSITION]: 'Como',
    [KEYS.SAVE_FILE]: 'Guardar',
    [KEYS.SAVE_BOOKMARK]: 'Guardar',
    [KEYS.DELETE_CONFIRM]: '¿Estás seguro de que quieres eliminar esto?',
    [KEYS.LOADING]: 'Cargando...',
    [KEYS.WELCOME_USER]: 'Bienvenido de nuevo, {username}',
    [KEYS.UPGRADE_PRO]: 'Mejorar a Pro',
  },
  fr: {
    [KEYS.HELLO_WORLD]: 'Bonjour le monde!',
    [KEYS.WELCOME_TRANSIFEX]: 'Bienvenue sur Transifex',
    [KEYS.SIMPLE_EXAMPLE]: 'Ceci est un exemple de traduction simple.',
    [KEYS.HELLO_USERNAME]: 'Bonjour, {username}!',
    [KEYS.WELCOME_BACK_USERNAME]: 'Bon retour, {username}! Comment allez-vous aujourd\'hui?',
    [KEYS.ITEM_COST]: 'Le {item} coûte ${price}',
    [KEYS.COUNT_ITEM]: '{count, plural, one {# article} other {# articles}}',
    [KEYS.COUNT_MESSAGE]: '{count, plural, one {# message} other {# messages}}',
    [KEYS.COUNT_NOTIFICATION]: '{count, plural, one {Vous avez # notification} other {Vous avez # notifications}}',
    [KEYS.COUNT_NEW_MESSAGE]: '{count, plural, one {Vous avez # nouveau message} other {Vous avez # nouveaux messages}}',
    [KEYS.READ]: 'Lire',
    [KEYS.CLOSE]: 'Fermer',
    [KEYS.PRESENT]: 'Cadeau',
    [KEYS.DELETE]: 'Supprimer',
    [KEYS.CANCEL]: 'Annuler',
    [KEYS.SAMPLE_CONTENT]: 'Contenu d\'exemple',
    [KEYS.HELLO_WELCOME]: 'Bonjour, bienvenue dans notre application!',
    [KEYS.TEXT_CHANGES]: 'Ce texte changera en fonction de la langue sélectionnée.',
    [KEYS.IN_STOCK]: 'En Stock',
    [KEYS.OUT_OF_STOCK]: 'Rupture de Stock',
    [KEYS.POST_NOUN]: 'Publication',
    [KEYS.POST_VERB]: 'Publier',
    [KEYS.LIKE_VERB]: "J'aime",
    [KEYS.LIKE_PREPOSITION]: 'Comme',
    [KEYS.SAVE_FILE]: 'Enregistrer',
    [KEYS.SAVE_BOOKMARK]: 'Sauvegarder',
    [KEYS.DELETE_CONFIRM]: 'Êtes-vous sûr de vouloir supprimer ceci?',
    [KEYS.LOADING]: 'Chargement...',
    [KEYS.WELCOME_USER]: 'Bon retour, {username}',
    [KEYS.UPGRADE_PRO]: 'Passer à Pro',
  },
};

let txInitialized = false;

function initializeTx() {
  if (txInitialized || typeof window === 'undefined') {
    return;
  }

  tx.init({
    token: '',

    currentLocale: 'en',
  });

  Object.entries(translations).forEach(([locale, strings]) => {
    Object.entries(strings).forEach(([key, value]) => {
      tx.cache.update(locale, { [key]: value });
    });
  });

  txInitialized = true;
}

export function TransifexProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initializeTx();
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <TXProvider tx={tx}>{children}</TXProvider>;
}
