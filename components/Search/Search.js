import { useDebounce } from '@/utils/useDebounce';
import { useCallback, useRef, useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Input/Input';

export const Search = ({
  debounceDelay,
  onChange,
  initValue,
  dropdownItems,
  onSelect,
}) => {
  const $event = useRef(null);
  const [value, setValue] = useState(initValue);

  const onChangeValue = useCallback(() => {
    if (onChange && $event.current) onChange($event.current);
  }, [value]);

  useDebounce(onChangeValue, debounceDelay);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    $event.current = e;
  };

  if (dropdownItems) {
    return (
      <Dropdown dropdownItems={dropdownItems} onClick={onSelect}>
        <Input placeholder='search' value={value} onChange={onChangeHandler} />
      </Dropdown>
    );
  }

  return (
    <Input placeholder='search' value={value} onChange={onChangeHandler} />
  );
};
