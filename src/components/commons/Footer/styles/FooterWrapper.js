import styled from 'styled-components';

export default styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
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
