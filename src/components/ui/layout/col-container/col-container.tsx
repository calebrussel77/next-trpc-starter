import { cn } from '@/lib/utils';
import { type FC } from 'react';

type ColContainerProps = React.HTMLAttributes<HTMLDivElement>;

const ColContainer: FC<ColContainerProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-start gap-1',
        className
      )}
      {...props}
    />
  );
};

export { ColContainer };
