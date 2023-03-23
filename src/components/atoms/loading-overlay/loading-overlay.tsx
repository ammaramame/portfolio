import { ForwardedRef, forwardRef, FunctionComponent, LegacyRef, Ref } from "react";

interface LoadingOverlayProps {
  ref?: Ref<HTMLDivElement>;
  show?: boolean;
}

const LoadingOverlay: FunctionComponent<LoadingOverlayProps> = forwardRef((props, ref) => {
  const { show } = props;

  return <div ref={ref} id="loader" className={`uk-background-primary loading-overlay ${!show ? "uk-hidden" : ""}`}></div>;
});

export default LoadingOverlay;
