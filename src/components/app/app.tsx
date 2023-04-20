import { FunctionComponent, useEffect, useState } from "react";
import MainRouter from "../complex/main-router/main-router";
import SideBar from "../organisms/side-bar/side-bar";
import MainLayoutTemplate from "../templates/main-layout-template/main-layout-template";
import { BrowserRouter } from "react-router-dom";
import ParticalsTemplate from "../templates/particals-template/particals-template.";
import ModalsRouter from "../complex/modals-router/modals-router";
import ThemeProvider from "../providers/theme-provider";

interface AppProps {}

function getOnlineStatus() {
  return typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true;
}

function useOnlineStatus() {
  let [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());
  function goOnline() {
    setOnlineStatus(true);
  }
  function goOffline() {
    setOnlineStatus(false);
  }
  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return onlineStatus;
}

const App: FunctionComponent<AppProps> = () => {
  const status = useOnlineStatus();
  console.log(status);
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
