import React from "react";

import ConfiguredIntlProvider from "i18n/ConfiguredIntlProvider";
import Routes from "utils/routes";
import { GlobalStyles } from "./styles";

const App = () => (
  <ConfiguredIntlProvider>
    <GlobalStyles />
    <Routes />
  </ConfiguredIntlProvider>
);

export default App;
