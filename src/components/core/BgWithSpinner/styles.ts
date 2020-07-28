import styled from "styled-components";

const colorStops = `
  gray 10%,
  rgba(128, 128, 128, 0) 42%
`;

const legacyGradient = `
  left,
  ${colorStops}
`;

const rotationKeyframes = `
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  @-webkit-keyframes load3 {
    ${rotationKeyframes}
  }

  @keyframes load3 {
    ${rotationKeyframes}
  }

  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: gray;
  background: -moz-linear-gradient(${legacyGradient});
  background: -webkit-linear-gradient(${legacyGradient});
  background: -o-linear-gradient(${legacyGradient});
  background: -ms-linear-gradient(${legacyGradient});
  background: linear-gradient(to right, ${colorStops});
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  :before {
    width: 50%;
    height: 50%;
    background: gray;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  :after {
    background: white;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
