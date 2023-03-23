import { FunctionComponent, ReactNode } from "react";

interface SubHeaderProps {
  children?: ReactNode;
}

const SubHeader: FunctionComponent<SubHeaderProps> = (props) => {
  const { children } = props;

  return (
    <div style={{ borderBottom: "2px dashed #ddd", paddingBottom: 12 }} className="text-big uk-text-normal uk-display-inline-block uk-text-capitalize">
      {children}
    </div>
  );
};

export default SubHeader;
