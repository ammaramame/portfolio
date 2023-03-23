import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile/profile";

interface SalutationTextProps {}

const SalutationText: FunctionComponent<SalutationTextProps> = () => {
  const { first_name, last_name } = profileConfig;
  return (
    <div className="letter-spacing-1">
      <div className="uk-text-emphasis text-huge uk-text-bolder">Hi There,</div>
      <div className="uk-text-emphasis text-huge uk-text-bolder">
        I'm {first_name} <mark className=" background-transparent text-primary ">{last_name}</mark>
      </div>
    </div>
  );
};

export default SalutationText;
