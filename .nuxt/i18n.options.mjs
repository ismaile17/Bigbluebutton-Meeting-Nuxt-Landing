
// @ts-nocheck
import locale_C_58_C_58_Users_ismail_erden_Desktop_meeting_landing_locales_en_json from "../locales/en.json";
import locale_C_58_C_58_Users_ismail_erden_Desktop_meeting_landing_locales_tr_json from "../locales/tr.json";


export const localeCodes =  [
  "en",
  "tr"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => Promise.resolve(locale_C_58_C_58_Users_ismail_erden_Desktop_meeting_landing_locales_en_json), cache: true }],
  "tr": [{ key: "../locales/tr.json", load: () => Promise.resolve(locale_C_58_C_58_Users_ismail_erden_Desktop_meeting_landing_locales_tr_json), cache: true }]
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "__i18n_config_ts_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./i18n.config.ts",
  "locales": [
    {
      "code": "en",
      "name": "English",
      "iso": "en-US",
      "files": [
        "locales/en.json"
      ]
    },
    {
      "code": "tr",
      "name": "Türkçe",
      "iso": "tr-TR",
      "files": [
        "locales/tr.json"
      ]
    }
  ],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_and_default",
  "lazy": false,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": false
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "name": "English",
    "iso": "en-US",
    "files": [
      {
        "path": "locales/en.json"
      }
    ]
  },
  {
    "code": "tr",
    "name": "Türkçe",
    "iso": "tr-TR",
    "files": [
      {
        "path": "locales/tr.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
