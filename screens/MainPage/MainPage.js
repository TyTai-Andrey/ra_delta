import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { H1 } from '@/components/H1/H1';
import { Select } from '@/components/Select/Select';
import { SpaceColumn } from '@/components/Space/Space';
import { SortButtons } from '@/compositions/SortButtons/SortButtons';
import { GameCardsList } from '@/compositions/GameCardsList/GameCardsList';

import { GamesActions } from '@/redux/games/actions';
import { getGamesError, getGamesLoading } from '@/redux/games/selectors';

import { usePushRouter } from '@/utils/usePushRouter';
import { useSearchParams } from 'next/navigation';

const GoUp = dynamic(() => import('@/components/GoUp/GoUp'), { ssr: false });

export const MainPage = ({ data, parentPlatforms }) => {
  const query = useSearchParams();
  const { pushRouterQuery } = usePushRouter();
  const dispatch = useDispatch();
  const loading = useSelector(getGamesLoading);
  const error = useSelector(getGamesError);

  const [isVisibleUp, setIsVisibleUp] = useState(false);
  const [parentPlatformsValue, setParentPlatformsValue] = useState(
    parentPlatforms?.find((i) => String(i.id) === query.get('parent_platforms'))
      ?.name ?? '',
  );

  useEffect(() => {
    dispatch(GamesActions.setGames(data));
  }, [data]);

  useEffect(() => {
    const onScroll = () => {
      const windowRelativeTop = Math.abs(
        document?.documentElement?.getBoundingClientRect()?.top || 0,
      );
      const windowRelativeBottom =
        document.documentElement.getBoundingClientRect().bottom;

      setIsVisibleUp(windowRelativeTop >= 1500);
      const go =
        windowRelativeBottom < document.documentElement.clientHeight + 1000;
      if (!error && !loading && go) dispatch(GamesActions.fetchGamesAsync({}));
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [loading, error]);

  return (
    <>
      <H1>Games</H1>
      <SpaceColumn>
        <SortButtons
          fields={[
            { field: 'released', title: 'Released' },
            { field: 'rating', title: 'Rating' },
          ]}
        />
        <Select
          onChange={({ name }, value) => {
            if (value) {
              setParentPlatformsValue(name ?? '');
              pushRouterQuery('parent_platforms', value);
            }
          }}
          onChangeInput={(e) => {
            setParentPlatformsValue(e.target.value);
          }}
          value={parentPlatformsValue}
          placeholder={'Platforms'}
          items={parentPlatforms}
        />
        <GameCardsList />
      </SpaceColumn>
      <GoUp isVisibleUp={isVisibleUp} />
    </>
  );
};
