import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import IconButton from "../../atoms/icon-button/icon-button";
import Button from "../../molecules/button/button";
import LanguageMenu, { IItem } from "../../molecules/language-menu/language-menu";

interface LanguageSwitcherProps {
  variant?: "icon-button" | "button";
}

const LanguageSwitcher: FunctionComponent<LanguageSwitcherProps> = (props) => {
  const { variant } = props;
  const langMenu: IItem[] = [
    { value: "en", label: "English", iconCode: "uk" },
    { value: "de", label: "Deutch", iconCode: "de" },
    { value: "nl", label: "Dutch", iconCode: "nl" },
    { value: "fr", label: "French", iconCode: "fr" },
    { value: "se", label: "Swedish", iconCode: "se" },
    { value: "no", label: "Norwegian", iconCode: "no" },
    { value: "dk", label: "Danish", iconCode: "dk" },
  ];

  const { i18n } = useTranslation();

  const value = i18n.language;

  const handleLanguageChange = (value: string) => {
    localStorage.setItem("language", value);
    i18n.changeLanguage(value);
    window.location.reload();
  };

  return variant === "icon-button" ? (
    <LanguageMenu onChange={handleLanguageChange} items={langMenu} value={value}>
      <Button size="small" icon={faGlobe}>
        {langMenu.find((item) => item.value === value)?.label}
      </Button>
    </LanguageMenu>
  ) : (
    <LanguageMenu onChange={handleLanguageChange} items={langMenu} value={value}>
      <IconButton icon={faGlobe} />
    </LanguageMenu>
  );
};

export default LanguageSwitcher;
