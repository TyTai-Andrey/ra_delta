import ImageNext from 'next/image';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;

  position: relative;
  margin: 1em 0;
`;

const GalleryLine = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: calc(100% - 2em);
`;

const Image = styled(ImageNext)`
  width: calc(100% + 2em);
  object-fit: cover;
  pointer-events: none;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;
  object-position: center;
`;

const Window = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Button = styled.button`
  position: absolute;
  z-index: 10;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.2em;
  font-weight: 700;
  line-height: 0;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 1.8em;
  height: 1.8em;
  color: black;
  cursor: pointer;

  &:disabled {
    border: 1px solid #ccc;
    color: #ccc;
    background-color: rgba(85, 85, 85, 0.5);
  }
`;

export const Gallery = ({ images, gameName }) => {
  const [currentScreenshotIdx, setCurrentScreenshotIdx] = useState(0);

  const nextScreenshot = useCallback(() => {
    setCurrentScreenshotIdx((prev) =>
      prev + 1 < images.length ? prev + 1 : images.length - 1,
    );
  }, [images.length]);
  const prevScreenshot = useCallback(() => {
    setCurrentScreenshotIdx((prev) => (prev - 1 > -1 ? prev - 1 : 0));
  }, []);
  return (
    <Container>
      <Button
        style={{
          left: 10,
        }}
        onClick={prevScreenshot}
        disabled={!currentScreenshotIdx}
      >
        {'<'}
      </Button>
      <Window>
        <GalleryLine
          style={{
            translate: `calc(calc(-100% - 2em) * ${currentScreenshotIdx})`,
          }}
        >
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.image ?? '/noImg.jpg'}
              alt={gameName ?? undefined}
              width={0}
              height={0}
              sizes='100vw'
            />
          ))}
        </GalleryLine>
      </Window>
      <Button
        style={{
          right: 10,
        }}
        onClick={nextScreenshot}
        disabled={images.length - 1 === currentScreenshotIdx}
      >
        {'>'}
      </Button>
    </Container>
  );
};
