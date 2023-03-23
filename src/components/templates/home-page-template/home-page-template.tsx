import { FunctionComponent, ReactNode } from "react";
import { useResponsive } from "../../../hooks/responsiveness";

interface HomePageTemplateProps {
  firstSection?: ReactNode;
  secondSection?: ReactNode[];
}

const HomePageTemplate: FunctionComponent<HomePageTemplateProps> = (props) => {
  const { secondSection, firstSection } = props;

  const { isTabletOrMobile } = useResponsive();

  const responsiveContainerClass = isTabletOrMobile ? "uk-flex-column-reverse" : "";

  const responsiveTextClass = isTabletOrMobile ? "uk-text-center" : "";

  const responsiveContainerMargin = isTabletOrMobile ? "uk-margin-large-top uk-margin-large-bottom" : "";

  return (
    <div className={`uk-flex ${responsiveContainerMargin} ${responsiveContainerClass} uk-flex-around uk-flex-middle uk-margin-auto uk-container-large`} style={{ minHeight: "100vh" }}>
      <div className={`${responsiveTextClass}`} style={{ width: 500, maxWidth: "100%" }}>
        {secondSection?.map((item) => (
          <div key={item?.toString()}>{item}</div>
        ))}
      </div>
      <div>{firstSection}</div>
    </div>
  );
};

export default HomePageTemplate;
