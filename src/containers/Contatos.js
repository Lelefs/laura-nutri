import React from 'react';
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiMapPinLine,
  RiMailLine,
  RiWhatsappLine,
} from 'react-icons/ri';

import { ContainerContatos } from '../styles/Footer.styles';

export default function Contatos() {
  const textoFooter =
    'Olá Laura! Vi seu anúncio no site e preciso de uma especialista';

  return (
    <ContainerContatos>
      <h2>Contatos</h2>

      <a
        href="https://www.facebook.com/Laura-Nutricionista-102091401958431/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookCircleFill color="#fff" size={30} title="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/lauranutri_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramLine color="#fff" size={30} title="Instagram" />
      </a>
      <a
        href="https://www.google.com/maps/place/R.+Casemiro+de+Abreu,+14+-+Cer%C3%A2mica,+S%C3%A3o+Caetano+do+Sul+-+SP"
        target="_blank"
        rel="noopener noreferrer"
        className="alinharTopo"
      >
        <RiMapPinLine color="#fff" size={30} title="Localização" />
      </a>
      <a
        href="mailto:laura.nutri@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiMailLine color="#fff" size={30} title="E-mail" />
      </a>
      <a
        href={`https://wa.me/5511939286157?text=${textoFooter}.`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappLine color="#fff" size={30} title="Whatsapp" />
      </a>
    </ContainerContatos>
  );
}
