import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent, useContext } from "react";
import IconButton from "../../atoms/icon-button/icon-button";
import ModeSwitchers from "../../molecules/mode-switchers/mode-switchers";
import { ThemeContext } from "../../providers/theme-provider";

interface ModeSwitcherProps {
  variant?: "icon";
}

const ModeSwitcher: FunctionComponent<ModeSwitcherProps> = (props) => {
  const { variant } = props;

  const theme = useContext(ThemeContext);

  const handleToggleTheme = () => theme?.settheme(theme.theme === "dark" ? "light" : "dark");

  const handleLightMode = () => theme?.settheme("light");

  const handleDarkMode = () => theme?.settheme("dark");

  return variant === "icon" ? (
    <IconButton icon={theme?.theme === "dark" ? faSun : faMoon} onClick={handleToggleTheme} />
  ) : (
    <div className="uk-flex uk-flex-center">
      <ModeSwitchers darkButtonProps={{ onClick: handleDarkMode }} lightButtonProps={{ onClick: handleLightMode }} />
    </div>
  );
};

export default ModeSwitcher;
