import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: var(--header-height);
  width: 100dvw;

  display: flex;
  align-items: center;

  padding: 1em;

  background-color: #414141;
  box-shadow: 0px 4px 5px 3px #656565;
`;

export const Header = () => (
  <StyledHeader>
    <Link href={'/'}>Games</Link>
  </StyledHeader>
);
