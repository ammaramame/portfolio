import { FunctionComponent } from "react";
import IconButton from "../../atoms/icon-button/icon-button";
import { faBars, faBriefcase, faPhone, faHome, faStar, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import IconButtonItem from "../../molecules/icon-button-item/icon-button-item";
import SideBarTemplate from "../../templates/side-bar-template/side-bar-template";
import IconButtonTextContainer from "../../molecules/icon-button-text-container/icon-button-text-container";
import MenuItem from "../../molecules/menu-item/menu-item";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../language-switcher/language-switcher";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import ModeSwitcher from "../mode-switcher/mode-switcher";
import Overlay from "../../atoms/overlay/overlay";
import { useTranslation } from "react-i18next";
import { useLogic } from "./side-bar.logic";

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = (props) => {
  const { t } = useTranslation();

  const listItems = [
    { icon: faHome, label: t("home_page"), link: "/" },
    { icon: faUserAlt, label: `${t("me")} & ${t("my_experience")}`, link: "/about_me" },
    { icon: faBriefcase, label: t("portofolio"), link: "/portofolio" },
    { icon: faStar, label: t("testimonials"), link: "/testimonials" },
    { icon: faPhone, label: t("get_in_touch"), link: "/contact_me" },
  ];

  const { handlePlaceholderWidth, placeholderWidth, setshowFullBar, setshowIconsBar, isMobile, isTabletOrMobile, setplaceholderWidth, showFullBar, showIconsBar } = useLogic();

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
