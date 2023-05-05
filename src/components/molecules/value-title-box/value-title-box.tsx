import { FunctionComponent, useContext } from "react";
import { ThemeContext } from "../../providers/theme-provider";

interface ValueTitleProps {
  value: string;
  title: string;
}

const ValueTitle: FunctionComponent<ValueTitleProps> = (props) => {
  const { title, value } = props;

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-card-secondary" : "uk-card-default";

  return (
    <div className={`uk-border-rounded uk-card  uk-display-inline-block ${backgroundColorClass} uk-padding`}>
      <div className="text-huge uk-text-bold">{value}</div>
      <div className="uk-flex">
        <div className="uk-margin-small uk-margin-remove-left" style={{ margin: 8, width: 45, borderTop: "solid 2px #ddd" }} />
        <div style={{ maxWidth: 100 }} className="uk-text-muted uk-text-capitalize">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ValueTitle;
