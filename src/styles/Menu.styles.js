import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  box-shadow: 0px 3px 1px -2px rgb(255 255 255 / 20%),
    0px 2px 2px 0px rgb(255 255 255 / 14%),
    0px 1px 5px 0px rgb(255 255 255 / 12%);
  position: sticky;
  top: 0;
  background: var(--black);

  div {
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    color: var(--green);
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: -1.04537px;
    transition: all linear 0.1s;

    > a img {
      height: 4rem;
    }

    ul {
      display: flex;
      align-content: center;
      justify-content: flex-end;
      text-align: center;
      list-style: none;

      li {
        height: fit-content;
        padding: 1rem 0;
        margin: auto 0.625rem;
        border-top: 3px solid transparent;
        transition: all linear 0.1s;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          border-top: 3px solid var(--green-light);
        }
      }

      .ativo,
      .ativo:hover {
        border-top: 3px solid var(--green);
      }
    }
  }
`;
