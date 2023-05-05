import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, ReactNode } from "react";
import { useSoundEffects } from "../../../hooks/sounds-effects";

interface ButtonProps {
  children?: ReactNode;
  icon?: IconDefinition;
  size?: "large" | "small" | "medium";
  variant?: "rounded" | "standard" | "pill";
  color?: "danger" | "default";
  fullwidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, icon, size, variant, color, fullwidth, disabled, ...rest } = props;

  const sizeClass = "uk-button" + (size === "large" ? "-large" : size === "small" ? "-small" : "");

  const shapeClass = variant === "rounded" ? "uk-border-rounded" : variant === "pill" ? "uk-border-pill" : "";

  const colorClass = color === "danger" ? "uk-button-danger" : "uk-button-default";

  const fullwidthClass = fullwidth ? "uk-width-1-1" : "";

  const { playClickSound } = useSoundEffects();

  return (
    <div className="uk-display-inline" onClick={() => playClickSound()}>
      <button disabled={disabled} className={`${sizeClass} ${colorClass} ${shapeClass} ${fullwidthClass}`} {...rest}>
        {icon && <FontAwesomeIcon icon={icon} className="uk-margin-right uk-margin-remove-vertical uk-margin-small-right" />}
        {children}
      </button>
    </div>
  );
};

export default Button;
