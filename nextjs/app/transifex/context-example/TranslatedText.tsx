import { T } from '@transifex/react';
import { KEYS } from '../shared/translationKeys';

export const COMMON = {
  post: {
    asNoun: () => <T _str={KEYS.POST_NOUN} />,
    asVerb: () => <T _str={KEYS.POST_VERB} />,
  },

  like: {
    asVerb: () => <T _str={KEYS.LIKE_VERB} />,
    asPreposition: () => <T _str={KEYS.LIKE_PREPOSITION} />,
  },

  save: {
    file: () => <T _str={KEYS.SAVE_FILE} />,
    favorite: () => <T _str={KEYS.SAVE_BOOKMARK} />,
  },
};

export const MESSAGES = {
  deleteConfirmation: () => <T _str={KEYS.DELETE_CONFIRM} />,

  loading: () => <T _str={KEYS.LOADING} />,

  welcome: (username: string) => <T _str={KEYS.WELCOME_USER} username={username} />,
};

export const CTA = {
  upgradeToPro: () => <T _str={KEYS.UPGRADE_PRO} />,
};

export const ACTIONS = {
  delete: () => <T _str={KEYS.DELETE} />,
  cancel: () => <T _str={KEYS.CANCEL} />,
};
