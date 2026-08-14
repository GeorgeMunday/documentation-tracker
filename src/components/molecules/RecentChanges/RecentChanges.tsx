import React from 'react'
import { FiSearch } from "react-icons/fi";
import Input from '@/components/atoms/Input/Input';
import ItemBox from '@/components/atoms/ItemBox/ItemBox';

const RecentChanges = () => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <Input
          name="search"
          type="text"
          placeholder="Search Recent Changes..."
          required
          search={true}
        />
      </div>
      <ItemBox title="Sample Change 1" description="This is the first sample change." timestamp="2023-01-01 12:00:00" />
      <ItemBox title="Sample Change 2" description="This is the second sample change." timestamp="2023-01-02 14:30:00" />
      <ItemBox title="Sample Change 3" description="This is the third sample change." timestamp="2023-01-03 16:45:00" />
      <ItemBox title="Sample Change 4" description="This is the fourth sample change." timestamp="2023-01-04 18:15:00" />
      <ItemBox title="Sample Change 5" description="This is the fifth sample change." timestamp="2023-01-05 20:00:00" />
    </div>
  )
}

export default RecentChanges