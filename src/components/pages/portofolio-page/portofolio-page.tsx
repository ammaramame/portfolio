import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import profileConfig from "../../../configs/profile/profile";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import SectionHeader from "../../molecules/contact-me-header/section-header";
import PortofolioList from "../../organisms/portofolio-list/portofolio-list";
import PortofolioTemplate from "../../templates/portofolio-template/portofolio-template";

interface PortofolioProps {}

const Portofolio: FunctionComponent<PortofolioProps> = () => {
  const { project_filters, projects } = profileConfig;

  const { t } = useTranslation();

  const arrayOfFilters = Object.entries(project_filters);

  return (
    <div uk-filter="target: .js-filter">
      <PortofolioTemplate
        tagElement={
          <div className="animate__animated animate__fadeInUp" style={{ ...generateAnimationDelayStyle(0.5) }}>
            <SectionHeader>{t("my_portofolio")}</SectionHeader>
          </div>
        }
        filter={
          <div className="uk-flex-center animate__animated animate__fadeInUp uk-grid-small uk-grid-divider uk-child-width-auto uk-grid" style={{ ...generateAnimationDelayStyle(0.8) }} data-uk-grid>
            <div className="">
              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                <li className="uk-active" uk-filter-control="">
                  <a href="#">{t("all")}</a>
                </li>
              </ul>
            </div>
            {arrayOfFilters.map((item) => (
              <div key={item[0]}>
                <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
                  {item[1].data.map((filterSetItem) => (
                    <li key={filterSetItem.value} uk-filter-control={`${item[1].trigger === "filter" ? `filter:[${item[0]}='${filterSetItem.value}']` : `sort:${item[0]};order:${filterSetItem.value}`};group:${item[1].trigger}`}>
                      <a href="#">{filterSetItem.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        }
        content={
          <div className="animate__animated animate__fadeIn uk-display-inline-block uk-width-1-1" style={{ ...generateAnimationDelayStyle(1.1) }}>
            <div>
              <PortofolioList contents={projects} />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Portofolio;
