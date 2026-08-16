"use client"
import Search from '@/components/organisms/Search/Search'
import { useEffect, useState } from 'react';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    // do logic here
  }, [searchTerm]);

  return (
    <Search/>
  )
}

export default Page  