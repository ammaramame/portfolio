import { useContext } from "react";
import { ThemeContext } from "../../providers/theme-provider";

export const useLogic = () => {
  const theme = useContext(ThemeContext);

  const handleToggleTheme = () => theme?.settheme(theme.theme === "dark" ? "light" : "dark");

  const handleLightMode = () => theme?.settheme("light");

  const handleDarkMode = () => theme?.settheme("dark");

  return { handleDarkMode, handleLightMode, handleToggleTheme, theme };
};
