import { useEffect, useRef } from 'react';

const useHeaderHeight = (defaultHeight = 120) => {
  const headerHeight = useRef<number | undefined>(defaultHeight);

  useEffect(() => {
    const headerElement = document?.querySelector('header');
    headerHeight.current = headerElement?.clientHeight;
  });

  return { height: headerHeight.current };
};

export { useHeaderHeight };
