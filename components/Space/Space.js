import styled from 'styled-components';

const ContainerSpace = styled.div`
  display: -webkit-inline-box;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;
const ContainerSpaceBetween = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const ContainerSpaceColumn = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Space = ({ children }) => {
  return <ContainerSpace>{children}</ContainerSpace>;
};
export const SpaceBetween = ({ children }) => {
  return <ContainerSpaceBetween>{children}</ContainerSpaceBetween>;
};
export const SpaceColumn = ({ children }) => {
  return <ContainerSpaceColumn>{children}</ContainerSpaceColumn>;
};
