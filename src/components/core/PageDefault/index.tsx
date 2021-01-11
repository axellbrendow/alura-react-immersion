import React from "react";

import Menu from "../Menu";
import Footer from "../Footer";

interface PageDefaultProps extends React.PropsWithChildren<{}> {}

const PageDefault = ({ children }: PageDefaultProps) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default PageDefault;
