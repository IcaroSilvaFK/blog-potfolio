import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  padding: 40px 10px;

  color: ${({ theme }) => theme.colors.purple[600]};

  div {
    padding: 10px;

    max-width: 600px;

    p {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
