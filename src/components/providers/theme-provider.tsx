import { createContext, Dispatch, FunctionComponent, ReactNode, SetStateAction, useEffect, useState } from "react";

interface ThemeProviderProps {
  children?: ReactNode;
}

interface IProviderValue {
  theme: "light" | "dark";
  settheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export const ThemeContext = createContext({ theme: "light", settheme: () => {} } as IProviderValue | undefined);

const ThemeProvider: FunctionComponent<ThemeProviderProps> = (props) => {
  const { children } = props;

  const [theme, settheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const body = document.body;

    if (theme === "dark") body.classList.add("uk-background-secondary");
    if (theme === "light") body.classList.remove("uk-background-secondary");
  }, [theme]);

  const value = { theme, settheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
