import type { NextPage } from 'next';
import useSWR from 'swr';
import Head from 'next/head';
import { getArticles } from '../services/getArticles';
import { IAticleProps } from '../DTOs/articles';

const Home: NextPage = () => {
  const { data, error } = useSWR<IAticleProps[]>('@posts', getArticles);

  console.log(data);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Hello world</h1>
      </div>
    </>
  );
};

export default Home;
