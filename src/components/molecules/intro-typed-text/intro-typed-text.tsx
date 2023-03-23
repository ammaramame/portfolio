import { FunctionComponent } from "react";
import TypedText from "../../atoms/typed-text/typed-text";

interface IntroTypedTextProps {}

const IntroTypedText: FunctionComponent<IntroTypedTextProps> = () => {
  const StackText = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];
  return (
    <div className=" uk-text-emphasis uk-text-large">
      <div className="uk-display-inline-block">And i'm a </div>{" "}
      <span className="uk-text-success uk-text-bold">
        <TypedText contents={StackText} />
      </span>
    </div>
  );
};

export default IntroTypedText;
