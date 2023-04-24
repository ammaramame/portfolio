import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/locales/en";
import de from "../assets/locales/de";
import nl from "../assets/locales/nl";
import dk from "../assets/locales/dk";
import sw from "../assets/locales/sw";
import no from "../assets/locales/no";
import fr from "../assets/locales/fr";

import LanguageDetector from "i18next-browser-languagedetector";
import { appConfig } from "../configs/app.config";

const i18nextInstance = i18next;

i18nextInstance.use(initReactI18next);

i18nextInstance.use(LanguageDetector);

const available_languages = { en, de, sw, nl, dk, no, fr };

const { languages } = appConfig;

const filterdLanguages = Object.keys(available_languages)
  .filter((key) => languages.includes(key))
  .reduce((obj, key) => {
    obj[key] = (available_languages as any)[key];
    return obj;
  }, {} as any);

i18nextInstance.init({
  resources: filterdLanguages,
});

export { i18next };
