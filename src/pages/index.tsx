import type { NextPage } from 'next';
import useSWR from 'swr';
import Head from 'next/head';

import { getArticles } from '../services/getArticles';
import { IAticleProps } from '../DTOs/articles';
import { Header } from '../components/Header';
import { Container, Divider } from '../styles/styles.home';
import { ProfileCard } from '../components/CardProfile';
import { PostCard } from '../components/Post';

const Home: NextPage = () => {
  const { data, error } = useSWR<IAticleProps[]>('@posts', getArticles);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Header />
        <Divider />
        <ProfileCard />
        <main>
          {data?.map((post) => (
            <PostCard {...post} key={post.id} />
          ))}
        </main>
      </Container>
    </>
  );
};

export default Home;
