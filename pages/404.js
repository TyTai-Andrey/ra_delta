import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  font-size: 3em;
`;

export default function NotFound({ Component, pageProps }) {
  return <Container>Not Found</Container>;
}
