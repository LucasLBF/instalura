import React from "react";
import { SecondaryButtonWrapper } from "./style/SecondaryButtonWrapper";

export function SecondaryButton(props) {
  return <SecondaryButtonWrapper>{props.text}</SecondaryButtonWrapper>;
}
