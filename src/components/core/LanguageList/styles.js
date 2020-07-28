import styled from "styled-components";

export const LanguageListStyle = styled.ul`
  display: flex;
  justify-content: center;
`;

export const LanguageItem = styled.li`
  display: inline-block;

  :not(:first-child) {
    margin-left: 40px;
  }
`;
