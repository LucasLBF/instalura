import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../theme/Logo";
import { Button } from "../Button";
import Text from "../../foundation/Text";

const links = [
  {
    text: "Home",
    url: "/",
    id: Math.random(),
  },
  {
    text: "Perguntas Frequentes",
    url: "/faq",
    id: Math.random(),
  },
  {
    text: "Sobre",
    url: "/sobre",
    id: Math.random(),
  },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Text tag="a" variant="smallestException" href={link.url}>
                {link.text}
              </Text>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
