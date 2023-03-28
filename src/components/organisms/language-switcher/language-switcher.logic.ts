import { useTranslation } from "react-i18next";

export const useLogic = () => {
  const { i18n } = useTranslation();

  const value = i18n.language.indexOf("-") !== -1 ? i18n.language.split("-")[0] : i18n.language;

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    window.location.reload();
  };

  return { value, handleLanguageChange };
};
