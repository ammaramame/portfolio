import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile/profile";

interface FancyProfilePicProps {}

const FancyProfilePic: FunctionComponent<FancyProfilePicProps> = () => {
  const { profile_pic_main } = profileConfig;

  return <img src={profile_pic_main} width="700" alt="my profile pic" />;
};

export default FancyProfilePic;
