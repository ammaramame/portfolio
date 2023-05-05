import { FunctionComponent } from "react";
import Badge from "../../atoms/badge/badge";

interface ImageWithBadgeProps {}

const ImageWithBadge: FunctionComponent<ImageWithBadgeProps> = () => {
  return (
    <div className="uk-position-relative">
      <img src={"/imgs/my-rect-image.jpg"} width={500} className="uk-border-rounded uk-box-shadow-small" />
      <div className="uk-position-absolute" style={{ bottom: 0, transform: "translate(-20%,30%)" }}>
        <Badge />
      </div>
    </div>
  );
};

export default ImageWithBadge;
