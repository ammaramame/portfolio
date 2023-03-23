import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, FunctionComponent, HTMLAttributes } from "react";

interface ModeSwitchersProps {
  lightButtonProps?: HTMLAttributes<HTMLButtonElement>;
  darkButtonProps?: HTMLAttributes<HTMLButtonElement>;
}

const ModeSwitchers: FunctionComponent<ModeSwitchersProps> = (props) => {
  const { darkButtonProps, lightButtonProps } = props;
  return (
    <div>
      <button className="uk-button uk-button-default uk-button-small" type="button" {...lightButtonProps}>
        <FontAwesomeIcon icon={faSun} />
      </button>
      <button className="uk-button uk-button-secondary uk-button-small" type="button" {...darkButtonProps}>
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  );
};

export default ModeSwitchers;
