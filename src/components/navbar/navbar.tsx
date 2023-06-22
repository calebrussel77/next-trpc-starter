import { Menu } from 'lucide-react';
import { Search } from 'lucide-react';
import { type Session } from 'next-auth';
import React, { type FC, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

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
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt=""
          />
        </a>
        <button className="text-sm font-semibold leading-6 flex items-center gap-1 text-white">
          <Search className="h-4 w-4" />
          <span>Rechercher</span>
        </button>
      </div>
      <div className="flex lg:hidden">{children}</div>
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
      <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end">
        <Button>Ajouter un endroit</Button>
        <a href="#" className="ml-4 text-sm font-semibold leading-6 text-white">
          Se connecter <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
};

export { Navbar };
