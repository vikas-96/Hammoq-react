import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Front/Header";

export const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header />
          <Component {...props} />
        </>
      )}
    />
  );
};

export const PrivateLayout = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <React.Fragment>
            <div className="content-container">
              <div className="main-page">
                <Component {...props} />
              </div>
            </div>
          </React.Fragment>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
