import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  img {
    width: 80px;
    height: 80px;

    border-radius: 50px;

    border: 1px solid ${({ theme }) => theme.colors.gray[100]};

    box-shadow: 0 10px 10px ${({ theme }) => theme.colors.gray[100]};
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;

  span:first-of-type {
    color: ${({ theme }) => theme.colors.purple[600]};

    font-weight: bold;

    font-size: ${({ theme }) => theme.fontSizes.lg};

    font-family: ${({ theme }) => theme.fonts.nunito};
  }

  .containerprofile__date {
    font-size: ${({ theme }) => theme.fontSizes.xs};

    color: ${({ theme }) => theme.colors.gray[400]};

    margin-left: 8px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    span:first-of-type {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }
`;

export const ContainerParagraphy = styled.div`
  max-width: 600px;

  color: ${({ theme }) => theme.colors.gray[500]};

  @media screen and (max-width: 500px) {
    text-align: center;

    padding: 10px;
  }
`;
