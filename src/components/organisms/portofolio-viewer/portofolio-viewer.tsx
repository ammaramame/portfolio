import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-autoplay.css";
import { InitDetail } from "lightgallery/lg-events";
import profileConfig from "../../../configs/profile/profile";

interface PortofolioViewerProps {
  open?: boolean;
  onClose?: () => void;
  projectId?: string | null;
}

const PortofolioViewer: FunctionComponent<PortofolioViewerProps> = (props) => {
  const { open, onClose, projectId } = props;

  const lightGallery = useRef<any>(null);

  const onInit = useCallback((detail: InitDetail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const { projects } = profileConfig;

  const items = projects.find((item) => item.id === projectId)?.data;

  useEffect(() => {
    lightGallery.current.refresh();
  }, [projectId]);

  useEffect(() => {
    if (open) lightGallery.current?.openGallery(0);
  }, [open]);

  return <LightGallery onAfterClose={onClose} closeOnTap={false} zoomFromOrigin={false} dynamicEl={items} dynamic={true} toggleThumb={true} onInit={onInit} speed={500} allowMediaOverlap={true} plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare, lgAutoplay]} />;
};

export default PortofolioViewer;
