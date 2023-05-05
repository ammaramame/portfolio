import { FunctionComponent, ReactNode } from "react";
import ParticlesBackground from "../../molecules/particles-background/particles-background";

interface ParticalsTemplateProps {
  children?: ReactNode;
}

const ParticalsTemplate: FunctionComponent<ParticalsTemplateProps> = (props) => {
  const { children } = props;
  return (
    <div className="uk-display-inline uk-width-1-1 uk-position-relative">
      <ParticlesBackground />
      <div className="uk-position-z-index uk-display-inline uk-position-relative">{children}</div>
    </div>
  );
};

export default ParticalsTemplate;
