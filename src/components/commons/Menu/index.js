import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../theme/Logo";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";

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
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <SecondaryButton text="Entrar" />
        <PrimaryButton text="Cadastrar" />
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
