import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en', // default language
    backend: {
      loadPath: 'http://localhost:3001/locales/{{lng}}/{{ns}}.json' 
    },
    ns: ['navbar', 'footer', 'homePage', 'boatDisplay', 'rentalTerms', 'privacyPolicy', 'about'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
