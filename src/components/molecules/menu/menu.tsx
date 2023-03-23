import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import UIkit from "uikit";

interface UIkitMenuProps {
  trigger: HTMLElement | null;
  caret: boolean;
  children: React.ReactNode;
}

const UIkitMenu: React.FC<UIkitMenuProps> = ({ children, trigger, caret }) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (trigger && menuRef.current) {
      const dropdown: any = UIkit.dropdown(menuRef.current, {
        mode: "click",
        pos: "bottom-left",
        offset: 0,
        animation: "uk-animation-slide-top-small",
      });
      dropdown.$el.addEventListener("hide", () => {
        // Close the dropdown when the trigger element is clicked again
        dropdown.hide(false);
      });
      return () => {
        dropdown.$destroy();
      };
    }
  }, [trigger]);

  return (
    <>
      {trigger && <>{ReactDOM.createPortal(children, document.body)}</>}
      <ul ref={menuRef} className={`uk-nav-default uk-nav-parent-icon uk-nav ${caret ? "uk-nav-caret" : ""}`} data-uk-nav>
        {children}
      </ul>
    </>
  );
};

export default UIkitMenu;
