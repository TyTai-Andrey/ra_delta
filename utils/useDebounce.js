const { useEffect, useState } = require('react');

const _debounceDelay = 500;

export const useDebounce = (func, debounceDelay = _debounceDelay) => {
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    let timer;
    if (isFirst) {
      setIsFirst(false);
    } else {
      timer = setTimeout(func, debounceDelay ?? _debounceDelay);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [debounceDelay, func]);
};
