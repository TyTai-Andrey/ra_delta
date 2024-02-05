import styled from 'styled-components';

const Conteiner = styled.div`
  position: fixed;
  bottom: 2em;
  right: 2em;

  width: 3em;
  height: 3em;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  user-select: none;

  background-color: rgba(0, 0, 0, 0.6);
`;
const GoUp = ({ isVisibleUp, elem = document.documentElement }) => {
  const onClickHandler = (e) => {
    e.stopPropagation();

    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return isVisibleUp && <Conteiner onClick={onClickHandler}>UP</Conteiner>;
};

export default GoUp;
