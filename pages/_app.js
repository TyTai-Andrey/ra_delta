import Head from 'next/head';
import { Layout } from '@/compositions/Layout';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout Component={Component}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
