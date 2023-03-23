import { FunctionComponent, useContext } from "react";
import profileConfig from "../../../configs/profile/profile";
import { downloadFile } from "../../../utils/overlay/downloader/downloader";
import { ThemeContext } from "../../providers/theme-provider";
import Button from "../button/button";

interface CvTriggerProps {
  fullwidth?: boolean;
}

const CvTrigger: FunctionComponent<CvTriggerProps> = (props) => {
  const { fullwidth } = props;

  const { cvs } = profileConfig;

  const handleDownloadSoloCv = () => {
    if (cvs.length === 1) downloadFile(cvs[0].link, cvs[0].type);
  };

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "";

  return (
    <div className={`uk-inline ${fullwidth ? "uk-width-1-1" : ""}`}>
      <Button onClick={handleDownloadSoloCv} fullwidth={fullwidth} variant="rounded" color="danger">
        Download CV
      </Button>
      {cvs.length > 1 && (
        <div uk-dropdown="mode: click" className="uk-padding-remove">
          <div className={`${backgroundColorClass} uk-padding-small`}>
            <ul className="uk-nav uk-nav-secondary">
              {cvs.map((item) => (
                <li key={`${item.link}-${item.type}`}>
                  <a href="#" onClick={() => downloadFile(item.link, item.type)}>
                    <div style={{ minWidth: 150 }}>
                      <div className="uk-nav-subtitle uk-text-large">
                        Select <span className="uk-text-bold">{item.type}</span> CV
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CvTrigger;
