import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import { IContainerProps } from "../../../interfaces/elements";
import IconButton, { IconButtonProps } from "../../atoms/icon-button/icon-button";
import Logo from "../../atoms/logo/logo";

interface IconButtonTextContainerProps extends IContainerProps {
  iconProps: IconButtonProps;
}

const IconButtonTextContainer: FunctionComponent<IconButtonTextContainerProps> = (props) => {
  const { containerProps, iconProps } = props;
  return (
    <div className="uk-flex uk-flex-between uk-flex-middle" {...containerProps}>
      <Logo />
      <IconButton icon={faArrowLeft} {...iconProps} />
    </div>
  );
};

export default IconButtonTextContainer;
