const Game = (params) => {
  return <div>{params.gameId || 42}</div>;
};

export default Game;

export const getStaticPaths = async () => {
  const paths = new Array(4).fill('').map((_, id) => ({
    params: { gameId: String(id + 1) },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (ctx) => {
  const {
    params: { gameId },
  } = ctx;

  return {
    props: { gameId },
  };
};
