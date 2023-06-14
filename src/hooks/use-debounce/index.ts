import { useEffect } from 'react';

import useTimeout from '../use-timeout';

const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: Array<unknown>
) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, [clear]);
};

export { useDebounce };
