import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt';

import { IUserProps } from '../../DTOs/user';

import { Container, ContainerProfile, ContainerParagraphy } from './styles';
import { formatDate } from '../../utils/dateTimeFormatter';

export function ProfileCard() {
  const { data, error } = useSWR<IUserProps>('user/github', async () => {
    try {
      const { data } = await axios.get(
        'https://api.github.com/users/IcaroSilvaFK'
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Container>
      <img src={data?.avatar_url} alt={data?.name} />
      <div>
        <ContainerProfile>
          <span>{data?.name}</span>
          {data?.created_at && (
            <span className='containerprofile__date'>
              {formatDate(data.created_at)}
            </span>
          )}
        </ContainerProfile>
        <ContainerParagraphy>
          <p>{data?.bio}...</p>
        </ContainerParagraphy>
      </div>
    </Container>
  );
}
