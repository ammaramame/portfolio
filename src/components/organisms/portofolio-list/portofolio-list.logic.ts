import { useSearchParams } from "react-router-dom";

export const useLogic = () => {
  const [searchParamsFromRoute, setSearchParamsFromRoute] = useSearchParams();

  const handleShowPortofolioViewer = (id: string) => {
    searchParamsFromRoute.set("project_id", id);
    setSearchParamsFromRoute(searchParamsFromRoute);
  };

  return { handleShowPortofolioViewer };
};
