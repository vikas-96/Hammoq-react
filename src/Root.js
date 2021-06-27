import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { PublicLayout, PrivateLayout } from "./Components/Layout";

const Login = React.lazy(() => import("./Pages/Login"));
const Signup = React.lazy(() => import("./Pages/Signup"));
const Listing = React.lazy(() => import("./Pages/Dashbaord"));
const ChangePassword = React.lazy(() => import("./Pages/ChangePassword"));
const NotFound = React.lazy(() => import("./Pages/Error/NotFound"));

const Root = ({ isAuthenticated }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicLayout path="/" exact component={Login} />
          <PublicLayout path="/signup" component={Signup} />
          <PrivateLayout
            path="/user/listing"
            component={Listing}
            authenticated={isAuthenticated}
          />
          <PrivateLayout
            path="/user/change_password"
            component={ChangePassword}
            authenticated={isAuthenticated}
          />
          <PublicLayout component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Root;
