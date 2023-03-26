import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  const { t } = useTranslation();
  return <div className="uk-logo uk-text-capitalize">{t("my_portofolio")}</div>;
};

export default Logo;
