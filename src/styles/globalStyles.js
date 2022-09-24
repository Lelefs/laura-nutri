import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #000;
    --gray-800: #333;
    --gray-900: #181B23;
    --gray: #F2F3F5;
    --green-light: #84C3C0;
    --green: #378A75;
    --green-900: #0B503F;
    --purple: #A27CB7;
    --text: #85868C;
    --turquoise: #66C0CD;
    --turquoise-light: #A5C7D3;
    --white: #FFF;
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
    background: var(--gray-900);
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
