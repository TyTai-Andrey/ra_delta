import { hasParentElemWihtDataset } from '@/utils/hasParentElemWihtDataset';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Conteiner = styled.div`
  width: 100%;
  position: relative;
`;

const DropdownList = styled.ul`
  width: 100%;
  min-height: 10px;
  max-height: 200px;
  overflow: auto;

  position: absolute;
  z-index: 100;

  background-color: #fff;
  color: #000;

  list-style: none;

  border-top: 1px solid #000;

  & > li {
    padding: 5px 10px;
    font-size: 1em;
    cursor: pointer;

    &:hover {
      background-color: #ffe;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }
`;

export const Dropdown = ({
  children,
  dropdownItems,
  getIdFromItem,
  getNameFromItem,
  onClick,
}) => {
  const [open, setOpen] = useState(false);

  const onFocusHandler = () => {
    setOpen(true);
  };

  const onClickHandler = (item) => {
    onClick?.(item);
    setOpen(false);
  };

  useEffect(() => {
    const click = (e) => {
      const check = hasParentElemWihtDataset(e, 'idType', 'select');

      if (check) {
        setOpen(false);
      }
    };

    if (open) window.addEventListener('click', click);

    return () => {
      window.removeEventListener('click', click);
    };
  }, [open]);

  return (
    <Conteiner data-id-type='select'>
      <>
        {React.isValidElement(children)
          ? React.cloneElement(children, {
              onFocus: onFocusHandler,
              //   onBlur: onBlurHandler,
            })
          : null}
      </>
      {open && !!dropdownItems?.length && (
        <DropdownList>
          {dropdownItems.map((item) => (
            <li
              key={getIdFromItem?.(item) ?? item.id}
              onClick={() => onClickHandler(item)}
            >
              {getNameFromItem?.(item) ?? item.name}
            </li>
          ))}
        </DropdownList>
      )}
    </Conteiner>
  );
};
