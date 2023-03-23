import { FunctionComponent } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface TestimonialsPageProps {}

const TestimonialsPage: FunctionComponent<TestimonialsPageProps> = () => {
  return (
    <div className="uk-flex uk-flex-center uk-flex-middle" style={{ height: "100vh" }}>
      <div className="uk-text-center">
        <FaExclamationTriangle size={150} style={{ marginBottom: 8 }} />
        <div className="text-huge uk-text-bolder uk-text-uppercase">Coming Soon</div>
        <div className="uk-text-large">This page is under construction </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
