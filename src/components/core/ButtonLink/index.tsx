import React from "react";

import * as S from "./styles";

type PropsAnchor = {
  as: "a";
} & React.AnchorHTMLAttributes<{}> & { children?: React.ReactNode };

type PropsButton = {
  as: "button";
} & React.ButtonHTMLAttributes<{}> & { children?: React.ReactNode };

const ButtonLink = (props: PropsAnchor | PropsButton) => {
  const className = props.className
    ? `ButtonLink ${props.className}`
    : "ButtonLink";

  return <S.ButtonLink {...props} className={className} />;
};

export default ButtonLink;
