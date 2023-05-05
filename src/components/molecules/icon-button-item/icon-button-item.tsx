import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent, useId } from "react";
import IconButton, { IconButtonProps } from "../../atoms/icon-button/icon-button";

interface IconButtonItemProps extends Pick<IconButtonProps, "selected"> {
  label: string;
  icon: IconDefinition;
}

const IconButtonItem: FunctionComponent<IconButtonItemProps> = (props) => {
  const { label, selected, icon } = props;

  const id = useId();

  return (
    <div id={`warning-toggle-${id}`} className="uk-animation-toggle uk-visible-toggle pointer uk-position-relative  uk-display-inline-block" uk-toggle={`target:#warning-toggle-${id};mode:hover;cls:uk-light `}>
      <div
        className="uk-animation-fade uk-animation-slide-left-small pointer  uk-hidden-hover uk-text-nowrap uk-position-absolute uk-background-primary uk-flex-inline uk-border-pill uk-flex-middle  uk-box-shadow-medium uk-padding-small uk-padding-remove-vertical"
        style={{ height: "100%", paddingLeft: 60, animationDuration: "0.2s" }}
      >
        <span className="uk-text-uppercase uk-text-bolder" style={{ letterSpacing: 1 }}>
          {label}
        </span>
      </div>
      <div className="uk-position-relative">
        <IconButton icon={icon} selected={selected} />
      </div>
    </div>
  );
};

export default IconButtonItem;
