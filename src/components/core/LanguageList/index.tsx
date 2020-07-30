import React from "react";

import { LANGUAGES, changeUrlLangTo, Language } from "i18n/languages";

import * as S from "./styles";

const LanguageItem = (language: Language) => (
  <S.LanguageItem key={language.locale}>
    <S.LanguageLink to={changeUrlLangTo(language.locale)}>
      {language.name}
    </S.LanguageLink>
  </S.LanguageItem>
);

const languages = Object.values(LANGUAGES);

const LanguageList = () => (
  <S.LanguageList>{languages.map(LanguageItem)}</S.LanguageList>
);

export default LanguageList;
