import React from "react";

import { prefixWithLang } from "i18n/languages";

import { Link } from "react-router-dom";

import logo from "assets/img/logo_axellflix.png";

import * as S from "./styles";

const Logo = (props: React.ImgHTMLAttributes<{}>) => {
  return (
    <Link to={prefixWithLang()}>
      <S.Logo {...props} src={logo} />
    </Link>
  );
};

export default Logo;
