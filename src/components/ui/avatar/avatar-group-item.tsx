import Link from 'next/link';
import React, { type FC, type MouseEventHandler } from 'react';

import { Avatar, type AvatarProps } from '.';
import { DropdownMenu } from '../dropdown-menu/dropdown-menu';

export interface AvatarGroupItemProps {
  avatar: AvatarProps & { name?: string; href?: string };
  index: number;
  onAvatarClick?: React.MouseEventHandler<HTMLDivElement>;
}

const AvatarGroupItem: FC<AvatarGroupItemProps> = ({
  avatar,
  onAvatarClick,
  ...props
}) => {
  const { href, onClick, ...rest } = avatar;

  const AvatarIcon = <Avatar {...rest} />;

  // onClick handler provided with avatar data takes precedence, same as with the normal avatar item
  const callback = onClick || onAvatarClick;

  if (href) {
    return (
      <Link
        href={href}
        onClick={callback as MouseEventHandler<HTMLAnchorElement> | undefined}
        passHref
        className="flex items-center text-sm font-medium gap-3 hover:bg-gray-100 rounded-md py-1.5 px-2"
        {...props}
      >
        {AvatarIcon}
        <span>{avatar.name}</span>
      </Link>
    );
  }

  return (
    <div
      className="flex items-center text-sm font-medium gap-3 hover:bg-gray-100 rounded-md py-1.5 px-2"
      {...props}
    >
      {AvatarIcon}
      <span>{avatar.name}</span>
    </div>
  );
};

export { AvatarGroupItem };
