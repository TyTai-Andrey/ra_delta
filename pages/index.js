import GamesApi from '@/api/GamesApi';
import Head from 'next/head';

const Home = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Games</title>
        <meta name='description' content='Games' />
      </Head>
      <div>Games</div>
      <div>
        {data.results.map((i) => (
          <div key={i.id}>
            <div>{i.id}</div>
            <div>{i.name}</div>
            <div>{i.rating}</div>
            <div>{i.background_image}</div>
            <div>{i.released}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;

  const data = await GamesApi.getList(query);

  return {
    props: { data },
  };
};
