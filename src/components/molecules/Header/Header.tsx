import React, { useState } from 'react';
import Text from '@/components/atoms/Text/Text';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/next', label: 'NextJs' },
    { href: '/mongo', label: 'Mongo DB' },
    { href: '/search', label: 'Search' },
    { href: '/all', label: 'All' },
    { href: '/information', label: 'Info' },
  ];

  const renderNavLinks = (mobile = false) =>
    navItems.map(({ href, label }) => {
      const isActive = pathname === href;

      return (
        <Link
          key={href}
          href={href}
          aria-current={isActive ? 'page' : undefined}
          onClick={() => setIsMenuOpen(false)}
          className={[
            mobile ? 'w-full py-2 text-base' : 'text-lg',
            'font-semibold transition-colors duration-300',
            isActive ? 'text-green-500' : 'text-black hover:text-green-500 active:text-green-500',
          ].join(' ')}
        >
          {label}
        </Link>
      );
    });

  return (
    <header className="relative w-full border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <Text size="lg" weight="bold" color="black">
            DocTracker
          </Text>

          <Text size="md" weight="normal" color="gray-500">
            Track documentation with ease
          </Text>
        </div>

        <nav className="desktop-nav hidden items-center gap-8">{renderNavLinks()}</nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          className="mobile-menu-button flex h-10 w-10 items-center justify-center rounded-md text-xl text-black transition hover:border-green-500 hover:text-green-500"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mobile-menu border-t border-gray-200 bg-white px-4 py-3">
          <div className="flex flex-col gap-2">{renderNavLinks(true)}</div>
        </nav>
      )}
    </header>
  );
};

export default Header;