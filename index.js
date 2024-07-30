import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/index";
import App from "./App";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import AccessDenied from "./pages/AccessDenied";
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/403" exact={true} component={AccessDenied} />
          <ScrollToTop>
            <App></App>
          </ScrollToTop>
        </Switch>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
