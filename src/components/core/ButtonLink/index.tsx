import React from "react";

import * as S from "./styles";

type PropsAnchor = {
  as: "a" | React.ElementType;
  to: string;
} & React.PropsWithChildren<React.AnchorHTMLAttributes<{}>>;

type PropsButton = {
  as: "button";
} & React.PropsWithChildren<React.ButtonHTMLAttributes<{}>>;

const ButtonLink = (props: PropsAnchor | PropsButton) => {
  const className = props.className
    ? `ButtonLink ${props.className}`
    : "ButtonLink";

  return <S.ButtonLink {...props} className={className} />;
};

export default ButtonLink;
