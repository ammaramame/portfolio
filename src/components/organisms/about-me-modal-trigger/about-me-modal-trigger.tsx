import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useLogic } from "./about-me-modal-trigger.logic";

interface AboutMeModalTriggerProps {}

const AboutMeModalTrigger: FunctionComponent<AboutMeModalTriggerProps> = () => {
  const { t } = useTranslation();

  const { handleShow } = useLogic();

  return (
    <button onClick={handleShow} className="uk-width-1-1 uk-button uk-button-large uk-button-default">
      {t("see_more")}
    </button>
  );
};

export default AboutMeModalTrigger;
