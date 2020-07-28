import React from "react";

import Logo from "components/core/Logo";
import ButtonLink from "components/core/ButtonLink";

import { translate } from "i18n/ConfiguredIntlProvider";

import * as S from "./styles";

const Menu = () => {
  return (
    <S.Menu>
      <Logo />
      <ButtonLink>{translate({ id: "newVideo" })}</ButtonLink>
    </S.Menu>
  );
};

export default Menu;
