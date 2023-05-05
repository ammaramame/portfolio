import AboutMePage from "../../pages/about-me-page/about-me-page";
import ContactMePage from "../../pages/contact-me-page/contact-me-page";
import HomePage from "../../pages/home-page/home-page";
import Portofolio from "../../pages/portofolio-page/portofolio-page";
import TestimonialsPage from "../../pages/testimonials-page/testimonials-page";

export const useLogic = () => {
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
  return { router };
};
