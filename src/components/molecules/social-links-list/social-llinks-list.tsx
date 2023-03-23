import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile/profile";
import useSound from "use-sound";

interface SocialLinksListProps {}

const SocialLinksList: FunctionComponent<SocialLinksListProps> = () => {
  const { social_media } = profileConfig;

  const [playHover] = useSound("/sounds/hover-small-button.mp3");

  return (
    <div>
      {social_media.map((item) => (
        <a onMouseEnter={() => playHover()} key={item.label} uk-tooltip={item.label} href={item.link} className="uk-icon-button uk-margin-small-right" uk-icon="twitter">
          <item.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinksList;
