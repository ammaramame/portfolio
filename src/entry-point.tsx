import { FunctionComponent } from "react";
import App from "./components/app/app";
import "./setups/global-imports";

interface EntryPointProps {}

const EntryPoint: FunctionComponent<EntryPointProps> = () => {
  return <App />;
};

export default EntryPoint;
