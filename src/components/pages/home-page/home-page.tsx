import { FunctionComponent } from "react";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import FancyProfilePic from "../../atoms/fancy-profile-pic/fancy-profile-pic";
import CvTrigger from "../../molecules/cv-trigger/cv-trigger";
import IntroTypedText from "../../molecules/intro-typed-text/intro-typed-text";
import SalutationText from "../../molecules/salutation-text/salutation-text";
import SocialLinksList from "../../molecules/social-links-list/social-llinks-list";
import HomePageTemplate from "../../templates/home-page-template/home-page-template";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <HomePageTemplate
      firstSection={
        <div className="animate__animated animate__pulse">
          <FancyProfilePic />
        </div>
      }
      secondSection={[
        <div className={`animate__animated animate__fadeInUp `} style={{ ...generateAnimationDelayStyle(0.5) }}>
          <SalutationText />
        </div>,
        <div className="uk-margin-small-top animate__animated animate__fadeInUp" style={{ ...generateAnimationDelayStyle(0.8) }}>
          <IntroTypedText />
        </div>,
        <div className="uk-margin-large-top animate__animated animate__fadeInUp uk-position-z-index uk-position-relative" style={{ ...generateAnimationDelayStyle(1.1) }}>
          <CvTrigger />
        </div>,
        <div className="uk-margin-top animate__animated animate__fadeInUp" style={{ ...generateAnimationDelayStyle(1.4) }}>
          <SocialLinksList />
        </div>,
      ]}
    />
  );
};

export default HomePage;
