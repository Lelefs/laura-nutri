import React from 'react';

import SEO from '../containers/SEO';
import Menu from '../containers/Menu';

import img from '../assets/sobre.jpg';

import { Container, Content } from '../styles/Main.styles';

export default function Sobre() {
  return (
    <>
      <SEO title="Sobre" description="Página sobre Laura Ribeiro" />

      <Menu ativo="sobre" />

      <Container>
        <div className="titulo">
          <h2>Sobre mim</h2>
        </div>

        <Content>
          <img src={img} alt="Perdas e luto" width="400px" />

          <p>
            Sou nutricionista, graduada em uma das melhores universidades de São
            Paulo e pós graduanda em nutrição esportiva.
          </p>
          <p>
            Atuo principalmente nas áreas de emagrecimento, hipertrofia,
            reeducação alimentar e plano alimentar individualizado.
          </p>
          <p>
            Sou muito dedicada, inteligente e canto muito bem
            <i> (um beijo no ombro pro recalque)</i>.
          </p>
          <p>
            Levo a qualidade de vida através de uma boa alimentação muito a
            sério. Trabalho focada nos melhores resultados acompanhando de perto
            o desenvolvimento e bem estar de cada um dos meus pacientes.
          </p>
        </Content>
      </Container>
    </>
  );
}
