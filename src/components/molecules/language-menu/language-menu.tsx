import { FunctionComponent, ReactNode, useContext } from "react";
import { CircleFlag } from "react-circle-flags";
import { ThemeContext } from "../../providers/theme-provider";

export interface IItem {
  iconCode?: string;
  label?: string;
  value: string;
}

interface LanguageMenuProps {
  items: IItem[];
  value?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
}

const LanguageMenu: FunctionComponent<LanguageMenuProps> = (props) => {
  const { children, items, onChange, value } = props;

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "";

  return (
    <div className="uk-inline">
      {children}
      <div uk-dropdown="mode: click" className="uk-padding-remove">
        <div className={`${backgroundColorClass} uk-padding-small`}>
          <ul className="uk-nav uk-nav-secondary ">
            {items?.map((item) => (
              <li
                className={`${value === item.value ? "uk-active" : ""} `}
                key={item.value}
                onClick={() => {
                  onChange?.(item.value);
                }}
              >
                <a href="#">
                  <div className="uk-flex  uk-flex-middle" style={{ minWidth: 200 }}>
                    {item.iconCode && (
                      <div className="uk-display-inline uk-margin-right">
                        <CircleFlag countryCode={item.iconCode} height={30} width={30} />
                      </div>
                    )}
                    <div className="">{item.label}</div>
                    {value === item.value && <span className="uk-badge" style={{ marginLeft: "auto" }}></span>}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageMenu;
