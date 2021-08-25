/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { MenuWrapper } from './styles/MenuWrapper';
import Logo from '../../theme/Logo';
import Button from '../Button';
// import Text from '../../foundation/Text';

const links = [
  {
    text: 'Home',
    url: '/',
    id: Math.random(),
  },
  {
    text: 'Perguntas Frequentes',
    url: '/faq',
    id: Math.random(),
  },
  {
    text: 'Sobre',
    url: '/about',
    id: Math.random(),
  },
];

export default function Menu({ onRegisterClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.id}>
            <NextLink href={link.url}>
              <a>
                {link.text}
              </a>
            </NextLink>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button
          ghost
          variant="secondary.main"
          href="/app/login"
        >
          Entrar
        </Button>
        <Button
          variant="primary.main"
          onClick={onRegisterClick}
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onRegisterClick: PropTypes.func.isRequired,
};
