import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile";
import { useSoundEffects } from "../../../hooks/sounds-effects";

interface SocialLinksListProps {}

const SocialLinksList: FunctionComponent<SocialLinksListProps> = () => {
  const { social_media } = profileConfig;

  const { playHoverSound } = useSoundEffects();

  return (
    <div>
      {social_media.map((item) => (
        <a onMouseEnter={() => playHoverSound()} key={item.label} uk-tooltip={item.label} href={item.link} className="uk-icon-button uk-margin-small-right" uk-icon="twitter">
          <item.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinksList;
