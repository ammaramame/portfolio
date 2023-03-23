import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile/profile";

interface BadgeProps {}

const Badge: FunctionComponent<BadgeProps> = () => {
  const { years_of_experince } = profileConfig;
  return (
    <span className="uk-box-shadow-small uk-badge uk-padding" style={{ lineHeight: "initial", height: "auto" }}>
      <div>
        <div className="text-big  uk-text-bold">{years_of_experince}+ Years</div>
        <div className="uk-text-large">Of Experiance</div>
      </div>
    </span>
  );
};

export default Badge;
