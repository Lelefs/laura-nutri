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
    color: var(--white);
    font-size: 3rem;
    margin: 2rem 0;
    text-align: center;
  }

  > p {
    color: var(--gray);
    font-size: 1.375rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1rem 0 4rem;

    @media only screen and (max-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  ul li p:first-child {
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  ul li p:last-child {
    color: var(--gray);
    font-size: 0.875rem;
  }
`;
