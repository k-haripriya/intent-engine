import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './en.json';
import ta from './ta.json';
import hi from './hi.json';

const resources = {
  en: { translation: en },
  ta: { translation: ta },
  hi: { translation: hi },
};

const getDeviceLanguage = () => {
  const locales = RNLocalize.getLocales();
  return locales[0]?.languageCode || 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
