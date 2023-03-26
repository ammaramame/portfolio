import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent, useId } from "react";
import IconButton from "../../atoms/icon-button/icon-button";

export interface IDataListItem {
  title?: string;
  label: string;
}

interface IconButtonMenuProps {
  mainIcon: IconDefinition;
  dataList?: IDataListItem[];
}

const IconButtonMenu: FunctionComponent<IconButtonMenuProps> = (props) => {
  const { mainIcon, dataList } = props;

  const id = useId();

  return (
    <div className="uk-display-inline" id={id}>
      <div className="uk-inline-block ">
        <IconButton icon={mainIcon} />
        <div uk-drop="mode: click;pos:bottom-center" className="uk-width-1-1">
          <div className="uk-flex uk-flex-column uk-flex-middle">
            {dataList?.map((item, index) => (
              <div key={`${item.label}-${item.title}`} style={{ marginTop: index !== 0 ? "8px" : 0 }}>
                <div className="uk-icon-button uk-margin-small-right uk-margin-remove pointer" uk-tooltip={item.title}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconButtonMenu;
