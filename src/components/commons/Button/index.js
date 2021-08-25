/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import propToStyle from '../../theme/utils/propToStyle';
import Link from '../Link';

const ButtonGhost = css`
  background: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const DefaultButton = css`
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
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

  &:disabled {
    cursor: now-not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%; 
  `} 

  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${propToStyle('alignSelf')}
`;

export default function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
