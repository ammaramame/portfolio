import { FunctionComponent, ReactNode } from "react";
import { useResponsive } from "../../../hooks/responsiveness";

interface ContactMeTemplateProps {
  firstSection?: ReactNode;
  secondSection?: ReactNode;
}

const ContactMeTemplate: FunctionComponent<ContactMeTemplateProps> = (props) => {
  const { firstSection, secondSection } = props;

  const { isTabletOrMobile } = useResponsive();

  const containerResponsiveClass = isTabletOrMobile ? "uk-flex-column" : "";

  return (
    <div className="uk-flex uk-flex-middle" style={{ minHeight: "100vh" }}>
      <div className={`uk-flex ${containerResponsiveClass} uk-container uk-container-large uk-flex-between uk-margin-auto  uk-height-1-1`} style={{ gap: !isTabletOrMobile ? 70 : 0 }}>
        <div className="" style={{ flexShrink: 0 }}>
          {firstSection}
        </div>
        <div>{secondSection}</div>
      </div>
    </div>
  );
};

export default ContactMeTemplate;
