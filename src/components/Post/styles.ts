import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  padding: 12px 6px;

  margin-top: 10px;

  @media screen and (max-width: 500px) {
    text-align: center;
    & + & {
      ::after {
        content: '';
        height: 4px;
        width: 70%;
        background: ${({ theme }) =>
          transparentize(0.8, theme.colors.purple[500])};
        display: block;

        margin: 10px auto;

        border-radius: 50%;
      }
    }
  }
`;

export const HeaderPost = styled.div`
  color: ${({ theme }) => theme.colors.purple[500]};

  a {
    transition: all 0.3s linear;

    :hover {
      filter: brightness(1.3);
      /* color: ${({ theme }) => theme.colors.gray[700]}; */
    }
  }
`;

export const BodyPost = styled.div`
  max-width: 500px;

  padding: 10px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const FooterPost = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  padding: 0 12px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      border-radius: 50px;
      width: 40px;
      height: 40px;
    }

    span {
      font-weight: bold;
      font-family: ${({ theme }) => theme.fonts.nunito};
    }
  }

  .footerpost__date {
    font-size: ${({ theme }) => theme.fontSizes.xs};

    color: ${({ theme }) => theme.colors.gray[400]};
  }

  @media screen and (max-width: 500px) {
    align-items: center;
    flex-direction: column;
  }
`;
