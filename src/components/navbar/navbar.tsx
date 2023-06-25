import { Search } from 'lucide-react';
import { type Session } from 'next-auth';
import Link from 'next/link';
import React, { type FC, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { LogoSymbolIcon } from '../icons/logo-icon';
import { Button } from '../ui/button';
import { FormSubscriptionModal } from '@/features/onboarding-souscription/components/form-subscription-modal';

interface NavbarProps {
  className?: string;
  session: Session | null;
  navigations: Array<{ name: string; href: string }>;
  children?: ReactNode;
}

const Navbar: FC<NavbarProps> = ({ className, children, navigations }) => {
  return (
    <nav
      className={cn(
        'flex items-center justify-between py-3 px-4 lg:px-8',
        className
      )}
      aria-label="Global"
    >
      <div className="flex lg:flex-1 items-center gap-3">
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <LogoSymbolIcon className="h-7 md:h-8 w-auto" />
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 lg:items-center">
        {navigations.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-white"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex items-center lg:flex-1 lg:justify-end">
        <FormSubscriptionModal>
          <Button size="sm">Demander un service</Button>
        </FormSubscriptionModal>
        <a
          href="#"
          className="ml-4 hidden lg:flex text-sm font-semibold leading-6 text-white"
        >
          Se connecter <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex lg:hidden">{children}</div>
    </nav>
  );
};

export { Navbar };
