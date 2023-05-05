import { useEffect, useState } from "react";
import { useResponsive } from "../../../hooks/responsiveness";

export const useLogic = () => {
  const { isTabletOrMobile, isMobile } = useResponsive();

  const [showIconsBar, setshowIconsBar] = useState(!isMobile);

  const [showFullBar, setshowFullBar] = useState(false);

  const [placeholderWidth, setplaceholderWidth] = useState(0);

  const handlePlaceholderWidth = (width: number | undefined) => typeof width === "number" && !isMobile && setplaceholderWidth(width);

  useEffect(() => {
    if (isTabletOrMobile && !showIconsBar) {
      setshowFullBar(false);
    }
    if (!isTabletOrMobile && !showFullBar && !showIconsBar) setshowIconsBar(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTabletOrMobile]);

  return { placeholderWidth, handlePlaceholderWidth, setshowFullBar, setshowIconsBar, isMobile, isTabletOrMobile, setplaceholderWidth, showFullBar, showIconsBar };
};
