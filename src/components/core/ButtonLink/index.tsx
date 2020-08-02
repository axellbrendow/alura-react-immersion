import React from "react";

import * as S from "./styles";

type PropsAnchor = {
  as: "a";
} & React.AnchorHTMLAttributes<{}> & { children?: React.ReactNode };

type PropsButton = {
  as: "button";
} & React.ButtonHTMLAttributes<{}> & { children?: React.ReactNode };

const ButtonLink = (props: PropsAnchor | PropsButton) => {
  return <S.ButtonLink {...props} />;
};

export default ButtonLink;
