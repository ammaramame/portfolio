import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile";
import ValueTitle from "../value-title-box/value-title-box";

interface ValueTitleSectionProps {}

const ValueTitleSection: FunctionComponent<ValueTitleSectionProps> = () => {
  const { statistics } = profileConfig;

  return (
    <div className="uk-grid-small" uk-grid="">
      {statistics.map((item) => (
        <div key={item.title} className="uk-width-1-2 uk-width-1-2@m">
          <ValueTitle {...item} />
        </div>
      ))}
    </div>
  );
};

export default ValueTitleSection;
