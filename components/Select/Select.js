import { useEffect, useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Input/Input';

export const Select = ({
  value: _value,
  items: _items,
  onChangeInput,
  onChange,
  getIdFromItem,
  getNameFromItem,
  ...props
}) => {
  const [value, setValue] = useState(_value);
  const [items, setItems] = useState(_items);

  useEffect(() => {
    setValue(_value);
  }, [_value]);

  useEffect(() => {
    setItems(
      _items?.filter((i) =>
        (getNameFromItem?.(i) ?? i.name)
          ?.toLocaleLowerCase()
          ?.includes(value?.toLocaleLowerCase() ?? ''),
      ),
    );
  }, [_items, getNameFromItem, value]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    onChangeInput?.(e);
    setValue(value);
    setItems(
      _items?.filter((i) =>
        (getNameFromItem?.(i) ?? i.name)
          ?.toLocaleLowerCase()
          ?.includes(value?.toLocaleLowerCase() ?? ''),
      ),
    );
  };

  const onClickHandler = (item) => {
    onChange?.(item, getIdFromItem?.(item) ?? item?.id);
  };

  return (
    <div>
      <Dropdown dropdownItems={items} onClick={onClickHandler}>
        <Input value={value} onChange={onChangeHandler} {...props} />
      </Dropdown>
    </div>
  );
};
