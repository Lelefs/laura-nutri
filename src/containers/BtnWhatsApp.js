import React from 'react';
import { Container } from '../styles/BtnWhatsApp.styles';

import whatsAppImg from '../assets/whatsapp.png';

export default function BtnWhatsApp() {
  const textoGeral =
    'Olá Laura! Vi seu anúncio no site e preciso de uma especialista';

  return (
    <Container
      href={`https://wa.me/5511939286157?text=${textoGeral}.`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsAppImg} alt="Whatsapp" />
    </Container>
  );
}
