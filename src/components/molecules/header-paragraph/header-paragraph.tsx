import { FunctionComponent, HTMLAttributes } from "react";

interface HeaderParagraphProps {
  header?: string;
  headerProps?: HTMLAttributes<HTMLHeadingElement>;
  paragraph?: string;
  paragraphProps?: HTMLAttributes<HTMLParagraphElement>;
}

const HeaderParagraph: FunctionComponent<HeaderParagraphProps> = (props) => {
  const { header, paragraph, paragraphProps, headerProps } = props;

  return (
    <div>
      {header && (
        <h6 {...headerProps} className={`uk-text-bold uk-text-large ${headerProps?.className}`}>
          {header}
        </h6>
      )}
      {paragraph && (
        <p {...paragraphProps} style={{ fontSize: 18, maxWidth: 700, ...paragraphProps?.style }}>
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default HeaderParagraph;
