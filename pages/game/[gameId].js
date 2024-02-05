import { getClientAxios } from '@/api/BaseApi';
import GamesApi from '@/api/GamesApi';
import { GamePage } from '@/screens/GamePage/GamePage';
import Head from 'next/head';

const Game = ({ game = {}, screenshotsData }) => {
  const { results: images } = screenshotsData || { results: [] };
  return (
    <>
      <Head>
        <title>{`${game.name} | Game`}</title>
        <meta name='description' content={game.name} />
      </Head>
      <GamePage game={game} images={images} />
    </>
  );
};

export default Game;

const getPathsIds = async (url = 'https://api.rawg.io/api/games', first) => {
  const { data } = await getClientAxios.get(
    url,
    !first
      ? {
          params: { page_size: 40, key: '7dcb6f1da7f74a5786b46a791a0965ca' },
        }
      : {},
  );

  let paths = data?.results?.map((i) => ({
    params: { gameId: String(i.id) },
  }));

  // !first - не хочу билдить себе 850 000+ страниц
  if (data.next && !first) {
    const add = await getPathsIds(data.next, true);
    return [...paths, ...add];
  }

  return paths;
};

export const getStaticPaths = async () => {
  const paths = await getPathsIds();
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (ctx) => {
  const {
    params: { gameId },
  } = ctx;

  const game = await GamesApi.getGamebyId(gameId);
  const screenshotsData = await GamesApi.getScreenshotsGamebyId(gameId);

  return {
    props: { game, screenshotsData },
  };
};
