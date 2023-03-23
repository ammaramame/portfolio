import { FunctionComponent } from "react";
import { useSearchParams } from "react-router-dom";

interface AboutMeModalTriggerProps {}

const AboutMeModalTrigger: FunctionComponent<AboutMeModalTriggerProps> = () => {
  const [searchParamsFromRoute, setSearchParamsFromRoute] = useSearchParams();

  const handleShow = () => {
    searchParamsFromRoute.set("about_me_modal", "show");
    setSearchParamsFromRoute(searchParamsFromRoute);
  };

  return (
    <button onClick={handleShow} className="uk-width-1-1 uk-button uk-button-large uk-button-default">
      See More
    </button>
  );
};

export default AboutMeModalTrigger;
