import { cn } from '@/lib/utils';
import { type FC } from 'react';

type RowContainerProps = React.HTMLAttributes<HTMLDivElement>;

const RowContainer: FC<RowContainerProps> = ({ className, ...props }) => {
  return (
    <div className={cn('flex flex-row items-center', className)} {...props} />
  );
};

export { RowContainer };
