import GamesApi from '@/api/GamesApi';

const Game = ({ gameId, data, screenshots }) => {
  console.log(data);
  console.log(screenshots);

  return (
    <div>
      <div>{gameId || 'notfound'}</div>
      <div>{data.description_raw || 'notfound'}</div>
      <div>{data.website}</div>
    </div>
  );
};

export default Game;

export const getStaticPaths = async () => {
  const data = await GamesApi.getList({ page_size: 1 });

  const paths = new Array(data.count).fill('').map((_, id) => ({
    params: { gameId: String(id + 1) },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (ctx) => {
  const {
    params: { gameId },
  } = ctx;

  const data = await GamesApi.getGamebyId(gameId);
  const screenshots = await GamesApi.getScreenshotsGamebyId(gameId);

  return {
    props: { gameId, data, screenshots },
  };
};
