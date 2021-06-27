import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Root from "./Root";
import initAxios from "./Utils/initAxios";
import "./Assets/Style.css";

export const browserHistory = createBrowserHistory();

const isAuthenticated = initAxios();

function App() {
  return (
    <Router history={browserHistory}>
      <Root isAuthenticated={isAuthenticated} />
    </Router>
  );
}

export default App;
