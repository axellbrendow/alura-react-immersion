import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

import { LANGUAGES /* , changeLang */, changeUrlLangTo } from "i18n/languages";

import { LanguageListStyle, LanguageItem } from "./styles";

// const LanguageButton = styled.button`
//   color: #007bff;
//   text-decoration: none;
//   background-color: transparent;
//   cursor: pointer;
//   border: none;

//   :hover {
//     color: #0056b3;
//     text-decoration: underline;
//   }
// `;

const languages = Object.values(LANGUAGES);

const LanguageList = () => (
  <LanguageListStyle>
    {languages.map(language => (
      <LanguageItem key={language.locale}>
        {/* <LanguageButton onClick={() => changeLang(language.locale)}>
          {language.name}
        </LanguageButton> */}
        <Link to={changeUrlLangTo(language.locale)}>{language.name}</Link>
      </LanguageItem>
    ))}
  </LanguageListStyle>
);

export default LanguageList;
