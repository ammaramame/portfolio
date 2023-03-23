import { FunctionComponent, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import AboutMePage from "../../pages/about-me-page/about-me-page";
import ContactMePage from "../../pages/contact-me-page/contact-me-page";
import HomePage from "../../pages/home-page/home-page";
import Portofolio from "../../pages/portofolio-page/portofolio-page";
import TestimonialsPage from "../../pages/testimonials-page/testimonials-page";
import LoadingTemplate from "../../templates/loading-template/loading-template";

interface MainRouterProps {
  children?: ReactNode;
}

const MainRouter: FunctionComponent<MainRouterProps> = (props) => {
  const router = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about_me",
      element: <AboutMePage />,
    },

    {
      path: "/portofolio",
      element: <Portofolio />,
    },
    {
      path: "/contact_me",
      element: <ContactMePage />,
    },
    {
      path: "testimonials",
      element: <TestimonialsPage />,
    },
  ];

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
