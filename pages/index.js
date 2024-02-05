import GamesApi from '@/api/GamesApi';

import Head from 'next/head';

import ParentPlatformsApi from '@/api/ParentPlatformsApi';
import { MainPage } from '@/screens/MainPage/MainPage';

const Home = ({ data, parentPlatformsData: { results: parentPlatforms } }) => {
  return (
    <>
      <Head>
        <title>Games</title>
        <meta name='description' content='Games' />
      </Head>
      <MainPage data={data} parentPlatforms={parentPlatforms} />
    </>
  );
};

Home.withSearchHeader = true;

export default Home;

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  const data = await GamesApi.getList(query);
  const parentPlatformsData = await ParentPlatformsApi.getList();

  return {
    props: { data, parentPlatformsData },
  };
};
