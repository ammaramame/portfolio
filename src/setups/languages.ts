import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/locales/en";
import de from "../assets/locales/de";

i18next.use(initReactI18next).init({
  lng: localStorage.getItem("language") ?? "en", // if you're using a language detector, do not define the lng option
  debug: true,

  resources: {
    en,
    de,
  },
});

export { i18next };
