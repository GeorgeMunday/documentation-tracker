import React from 'react';
import Text from '@/components/atoms/Text/Text';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/next', label: 'NextJs' },
    { href: '/mongo', label: 'Mongo DB' },
    { href: '/search', label: 'Search' },
    { href: '/information', label: 'Info' },
  ];

  return (
    <div className="flex justify-between items-center gap-4 p-4 w-full border-b border-gray-200">
      <div className="flex items-center gap-4">
        <Text size="lg" weight="bold" color="black">
          DocTracker
        </Text>

        <Text size="md" weight="normal" color="gray-500">
          Track documentation with ease
        </Text>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={[
                'text-lg font-semibold transition-colors duration-300',
                isActive ? 'text-green-500' : 'text-black hover:text-green-500 active:text-green-500',
              ].join(' ')}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;