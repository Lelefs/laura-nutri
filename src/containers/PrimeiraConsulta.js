import React from 'react';

import { Container } from '../styles/Ajuda.styles';

export default function PrimeiraConsulta() {
  return (
    <Container>
      <h2>A primeira consulta</h2>
      <p>
        A primeira consulta tem uma duarção aproximada de 1 hora e é composta
        por:
      </p>

      <div>
        <ul className="lista-numerica">
          <li>Análise dos exames de sangue mais recentes</li>
          <li>
            Solicitação de exames complementares para possíveis diagnósticos que
            possam influenciar na Nutrição
          </li>
          <li>Avaliação física pelo método de Bioimpedância e adipômetro</li>
          <li>
            Avaliação do histórico clínico familiar para a prevenção de doenças
            crônicas a partir do plano alimentar
          </li>
          <li>
            Anamnese/Análise quantitativa dos nutrientes ingeridos habitualmente
            pelo paciente com o objetivo de identificar os possíveis excessos e
            deficiências nutricionais, identificando assim a necessidade do uso
            de suplementos alimentares
          </li>
          <li>
            Avaliação dos hábitos alimentares e sociais do paciente visando a
            elaboração de um plano alimentar PERSONALIZADO que se adapte ao seu
            estilo de vida
          </li>
          <li>Montagem e envio do plano alimentar (e-mail e/ou whatsapp)</li>
          <li>Aplicativo de acesso pessoal (dietbox)</li>
        </ul>
      </div>

      <p className="title">Não esqueça de levar:</p>
      <div>
        <ul className="lista-numerica">
          <li>Exames de sangue mais recentes (caso você tenha)</li>
          <li>
            Relação de medicamentos e / ou suplementos utilizados atualmente
            (com a forma que utiliza atualmente)
          </li>
          <li>Roupa leve ou de banho (opcional)</li>
        </ul>
      </div>

      <p className="title">
        Preparação para avaliação física (Bioimpedância digital):
      </p>
      <div>
        <ul className="lista-numerica">
          <li>
            Evitar o consumo de álcool e cafeína (chá, café, chocolate,
            achocolatado) 24h antes da consulta
          </li>
          <li>
            Faça jejum de alimentos e bebidas nas 3 horas antes que antecedem o
            horário do exame
          </li>
          <li>
            No dia anterior a consulta não realize atividade física intensa
          </li>
          <li>Não realize atividade física no dia da consulta</li>
          <li>Não estar no período menstrual (mulheres)</li>
          <li>
            Beba no mínimo 2 litros de água 24h antes da consulta e pare de
            tomar até 2 horas do horário marcado
          </li>
          <li>Urine pelo menos 30 minutos antes da realização do exame</li>
        </ul>

        <p className="obs-p">
          *Contraindicações para realização do exame: uso de marca-passo, uso de
          medicação diurética, grávida.
        </p>
      </div>
    </Container>
  );
}
