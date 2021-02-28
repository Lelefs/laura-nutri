import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --background: #f2f3f5;
  --black: #333;
  --text: #85868c;
  --green-light: #84c3c0;
  --green: #378a75;
  --white: #fff;
}

  body {
    -webkit-font-smoothing: antialiased;
  }

  @media only screen and (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  #root {
    min-height: 100vh;
    background: var(--background);
  }

  body, input, button, textarea {
    font: 300 1rem 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;

    &:enabled:hover {
      filter: brightness(90%);
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .skip-link {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    cursor: default;
  }
`;
