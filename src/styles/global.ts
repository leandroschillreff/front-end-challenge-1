import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #F5F7FA;
    --color-gray-1: #656565;
    --color-gray-2: #F7F9FA;
    --color-gray-3: #DDE6E9;
    --color-blue-1: #3D75BB;
    --color-blue-2: #5D9CEC;
    --color-blue-3: #66AFE9;
    --color-black: #000000;
    --color-white: #FFFFFF;

    --color-sucess: #3FE864;
    --color-negative: #ff002b;
  } 

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  body {
    background: var(--color-background);
  };

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
