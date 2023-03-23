import { FunctionComponent } from "react";
import { useResponsive } from "../../../hooks/responsiveness";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import ContactMeHeader from "../../molecules/contact-me-header/section-header";
import ContactMeLetsTalkPart from "../../molecules/contact-me-lets-talk-part/contact-me-lets-talk-part";
import SocialLinksList from "../../molecules/social-links-list/social-llinks-list";
import ContactMeForm from "../../organisms/contact-me-form/contact-me-form";
import ContactMeTemplate from "../../templates/contact-me-template/contact-me-template";

interface ContactMePageProps {}

const ContactMePage: FunctionComponent<ContactMePageProps> = () => {
  const { isTabletOrMobile } = useResponsive();

  const responsiveClass = isTabletOrMobile ? "uk-flex uk-flex-center" : "";

  return (
    <ContactMeTemplate
      firstSection={
        <div className={`${responsiveClass}`}>
          <div className="animate__animated animate__fadeInUp" style={{ ...generateAnimationDelayStyle(0.5) }}>
            <ContactMeHeader>Get in Touch</ContactMeHeader>
          </div>
          {!isTabletOrMobile && (
            <div className="animate__animated animate__fadeInUp" style={{ ...generateAnimationDelayStyle(0.8) }}>
              <ContactMeLetsTalkPart />
            </div>
          )}
        </div>
      }
      secondSection={
        <div className="animate__animated animate__fadeIn" style={{ ...generateAnimationDelayStyle(1.1) }}>
          <ContactMeForm />
          <div className={`uk-margin-top ${responsiveClass}`}>
            <SocialLinksList />
          </div>
        </div>
      }
    />
  );
};

export default ContactMePage;
