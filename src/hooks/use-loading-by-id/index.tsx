import { useCallback, useState } from 'react';

const useLoadingById = () => {
  const [loadingStates, setLoadingStates] = useState({});

  const onLoadStart = useCallback((id: string) => {
    setLoadingStates(prevLoadingStates => ({
      ...prevLoadingStates,
      [id]: true,
    }));
  }, []);

  const onLoadEnd = useCallback((id: string) => {
    setLoadingStates(prevLoadingStates => ({
      ...prevLoadingStates,
      [id]: false,
    }));
  }, []);

  return { onLoadStart, onLoadEnd, loadingStates };
};

export { useLoadingById };
