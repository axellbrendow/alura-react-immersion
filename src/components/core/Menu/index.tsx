import React from "react";

import useWindowSize from "utils/useWindowSize";

import Logo from "components/core/Logo";
import ButtonLink from "components/core/ButtonLink";
import LanguageList from "../LanguageList";
import { AiFillGithub } from "react-icons/ai";

import { translate } from "i18n/ConfiguredIntlProvider";

import * as S from "./styles";

const Menu = () => {
  const size = useWindowSize();

  return (
    <S.Menu>
      <Logo />
      <a
        href="https://github.com/axell-brendow/alura-react-immersion"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub
          color="white"
          // @ts-ignore
          size={size.width <= 800 ? "20px" : "40px"}
        />
      </a>
      <LanguageList />
      <ButtonLink as="a">{translate({ id: "newVideo" })}</ButtonLink>
    </S.Menu>
  );
};

export default Menu;
