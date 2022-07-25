import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  main {
    margin-top: 40px;
  }
`;

export const Divider = styled.div`
  width: 60%;
  height: 5px;

  background: ${({ theme }) => transparentize(0.8, theme.colors.gray[300])};

  margin-bottom: 10px;
  margin-left: 5px;

  border-radius: 10px;

  @media screen and (max-width: 500px) {
    margin: 10px auto;
  }
`;
