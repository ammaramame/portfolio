import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import CvTrigger from "../../molecules/cv-trigger/cv-trigger";
import KeyValueSection from "../../molecules/key-value-section/key-value-section";
import SkillSetList from "../../molecules/skill-set-list/skill-set-list";
import SubHeader from "../../molecules/sub-header/sub-header";
import TimeLineItemsList from "../../molecules/timeline-items-list/timeline-items-list";
import ValueTitleSection from "../../molecules/value-title-section/value-title-section";
import { ThemeContext } from "../../providers/theme-provider";
import { IParams, useLogic } from "./about-me-modal.logic";

interface AboutMeModalProps extends IParams {}

const AboutMeModal: FunctionComponent<AboutMeModalProps> = (props) => {
  const { t } = useTranslation();

  const theme = useContext(ThemeContext);

  const { modalRef, hideButtonRef } = useLogic(props);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "";

  const textClass = theme?.theme === "dark" ? "uk-light" : "";

  return (
    <div ref={modalRef} uk-modal="bg-close:false" className="uk-modal-container">
      <div className="uk-modal-dialog uk-modal-body uk-padding-remove">
        <div className={`${backgroundColorClass} uk-padding`}>
          <div className="" uk-grid="">
            <div className="uk-width-1-2@m uk-flex-1">
              <SubHeader>{t("personal_info")}</SubHeader>
              <div className={`uk-margin ${textClass}`}>
                <KeyValueSection />
                <div className="uk-margin-small-top ">
                  <CvTrigger fullwidth />
                </div>
              </div>
            </div>

            <div className="uk-width-1-2@m">
              <SubHeader>{t("achievements")}</SubHeader>
              <div className="uk-margin">
                <ValueTitleSection />
              </div>
            </div>

            <div className="uk-width-1-2@m">
              <SubHeader>{t("experience")}</SubHeader>
              <div className="uk-margin">
                <TimeLineItemsList type="experince" />
              </div>
            </div>

            <div className="uk-width-1-2@m">
              <SubHeader>{t("Education")}</SubHeader>
              <div className="uk-margin">
                <TimeLineItemsList type="education" />
              </div>
            </div>

            <div className="uk-width-1-1">
              <SubHeader>{t("skills_and_technology")}</SubHeader>
              <div className="uk-margin">
                <SkillSetList fullView={true} columnsNumber={3} />
              </div>
            </div>

            <div className="uk-width-1-1">
              <button ref={hideButtonRef} className={`uk-width-1-1 uk-button uk-button-default ${textClass}`}>
                {t("hide")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;
