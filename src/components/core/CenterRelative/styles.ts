import styled from "styled-components";

export interface Props {
  backgroundColor?: string;
}

export const CenterRelativeStyle = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor || "rgba(255, 255, 255, 0.5)"};
`;
