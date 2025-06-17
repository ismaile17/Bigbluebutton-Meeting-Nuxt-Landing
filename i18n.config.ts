// export default {
  
//   locale: 'tr',
//   fallbackLocale: 'en'
// }

import en from '~/locales/en.json';
import tr from '~/locales/tr.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    tr: {
      welcome: 'selam'
    }
  }
}))