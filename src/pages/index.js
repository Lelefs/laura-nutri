import React from 'react';

import Menu from '../containers/Menu';
import SEO from '../containers/SEO';

import img from '../assets/home.jpg';

import { Container } from '../styles/Main.styles';
import Ajuda from '../containers/Ajuda';

export default () => {
  return (
    <>
      <SEO title="Início" description="Laura Ribeiro Nutricionista" />

      <Menu ativo="home" />

      <a className="skip-link" href="#mainCards">
        Skip to main
      </a>

      <Container>
        <main>
          <img src={img} alt="Nutrição" className="imgHome" />
          <Ajuda />
        </main>
      </Container>
    </>
  );
};
