import React from "react";

import Logo from "components/core/Logo";

import * as S from "./styles";
import ButtonLink from "components/core/ButtonLink";

const Menu = () => {
  return (
    <S.Menu>
      <Logo />
      <ButtonLink>New Video</ButtonLink>
    </S.Menu>
  );
};

export default Menu;
