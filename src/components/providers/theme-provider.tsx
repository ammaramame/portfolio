import { createContext, FunctionComponent, ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
  children?: ReactNode;
}

interface IProviderValue {
  theme: "light" | "dark";
  settheme: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContext({ theme: window.localStorage.getItem("theme") ?? "dark", settheme: () => {} } as IProviderValue | undefined);

const ThemeProvider: FunctionComponent<ThemeProviderProps> = (props) => {
  const { children } = props;

  const [theme, settheme] = useState<"light" | "dark">((window.localStorage.getItem("theme") as IProviderValue["theme"]) ?? "dark");

  useEffect(() => {
    const body = document.body;

    if (theme === "dark") body.classList.add("uk-background-secondary");
    if (theme === "light") body.classList.remove("uk-background-secondary");
  }, [theme]);

  const handleSetTheme = (theme: IProviderValue["theme"]) => {
    settheme(theme);
    window.localStorage.setItem("theme", theme);
  };

  const value = { theme, settheme: handleSetTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
