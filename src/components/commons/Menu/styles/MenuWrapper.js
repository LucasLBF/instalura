import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

// eslint-disable-next-line import/prefer-default-export
export const MenuWrapper = styled.nav`
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.125rem;
  padding: 0 1.75rem;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.CentralSide = styled.div`
  // background-color: steelblue; DEBUG
  margin: 0;
  padding: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.0625rem;
  border-top: 2px solid #f2f2f2;
  border-bottom: 2px solid #f2f2f2;
  padding: 0.75rem;
  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.smallestException}
      `,
    md: css`
        ${TextStyleVariantsMap.paragraph1}
      `,
  })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

MenuWrapper.RightSide = styled.div`
  // background-color: blueviolet;
  padding: 0;
  margin: 0;
  order: 2;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fb7b6b;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
