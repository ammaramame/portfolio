import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const useLogic = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [searchParamsFromRoute] = useSearchParams();

  const showAboutMeModal = searchParamsFromRoute.get("about_me_modal") === "show";

  const ProjectId = searchParamsFromRoute.get("project_id");

  const handlePortofolioClose = () => {
    searchParamsFromRoute.delete("project_id");
    navigate({
      pathname: location.pathname,
      search: searchParamsFromRoute.toString(),
    });
  };

  const handleCloseAboutMeModal = () => {
    searchParamsFromRoute.delete("about_me_modal");
    navigate(-1);
  };

  return { showAboutMeModal, ProjectId, handleCloseAboutMeModal, handlePortofolioClose };
};
