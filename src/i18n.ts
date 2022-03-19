import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import es from './i18n/es.json'
import en from './i18n/en.json'

const resources = {
  es: { translation: es },
  en: { translation: en }
}

export const availableLanguages = Object.keys(resources)
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n