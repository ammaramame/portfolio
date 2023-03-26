import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { FaExclamationTriangle } from "react-icons/fa";
import { capitalizeFirstLetter } from "../../../utils/text/text-manipulation";

interface TestimonialsPageProps {}

const TestimonialsPage: FunctionComponent<TestimonialsPageProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: "100vh" }}>
      <div className="uk-text-center">
        <FaExclamationTriangle size={150} style={{ marginBottom: 8 }} />
        <div className="text-huge uk-text-bolder uk-text-uppercase">{t("coming_soon")}</div>
        <div className="uk-text-large">{capitalizeFirstLetter(t("this_page_is_under_construction"))} </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
