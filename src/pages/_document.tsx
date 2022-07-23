import React from 'react';
import { NextPage } from 'next';
import { Html, NextScript, Head, Main } from 'next/document';

const _document: NextPage = () => {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;900&family=Poppins:wght@300;600;700;800&display=swap'
          rel='stylesheet'
        />
        <body>
          <NextScript />
          <Main />
        </body>
      </Head>
    </Html>
  );
};

export default _document;
