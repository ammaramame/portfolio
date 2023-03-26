import { FunctionComponent, ReactNode } from "react";

interface SectionHeaderProps {
  children?: ReactNode;
}

const SectionHeader: FunctionComponent<SectionHeaderProps> = (props) => {
  const { children } = props;

  return (
    <div className="uk-position-relative ">
      <img src={"imgs/dots.svg"} className="uk-position-absolute" style={{ top: -10, left: -10 }} />
      <h6 className="uk-text-bolder uk-text-emphasis uk-text-capitalize text-big">{children}</h6>
    </div>
  );
};

export default SectionHeader;
