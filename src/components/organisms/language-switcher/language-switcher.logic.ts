import { useTranslation } from "react-i18next";

export const useLogic = () => {
  const { i18n } = useTranslation();

  const value = i18n.language;

  const handleLanguageChange = (value: string) => {
    localStorage.setItem("language", value);
    i18n.changeLanguage(value);
    window.location.reload();
  };

  return { value, handleLanguageChange };
};
