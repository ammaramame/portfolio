import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useContext } from "react";
import { IContainerProps } from "../../../interfaces/elements";
import { ThemeContext } from "../../providers/theme-provider";

interface MenuItemProps extends IContainerProps {
  icon?: IconDefinition;
  label?: string;
  selected?: boolean;
}

const MenuItem: FunctionComponent<MenuItemProps> = (props) => {
  const { icon, label, selected, containerProps } = props;

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "" : "uk-background-muted";

  return (
    <div {...containerProps}>
      <div className="uk-position-relative uk-transition-toggle">
        <div className={`${backgroundColorClass} uk-position-cover ${!selected ? "uk-transition-fade" : ""}`} />
        <div className="uk-position-z-index padding-h-16 pointer uk-flex-middle  indecator-trigger uk-text-uppercase uk-position-relative uk-flex" style={{ height: 60 }}>
          <div className={`${!selected ? "animate-height" : ""}  uk-position-left uk-background-primary indicator`} style={{ width: 4 }} />
          {icon && <FontAwesomeIcon icon={icon} size="lg" />}
          <div className="uk-padding-small uk-padding-remove-vertical uk-text-middle uk-text-bold letter-spacing-4">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
