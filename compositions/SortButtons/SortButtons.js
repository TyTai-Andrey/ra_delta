import { Space } from '@/components/Space/Space';
import { usePushRouter } from '@/utils/usePushRouter';
import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  cursor: pointer;

  padding: 10px 15px;
`;

export const SortButtons = ({ fields }) => {
  const query = useSearchParams();
  const { pushRouterQuery } = usePushRouter();

  const [sortBy, setSortBy] = useState(() =>
    query.get('ordering')?.replace('-', ''),
  );

  const [sortDirection, setSortDirection] = useState(() => {
    const ordering = query.get('ordering');
    if (ordering) {
      return /-/.test(ordering) ? 'Asc' : 'Desc';
    }
    return null;
  });

  const changeFieldSort = useCallback(
    (name) => {
      let newSortDirection = null;
      const sortBy = query.get('ordering')?.replace('-', '');
      if (sortBy === name) {
        if (!sortDirection) newSortDirection = 'Asc';
        if (sortDirection === 'Asc') newSortDirection = 'Desc';
      } else {
        newSortDirection = 'Asc';
      }

      pushRouterQuery(
        'ordering',
        newSortDirection && `${newSortDirection === 'Asc' ? '-' : ''}${name}`,
      );
      setSortBy(newSortDirection ? name : null);
      setSortDirection(newSortDirection);
    },
    [query, sortDirection],
  );

  const getArrow = useCallback(
    (field) => {
      if (sortBy !== field || !sortDirection) return null;
      if (sortDirection === 'Asc') return '↑';
      if (sortDirection === 'Desc') return '↓';
    },
    [sortBy, sortDirection],
  );

  return (
    <Space>
      {fields.map(({ field, title }) => (
        <Button key={field} onClick={changeFieldSort.bind(null, field)}>
          <>
            {title} {getArrow(field)}
          </>
        </Button>
      ))}
    </Space>
  );
};
