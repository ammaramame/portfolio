import { FunctionComponent, ReactNode, useContext, useEffect, useId, useState } from "react";
import useSound from "use-sound";
import { IContainerProps } from "../../../interfaces/elements";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import { ThemeContext } from "../../providers/theme-provider";

interface SideBarTemplateProps extends IContainerProps {
  show?: boolean;
  firstItem?: ReactNode;
  secondItem?: ReactNode;
  mainList?: ReactNode[];
  lastItem?: ReactNode;
  animate?: "top" | "bottom";
  onLastItemHide?: () => any;
  removeOnHide?: boolean;
  onWidthAvailable?: (width: number | undefined) => void;
}

const generateAnimationClass = (show?: boolean) => `animate__animated animate__faster ${!show ? "animate__fadeOutLeft" : "animate__fadeInLeft"}`;

const SideBarTemplate: FunctionComponent<SideBarTemplateProps> = (props) => {
  const { firstItem, lastItem, secondItem, show, mainList, animate, onLastItemHide, containerProps, removeOnHide, onWidthAvailable } = props;

  const animationClass = generateAnimationClass(show);

  const delayIndex = 0.1;

  const firstItemDelay = animate === "bottom" ? ((mainList?.length ? mainList.length : 0) + 2) * delayIndex : delayIndex;

  const secondItemDelay = animate === "bottom" ? ((mainList?.length ? mainList.length : 0) + 1) * delayIndex : 1.5 * delayIndex;

  const listDelay = (index: number) => (animate === "bottom" ? ((mainList?.length ?? 0) - index) * delayIndex : (index + 2) * delayIndex);

  const lastItemDelay = animate === "bottom" ? delayIndex : ((mainList?.length ? mainList.length : 0) + 2) * delayIndex;

  const lastAnimatedElement = useId();

  const [hidden, setHidden] = useState(removeOnHide);

  const addEventToLastAnimatedElement = (callback: () => any) => {
    document.getElementById(lastAnimatedElement)?.addEventListener("animationend", callback);
  };

  const removeEventToLastAnimatedElement = (callback: () => any) => {
    document.getElementById(lastAnimatedElement)?.removeEventListener("animationend", callback);
  };

  const [showSoundsPlay] = useSound("/sounds/show-button.mp3", {});

  useEffect(() => {
    if (show) setHidden(false);
    !show &&
      onLastItemHide &&
      addEventToLastAnimatedElement(() => {
        onLastItemHide();
        removeOnHide && setHidden(true);
      });

    return () => {
      onLastItemHide &&
        removeEventToLastAnimatedElement(() => {
          onLastItemHide();
          removeOnHide && setHidden(true);
        });
    };
  }, [onLastItemHide, show]);

  const theme = useContext(ThemeContext);

  const backgroundColorClass = theme?.theme === "dark" ? "uk-background-secondary" : "uk-background-default";

  const lightColor = theme?.theme === "dark" ? "uk-light" : "";

  return !hidden ? (
    <div ref={(ref) => onWidthAvailable?.(ref?.offsetWidth)} className={`uk-position-left ${backgroundColorClass} ${lightColor} uk-position-fixed uk-padding-small uk-padding-remove-horizontal`} {...containerProps}>
      <div className="uk-flex uk-height-1-1 uk-flex-column uk-flex-between uk-flex-middle">
        <div className={`uk-flex-inline uk-flex-column`}>
          <div onAnimationStart={() => showSoundsPlay()} id={animate === "bottom" ? lastAnimatedElement : undefined} className={`uk-flex-inline uk-flex-column ${animationClass}`} style={{ ...generateAnimationDelayStyle(firstItemDelay) }}>
            {firstItem}
          </div>
          <div onAnimationStart={() => showSoundsPlay()} className={`uk-margin-top ${animationClass}`} style={{ ...generateAnimationDelayStyle(secondItemDelay) }}>
            {secondItem}
          </div>
        </div>

        <div className="uk-flex-inline uk-flex-column">
          {mainList?.map((item, index) => (
            <div onAnimationStart={() => showSoundsPlay()} className={`${index !== 0 ? "uk-margin-top" : ""} ${animationClass}`} key={index} style={{ ...generateAnimationDelayStyle(listDelay(index)) }}>
              {item}
            </div>
          ))}
        </div>

        <div onAnimationStart={() => showSoundsPlay()} id={animate !== "bottom" ? lastAnimatedElement : undefined} style={{ ...generateAnimationDelayStyle(lastItemDelay) }} className={`${animationClass}`}>
          {lastItem}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SideBarTemplate;
