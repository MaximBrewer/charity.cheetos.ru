import React from "react";
import ReactDOM from "react-dom";
import App from "./router";
import TagManager from "react-gtm-module";

import { AuthProvider } from "./context/auth";

window.skipScroll = false;

const tagManagerArgs = {
  gtmId: "GTM-KNQNKBS",
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("app")
);
