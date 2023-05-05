import { FunctionComponent, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingTemplate from "../../templates/loading-template/loading-template";
import { useLogic } from "./main-router.logic";

interface MainRouterProps {
  children?: ReactNode;
}

const MainRouter: FunctionComponent<MainRouterProps> = (props) => {
  const { router } = useLogic();
  return (
    <LoadingTemplate>
      <Routes>
        {router.map((item) => (
          <Route key={item.path} element={item.element} path={item.path} />
        ))}
      </Routes>
    </LoadingTemplate>
  );
};

export default MainRouter;
