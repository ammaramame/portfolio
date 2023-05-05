import { FunctionComponent } from "react";
import ExperienceCard from "../experience-card/experience-card";
import { useLogic } from "./portofolio-list.logic";

export interface IPortofolioItem {
  label?: string;
  date?: string;
  type?: string;
  id: string;
  name?: string;
  src?: string;
}

interface PortofolioListProps {
  contents: IPortofolioItem[];
}

const PortofolioList: FunctionComponent<PortofolioListProps> = (props) => {
  const { contents } = props;

  const { handleShowPortofolioViewer } = useLogic();

  return (
    <ul className="js-filter uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l uk-text-center uk-grid" data-uk-grid>
      {contents.map((item) => (
        <li key={item.date} data-date={item.date} data-stack={item.type}>
          <ExperienceCard src={item.src} name={item.name} title={item.type} onClick={() => handleShowPortofolioViewer(item.id)} />
        </li>
      ))}
    </ul>
  );
};

export default PortofolioList;
