import styled from "styled-components";

export const MenuWrapper = styled.nav`
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.125rem;
  padding: 0 1.75rem;
`;

MenuWrapper.LeftSide = styled.div`
  // background-color: crimson; DEBUG
  padding: 0;
  margin: 0;
  order: 1;
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
  border-top: 2px solid #F2F2F2;
  border-bottom 2px solid #F2F2F2;
  padding: 0.75rem;
  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    &:hover,
    &:focus {
    font-weight: 500;
    color: #070C0E
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
`;
