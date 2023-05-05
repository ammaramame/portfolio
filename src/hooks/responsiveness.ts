import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return { isTabletOrMobile, isMobile };
};
