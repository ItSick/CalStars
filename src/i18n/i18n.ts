import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from "../i18n/__en.json";
import translationsHE from "../i18n/__he.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  he: {
    translation: translationsHE,
  },

};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "he",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
