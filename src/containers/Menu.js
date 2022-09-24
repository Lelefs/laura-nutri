import React from 'react';
import { Link } from 'components/Router';

import { Container } from '../styles/Menu.styles';

import logoImg from '../assets/logo.png';

export default function Menu({ ativo }) {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>

        <ul>
          <li className={ativo === 'home' ? 'ativo' : undefined}>
            <Link to="/">Home</Link>
          </li>
          <li className={ativo === 'sobre' ? 'ativo' : undefined}>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
