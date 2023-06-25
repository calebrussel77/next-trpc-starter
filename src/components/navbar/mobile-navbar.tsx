import { type Session } from 'next-auth';
import React, { type FC } from 'react';

import { LogoIcon } from '../icons/logo-icon';

interface MobileNavbarProps {
  className?: string;
  session: Session | null;
  navigations: Array<{ name: string; href: string }>;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ navigations }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <LogoIcon className="h-4 md:h-5 w-auto" />
        </a>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigations.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { MobileNavbar };
