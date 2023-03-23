import { FunctionComponent, useContext } from "react";
import { ThemeContext } from "../../providers/theme-provider";

interface ExperienceLevelItemProps {
  value?: number;
  title: string;
  icon: string;
}

const ExperienceLevelItem: FunctionComponent<ExperienceLevelItemProps> = (props) => {
  const { icon, title, value } = props;

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "uk-background-default";

  const progressBackgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "uk-background-muted";

  const textClass = theme?.theme === "dark" ? "uk-light" : "";

  return (
    <div className="uk-flex uk-flex-middle">
      <div className={`uk-margin-small-right uk-border-circle uk-flex uk-flex-middle uk-flex-center uk-box-shadow-small ${backgroundColorClass}`} style={{ flexShrink: 0, width: 60, height: 60 }}>
        <img src={icon} width={35} />
      </div>
      <div style={{ width: 300 }}>
        <h6 className={`uk-text-bold uk-margin-small-bottom ${textClass} uk-text-default`}>{title}</h6>
        <progress className={`uk-progress uk-margin-remove-vertical ${progressBackgroundColorClass} uk-border-primary uk-border-rounded`} style={{ border: "solid 1px", padding: 2 }} value={value} max={5}></progress>
      </div>
    </div>
  );
};

export default ExperienceLevelItem;
