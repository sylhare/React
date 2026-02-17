/**
 * Translation keys for the Transifex example
 * Using keys instead of English strings provides better maintainability
 */

export const KEYS = {
  HELLO_WORLD: 'common.hello_world',
  WELCOME_TRANSIFEX: 'common.welcome_transifex',
  SIMPLE_EXAMPLE: 'common.simple_example',
  HELLO_USERNAME: 'greetings.hello_username',
  WELCOME_BACK_USERNAME: 'greetings.welcome_back_username',
  ITEM_COST: 'products.item_cost',
  COUNT_ITEM: 'plurals.count_item',
  COUNT_MESSAGE: 'plurals.count_message',
  COUNT_NOTIFICATION: 'plurals.count_notification',
  COUNT_NEW_MESSAGE: 'plurals.count_new_message',
  READ: 'actions.read',
  CLOSE: 'actions.close',
  PRESENT: 'actions.present',
  DELETE: 'actions.delete',
  CANCEL: 'actions.cancel',
  SAMPLE_CONTENT: 'content.sample',
  HELLO_WELCOME: 'content.hello_welcome',
  TEXT_CHANGES: 'content.text_changes',
  IN_STOCK: 'status.in_stock',
  OUT_OF_STOCK: 'status.out_of_stock',
  POST_NOUN: 'common.post_noun',           // Social media post (noun)
  POST_VERB: 'common.post_verb',           // Action to publish (verb)
  LIKE_VERB: 'common.like_verb',           // Social media like button (verb)
  LIKE_PREPOSITION: 'common.like_preposition', // Comparison/similarity (preposition)
  SAVE_FILE: 'common.save_file',           // Save file operation
  SAVE_BOOKMARK: 'common.save_bookmark',   // Save to favorites/bookmarks
  DELETE_CONFIRM: 'messages.delete_confirm',
  LOADING: 'messages.loading',
  WELCOME_USER: 'messages.welcome_user',
  UPGRADE_PRO: 'cta.upgrade_pro',
} as const;
