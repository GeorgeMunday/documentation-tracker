import React, { useState } from 'react'
import Input from '@/components/atoms/Input/Input';
import Text from '@/components/atoms/Text/Text';

import { FiSearch } from "react-icons/fi";
import Link from 'next/link';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
        <Link className="text-lg font-semibold text-black hover:text-green-500 transition-colors duration-300" href="/">
          Home
        </Link>
        <Link className="text-lg font-semibold text-black hover:text-green-500 transition-colors duration-300" href="/next">
          NextJs
        </Link>
        <Link className="text-lg font-semibold text-black hover:text-green-500 transition-colors duration-300" href="/mongo">
          Mongo DB
        </Link>
      </div>

      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <Input
          name="search"
          type="text"
          placeholder="Search Keywords"
          required
          search={true}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Header;