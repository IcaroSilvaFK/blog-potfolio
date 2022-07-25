import Head from 'next/head';
import Link from 'next/link';

import { Container } from '../../styles/styles.error';

export default function index() {
  return (
    <>
      <Head>
        <title>Problems</title>
      </Head>
      <Container>
        <h1>Aguarde no momento estamos com problemas</h1>
        <img src='https://http.cat/301.jpg' alt='Cat 301' />
        <Link href='/'>
          <a>Voltar</a>
        </Link>
      </Container>
    </>
  );
}
