import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import IconButton from "../../atoms/icon-button/icon-button";
import ModeSwitchers from "../../molecules/mode-switchers/mode-switchers";
import { useLogic } from "./mode-switcher.logic";

interface ModeSwitcherProps {
  variant?: "icon";
}

const ModeSwitcher: FunctionComponent<ModeSwitcherProps> = (props) => {
  const { variant } = props;

  const { handleDarkMode, handleLightMode, handleToggleTheme, theme } = useLogic();

  return variant === "icon" ? (
    <IconButton icon={theme?.theme === "dark" ? faSun : faMoon} onClick={handleToggleTheme} />
  ) : (
    <div className="uk-flex uk-flex-center">
      <ModeSwitchers darkButtonProps={{ onClick: handleDarkMode }} lightButtonProps={{ onClick: handleLightMode }} />
    </div>
  );
};

export default ModeSwitcher;
