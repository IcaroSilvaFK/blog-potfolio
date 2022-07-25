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

    scroll-behavior: smooth;

  }


  body{
    ::-webkit-scrollbar{
      background-color: transparent;
      width: 10px;
    }
    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.colors.purple[300]};
      border-radius: 10px;
    }
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
