import { H1 } from '@/components/H1/H1';
import { SpaceBetween } from '@/components/Space/Space';
import ImageNext from 'next/image';
import LinkNext from 'next/link';
import styled from 'styled-components';

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  overflow: hidden;

  position: relative;
`;

const Info = styled.div`
  box-sizing: content-box;

  position: absolute;
  bottom: 10px;
  padding: 0.5em;

  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

const Image = styled(ImageNext)`
  width: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const Link = styled(LinkNext)`
  display: block;
  font-size: 2em;

  transition: color 0.5s ease;

  &:hover {
    color: #53e9f4;
  }
`;

export const GameCard = ({
  game,
  heightAutoImage,
  noPadding,
  website,
  priority,
  minHeightImage,
}) => {
  return (
    <Conteiner
      style={{
        padding: `${!noPadding && '1em'}`,
      }}
    >
      <Image
        src={game?.background_image ?? '/noImg.jpg'}
        alt={game?.name}
        width={300}
        height={300}
        sizes='100vw'
        priority={priority}
        style={{
          height: heightAutoImage && 'auto',
          minHeight: minHeightImage && `${minHeightImage}px`,
        }}
      />
      <Info
        style={{
          width: `${noPadding ? 'calc(100% - 1em)' : 'calc(100% - 3em)'}`,
        }}
      >
        {website ? (
          <Link href={website} target='_blank'>
            {game?.name}
          </Link>
        ) : (
          <H1>{game?.name}</H1>
        )}
        <SpaceBetween>
          {game?.parent_platforms
            ?.map(({ platform }) => `${platform.name}`)
            ?.join(' ')}
        </SpaceBetween>
        <SpaceBetween>
          {game?.rating ? <div>rating: {game?.rating}</div> : <div />}
          {game?.released ? <div>released: {game?.released}</div> : <div />}
        </SpaceBetween>
      </Info>
    </Conteiner>
  );
};
