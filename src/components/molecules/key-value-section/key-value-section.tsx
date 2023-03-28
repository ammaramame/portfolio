import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile";
import KeyValueInfoPear from "../key-value-info-pear/key-value-info-pear";

interface KeyValueSectionProps {}

const KeyValueSection: FunctionComponent<KeyValueSectionProps> = () => {
  const { personal_information } = profileConfig;

  return (
    <div className="uk-flex uk-flex-wrap" style={{ gap: 0 }}>
      {personal_information.map((item) => (
        <div key={item.key} className={" uk-width-1-2@s  uk-padding-small"}>
          <KeyValueInfoPear value={item.value} title={item.key} />
        </div>
      ))}
    </div>
  );
};

export default KeyValueSection;
