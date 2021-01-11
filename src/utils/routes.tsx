import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { translate } from "i18n/ConfiguredIntlProvider";

import Home from "pages/Home";
import RegisterVideo from "pages/register/Video";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:lang?" component={Home} />
      <Route exact path="/:lang?/register/video" component={RegisterVideo} />
      <Route component={() => <h1>{translate({ id: "pageNotFound" })}</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
