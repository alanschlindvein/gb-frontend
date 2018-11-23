import React from "react";
import ReactDOM from "react-dom";

import { IntlProvider } from "react-intl";

import * as serviceWorker from "./serviceWorker";
import { initIntl, intlProviderProps } from "./config/intl";

import App from "./App";

import "./index.css";

const renderApp = () => {
  ReactDOM.render(
    <IntlProvider {...intlProviderProps}>
      <App />
    </IntlProvider>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
};

initIntl().then(renderApp);
