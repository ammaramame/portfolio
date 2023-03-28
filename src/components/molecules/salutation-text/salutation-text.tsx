import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import profileConfig from "../../../configs/profile";

interface SalutationTextProps {}

const SalutationText: FunctionComponent<SalutationTextProps> = () => {
  const { first_name, last_name } = profileConfig;
  const { t } = useTranslation();
  return (
    <div className="letter-spacing-1">
      <div className="uk-text-emphasis text-huge uk-text-bolder uk-text-capitalize">{t("salutation")},</div>
      <div className="uk-text-emphasis text-huge uk-text-bolder uk-text-capitalize">
        {t("introduction")} {first_name} <mark className=" background-transparent text-primary ">{last_name}</mark>
      </div>
    </div>
  );
};

export default SalutationText;
