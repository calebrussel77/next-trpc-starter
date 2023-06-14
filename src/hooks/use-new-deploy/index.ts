import { useHasNewDeploy } from 'next-deploy-notifications';
import { type ReactElement, useEffect } from 'react';
import { toast } from 'react-toastify';

type TUseNewDeployProps = {
  notificationToast: ReactElement;
};

const useNewDeploy = ({ notificationToast }: TUseNewDeployProps) => {
  const { hasNewDeploy } = useHasNewDeploy();

  useEffect(() => {
    if (hasNewDeploy) {
      toast(notificationToast, { autoClose: false, position: 'top-center' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasNewDeploy]);
};

export { useNewDeploy };
