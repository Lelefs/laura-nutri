import React from 'react';

import { Container } from '../styles/Ajuda.styles';

export default function TermoServico() {
  return (
    <Container>
      <h2>Termos de serviço</h2>

      <div>
        <ul className="lista-numerica">
          <li>
            Agendamento de retorno em até 3 meses, podendo se estender no máximo
            de 2 meses. Após esse período, será cobrado o valor da consulta
          </li>
          <li>
            Alterações no plano alimentar com prazo de 7 dias após a entrega
          </li>
          <li>Atendimento para adultos (acima dos 18 anos) e idosos</li>
        </ul>
      </div>
    </Container>
  );
}
