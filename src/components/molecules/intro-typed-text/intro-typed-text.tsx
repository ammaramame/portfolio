import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import profile from "../../../configs/profile.config";
import { capitalizeFirstLetter } from "../../../utils/text/text-manipulation";
import TypedText from "../../atoms/typed-text/typed-text";

interface IntroTypedTextProps {}

const IntroTypedText: FunctionComponent<IntroTypedTextProps> = () => {
  const { t } = useTranslation();

  const { professions } = profile;
  return (
    <div className=" uk-text-emphasis uk-text-large">
      <div className="uk-display-inline-block">{capitalizeFirstLetter(t("introudction_job_title"))} </div>{" "}
      <span className="uk-text-success uk-text-bold">
        <TypedText contents={professions} />
      </span>
    </div>
  );
};

export default IntroTypedText;
