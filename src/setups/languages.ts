import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/locales/en";
import de from "../assets/locales/de";

import LanguageDetector from "i18next-browser-languagedetector";

const i18nextInstance = i18next;

i18nextInstance.use(initReactI18next);

i18nextInstance.use(LanguageDetector);

i18nextInstance.init({
  resources: { en, de },
});

export { i18next };
