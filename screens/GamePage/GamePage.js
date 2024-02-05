import { GameCard } from '@/components/GameCard/GameCard';
import { Gallery } from '@/compositions/Gallery/Gallery';

import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 580px) {
    padding: 2em;
  }
`;

const Description = styled.div`
  text-align: justify;
  font-size: 2em;

  margin: 1em 0;
`;

export const GamePage = ({ game, images }) => {
  return (
    <Container>
      <GameCard
        game={game}
        heightAutoImage
        minHeightImage={300}
        noPadding
        website={game.website}
        priority
      />
      <Description>{game.description_raw}</Description>
      <Gallery images={images} gameName={game.name} />
    </Container>
  );
};
