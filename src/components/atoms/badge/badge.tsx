import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import profileConfig from "../../../configs/profile";

interface BadgeProps {}

const Badge: FunctionComponent<BadgeProps> = () => {
  const { years_of_experiance } = profileConfig;
  const { t } = useTranslation();
  return (
    <span className="uk-box-shadow-small uk-badge uk-padding" style={{ lineHeight: "initial", height: "auto" }}>
      <div className="uk-text-capitalize">
        <div className="text-big  uk-text-bold">{t("experiance_years", { years: `${years_of_experiance}+` })}</div>
        <div className="uk-text-large">{t("of_experiance")}</div>
      </div>
    </span>
  );
};

export default Badge;
