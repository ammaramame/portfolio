import { FunctionComponent } from "react";
import MainRouter from "../complex/main-router/main-router";
import SideBar from "../organisms/side-bar/side-bar";
import MainLayoutTemplate from "../templates/main-layout-template/main-layout-template";
import { BrowserRouter } from "react-router-dom";
import ParticalsTemplate from "../templates/particals-template/particals-template.";
import ModalsRouter from "../complex/modals-router/modals-router";
import ThemeProvider from "../providers/theme-provider";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="uk-flex-row-reverse uk-flex uk-position-z-index">
          <MainLayoutTemplate>
            <ParticalsTemplate>
              <MainRouter />
            </ParticalsTemplate>
          </MainLayoutTemplate>
          <div className="uk-position-z-index uk-position-relative" style={{ flexShrink: 0 }}>
            <SideBar />
          </div>
        </div>

        <ModalsRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
