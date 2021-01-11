import React from "react";
import { Link } from "react-router-dom";

import useWindowSize from "utils/useWindowSize";
import { translate } from "i18n/ConfiguredIntlProvider";
import { prefixWithLang } from "i18n/languages";

import Logo from "components/core/Logo";
import ButtonLink from "components/core/ButtonLink";
import LanguageList from "../LanguageList";
import { AiFillGithub } from "react-icons/ai";

import * as S from "./styles";

const Menu = () => {
  const size = useWindowSize();

  return (
    <S.Menu>
      <Logo />
      <Link
        to="https://github.com/axell-brendow/alura-react-immersion"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub
          color="white"
          // @ts-ignore
          size={size.width <= 800 ? "20px" : "40px"}
        />
      </Link>
      <LanguageList />
      <ButtonLink as={Link} to={prefixWithLang("/register/video")}>
        {translate({ id: "newVideo" })}
      </ButtonLink>
    </S.Menu>
  );
};

export default Menu;
