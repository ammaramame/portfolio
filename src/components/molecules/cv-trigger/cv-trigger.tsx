import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import profileConfig from "../../../configs/profile";
import { downloadFile } from "../../../utils/downloader/downloader";
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

  const { t } = useTranslation();

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "";

  return (
    <div className={`uk-inline ${fullwidth ? "uk-width-1-1" : ""}`}>
      <Button onClick={handleDownloadSoloCv} fullwidth={fullwidth} variant="rounded" color="danger">
        {t("download")} {t("cv")}
      </Button>
      {cvs.length > 1 && (
        <div uk-dropdown="mode: click" className="uk-padding-remove">
          <div className={`${backgroundColorClass} uk-padding-small`}>
            <ul className="uk-nav uk-nav-secondary">
              {cvs.map((item) => (
                <li key={`${item.link}-${item.type}`}>
                  <a href="#" onClick={() => downloadFile(item.link, item.type)}>
                    <div style={{ minWidth: 150 }}>
                      <div className="uk-nav-subtitle uk-text-large uk-text-capitalize">
                        {t("select")} <span className="uk-text-bold">{item.type}</span> {t("cv")}
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
