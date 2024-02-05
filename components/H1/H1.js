import styled from 'styled-components';

export const H1 = styled.h1(
  ({ noWrap }) => `
font-size: 2em;
white-space: ${noWrap && 'nowrap'};
`,
);
