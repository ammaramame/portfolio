import { FunctionComponent, useContext } from "react";
import { ThemeContext } from "../../providers/theme-provider";

interface OverlayProps {}

const Overlay: FunctionComponent<OverlayProps> = () => {
  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "uk-background-default";

  return <div style={{ opacity: 0.7 }} className={` ${backgroundColorClass} uk-width-1-1 uk-height-1-1 uk-position-fixed `} />;
};

export default Overlay;
