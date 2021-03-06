import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationCZ from "./locales/cz/translation.json";
import translationEN from "./locales/en/translation.json";
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  cz: {
    translation: translationCZ
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "cz",
    fallbackLng: "cz", // use en if detected lng is not available
    keySeparator: ".",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
