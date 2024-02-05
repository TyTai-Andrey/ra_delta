import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.footer`
  height: var(--footer-height);
  width: 100dvw;

  display: flex;
  background-color: #414141;
  box-shadow: 0px -4px 5px 3px #656565;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Link href={'https://rawg.io/'}> Данные взяты из https://rawg.io/</Link>
    </Container>
  );
};
