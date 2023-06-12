import { cn } from '@/lib/utils';
import { type FC } from 'react';

type CenterContentProps = React.HTMLAttributes<HTMLDivElement>;

const CenterContent: FC<CenterContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-1 flex-col items-center justify-center p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { CenterContent };
