import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;

  h2 {
    color: var(--turquoise);
    font-size: 3rem;
    margin: 2rem 0;
    text-align: center;
  }

  > p {
    color: var(--white);
    font-size: 1.375rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  ul.lista-padrao {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1rem 0 4rem;

    @media only screen and (max-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 550px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  ul.lista-padrao li p:first-child,
  p.title {
    color: var(--turquoise);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p.title {
    margin: 2rem 0 1.5rem;
  }

  p.obs-p {
    color: var(--white);
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
    font-style: italic;
  }

  ul.lista-padrao li p:last-child {
    color: var(--white);
    font-size: 0.875rem;
  }

  ul.lista-numerica {
    list-style: decimal;
    color: var(--white);
    font-size: 1.375rem;
    margin-bottom: 2rem;
    padding: 0 2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
