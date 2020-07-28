import React from "react";

import { CenterRelativeStyle, Props } from "./styles";

const CenterRelative: React.FC<Props> = ({ children, backgroundColor }) => {
  return (
    <CenterRelativeStyle backgroundColor={backgroundColor}>
      {children}
    </CenterRelativeStyle>
  );
};

export default CenterRelative;
