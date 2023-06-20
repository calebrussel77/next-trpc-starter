import { useSession } from 'next-auth/react';
import { Fragment, useCallback, useState } from 'react';

import { MobileNavbar, Navbar } from '../navbar';

const navigations = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const onToggle = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky -mt-20 inset-x-0 top-0 border-t-4 bg-gray-900 border-green-600 z-50">
        <Navbar
          session={session}
          navigations={navigations}
          onToggle={onToggle}
        />
        <MobileNavbar
          navigations={navigations}
          session={session}
          mobileMenuOpen={mobileMenuOpen}
          onToggle={onToggle}
        />
      </header>
    </>
  );
};

export { Header };
