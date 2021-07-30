import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 300ms;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;
