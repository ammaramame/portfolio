/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { useSoundEffects } from "../../../hooks/sounds-effects";
import { ThemeContext } from "../../providers/theme-provider";

interface ExperienceCardProps {
  onClick?: () => void;
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = (props) => {
  const { onClick } = props;

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-overlay-primary" : "uk-overlay-default";

  const { playHoverSound } = useSoundEffects();

  return (
    <div style={{ width: 450 }} className="uk-card uk-padding-small uk-border-rounded uk-overflow-hidden pointer uk-transition-toggle uk-inline-clip uk-box-shadow-small">
      <img alt="resource" src={"/imgs/l-one.png"} className="uk-transition-scale-up uk-transition-opaque" />
      <div className={`uk-transition-fade uk-position-cover uk-overlay ${backgroundColorClass} `}>
        <div className="uk-position-top-left" style={{ left: 20, top: 0 }}>
          <div className="uk-label uk-text-capitalize uk-transition-slide-top-small ">Frontend</div>
        </div>
        <div className="uk-text-bold  uk-position-center uk-text-capitalize uk-transition-slide-bottom-small text-big">L-One systems offical</div>
        <div className="uk-position-bottom-left" style={{ bottom: 25, left: 25 }}>
          <a
            onClick={() => {
              onClick?.();
              playHoverSound();
            }}
            className="uk-icon-button uk-margin-small-right "
            style={{ width: 55, height: 55 }}
          >
            <FaEye size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
