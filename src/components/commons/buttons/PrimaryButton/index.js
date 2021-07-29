import React from "react";
import { PrimaryButtonWrapper } from "./styles/PrimaryButtonWrapper";

export function PrimaryButton(props) {
  return <PrimaryButtonWrapper>{props.text}</PrimaryButtonWrapper>;
}
