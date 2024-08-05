import React from "react";
import { PrivateRoutes } from "./allRoutes";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
export default function ProtectedRoute() {
  const getAuthRoutes = (routes) => {
    return routes.map((prop, key) => {
      return isAuthenticated() ? (
        <Route
          path={prop.path}
          key={prop.path}
          component={prop.component}
          exact={prop?.exact}
        />
      ) : (
        <Redirect to="/" />
      );
    });
  };
  return <div>{getAuthRoutes(PrivateRoutes)}</div>;
}
