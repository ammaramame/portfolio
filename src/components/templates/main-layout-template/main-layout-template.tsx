import { FunctionComponent, ReactNode, useContext } from "react";
import { ThemeContext } from "../../providers/theme-provider";

interface MainLayoutTemplateProps {
  children?: ReactNode;
}

const MainLayoutTemplate: FunctionComponent<MainLayoutTemplateProps> = (props) => {
  const { children } = props;

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "uk-background-muted";

  const lightText = theme?.theme === "dark" ? "uk-light" : "";

  return (
    <div style={{ minHeight: "100vh" }} className={`uk-width-1-1 ${backgroundColorClass} ${lightText}`}>
      {children}
    </div>
  );
};

export default MainLayoutTemplate;
