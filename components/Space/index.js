import styled from 'styled-components';

export const Space = styled.div`
  display: -webkit-inline-box;

  & > div:not(:last-child) {
    margin-right: 10px;
  }
`;
