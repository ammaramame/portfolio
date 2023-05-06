import { FunctionComponent } from "react";
import Badge from "../../atoms/badge/badge";
import profileConfig from "../../../configs/profile.config";

interface ImageWithBadgeProps {}

const ImageWithBadge: FunctionComponent<ImageWithBadgeProps> = () => {
  const { profile_pic_about_me } = profileConfig;
  return (
    <div className="uk-position-relative">
      <img src={profile_pic_about_me} alt="about me" width={500} className="uk-border-rounded uk-box-shadow-small" />
      <div className="uk-position-absolute" style={{ bottom: 0, transform: "translate(-20%,30%)" }}>
        <Badge />
      </div>
    </div>
  );
};

export default ImageWithBadge;
