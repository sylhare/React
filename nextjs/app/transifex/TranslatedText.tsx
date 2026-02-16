import { T } from '@transifex/react';

/**
 * Organized Transifex translations with _context and _comment attributes.
 * Use these objects throughout your app for consistent, context-aware translations.
 */

export const COMMON = {
  post: {
    asNoun: (
      <T
        _str="Post"
        _context="social-media-noun"
        _comment="A social media post (noun), not the verb 'to post'"
      />
    ),
    asVerb: (
      <T
        _str="Post"
        _context="action-verb"
        _comment="Action to publish content (verb), not a social media post"
      />
    ),
  },

  like: {
    asVerb: (
      <T
        _str="Like"
        _context="social-action"
        _comment="Social media like button action (verb)"
      />
    ),
    asPreposition: (
      <T
        _str="Like"
        _context="comparison"
        _comment="Used for comparison, similar to 'such as' (preposition)"
      />
    ),
  },

  save: {
    file: (
      <T
        _str="Save"
        _context="file-operation"
        _comment="Save file or document button. Keep it short (max 10 chars)"
      />
    ),
    favorite: (
      <T
        _str="Save"
        _context="bookmark-action"
        _comment="Save to favorites/bookmarks. Should convey 'bookmarking' concept"
      />
    ),
  },
};

export const MESSAGES = {
  deleteConfirmation: (
    <T
      _str="Are you sure you want to delete this?"
      _context="destructive-action"
      _comment="Confirmation message before permanently deleting user data. Use formal/polite tone."
    />
  ),

  loading: (
    <T
      _str="Loading..."
      _context="ui-feedback"
      _comment="Loading indicator. Keep very short. Include ellipsis or equivalent in translation."
    />
  ),

  welcome: (username: string) => (
    <T
      _str="Welcome back, {username}"
      _context="user-greeting"
      _comment="Greeting message on user login. Should be gender-neutral and friendly."
      username={username}
    />
  ),
};

export const CTA = {
  upgradeToPro: (
    <T
      _str="Upgrade to Pro"
      _context="subscription-cta"
      _comment="Call-to-action for premium subscription. Should be compelling and concise."
    />
  ),
};

export const ACTIONS = {
  delete: (
    <T
      _str="Delete"
      _context="destructive-action"
      _comment="Delete button. Use clear, direct language."
    />
  ),
  cancel: (
    <T
      _str="Cancel"
      _context="dismiss-action"
      _comment="Cancel button. Should be neutral and clear."
    />
  ),
};
