import Link from 'next/link';
import styled from 'styled-components';
import { Search } from '../Search/Search';
import { useSearchParams } from 'next/navigation';
import { usePushRouter } from '@/utils/usePushRouter';
import { SpaceBetween } from '../Space/Space';
import { useState } from 'react';
import GamesApi from '@/api/GamesApi';

const Conteiner = styled.header`
  height: var(--header-height);
  width: 100dvw;

  display: flex;
  align-items: center;

  padding: 1em 2em 1em 1em;

  background-color: #414141;
  box-shadow: 0px 4px 5px 3px #656565;
`;

const LinksContainer = styled.div`
  margin-right: 20px;
`;

export const Header = ({ withSearch }) => {
  const [dropdownItems, setDropdownItems] = useState([]);
  const { pushRouter } = usePushRouter();
  const query = useSearchParams();

  const onChange = async (e) => {
    const search = e?.target?.value;

    const { results } = await GamesApi.getList({
      search,
    });

    setDropdownItems(results);
  };

  const onSelect = ({ id }) => {
    setDropdownItems([]);
    if (id) pushRouter(`/game/${id}`);
  };

  return (
    <Conteiner>
      <SpaceBetween>
        <LinksContainer>
          <Link href={'/'}>Games</Link>
        </LinksContainer>
        {withSearch && (
          <Search
            dropdownItems={dropdownItems}
            onChange={onChange}
            onSelect={onSelect}
            initValue={query.get('search') ?? ''}
          />
        )}
      </SpaceBetween>
    </Conteiner>
  );
};
