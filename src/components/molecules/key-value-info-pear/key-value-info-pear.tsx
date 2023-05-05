import { FunctionComponent } from "react";

interface KeyValueInfoPearProps {
  title?: string;
  value?: string;
}

const KeyValueInfoPear: FunctionComponent<KeyValueInfoPearProps> = (props) => {
  const { title, value } = props;

  return (
    <div className="uk-flex uk-text-capitalize letter-spacing-1 uk-text-normal uk-text-default">
      <div className="uk-text-muted">{title}:&nbsp;</div>
      <div style={{ wordBreak: "break-word", lineHeight: 1.8 }} className="uk-text-emphasis">
        {value}
      </div>
    </div>
  );
};

export default KeyValueInfoPear;
