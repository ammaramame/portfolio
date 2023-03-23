import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile/profile";

interface ContactMeLetsTalkPartProps {}

const ContactMeLetsTalkPart: FunctionComponent<ContactMeLetsTalkPartProps> = () => {
  const { email } = profileConfig;

  return (
    <div>
      <img src={"imgs/map.svg"} className="uk-position-absolute" />
      <h6 className="uk-text-large uk-text-bold uk-text-emphasis">Let's talk about everything!</h6>
      <p className="uk-text-emphasis">
        Don't like forms? Send me an{" "}
        <a href={`emailto: ${email}`}>
          <button className="uk-button uk-button-text uk-text-primary uk-text-capitalize">Email</button>
        </a>
        . 👋
      </p>
    </div>
  );
};

export default ContactMeLetsTalkPart;
