import { useSearchParams } from "react-router-dom";

export const useLogic = () => {
  const [searchParamsFromRoute, setSearchParamsFromRoute] = useSearchParams();

  const handleShow = () => {
    searchParamsFromRoute.set("about_me_modal", "show");
    setSearchParamsFromRoute(searchParamsFromRoute);
  };

  return { handleShow };
};
