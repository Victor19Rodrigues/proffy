import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: ${({ theme }) => theme.colors.colorBackground};
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: ${({ theme }) =>
      theme.colors.colorTitleInPrimary};
    --color-text-in-primary: ${({ theme }) => theme.colors.colorTextInPrimary};
    --color-text-title: ${({ theme }) => theme.colors.colorTextTitle};
    --color-text-complement: ${({ theme }) => theme.colors.colorTextComplement};
    --color-text-base: ${({ theme }) => theme.colors.colorTextBase};
    --color-line-in-white: ${({ theme }) => theme.colors.colorLineInWhite};
    --color-input-background: ${({ theme }) =>
      theme.colors.colorInputBackground};
    --color-button-text: ${({ theme }) => theme.colors.colorButtonText};
    --color-box-base: ${({ theme }) => theme.colors.colorBoxBase};
    --color-box-footer: ${({ theme }) => theme.colors.colorBoxFooter};

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root, body, html {
    height: 100vh;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

 body, input, button, textarea, input::placeholder, textarea::placeholder {
    font: 500 1.6rem Poppins, sans-serif;
    border: 0;
    color: ${({ theme }) =>
      theme.title === 'light' ? 'var(--color-text-base)' : '#ccc'};
  }

  body {
    background: var(--color-background);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
