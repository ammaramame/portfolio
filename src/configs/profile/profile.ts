import en from "./en";
import de from "./de";
import { i18next } from "../../setups/languages";

const profile = () => {
  switch (i18next.language) {
    case "en":
      return en;

    case "de":
      return de;

    default:
      return en;
  }
};

export default profile();
