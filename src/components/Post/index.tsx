import { userAgent } from 'next/server';
import React from 'react';
import { formatDate } from '../../utils/dateTimeFormatter';

import { Container, HeaderPost, BodyPost, FooterPost } from './styles';

interface IPostProps {
  canonical_url: string;
  created_at: string;
  description: string;
  title: string;
  tag_list: string[];
  url: string;
  user: {
    github_username: string;
    name: string;
    profile_image_90: string;
    username: string;
  };
}

export function PostCard(data: IPostProps) {
  return (
    <Container>
      <HeaderPost>
        <a href={data.url}>
          <h1>{data.title}</h1>
        </a>
      </HeaderPost>
      <BodyPost>
        <p>{data.description}</p>
      </BodyPost>
      <FooterPost>
        <div>
          <img src={data.user.profile_image_90} alt={data.user.name} />
          <span>{data.user.name}</span>
        </div>
        <span className='footerpost__date'>{formatDate(data.created_at)}</span>
      </FooterPost>
    </Container>
  );
}
