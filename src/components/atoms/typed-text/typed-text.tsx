import { FunctionComponent, useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

interface TypedTextProps extends TypedOptions {
  contents: string[];
}

const TypedText: FunctionComponent<TypedTextProps> = (props) => {
  const { contents, ...rest } = props;

  const el = useRef(null);

  let typed: Typed | undefined;

  useEffect(() => {
    if (el.current)
      typed = new Typed(el.current, {
        strings: contents,
        ...rest,
      });

    return () => typed?.destroy();
  }, [contents, el, rest]);

  return <div ref={el} className="uk-display-inline-block" />;
};

export default TypedText;

TypedText.defaultProps = { typeSpeed: 100, backSpeed: 10, backDelay: 700, loop: true };
