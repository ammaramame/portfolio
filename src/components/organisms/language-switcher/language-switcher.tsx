import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import IconButton from "../../atoms/icon-button/icon-button";
import Button from "../../molecules/button/button";
import LanguageMenu, { IItem } from "../../molecules/language-menu/language-menu";
import { useLogic } from "./language-switcher.logic";
import { appConfig } from "../../../configs/app.config";

interface LanguageSwitcherProps {
  variant?: "icon-button" | "button";
}

const LanguageSwitcher: FunctionComponent<LanguageSwitcherProps> = (props) => {
  const { variant } = props;
  const { languages } = appConfig;
  const langMenu: IItem[] = [
    { value: "en", label: "English", iconCode: "uk" },
    { value: "de", label: "Deutch", iconCode: "de" },
    { value: "nl", label: "Dutch", iconCode: "nl" },
    { value: "fr", label: "French", iconCode: "fr" },
    { value: "se", label: "Swedish", iconCode: "se" },
    { value: "no", label: "Norwegian", iconCode: "no" },
    { value: "dk", label: "Danish", iconCode: "dk" },
  ].filter((item) => languages.includes(item.value));

  const { handleLanguageChange, value } = useLogic();

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
