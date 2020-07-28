import React from "react";

import logo from "assets/img/logo_axellflix.png";

import * as S from "./styles";

const Logo = (props: React.ImgHTMLAttributes<{}>) => {
  return <S.Logo {...props} src={logo} />;
};

export default Logo;
