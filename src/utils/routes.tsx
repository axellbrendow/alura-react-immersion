import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

import Home from "pages/Home";

import history from "./history";

const Routes = () => (
  <BrowserRouter>
    <Router history={history}>
      <Route exact path="/:lang?" component={Home} />
    </Router>
  </BrowserRouter>
);

export default Routes;
