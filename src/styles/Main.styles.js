import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .imgHome {
    width: 100%;
  }

  .titulo {
    margin: 2rem auto 1rem;
    max-width: 1200px;
    width: 100%;
    padding: 0 1rem;

    h2 {
      width: 100%;
      color: var(--black);
      font-size: 2rem;
      border-bottom: 1px solid #ddd;
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  img {
    float: right;
    margin: 0 0 0.5rem 1rem;
  }

  p {
    margin-bottom: 0.625rem;
    line-height: 1.5;
    text-align: justify;
    font-weight: 400;
  }

  @media only screen and (max-width: 650px) {
    img {
      width: 100%;
      margin: 0 0 1rem 0;
    }
  }
`;
