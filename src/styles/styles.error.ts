import { transparentize } from 'polished';
import styled from 'styled-components';
import { theme } from './theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  overflow: hidden;

  img {
    width: 450px;

    border-radius: 10px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.purple[500]};
    font-family: ${({ theme }) => theme.fonts.nunito};
  }

  a {
    padding: 8px 24px;
    margin-top: 10px;

    background: transparent;

    outline: 1px solid ${({ theme }) => theme.colors.purple[600]};

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.purple[500]};

    font-weight: bold;

    transition: all 0.3s linear;

    :hover {
      background: ${({ theme }) =>
        transparentize(0.8, theme.colors.purple[500])};

      outline: none;
    }
  }

  @media screen and (max-width: 500px) {
    text-align: center;

    padding: 10px 0;

    img {
      width: 350px;
    }
  }
`;
