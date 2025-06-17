// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt', 
  ],
  plugins: [
    '~/plugins/initAuth.ts',
    '~/plugins/axios.ts',
  ],
  i18n: {
    strategy: 'prefix_and_default', 
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'tr', name: 'Türkçe', iso: 'tr-TR', file: 'tr.json' }
    ],
    langDir: 'locales/',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:5082/api', // API base URL
    },
    typescript: {
      strict: true, 
      shim: false 
    }
  },
})



