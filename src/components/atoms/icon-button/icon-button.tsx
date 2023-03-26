import { FunctionComponent, HTMLAttributes, ReactNode, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../providers/theme-provider";
import { useSoundEffects } from "../../../hooks/sounds-effects";

export interface IconButtonProps extends HTMLAttributes<HTMLDivElement> {
  icon?: IconDefinition;
  children?: ReactNode;
  selected?: boolean;
}

const IconButton: FunctionComponent<IconButtonProps> = (props) => {
  const { icon, children, selected, ...rest } = props;

  const { playClickSound } = useSoundEffects();

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-button-muted" : "";

  const LightText = theme?.theme === "dark" ? "uk-light" : "";

  return (
    <div onClick={() => playClickSound()} className={`uk-display-inline-block  ${LightText}`}>
      <div style={{ width: 50, height: 50 }} className={`${backgroundColorClass} ${LightText}  uk-icon-button pointer ${selected ? "uk-button-primary" : ""}`} {...rest}>
        {icon ? <FontAwesomeIcon icon={icon} /> : children}
      </div>
    </div>
  );
};

export default IconButton;
