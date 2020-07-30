import styled from "styled-components";
import { Link } from "react-router-dom";

export const LanguageList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const LanguageItem = styled.li`
  display: inline-block;

  :not(:first-child) {
    margin-left: 40px;
  }
`;

export const LanguageLink = styled(Link)`
  color: yellow;
`;
