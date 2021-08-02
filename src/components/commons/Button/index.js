import styled, { css } from "styled-components";
import get from "lodash/get";
import { TextStyleVariantsMap } from "../../foundation/Text";
import { breakpointsMedia } from "../../theme/utils/breakpointsMedia";

export const Button = styled.button`
  border: 0;
  padding: 12px 26px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  border-radius: 8px;
  transition: opacity ${({ theme }) => theme.transition};
  ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return DefaultButton;
  }}
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
`;

const ButtonGhost = css`
  background: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const DefaultButton = css`
  background-color: ${(props) =>
    get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;
