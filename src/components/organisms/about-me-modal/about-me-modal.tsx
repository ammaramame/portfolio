import { FunctionComponent, useContext, useEffect, useRef } from "react";
import UIkit from "uikit";
import CvTrigger from "../../molecules/cv-trigger/cv-trigger";
import KeyValueSection from "../../molecules/key-value-section/key-value-section";
import SkillSetList from "../../molecules/skill-set-list/skill-set-list";
import SubHeader from "../../molecules/sub-header/sub-header";
import TimeLineItemsList from "../../molecules/timeline-items-list/timeline-items-list";
import ValueTitleSection from "../../molecules/value-title-section/value-title-section";
import { ThemeContext } from "../../providers/theme-provider";

interface AboutMeModalProps {
  open: boolean;
  onClose?: () => void;
}

const AboutMeModal: FunctionComponent<AboutMeModalProps> = (props) => {
  const { open, onClose } = props;

  const modalRef = useRef(null);

  const hideButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      var modal = UIkit.modal(modalRef.current);

      if (open) modal?.show();

      if (!open) modal?.hide();
    }
  }, [open, modalRef]);

  useEffect(() => {
    if (onClose) {
      hideButtonRef.current?.addEventListener("click", onClose);

      return () => hideButtonRef.current?.removeEventListener("click", onClose);
    }
  }, [hideButtonRef]);

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "";

  const textClass = theme?.theme === "dark" ? "uk-light" : "";

  return (
    <div ref={modalRef} uk-modal="bg-close:false" className="uk-modal-container">
      <div className="uk-modal-dialog uk-modal-body uk-padding-remove">
        <div className={`${backgroundColorClass} uk-padding`}>
          <div className="" uk-grid="">
            <div className="uk-width-1-2@m uk-flex-1">
              <SubHeader>Personal Info</SubHeader>
              <div className={`uk-margin ${textClass}`}>
                <KeyValueSection />
                <div className="uk-margin-small-top ">
                  <CvTrigger fullwidth />
                </div>
              </div>
            </div>

            <div className="uk-width-1-2@m">
              <SubHeader>Achievements</SubHeader>
              <div className="uk-margin">
                <ValueTitleSection />
              </div>
            </div>

            <div className="uk-width-1-2@m">
              <SubHeader>Experience</SubHeader>
              <div className="uk-margin">
                <TimeLineItemsList type="experince" />
              </div>
            </div>

            <div className="uk-width-1-2@m">
              <SubHeader>Education</SubHeader>
              <div className="uk-margin">
                <TimeLineItemsList type="education" />
              </div>
            </div>

            <div className="uk-width-1-1">
              <SubHeader>Skills And Technology</SubHeader>
              <div className="uk-margin">
                <SkillSetList fullView={true} columnsNumber={3} />
              </div>
            </div>

            <div className="uk-width-1-1">
              <button ref={hideButtonRef} className={`uk-width-1-1 uk-button uk-button-default ${textClass}`}>
                Hide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;
