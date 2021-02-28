import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  background: var(--green);
`;

export const Container = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1rem;

  div {
    padding: 1rem;
    width: 50%;
  }

  p {
    padding: 3rem 1rem 1rem 0;
    color: var(--white);
    font-size: 0.625rem;
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column;
    flex-wrap: initial;

    div {
      width: 100%;
    }
  }
`;

export const ContainerContatos = styled.footer`
  width: 100%;

  h2 {
    font-size: 1.5rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
    margin: 0 0 1.5rem;
    color: var(--white);
  }

  a + a {
    margin-left: 2rem;
  }

  a {
    svg {
      transition: all 0.3s;
    }
  }

  a:hover {
    svg {
      filter: brightness(0.8);
      transform: translateY(-2px);
    }
  }
`;
