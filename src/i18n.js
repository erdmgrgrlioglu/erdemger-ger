import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translation_en from "./locales/en/translation.json";
import translation_de from "./locales/de/translation.json";
import translation_tr from "./locales/tr/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "de", "tr"],
    resources: {
      en: {
        translation: translation_en,
      },
      de: {
        translation: translation_de,
      },
      tr: {
        translation: translation_tr,
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
