import { createGlobalStyle } from 'styled-components';

export const GLobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  body,html,#__next{
    width: 100%;
    height: 100vh;

    font-family:${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.gray[700]};

  }


  button,input{
    border: 0;
    outline: 0;
  }

  button{
    cursor: pointer;
  }


  a{
    text-decoration: none;
    color: inherit;
  }

  ul,ol{
    list-style: none;
  }
`;
