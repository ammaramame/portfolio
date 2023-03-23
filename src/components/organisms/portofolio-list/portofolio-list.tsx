import { FunctionComponent } from "react";
import { useSearchParams } from "react-router-dom";
import ExperienceCard from "../experience-card/experience-card";

export interface IPortofolioItem {
  label?: string;
  date?: string;
  type?: string;
  id: string;
}

interface PortofolioListProps {
  contents: IPortofolioItem[];
}

const PortofolioList: FunctionComponent<PortofolioListProps> = (props) => {
  const { contents } = props;

  const [searchParamsFromRoute, setSearchParamsFromRoute] = useSearchParams();

  const handleShowPortofolioViewer = (id: string) => {
    searchParamsFromRoute.set("project_id", id);
    setSearchParamsFromRoute(searchParamsFromRoute);
  };

  return (
    <ul className="js-filter uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l uk-text-center uk-grid" data-uk-grid>
      {contents.map((item) => (
        <li key={item.date} data-date={item.date} data-stack={item.type}>
          <ExperienceCard onClick={() => handleShowPortofolioViewer(item.id)} />
        </li>
      ))}
    </ul>
  );
};

export default PortofolioList;
