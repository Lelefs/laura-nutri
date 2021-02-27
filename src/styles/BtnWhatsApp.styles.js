import styled from 'styled-components';

export const Container = styled.a`
  position: fixed;
  cursor: pointer;
  right: 90px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  img {
    width: 50px;
    height: 50px;
    z-index: 5;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media only screen and (max-width: 600px) {
    right: 20px;
  }
`;
