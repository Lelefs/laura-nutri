import React from 'react';

import { Container } from '../styles/Ajuda.styles';

export default function Ajuda() {
  return (
    <Container>
      <h2>Como posso te ajudar?</h2>
      <p>
        A nutrição atua em diversas áreas e te auxilia a alcançar diferentes
        objetivos:
      </p>

      <div>
        <ul className="lista-padrao">
          <li>
            <p>Nutrição esportiva</p>
            <p>
              Atendimento personalizado para melhora da performance e composição
              corporal.
            </p>
          </li>

          <li>
            <p>Nutrição clínica</p>
            <p>
              Melhora da saúde, acompanhamento de doenças, alergias e
              intolerâncias.
            </p>
          </li>

          <li>
            <p>Emagrecimento</p>
            <p>
              Estratégias reais para um emagrecimento saudável, sustentável e
              manutenção do peso.
            </p>
          </li>

          <li>
            <p>Reeducação Alimentar</p>
            <p>
              Sem dúvidas, a melhor estratégia para uma vida saudável, onde nada
              é proibido e o equilíbrio é a base.
            </p>
          </li>

          <li>
            <p>Nutrição na Melhor Idade</p>
            <p>Todo carinho e atenção a quem está na melhor fase da vida.</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}
