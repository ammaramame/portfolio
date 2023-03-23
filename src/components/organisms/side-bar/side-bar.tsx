import { FunctionComponent, useEffect, useState } from "react";
import IconButton from "../../atoms/icon-button/icon-button";
import { faBars, faBriefcase, faGlobe, faPhone, faHome, faStar, faSun, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import IconButtonItem from "../../molecules/icon-button-item/icon-button-item";
import SideBarTemplate from "../../templates/side-bar-template/side-bar-template";
import IconButtonTextContainer from "../../molecules/icon-button-text-container/icon-button-text-container";
import MenuItem from "../../molecules/menu-item/menu-item";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../language-switcher/language-switcher";
import { useResponsive } from "../../../hooks/responsiveness";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import ModeSwitcher from "../mode-switcher/mode-switcher";
import Overlay from "../../atoms/overlay/overlay";

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = (props) => {
  const listItems = [
    { icon: faHome, label: "Home Page", link: "/" },
    { icon: faUserAlt, label: "Me & My Experince", link: "/about_me" },
    { icon: faBriefcase, label: "Portofolio", link: "/portofolio" },
    { icon: faStar, label: "Testimonials", link: "/testimonials" },
    { icon: faPhone, label: "Get In Touch", link: "/contact_me" },
  ];

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
  }, [isTabletOrMobile]);

  return (
    <>
      {!showIconsBar && isTabletOrMobile && (
        <div style={{ ...generateAnimationDelayStyle(1.6) }} className=" animate__fadeIn animate__animated uk-position-fixed uk-position-z-index uk-position-left uk-padding-small">
          <IconButton icon={faBars} onClick={() => setshowIconsBar(true)} />
        </div>
      )}
      {showIconsBar && isMobile && <Overlay />}

      <div style={{ width: placeholderWidth, transition: "width 0.7s ease" }}>
        {/* icon bar */}
        <SideBarTemplate
          removeOnHide={true}
          containerProps={{ style: { width: 100 } }}
          animate="top"
          onWidthAvailable={handlePlaceholderWidth}
          show={showIconsBar}
          firstItem={<IconButton icon={faBars} onClick={() => setshowIconsBar(false)} />}
          lastItem={<LanguageSwitcher />}
          secondItem={<ModeSwitcher variant="icon" />}
          onLastItemHide={() => {
            if (isTabletOrMobile) {
              setplaceholderWidth(0);
            } else {
              setshowFullBar(true);
            }
          }}
          mainList={listItems?.map((item) => (
            <NavLink className="a-clean" to={item.link} key={item.label}>
              {(navProps) => <IconButtonItem icon={item.icon} label={item.label} selected={navProps.isActive} />}
            </NavLink>
          ))}
        />

        {/* full bar */}
        <SideBarTemplate
          onWidthAvailable={handlePlaceholderWidth}
          removeOnHide={true}
          animate="bottom"
          show={showFullBar}
          firstItem={<IconButtonTextContainer containerProps={{ style: { width: 300, paddingInline: 16 } }} iconProps={{ onClick: () => setshowFullBar(false) }} />}
          lastItem={<LanguageSwitcher variant="icon-button" />}
          secondItem={<ModeSwitcher />}
          onLastItemHide={() => setshowIconsBar(true)}
          mainList={listItems?.map((item, index) => (
            <NavLink className="a-clean" to={item.link} key={item.label}>
              {(navProps) => <MenuItem selected={navProps.isActive} icon={item.icon} label={item.label} containerProps={{ style: { width: 316 } }} />}
            </NavLink>
          ))}
        />
      </div>
    </>
  );
};

export default SideBar;
