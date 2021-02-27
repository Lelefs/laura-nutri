import React from 'react';

import Contatos from './Contatos';

import { Container, Main } from '../styles/Footer.styles';

export default function Footer() {
  return (
    <Main>
      <Container>
        <Contatos />
        <p>
          © 2020 - Desenvolvido por <strong>FSET</strong>
        </p>
      </Container>
    </Main>
  );
}
