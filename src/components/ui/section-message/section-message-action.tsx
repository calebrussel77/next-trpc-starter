import Link from 'next/link';
import React, { type FC, type ReactNode, memo } from 'react';

import { cn } from '@/lib/utils';

type MessageActionProps = {
  children?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  isPrimary?: boolean;
};

const ButtonAction: FC<MessageActionProps> = ({
  className,
  isPrimary,
  onClick,
  children,
}) => {
  return (
    <button
      className={cn(
        'font-semibold hover:underline',
        isPrimary && 'text-yellow-500',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const MessageAction = memo(function MessageAction({
  children,
  onClick,
  href,
  className,
  isPrimary = false,
}: MessageActionProps) {
  return href ? (
    <Link href={href}>
      <ButtonAction
        onClick={onClick}
        isPrimary={isPrimary}
        className={className}
      >
        {children}
      </ButtonAction>
    </Link>
  ) : onClick ? (
    <ButtonAction onClick={onClick} isPrimary={isPrimary} className={className}>
      {children}
    </ButtonAction>
  ) : (
    <>{children}</>
  );
});

MessageAction.displayName = 'MessageAction';

export { MessageAction };
