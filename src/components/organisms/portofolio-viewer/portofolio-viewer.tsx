import { FunctionComponent } from "react";
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
import { IParams, useLogic } from "./portofolio-viewer.logic";
import { GalleryItem } from "lightgallery/lg-utils";

interface PortofolioViewerProps extends IParams {}

const PortofolioViewer: FunctionComponent<PortofolioViewerProps> = (props) => {
  const { onClose } = props;

  const { items, onInit } = useLogic(props);

  const mappedItems: GalleryItem[] =
    items?.map((item) => ({
      ...item,
      subHtml: `<div class="lightGallery-captions"><h4>${item.head}</h4><p>${item.paragraph}</p></div>`,
    })) ?? [];

  return <LightGallery onAfterClose={onClose} closeOnTap={false} zoomFromOrigin={false} dynamicEl={mappedItems} dynamic={true} toggleThumb={true} onInit={onInit} speed={500} allowMediaOverlap={true} plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare, lgAutoplay]} />;
};

export default PortofolioViewer;
