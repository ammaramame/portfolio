import { FunctionComponent } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import AboutMeModal from "../../organisms/about-me-modal/about-me-modal";
import PortofolioViewer from "../../organisms/portofolio-viewer/portofolio-viewer";

interface ModalsRouterProps {}

const ModalsRouter: FunctionComponent<ModalsRouterProps> = () => {
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
    navigate({
      pathname: location.pathname,
      search: searchParamsFromRoute.toString(),
    });
  };

  return (
    <>
      <PortofolioViewer projectId={ProjectId} open={!!ProjectId} onClose={handlePortofolioClose} />
      <AboutMeModal open={showAboutMeModal} onClose={handleCloseAboutMeModal} />
    </>
  );
};

export default ModalsRouter;
