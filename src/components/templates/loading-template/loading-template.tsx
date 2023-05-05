import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingOverlay from "../../atoms/loading-overlay/loading-overlay";

interface LoadingTemplateProps {
  children?: ReactNode;
}

const LoadingTemplate: FunctionComponent<LoadingTemplateProps> = (props) => {
  const { children } = props;

  const [showLoader, setshowLoader] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const hideLoader = () => setshowLoader(false);

  useEffect(() => {
    setshowLoader(true);
    overlayRef.current?.addEventListener("animationend", hideLoader);

    return () => overlayRef.current?.removeEventListener("animationend", hideLoader);
  }, [location.pathname, overlayRef.current]);

  return (
    <div className="uk-position-relative" style={{ minHeight: "100vh" }}>
      {<LoadingOverlay show={showLoader} ref={overlayRef} />}
      {children}
    </div>
  );
};

export default LoadingTemplate;
