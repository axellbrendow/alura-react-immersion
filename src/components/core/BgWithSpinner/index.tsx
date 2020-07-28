import React from "react";

import CenterRelative from "../CenterRelative";

import { Spinner } from "./styles";

interface Props {
  backgroundColor?: string;
}

const BgWithSpinner = ({ backgroundColor }: Props) => {
  return (
    <CenterRelative backgroundColor={backgroundColor}>
      <Spinner />
    </CenterRelative>
  );
};

export default BgWithSpinner;
